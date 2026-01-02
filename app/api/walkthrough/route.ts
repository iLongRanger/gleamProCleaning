import { NextResponse } from "next/server";
import { Resend } from "resend";

function parseCc(value?: string) {
  if (!value) return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

type LeadType = "commercial" | "residential";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      leadType = "commercial",
      // Honeypot (bots fill this, humans won’t)
      website,

      // Commercial
      businessName,
      facilityType,

      // Shared
      fullName,
      address,
      frequency,
      phone,
      email,

      // Optional details
      notes,
      sqft,
      painPoints,
    } = body ?? {};

    // Honeypot: if filled, pretend success (do nothing)
    if (website && String(website).trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

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

    const normalizedLeadType: LeadType =
      leadType === "residential" ? "residential" : "commercial";

    // Validation rules per lead type
    if (normalizedLeadType === "commercial") {
      if (
        !businessName ||
        !facilityType ||
        !address ||
        !frequency ||
        !phone ||
        !email
      ) {
        return NextResponse.json(
          { ok: false, error: "Missing required fields." },
          { status: 400 }
        );
      }
    } else {
      if (!fullName || !address || !frequency || !phone || !email) {
        return NextResponse.json(
          { ok: false, error: "Missing required fields." },
          { status: 400 }
        );
      }
    }

    const resend = new Resend(RESEND_API_KEY);

    const subject =
      normalizedLeadType === "commercial"
        ? `Commercial Lead — Walk-Through Request — ${businessName} (${facilityType})`
        : `Residential Lead — Quote Request — ${fullName}`;

    const text =
      normalizedLeadType === "commercial"
        ? [
            "Commercial Lead — Walk-Through Request",
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
            "Submitted from: / (homepage)",
          ].join("\n")
        : [
            "Residential Lead — Quote Request",
            "-------------------------------",
            `Name: ${fullName}`,
            `Address: ${address}`,
            `Cleaning Frequency: ${frequency}`,
            `Phone: ${phone}`,
            `Email: ${email}`,
            `Notes: ${notes || "N/A"}`,
            "",
            "Submitted from: / (homepage)",
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
