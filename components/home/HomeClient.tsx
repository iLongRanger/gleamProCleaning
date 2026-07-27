"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { serviceAreas } from "@/lib/service-areas";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FIELD_LIMITS,
  PHONE_INPUT_PATTERN,
  validateLeadPayload,
} from "@/lib/validation/lead";

const colors = {
  navy: "#0B2545",
  midnight: "#081A31",
  ink: "#050E1F",
  emerald: "#0FA36B",
  emeraldDeep: "#0B7F54",
  gold: "#D4A574",
  bone: "#F4EFE6",
};

type Lane = "commercial" | "residential";

const routeAreaSlugs = ["burnaby", "new-westminster", "vancouver"];
const routeCardImages: Record<string, { src: string; alt: string }> = {
  burnaby: {
    src: "/images/service-areas/burnaby-night-route.png",
    alt: "After-hours commercial cleaning route in Burnaby",
  },
  "new-westminster": {
    src: "/images/service-areas/new-westminster-night-route.png",
    alt: "After-hours commercial cleaning route in New Westminster",
  },
  vancouver: {
    src: "/images/service-areas/vancouver-night-route.png",
    alt: "After-hours commercial cleaning route in Vancouver",
  },
};

export default function HomeClient() {
  const lane: Lane = "commercial";

  const [sending, setSending] = useState(false);
  const [sentOk, setSentOk] = useState<null | boolean>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [website, setWebsite] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [facilityType, setFacilityType] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [frequency, setFrequency] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const [quickEmail, setQuickEmail] = useState("");
  const [quickPhone, setQuickPhone] = useState("");
  const [quickWebsite, setQuickWebsite] = useState("");
  const [quickSending, setQuickSending] = useState(false);
  const [quickSentOk, setQuickSentOk] = useState<null | boolean>(null);
  const [quickErrorMsg, setQuickErrorMsg] = useState<string | null>(null);

  async function submitQuickCapture(e: React.FormEvent) {
    e.preventDefault();
    setQuickSending(true);
    setQuickSentOk(null);
    setQuickErrorMsg(null);
    try {
      const payload = {
        leadType: "commercial" as const,
        businessName: "Callback request",
        facilityType: "other",
        website: quickWebsite,
        email: quickEmail,
        phone: quickPhone,
        source: "homepage-final-cta",
        pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
      };
      const validation = validateLeadPayload(payload);
      if (!validation.ok) {
        setQuickSentOk(false);
        setQuickErrorMsg("Please enter a valid email and phone.");
        return;
      }
      const res = await fetch("/api/walkthrough", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data?.ok) {
        setQuickSentOk(false);
        setQuickErrorMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }
      setQuickSentOk(true);
      setQuickEmail("");
      setQuickPhone("");
      if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag === "function") {
        (window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", "generate_lead", {
          source: "homepage-final-cta",
          lead_type: "commercial",
        });
      }
    } catch {
      setQuickSentOk(false);
      setQuickErrorMsg("Network error. Please try again.");
    } finally {
      setQuickSending(false);
    }
  }

  const laneCopy = useMemo(() => {
    if (lane === "commercial") {
      return {
        eyebrow: "Commercial cleaning · Metro Vancouver",
        subhead:
          "Family-owned commercial cleaning. Free 15-minute walkthrough, written quote in 24 hours, 30-day no-lock-in trial.",
        primaryCta: "Request walk-through",
        primaryHref: "/request-walkthrough?type=commercial",
        formTitle: "Free walk-through",
        formSub: "On-site, 15 minutes, no obligation.",
        submit: "Send walk-through request",
        showcaseSrc: "/images/home/commercial-hero.png",
        showcaseAlt: "Gleam Pro team servicing a corporate lobby before opening hours",
        showcaseLine: "On the floor before your first guest.",
      };
    }
    return {
      eyebrow: "Residential cleaning · Metro Vancouver",
      subhead:
        "Recurring, deep, move-in/out, post-reno, carpet & upholstery — tailored to your home, scheduled around your week.",
      primaryCta: "Get a home estimate",
      primaryHref: "/request-walkthrough?type=residential",
      formTitle: "Home estimate",
      formSub: "Tell us your space — reply within one business day.",
      submit: "Send estimate request",
      showcaseSrc: "/images/home/residential-hero.png",
      showcaseAlt: "Gleam Pro residential team detailing a living room",
      showcaseLine: "Care that respects the home you live in.",
    };
  }, [lane]);

  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setSentOk(null);
    setErrorMsg(null);
    setFieldErrors({});
    try {
      const payload = {
        leadType: lane,
        website,
        fullName,
        address,
        frequency,
        phone,
        email,
        notes,
        source: "homepage-hero-form",
        pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
      };
      const finalPayload =
        lane === "commercial" ? { ...payload, businessName, facilityType } : payload;

      const validation = validateLeadPayload(finalPayload);
      if (!validation.ok) {
        setSending(false);
        setSentOk(false);
        setErrorMsg("Please fix the highlighted form fields.");
        setFieldErrors(
          validation.errors.reduce<Record<string, string>>((acc, issue) => {
            if (!acc[issue.field]) acc[issue.field] = issue.message;
            return acc;
          }, {})
        );
        return;
      }

      const res = await fetch("/api/walkthrough", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        details?: { field: string; message: string }[];
      };
      if (!res.ok || !data?.ok) {
        setSentOk(false);
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        if (Array.isArray(data?.details)) {
          setFieldErrors(
            data.details.reduce<Record<string, string>>((acc, issue) => {
              if (!acc[issue.field]) acc[issue.field] = issue.message;
              return acc;
            }, {})
          );
        }
        return;
      }
      setSentOk(true);
      if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag === "function") {
        (window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", "generate_lead", {
          source: "homepage-hero-form",
          lead_type: lane,
        });
      }
      setBusinessName("");
      setFacilityType("");
      setFullName("");
      setAddress("");
      setFrequency("");
      setPhone("");
      setEmail("");
      setNotes("");
      setWebsite("");
      setFieldErrors({});
    } catch {
      setSentOk(false);
      setErrorMsg("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const inputCls =
    "w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 text-[15px] text-white placeholder:text-white/40 focus:border-[#D4A574]/60 focus:bg-white/[0.09] focus:outline-none focus:ring-0 transition";
  const selectCls =
    "w-full appearance-none rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 text-[15px] text-white focus:border-[#D4A574]/60 focus:bg-white/[0.09] focus:outline-none transition";
  const labelCls = "block text-[11px] font-medium uppercase tracking-[0.18em] text-white/50 mb-1.5";
  const errCls = "mt-1 text-xs text-rose-300";

  return (
    <div style={{ backgroundColor: colors.ink }} className="text-white overflow-clip">
      {/* ======================= HERO ======================= */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute inset-0" style={{ backgroundColor: colors.ink }} />
          <div className="absolute inset-0 opacity-[0.10]">
            <Image
              src="/images/service-areas/vancouver.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background: `radial-gradient(900px 480px at 12% 8%, rgba(15,163,107,0.18), transparent 60%),
                           radial-gradient(800px 500px at 92% 12%, rgba(212,165,116,0.14), transparent 65%),
                           radial-gradient(900px 600px at 50% 110%, rgba(11,37,69,0.9), transparent 60%)`,
            }}
          />
          <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-[0.35]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050E1F]" />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-20 sm:pb-28">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/55">
              <span className="inline-block h-px w-8 bg-white/30" />
              On the floor since 2019 · Incorporated 2024 · 10 commercial sites serviced nightly
            </div>
          </motion.div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
              }}
              className="lg:col-span-7 flex flex-col gap-7"
            >
              <motion.p
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#D4A574]/90"
              >
                {laneCopy.eyebrow}
              </motion.p>

              <motion.h1
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                className="font-display text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px] lg:leading-[0.96] font-light text-white"
              >
                Your space, ready before you open.
                <br />
                <span className="italic font-normal" style={{ color: colors.gold }}>
                  Same crew every night, owner on site.
                </span>
              </motion.h1>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="max-w-xl text-[16px] sm:text-[17px] leading-[1.65] text-white/70"
              >
                {laneCopy.subhead}
              </motion.p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2"
              >
                <Link
                  href={laneCopy.primaryHref}
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-[#0B2545] bg-[#F4EFE6] hover:bg-white transition shadow-[0_18px_50px_-18px_rgba(244,239,230,0.55)]"
                >
                  {laneCopy.primaryCta}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                </Link>
                <a
                  href="tel:+17786810922"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                >
                  <Phone className="w-4 h-4 text-[#D4A574]" />
                  <span className="tabular">(778) 681-0922</span>
                </a>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-white/70"
              >
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0FA36B]" />
                  $1M commercial liability insured
                </span>
                <span className="hidden sm:inline text-white/20">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]" />
                  Owner-led night crews
                </span>
                <span className="hidden sm:inline text-white/20">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0FA36B]" />
                  Nightly service, 7 days
                </span>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                className="mt-6 grid grid-cols-3 gap-px rounded-2xl border border-white/10 bg-white/[0.025] overflow-hidden"
              >
                {[
                  { k: "10", v: "Commercial sites serviced nightly" },
                  { k: "24 hr", v: "Written quote after walkthrough" },
                  { k: "30 days", v: "Trial, no lock-in" },
                ].map((s) => (
                  <div key={s.v} className="px-4 py-5 bg-[#050E1F]/40">
                    <div className="font-display text-3xl sm:text-4xl tabular text-white">
                      {s.k}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/55">
                      {s.v}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div
                  className="absolute -inset-px rounded-[28px] opacity-60 blur-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(15,163,107,0.25), rgba(212,165,116,0.18))",
                  }}
                />
                <div className="relative rounded-[26px] border border-white/12 bg-[#0B2545]/85 backdrop-blur-xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
                  <div className="px-6 sm:px-7 pt-6 pb-5 border-b border-white/10 flex items-baseline justify-between gap-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.22em] text-[#D4A574]">
                        Step 01
                      </div>
                      <h2 className="mt-1 font-display text-2xl sm:text-[28px] leading-tight">
                        {laneCopy.formTitle}
                      </h2>
                      <p className="mt-1 text-sm text-white/60">{laneCopy.formSub}</p>
                    </div>
                    <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                      <ArrowUpRight className="w-4 h-4 text-white/70" />
                    </div>
                  </div>

                  <form className="px-6 sm:px-7 py-6 space-y-5" onSubmit={submitLead}>
                    <input
                      type="text"
                      name="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {lane === "commercial" ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="hero-businessName" className={labelCls}>Business</label>
                          <Input
                            id="hero-businessName"
                            name="businessName"
                            placeholder="e.g. Hawthorne Bistro"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            required
                            minLength={FIELD_LIMITS.businessName.min}
                            maxLength={FIELD_LIMITS.businessName.max}
                            className={inputCls}
                          />
                          {fieldErrors.businessName && (
                            <p className={errCls}>{fieldErrors.businessName}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="hero-facilityType" className={labelCls}>Facility</label>
                          <select
                            id="hero-facilityType"
                            name="facilityType"
                            value={facilityType}
                            onChange={(e) => setFacilityType(e.target.value)}
                            required
                            className={selectCls}
                          >
                            <option value="" className="text-slate-900">Select type</option>
                            <option value="brewery" className="text-slate-900">Brewery / Taproom</option>
                            <option value="clinic" className="text-slate-900">Clinic / Medical</option>
                            <option value="restaurant" className="text-slate-900">Restaurant / Pub</option>
                            <option value="office" className="text-slate-900">Office</option>
                            <option value="community" className="text-slate-900">Community / School</option>
                            <option value="other" className="text-slate-900">Other</option>
                          </select>
                          {fieldErrors.facilityType && (
                            <p className={errCls}>{fieldErrors.facilityType}</p>
                          )}
                        </div>
                      </div>
                    ) : null}

                    <div>
                      <label htmlFor="hero-fullName" className={labelCls}>Your name</label>
                      <Input
                        id="hero-fullName"
                        name="fullName"
                        placeholder="Full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        minLength={FIELD_LIMITS.fullName.min}
                        maxLength={FIELD_LIMITS.fullName.max}
                        autoComplete="name"
                        className={inputCls}
                      />
                      {fieldErrors.fullName && <p className={errCls}>{fieldErrors.fullName}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="hero-email" className={labelCls}>Email</label>
                        <Input
                          id="hero-email"
                          name="email"
                          placeholder="you@company.com"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          maxLength={FIELD_LIMITS.email.max}
                          autoComplete="email"
                          className={inputCls}
                        />
                        {fieldErrors.email && <p className={errCls}>{fieldErrors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="hero-phone" className={labelCls}>Phone</label>
                        <Input
                          id="hero-phone"
                          name="phone"
                          placeholder="(604) 000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          minLength={FIELD_LIMITS.phone.min}
                          maxLength={FIELD_LIMITS.phone.max}
                          pattern={PHONE_INPUT_PATTERN}
                          inputMode="tel"
                          autoComplete="tel"
                          className={inputCls}
                        />
                        {fieldErrors.phone && <p className={errCls}>{fieldErrors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="hero-address" className={labelCls}>Address <span className="text-white/30 normal-case tracking-normal">(optional)</span></label>
                      <Input
                        id="hero-address"
                        name="address"
                        placeholder="Street, city"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        maxLength={FIELD_LIMITS.address.max}
                        autoComplete="street-address"
                        className={inputCls}
                      />
                      {fieldErrors.address && <p className={errCls}>{fieldErrors.address}</p>}
                    </div>

                    <div>
                      <label htmlFor="hero-frequency" className={labelCls}>Frequency <span className="text-white/30 normal-case tracking-normal">(optional)</span></label>
                      <select
                        id="hero-frequency"
                        name="frequency"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        className={selectCls}
                      >
                        <option value="" className="text-slate-900">Select frequency</option>
                        <option value="one-time" className="text-slate-900">One-time</option>
                        <option value="daily" className="text-slate-900">Daily</option>
                        <option value="5x-week" className="text-slate-900">5× per week</option>
                        <option value="weekly" className="text-slate-900">Weekly</option>
                        <option value="bi-weekly" className="text-slate-900">Bi-weekly</option>
                        <option value="monthly" className="text-slate-900">Monthly</option>
                        <option value="custom" className="text-slate-900">Custom</option>
                      </select>
                      {fieldErrors.frequency && <p className={errCls}>{fieldErrors.frequency}</p>}
                    </div>

                    <div>
                      <label htmlFor="hero-notes" className={labelCls}>Notes (optional)</label>
                      <Textarea
                        id="hero-notes"
                        name="notes"
                        placeholder={
                          lane === "commercial"
                            ? "Square footage, access, opening hours, pain points…"
                            : "Bedrooms, square footage, scope (deep, move-out, carpet)…"
                        }
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        maxLength={FIELD_LIMITS.notes.max}
                        className={`${inputCls} min-h-[88px] resize-none`}
                      />
                      {fieldErrors.notes && <p className={errCls}>{fieldErrors.notes}</p>}
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-xl py-6 text-[15px] font-medium tracking-wide bg-[#0FA36B] hover:bg-[#0B7F54] text-white shadow-[0_18px_40px_-18px_rgba(15,163,107,0.7)] transition"
                      disabled={sending}
                    >
                      {sending
                        ? "Sending…"
                        : sentOk === true
                        ? "Request sent ✓"
                        : laneCopy.submit}
                    </Button>

                    {sentOk === false && (
                      <p className="text-xs text-rose-300">{errorMsg}</p>
                    )}

                    <p className="text-[11px] text-white/50 leading-relaxed">
                      Start with a 30-day trial. No lock-in, cancel anytime. We respond within one business day. By submitting you agree to our{" "}
                      <Link href="/terms" className="text-white/75 underline hover:text-white">
                        Terms
                      </Link>{" "}
                      &amp;{" "}
                      <Link href="/privacy" className="text-white/75 underline hover:text-white">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= SHOWCASE STRIP ======================= */}
      <section className="relative">
        <div className="relative h-[58vh] min-h-[420px] sm:min-h-[520px] w-full overflow-hidden">
          <Image
            key={laneCopy.showcaseSrc}
            src={laneCopy.showcaseSrc}
            alt={laneCopy.showcaseAlt}
            fill
            sizes="100vw"
            className="object-cover object-center scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050E1F] via-[#050E1F]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050E1F] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-30" />

          <div className="relative h-full max-w-[1280px] mx-auto px-5 sm:px-8 flex items-end pb-12 sm:pb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#D4A574]">
                <span className="inline-block h-px w-8 bg-[#D4A574]/60" />
                On the ground
              </div>
              <p className="mt-4 font-display text-3xl sm:text-5xl leading-[1.05] text-white">
                {laneCopy.showcaseLine}
              </p>
              <p className="mt-4 max-w-md text-[15px] text-white/70 leading-relaxed">
                Branded, named teams. Owner-led night crews. The same faces every visit so
                your space is known, not just cleaned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= SERVICES ======================= */}
      <section className="relative" style={{ backgroundColor: colors.ink }}>
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#D4A574]">
                What we do
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] max-w-3xl">
                Commercial cleaning,{" "}
                <span className="italic text-[#D4A574]">built around opening time.</span>
              </h2>
            </div>
            <Link
              href="/commercial-cleaning"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white border-b border-white/20 hover:border-white pb-1 self-start"
            >
              Explore commercial services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            <Link
              href="/commercial-cleaning"
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0B2545]/40 hover:border-white/25 transition flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/home/commercial-overview-cleaning.png"
                  alt="Clean commercial reception, office, and hospitality space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050E1F] via-[#050E1F]/30 to-transparent" />
              </div>
              <div className="p-7 sm:p-9 flex flex-col flex-1">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#D4A574]">
                  Commercial
                </div>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl leading-tight">
                  Restaurants, Clinics and Offices.
                </h3>
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  {[
                    "Owner-led night crews",
                    "Same crew every visit",
                    "Written quotes in 24 hours",
                  ].map((x) => (
                    <li key={x} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[#0FA36B]" />
                      {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7 inline-flex items-center gap-2 text-sm text-white/85 group-hover:text-white">
                  Explore commercial
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>

            <Link
              href="/breweries"
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0B2545]/40 hover:border-white/25 transition flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/home/taproom-cleaning.png"
                  alt="Brewery and taproom cleaning"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050E1F] via-[#050E1F]/30 to-transparent" />
              </div>
              <div className="p-7 sm:p-9 flex flex-col flex-1">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#D4A574]">
                  Breweries
                </div>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl leading-tight">
                  Taproom floors, back-of-house, washrooms.
                </h3>
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  {["Sticky-floor resets", "Patio-season traffic", "Open-ready by morning"].map(
                    (x) => (
                      <li key={x} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D4A574]" />
                        {x}
                      </li>
                    )
                  )}
                </ul>
                <div className="mt-auto pt-7 inline-flex items-center gap-2 text-sm text-white/85 group-hover:text-white">
                  Explore breweries
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>

            <Link
              href="/clinics"
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0B2545]/40 hover:border-white/25 transition flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/home/clinic-cleaning.png"
                  alt="Clinic and medical office cleaning"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050E1F] via-[#050E1F]/30 to-transparent" />
              </div>
              <div className="p-7 sm:p-9 flex flex-col flex-1">
                <div className="text-[11px] uppercase tracking-[0.22em] text-[#D4A574]">
                  Clinics
                </div>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl leading-tight">
                  Cleaning for spaces that get inspected.
                </h3>
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  {["Disinfection protocol", "Discreet night service", "Insured commercial crews"].map(
                    (x) => (
                      <li key={x} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#D4A574]" />
                        {x}
                      </li>
                    )
                  )}
                </ul>
                <div className="mt-auto pt-7 inline-flex items-center gap-2 text-sm text-white/85 group-hover:text-white">
                  Explore clinics
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================= PROCESS ======================= */}
      <section className="relative border-y border-white/8" style={{ backgroundColor: colors.midnight }}>
        <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-20 pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 py-24 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#D4A574]">
                The walk-through
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.02]">
                Quoted on what we{" "}
                <span className="italic text-[#D4A574]">actually see.</span>
              </h2>
              <p className="mt-5 text-white/65 leading-relaxed max-w-md">
                No square-footage calculator. No surprise add-ons. We meet you on-site,
                build a scope to match, and deliver a written quote within 24 hours.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ol className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                {[
                  {
                    n: "01",
                    t: "Submit",
                    d: "30 seconds. We confirm fit and book a walk-through within one business day.",
                  },
                  {
                    n: "02",
                    t: "Walk-through",
                    d: "30 minutes on-site. We measure, photograph, and listen to what's not working.",
                  },
                  {
                    n: "03",
                    t: "Quote & start",
                    d: "Written scope and price within 24 hours. Named team assigned before kickoff.",
                  },
                ].map((s) => (
                  <li
                    key={s.n}
                    className="bg-[#081A31] p-7 sm:p-8 hover:bg-[#0B2545] transition"
                  >
                    <div className="font-display tabular text-5xl sm:text-6xl text-[#D4A574]/30 leading-none">
                      {s.n}
                    </div>
                    <div className="mt-5 font-display text-xl text-white">{s.t}</div>
                    <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= SERVICE AREAS ======================= */}
      <section className="relative" style={{ backgroundColor: colors.ink }}>
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#D4A574]">
                Coverage
              </div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] max-w-3xl">
                Our nightly routes.
              </h2>
            </div>
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white border-b border-white/20 hover:border-white pb-1 self-start"
            >
              All service areas
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
            {serviceAreas
              .filter((area) => routeAreaSlugs.includes(area.slug))
              .sort((a, b) => routeAreaSlugs.indexOf(a.slug) - routeAreaSlugs.indexOf(b.slug))
              .map((area, i) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/30 transition ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    i === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-[4/3]"
                  } overflow-hidden`}
                >
                  <Image
                    src={
                      routeCardImages[area.slug]?.src ||
                      area.image ||
                      `/images/service-areas/${area.slug}.jpg`
                    }
                    alt={routeCardImages[area.slug]?.alt || area.imageAlt || area.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover scale-[1.02] group-hover:scale-[1.08] transition-transform duration-[900ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050E1F] via-[#050E1F]/30 to-transparent" />
                  <div className="absolute inset-0 bg-[#050E1F]/20 group-hover:bg-[#050E1F]/0 transition-colors duration-500" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[#D4A574]/90">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1 font-display text-xl sm:text-2xl text-white">
                      {area.name}
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/60 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition" />
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/60">
            Also serving{" "}
            {serviceAreas
              .filter((area) => !routeAreaSlugs.includes(area.slug))
              .map((area) => area.name)
              .join(", ")}
            .
          </p>
        </div>
      </section>

      {/* ======================= TESTIMONIAL ======================= */}
      <section
        className="relative overflow-hidden border-y border-white/8"
        style={{ backgroundColor: colors.navy }}
      >
        <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-20 pointer-events-none" />
        <div
          className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(closest-side, #D4A574, transparent)" }}
        />
        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 py-24 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-4">
              <div className="relative w-full max-w-[340px] mx-auto lg:mx-0">
                <div
                  className="absolute -inset-3 rounded-3xl opacity-30 blur-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(15,163,107,0.6), rgba(212,165,116,0.4))",
                  }}
                />
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/15">
                  <Image
                    src="/images/home/1.png"
                    alt="Gleam Pro team member"
                    fill
                    sizes="(max-width: 1024px) 60vw, 30vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#050E1F] to-transparent">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[#D4A574]">
                      Crew lead · Vancouver
                    </div>
                    <div className="mt-1 text-white text-sm font-medium">
                      Same face, every shift.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#D4A574]">
                What clients say
              </div>
              <blockquote className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-white">
                <span className="text-white/30">“</span>
                They show up before service. The kitchen line is{" "}
                <span className="italic">spotless</span>, the bathrooms are stocked,
                and we never have to send the dreaded Sunday-night text.
                <span className="text-white/30">”</span>
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 hairline" />
                <div className="text-sm text-white/70">
                  <span className="text-white">Restaurant Owner</span> ·{" "}
                  <span className="text-white/50">Mount Pleasant, Vancouver</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= FINAL CTA ======================= */}
      <section className="relative" style={{ backgroundColor: colors.ink }}>
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 px-8 sm:px-14 py-16 sm:py-24">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                background:
                  "radial-gradient(700px 380px at 0% 0%, rgba(15,163,107,0.18), transparent 60%), radial-gradient(700px 380px at 100% 100%, rgba(212,165,116,0.18), transparent 60%), linear-gradient(180deg, #0B2545, #081A31)",
              }}
            />
            <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-25" />
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#D4A574]">
                  Ready when you are
                </div>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.98]">
                  Book a walk-through.<br />
                  <span className="italic text-[#D4A574]">We&apos;ll handle the rest.</span>
                </h2>
                <p className="mt-5 max-w-md text-[15px] text-white/65">
                  Leave your email and phone — we&apos;ll reply within one business day with next steps.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3">
                <form
                  onSubmit={submitQuickCapture}
                  className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-sm"
                  aria-label="Quick contact form"
                >
                  <input
                    type="text"
                    name="website"
                    value={quickWebsite}
                    onChange={(e) => setQuickWebsite(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="quick-email" className="block text-[11px] font-medium uppercase tracking-[0.18em] text-white/55 mb-1.5">
                        Email
                      </label>
                      <Input
                        id="quick-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={quickEmail}
                        onChange={(e) => setQuickEmail(e.target.value)}
                        required
                        maxLength={FIELD_LIMITS.email.max}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label htmlFor="quick-phone" className="block text-[11px] font-medium uppercase tracking-[0.18em] text-white/55 mb-1.5">
                        Phone
                      </label>
                      <Input
                        id="quick-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="(604) 000-0000"
                        value={quickPhone}
                        onChange={(e) => setQuickPhone(e.target.value)}
                        required
                        minLength={FIELD_LIMITS.phone.min}
                        maxLength={FIELD_LIMITS.phone.max}
                        pattern={PHONE_INPUT_PATTERN}
                        className={inputCls}
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={quickSending}
                    className="mt-4 w-full rounded-xl py-5 text-[14px] font-medium tracking-wide bg-[#F4EFE6] hover:bg-white text-[#0B2545] transition"
                  >
                    {quickSending
                      ? "Sending…"
                      : quickSentOk === true
                      ? "Got it — we'll be in touch ✓"
                      : "Request a callback"}
                  </Button>
                  {quickSentOk === false && quickErrorMsg ? (
                    <p className="mt-2 text-xs text-rose-300">{quickErrorMsg}</p>
                  ) : null}
                  <p className="mt-3 text-[11px] text-white/45 leading-relaxed">
                    Start with a 30-day trial. No lock-in, cancel anytime. Or call{" "}
                    <a href="tel:+17786810922" className="text-white/70 hover:text-white tabular">
                      (778) 681-0922
                    </a>{" "}
                    · Mon–Sat. By submitting you agree to our{" "}
                    <Link href="/terms" className="text-white/70 underline hover:text-white">
                      Terms
                    </Link>
                    {" & "}
                    <Link href="/privacy" className="text-white/70 underline hover:text-white">
                      Privacy
                    </Link>
                    .
                  </p>
                </form>
                <Link
                  href="/request-walkthrough?type=commercial"
                  className="group inline-flex items-center justify-between gap-4 rounded-2xl px-6 py-4 text-[14px] text-white border border-white/15 hover:border-white/40 hover:bg-white/[0.04] transition"
                >
                  <span>Prefer the full walk-through form?</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
