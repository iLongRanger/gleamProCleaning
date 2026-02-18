import { NextResponse } from "next/server";
import { Resend } from "resend";
import { takeRateLimit } from "../../../lib/server/rate-limit.ts";
import { validateLeadPayload } from "../../../lib/validation/lead.ts";

function parseCc(value?: string) {
  if (!value) return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

type LeadType = "commercial" | "residential";

export async function POST(req: Request) {
  const contentLength = Number(req.headers.get("content-length") ?? "0");
  if (Number.isFinite(contentLength) && contentLength > 20_000) {
    return NextResponse.json(
      { ok: false, error: "Payload too large." },
      { status: 413 }
    );
  }

  try {
    const body = await req.json();
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

    // Honeypot: if filled, pretend success (do nothing)
    if (body?.website && String(body.website).trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const rateLimit = takeRateLimit({
      key: `walkthrough:${ip}`,
      windowMs: 10 * 60 * 1000,
      max: 5,
    });

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          ok: false,
          error: "Too many requests. Please try again shortly.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfterSeconds),
          },
        }
      );
    }

    const validated = validateLeadPayload(body);
    if (!validated.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid form input.",
          details: validated.errors,
        },
        { status: 400 }
      );
    }

    const {
      leadType,
      businessName,
      facilityType,
      fullName,
      address,
      frequency,
      phone,
      email,
      notes,
      sqft,
      painPoints,
      source,
      pageUrl,
    } = validated.data;

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.LEADS_TO_EMAIL;
    const FROM = process.env.LEADS_FROM_EMAIL || "onboarding@resend.dev";
    const CC = parseCc(process.env.LEADS_CC_EMAILS);

    if (!RESEND_API_KEY || !TO) {
      return NextResponse.json(
        { ok: false, error: "Server not configured for lead delivery." },
        { status: 500 }
      );
    }

    const normalizedLeadType: LeadType = leadType;

    const resend = new Resend(RESEND_API_KEY);

    const subject =
      normalizedLeadType === "commercial"
        ? `Commercial Lead - Walk-Through Request - ${businessName} (${facilityType})`
        : `Residential Lead - Quote Request - ${fullName}`;

    const text =
      normalizedLeadType === "commercial"
        ? [
            "Commercial Lead - Walk-Through Request",
            "-------------------------------------",
            `Business/Facility: ${businessName}`,
            `Facility Type: ${facilityType}`,
            `Address: ${address}`,
            `Approx. Size (sqft): ${sqft || "N/A"}`,
            `Cleaning Frequency: ${frequency}`,
            `Phone: ${phone}`,
            `Email: ${email}`,
            `Pain Points: ${painPoints || "N/A"}`,
            `Notes: ${notes || "N/A"}`,
            "",
            `Submitted from: ${source || "unknown source"}`,
            `Page URL: ${pageUrl || "N/A"}`,
          ].join("\n")
        : [
            "Residential Lead - Quote Request",
            "-------------------------------",
            `Name: ${fullName}`,
            `Address: ${address}`,
            `Cleaning Frequency: ${frequency}`,
            `Phone: ${phone}`,
            `Email: ${email}`,
            `Notes: ${notes || "N/A"}`,
            "",
            `Submitted from: ${source || "unknown source"}`,
            `Page URL: ${pageUrl || "N/A"}`,
          ].join("\n");

    const result = await resend.emails.send({
      from: FROM,
      to: TO,
      cc: CC.length ? CC : undefined,
      subject,
      text,
      replyTo: email,
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        {
          ok: false,
          error: `Email failed: ${result.error.message ?? "unknown error"}`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
