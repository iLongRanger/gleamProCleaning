"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Home as HomeIcon,
  Shield,
  Sparkles,
  Star,
  LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const colors = {
  navy: "#0B2545",
  emerald: "#0FA36B",
  gold: "#C9A227",
  silver: "#E5E7EB",
  midnight: "#081A31",
};

type Lane = "commercial" | "residential";

function Badge({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-2 border border-white/10 text-xs sm:text-sm">
      <Icon className="w-4 h-4" style={{ color: colors.emerald }} />
      <span className="text-white/90">{text}</span>
    </div>
  );
}

function Segmented({
  value,
  onChange,
}: {
  value: Lane;
  onChange: (v: Lane) => void;
}) {
  return (
    <div className="relative">
      {/* gold glow behind */}
      <div
        className="absolute -inset-3 rounded-full blur-2xl opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(closest-side, ${colors.gold}, transparent)`,
        }}
      />

      <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 p-2 backdrop-blur-xl shadow-[0_0_30px_rgba(201,162,39,0.25)]">
        <button
          type="button"
          onClick={() => onChange("commercial")}
          className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition
            ${
              value === "commercial"
                ? "bg-white/15 text-white shadow-[0_0_18px_rgba(201,162,39,0.25)]"
                : "text-white/75 hover:text-white"
            }
          `}
        >
          Commercial
        </button>

        <button
          type="button"
          onClick={() => onChange("residential")}
          className={`px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition
            ${
              value === "residential"
                ? "bg-white/15 text-white shadow-[0_0_18px_rgba(201,162,39,0.25)]"
                : "text-white/75 hover:text-white"
            }
          `}
        >
          Residential
        </button>
      </div>
    </div>
  );
}

export default function Page() {
  const [lane, setLane] = useState<Lane>("commercial");

  // Form state
  const [sending, setSending] = useState(false);
  const [sentOk, setSentOk] = useState<null | boolean>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Honeypot
  const [website, setWebsite] = useState("");

  // Commercial-only fields
  const [businessName, setBusinessName] = useState("");
  const [facilityType, setFacilityType] = useState("");

  // Shared fields
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [frequency, setFrequency] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const laneCopy = useMemo(() => {
    if (lane === "commercial") {
      return {
        kickerIcon: Briefcase,
        kicker: "Commercial Cleaning",
        headline: (
          <>
            Professional Commercial Cleaning for{" "}
            <span style={{ color: colors.gold }}>Metro Vancouver</span>
          </>
        ),
        subhead:
          "Reliable teams for restaurants, offices, and community facilities — consistent results, clear communication, and contract-ready service.",
        primaryCtaText: "Request a Free Walk-Through",
        primaryCtaHref: "/request-walkthrough",
        secondaryCtaText: "Explore Commercial Services",
        secondaryCtaHref: "/commercial-cleaning",
        formTitle: "Request a Free Walk-Through",
        formHelper:
          "For exact pricing and scope, we start with an on-site walkthrough.",
        submitText: "Send Walk-Through Request",
        heroImgSrc: "/images/home/commercial-hero.png",
        heroImgAlt: "Commercial cleaning team in a professional workspace",
      };
    }

    return {
      kickerIcon: HomeIcon,
      kicker: "Residential Cleaning",
      headline: (
        <>
          Premium Home Cleaning{" "}
          <span style={{ color: colors.gold }}>You Can Trust</span>
        </>
      ),
      subhead:
        "Recurring, deep cleans, move-in/out, short-stay turnovers, carpet & upholstery, and post-renovation — tailored to your home and schedule.",
      primaryCtaText: "Get a Free Home Estimate",
      primaryCtaHref: "/residential-cleaning",
      secondaryCtaText: "See Residential Services",
      secondaryCtaHref: "/residential-cleaning#services",
      formTitle: "Get a Free Home Estimate",
      formHelper:
        "Tell us what you need and we’ll respond with the next steps for an estimate.",
      submitText: "Send Estimate Request",
      heroImgSrc: "/images/home/residential-hero.png",
      heroImgAlt: "Residential cleaning team in a modern home setting",
    };
  }, [lane]);

  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setSentOk(null);
    setErrorMsg(null);

    try {
      const payload: any = {
        leadType: lane, // "commercial" | "residential"
        website, // honeypot
        fullName,
        address,
        frequency,
        phone,
        email,
        notes,
      };

      if (lane === "commercial") {
        payload.businessName = businessName;
        payload.facilityType = facilityType;
      }

      const res = await fetch("/api/walkthrough", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        setSentOk(false);
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setSentOk(true);
      setBusinessName("");
      setFacilityType("");
      setFullName("");
      setAddress("");
      setFrequency("");
      setPhone("");
      setEmail("");
      setNotes("");
      setWebsite("");
    } catch {
      setSentOk(false);
      setErrorMsg("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const KickerIcon = laneCopy.kickerIcon;

  return (
    <div style={{ backgroundColor: colors.navy }} className="text-white">
      {/* HERO (full-screen, background swaps per toggle) */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={laneCopy.heroImgSrc}
            alt={laneCopy.heroImgAlt}
            fill
            priority
            sizes="100vw"
            className="
              object-cover object-center
              scale-[1.18]
              sm:scale-[1.08]
              md:scale-100 md:object-[50%_35%]
              lg:scale-[1.03] lg:object-center
              xl:scale-[1.06]"
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/55" />
          {/* Brand glows (subtle) */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(520px 300px at 20% 20%, ${colors.gold}, transparent),
                           radial-gradient(520px 300px at 80% 10%, ${colors.emerald}, transparent)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 sm:py-14 md:py-20">
          {/* Brand lockup + toggle */}
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/logo-gpc.png"
              alt="Gleam Pro Cleaning"
              width={240}
              height={90}
              className="h-auto w-[170px] sm:w-[200px] md:w-[240px]"
              priority
            />
            <Segmented value={lane} onChange={setLane} />
          </div>

          {/* Main grid: 2-col desktop, stacked mobile */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* LEFT: Copy */}
            <div className="flex flex-col gap-6 pt-2 lg:pt-6">
              <div className="flex items-center gap-2 text-white/85">
                <KickerIcon
                  className="w-4 h-4"
                  style={{ color: colors.gold }}
                />
                <span className="text-sm">{laneCopy.kicker}</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
              >
                {laneCopy.headline}
              </motion.h1>

              <p className="text-white/85 max-w-xl text-sm sm:text-base">
                {laneCopy.subhead}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Badge icon={Shield} text="Fully insured & vetted" />
                <Badge icon={Sparkles} text="5-Star Detail Standard" />
                <Badge icon={Star} text="Prestige Guarantee" />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="rounded-2xl px-4 py-3 text-sm sm:px-6 sm:py-6 sm:text-base"
                  style={{ backgroundColor: colors.emerald }}
                >
                  <Link href={laneCopy.primaryCtaHref}>
                    {laneCopy.primaryCtaText}
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-2xl px-4 py-3 text-sm sm:px-6 sm:py-6 sm:text-base border"
                  style={{
                    borderColor: colors.gold,
                    color: colors.gold,
                    background: "transparent",
                  }}
                >
                  <Link href={laneCopy.secondaryCtaHref}>
                    {laneCopy.secondaryCtaText}
                  </Link>
                </Button>
              </div>
            </div>

            {/* RIGHT: Frosted glass form card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:pt-6"
            >
              <Card className="rounded-3xl border border-white/15 bg-white/10 text-white shadow-2xl backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Image
                      src="/logo-gpc-bg.png"
                      alt="Gleam Pro Cleaning logo"
                      className="h-10 sm:h-12 w-auto max-w-full"
                      width={150}
                      height={50}
                      priority
                    />
                    <span>{laneCopy.formTitle}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <form className="space-y-3" onSubmit={submitLead}>
                    {/* Honeypot */}
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
                      <>
                        <Input
                          name="businessName"
                          placeholder="Business Name"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          required
                          className="bg-white/80"
                        />
                        <Input
                          name="facilityType"
                          placeholder="Facility Type (Restaurant, Office, Community Facility)"
                          value={facilityType}
                          onChange={(e) => setFacilityType(e.target.value)}
                          required
                          className="bg-white/80"
                        />
                      </>
                    ) : null}

                    <Input
                      name="fullName"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="bg-white/80"
                    />

                    <Input
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/80"
                    />

                    <Input
                      name="phone"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="bg-white/80"
                    />

                    <Input
                      name="address"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                      className="bg-white/80"
                    />

                    <Input
                      name="frequency"
                      placeholder="Frequency (One-time, Weekly, Bi-weekly, Monthly)"
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      required
                      className="bg-white/80"
                    />

                    <Textarea
                      name="notes"
                      placeholder={
                        lane === "commercial"
                          ? "Notes (size, access, timing, pain points)"
                          : "Notes (deep clean, move-in/out, short-stay, carpet, post-reno, etc.)"
                      }
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="bg-white/80"
                    />

                    <p className="text-xs text-white/80">
                      {laneCopy.formHelper}
                    </p>

                    <Button
                      type="submit"
                      className="w-full rounded-2xl text-sm sm:text-base py-3 sm:py-4"
                      style={{ backgroundColor: colors.navy, color: "white" }}
                      disabled={sending}
                    >
                      {sending
                        ? "Sending…"
                        : sentOk === true
                        ? "Request Sent ✓"
                        : laneCopy.submitText}
                    </Button>

                    {sentOk === false ? (
                      <p className="text-xs text-red-200">{errorMsg}</p>
                    ) : null}

                    <p className="text-xs text-white/70">
                      By submitting, you agree to our Terms & Privacy Policy.
                    </p>
                  </form>

                  <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="text-sm font-semibold text-white">
                      Quick Links
                    </div>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <Link
                        href="/commercial-cleaning"
                        className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 hover:bg-white/15"
                      >
                        Commercial Cleaning Hub
                      </Link>
                      <Link
                        href="/residential-cleaning"
                        className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 hover:bg-white/15"
                      >
                        Residential Cleaning
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar (kept) */}
      <section
        className="border-y border-white/10"
        style={{ backgroundColor: colors.midnight }}
      >
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            "Licensed & Insured",
            "Background-Checked Team",
            "Eco-Forward Supplies",
            "Flexible Scheduling",
          ].map((t) => (
            <div key={t} className="text-white/80 text-sm">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Minimal shared sections placeholder (kept intentionally light for this commit) */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Cleaning Built on Trust & Standards
          </h2>
          <p className="mt-2 text-white/85">
            Commercial-first systems with premium residential care — consistent
            teams, clear communication, and detail-driven routines.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Commercial Cleaning",
              desc: "Restaurants, offices, and community facilities — walkthrough-first, scope-driven service.",
              href: "/commercial-cleaning",
            },
            {
              title: "Residential Cleaning",
              desc: "Recurring, deep cleans, move-in/out, turnovers, carpets, and post-reno — estimate-first, no pricing tables.",
              href: "/residential-cleaning",
            },
            {
              title: "Request a Walk-Through",
              desc: "For commercial spaces, we start with a walkthrough to quote accurately and set expectations.",
              href: "/request-walkthrough",
            },
          ].map((c) => (
            <Card
              key={c.title}
              className="bg-white/5 border-white/10 rounded-3xl hover:bg-white/10 transition"
            >
              <CardHeader>
                <CardTitle style={{ color: colors.gold }}>{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-white/85">
                <p>{c.desc}</p>
                <div className="mt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-2xl border"
                    style={{
                      borderColor: colors.gold,
                      color: colors.gold,
                      background: "transparent",
                    }}
                  >
                    <Link href={c.href}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Gleam Pro Cleaning",
            image: "/logo-gpc.png",
            telephone: "+1-672-970-3755",
            email: "hello@gleamprocleaning.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Vancouver",
              addressRegion: "BC",
              addressCountry: "CA",
            },
            areaServed: "Greater Vancouver",
            url: "https://www.gleampro.ca",
            sameAs: [
              "https://instagram.com/gleampro",
              "https://facebook.com/gleampro",
            ],
            priceRange: "$$",
            openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
          }),
        }}
      />
    </div>
  );
}
