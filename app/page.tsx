"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Shield,
  Star,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
  Home as HomeIcon,
  Truck,
  Sofa,
  Briefcase,
  Hammer,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Brand palette
const colors = {
  navy: "#0B2545", // trust
  emerald: "#0FA36B", // growth
  gold: "#C9A227", // wealth
  silver: "#E5E7EB", // purity (silver/white)
  midnight: "#081A31", // darker navy for sections
};

// Inline SVG logo: shield + wave + sparkle
function GleamLogo({ size = 42 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Gleam Pro Cleaning logo"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="128" y2="128">
          <stop offset="0%" stopColor={colors.gold} />
          <stop offset="100%" stopColor="#F3D98F" />
        </linearGradient>
      </defs>
      {/* Shield */}
      <path
        d="M64 8c15 10 31 12 48 12 0 28-5 49-15 62-10 14-21 22-33 26-12-4-23-12-33-26S16 48 16 20c17 0 33-2 48-12z"
        stroke="url(#goldGrad)"
        strokeWidth="6"
        fill="none"
      />
      {/* Wave */}
      <path
        d="M28 62c14-10 30-11 44 2 6 5 14 8 22 6-2 9-11 17-24 17-21 0-28-17-42-25z"
        fill={colors.emerald}
      />
      <path
        d="M36 66c10-7 22-7 32 1 6 4 13 6 19 5-3 7-10 12-20 12-17 0-23-12-31-18z"
        fill="#0B6B4A"
      />
      {/* Sparkle */}
      <path
        d="M94 30l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z"
        fill={colors.silver}
        stroke={colors.gold}
        strokeWidth="2"
      />
    </svg>
  );
}

const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div
        className="text-3xl md:text-4xl font-bold"
        style={{ color: colors.gold }}
      >
        {value}
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}

function Badge({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-2 border border-white/10">
      <Icon className="w-4 h-4" style={{ color: colors.emerald }} />
      <span className="text-sm text-white/90">{text}</span>
    </div>
  );
}

export default function Page() {
  const [sent, setSent] = useState(false);

  return (
    <div style={{ backgroundColor: colors.navy }} className="text-white">
      {/* Top Bar */}
      <div
        className="hidden md:block text-sm"
        style={{ backgroundColor: colors.midnight }}
      >
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(672) 970-3755</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hello@gleamprocleaning.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4 opacity-80">
            <Facebook className="w-4 h-4" />
            <Instagram className="w-4 h-4" />
            <Linkedin className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <GleamLogo />
            <div className="leading-tight">
              <div
                className="font-semibold tracking-wide"
                style={{ color: colors.gold }}
              >
                GLEAM PRO
              </div>
              <div className="text-xs uppercase text-white/80">Cleaning</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-white/90 hover:text-white transition-colors"
              >
                {n.label}
              </a>
            ))}
            <Button
              className="rounded-2xl px-5"
              style={{ backgroundColor: colors.emerald }}
            >
              Book Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(600px 300px at 20% 20%, ${colors.gold}, transparent), radial-gradient(600px 300px at 80% 10%, ${colors.emerald}, transparent)`,
          }}
        />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Elevate your space with{" "}
              <span style={{ color: colors.gold }}>prestige</span> cleaning.
            </motion.h1>
            <p className="mt-4 text-white/85 max-w-xl">
              Professional. Inspiring. Trustworthy. Gleam Pro Cleaning delivers
              hotel-level brilliance and peace of mind—so you can shine in what
              matters most.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge icon={Shield} text="Fully insured & vetted" />
              <Badge icon={Sparkles} text="5-Star Detail Standard" />
              <Badge icon={Star} text="Prestige Guarantee" />
            </div>
            <div className="mt-8 flex items-center gap-3">
              <Button
                className="rounded-2xl px-6 py-6 text-base"
                style={{ backgroundColor: colors.emerald }}
              >
                Get an Instant Quote <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-2xl px-6 py-6 text-base border"
                style={{
                  borderColor: colors.gold,
                  color: colors.gold,
                  background: "transparent",
                }}
              >
                Explore Services
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              <Stat value="500+" label="Spaces Elevated" />
              <Stat value="98%" label="Repeat Clients" />
              <Stat value="24h" label="Satisfaction Promise" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/95 text-slate-900 border-0 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <GleamLogo size={28} />
                  Request a Prestige Clean
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Full Name" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Phone" />
                <Input placeholder="City / Neighbourhood" />
                <Textarea placeholder="Tell us about your space (size, rooms, preferences)" />
                <Button
                  className="w-full rounded-xl"
                  style={{ backgroundColor: colors.navy, color: "white" }}
                  onClick={() => setSent(true)}
                >
                  {sent ? "Request Sent ✓" : "Get My Quote"}
                </Button>
                <p className="text-xs text-slate-600">
                  By submitting, you agree to our Terms & Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        className="border-y border-white/10"
        style={{ backgroundColor: colors.midnight }}
      >
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
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

      {/* Services (cards + details) */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Prestige Services
          </h2>
          <p className="mt-2 text-white/85">
            Every service is tailored to elevate your space with trust,
            brilliance, and peace of mind.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: HomeIcon,
              title: "Prestige Home Care",
              desc: "Recurring or one-time deep cleans for lasting comfort and shine.",
            },
            {
              icon: Truck,
              title: "Move-In / Move-Out",
              desc: "Meticulous vacant cleans for keys-ready transitions.",
            },
            {
              icon: Sofa,
              title: "Carpet & Upholstery",
              desc: "Hot-water extraction + fabric-safe treatments.",
            },
            {
              icon: Briefcase,
              title: "Office & Clinic",
              desc: "Discreet, hygienic routines for professional spaces.",
            },
            {
              icon: Sparkles,
              title: "Short-Stay Turnovers",
              desc: "Hotel-grade resets for Airbnbs & executive rentals.",
            },
            {
              icon: Hammer,
              title: "Post-Renovation",
              desc: "Fine-dust removal and detailed construction resets.",
            },
          ].map((s) => (
            <Card
              key={s.title}
              className="bg-white/5 border-white/10 rounded-2xl"
            >
              <CardHeader>
                <CardTitle
                  className="flex items-center gap-2 text-lg"
                  style={{ color: colors.gold }}
                >
                  <s.icon className="w-5 h-5" /> {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/85">{s.desc}</CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed sections with anchors */}
        <div className="mt-16 space-y-16">
          {/* Home */}
          <div id="service-home">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5" style={{ color: colors.gold }} />{" "}
              Prestige Home Care
            </h3>
            <p className="mt-2 text-white/85 max-w-3xl">
              A premium clean tailored to your lifestyle. Ideal for recurring
              weekly/bi-weekly service or a one-time deep refresh.
            </p>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4 className="font-semibold" style={{ color: colors.gold }}>
                  Kitchen
                </h4>
                <ul className="mt-2 space-y-2 text-white/85 text-sm">
                  <li className="flex gap-2">
                    <Check
                      className="w-4 h-4"
                      style={{ color: colors.emerald }}
                    />
                    Counters, backsplash, sinks, taps
                  </li>
                  <li className="flex gap-2">
                    <Check
                      className="w-4 h-4"
                      style={{ color: colors.emerald }}
                    />
                    Appliance exteriors + stovetop
                  </li>
                  <li className="flex gap-2">
                    <Check
                      className="w-4 h-4"
                      style={{ color: colors.emerald }}
                    />
                    Cabinet fronts (spot wipe)
                  </li>
                  <li className="flex gap-2">
                    <Check
                      className="w-4 h-4"
                      style={{ color: colors.emerald }}
                    />
                    Floors vacuum & mop
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4 className="font-semibold" style={{ color: colors.gold }}>
                  Bathrooms
                </h4>
                <ul className="mt-2 space-y-2 text-white/85 text-sm">
                  <li className="flex gap-2">
                    <Check
                      className="w-4 h-4"
                      style={{ color: colors.emerald }}
                    />
                    Shower/tub, tile, glass, grout edges
                  </li>
                  <li className="flex gap-2">
                    <Check
                      className="w-4 h-4"
                      style={{ color: colors.emerald }}
                    />
                    Toilets in/outside + base
                  </li>
                  <li className="flex gap-2">
                    <Check
                      className="w-4 h-4"
                      style={{ color: colors.emerald }}
                    />
                    Mirrors, vanities, fixtures
                  </li>
                  <li className="flex gap-2">
                    <Check
                      className="w-4 h-4"
                      style={{ color: colors.emerald }}
                    />
                    Floors vacuum & mop
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4 className="font-semibold" style={{ color: colors.gold }}>
                  Living / Bedrooms
                </h4>
                <ul className="mt-2 space-y-2 text-white/85 text-sm">
                  <li className="flex gap-2">
                    <Check
                      className="w-4 h-4"
                      style={{ color: colors.emerald }}
                    />
                    Dusting (surfaces, decor, sills)
                  </li>
                  <li className="flex gap-2">
                    <Check
                      className="w-4 h-4"
                      style={{ color: colors.emerald }}
                    />
                    Vacuum carpets & rugs
                  </li>
                  <li className="flex gap-2">
                    <Check
                      className="w-4 h-4"
                      style={{ color: colors.emerald }}
                    />
                    Hard floors vacuum & mop
                  </li>
                  <li className="flex gap-2">
                    <Check
                      className="w-4 h-4"
                      style={{ color: colors.emerald }}
                    />
                    Make beds (upon request)
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10">
                Add-ons: Inside oven/fridge • Baseboards • Blinds • Inside
                windows • Balcony
              </span>
            </div>
          </div>

          {/* Move In/Out */}
          <div id="service-move">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Shield className="w-5 h-5" style={{ color: colors.gold }} />{" "}
              Move-In / Move-Out
            </h3>
            <p className="mt-2 text-white/85 max-w-3xl">
              Detailed vacant clean to meet landlord/strata expectations and
              listing standards. Ideal before keys exchange.
            </p>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                "Inside appliances (fridge/oven)",
                "Cabinets & drawers inside",
                "Baseboards, trim, switches",
                "Vent/return covers",
                "Closets & shelves",
                "Spot walls (within reach)",
              ].map((it) => (
                <div
                  key={it}
                  className="flex items-start gap-2 text-white/85 text-sm"
                >
                  <Check
                    className="w-4 h-4"
                    style={{ color: colors.emerald }}
                  />
                  {it}
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-white/60">
              Note: Excessive paint/stain removal, high ladder work, and
              hazardous waste are quoted separately.
            </p>
          </div>

          {/* Carpet & Upholstery */}
          <div id="service-carpet">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5" style={{ color: colors.gold }} />{" "}
              Carpet & Upholstery
            </h3>
            <p className="mt-2 text-white/85 max-w-3xl">
              Professional hot-water extraction and fabric-safe treatments to
              revive carpets, sofas, chairs, and rugs.
            </p>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                "Pre-treat high-traffic areas",
                "Hot-water extraction",
                "Spot/stain treatment",
                "Deodorize & neutralize",
                "Protectant add-on available",
                "Dry time guidance",
              ].map((it) => (
                <div
                  key={it}
                  className="flex items-start gap-2 text-white/85 text-sm"
                >
                  <Check
                    className="w-4 h-4"
                    style={{ color: colors.emerald }}
                  />
                  {it}
                </div>
              ))}
            </div>
          </div>

          {/* Short-Stay Turnovers */}
          <div id="service-str">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5" style={{ color: colors.gold }} />{" "}
              Short-Stay Turnovers
            </h3>
            <p className="mt-2 text-white/85 max-w-3xl">
              Fast, hotel-grade staging for Airbnbs and executive rentals to
              protect ratings and wow guests.
            </p>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                "Linen change & bed styling",
                "Hotel fold towels",
                "Amenities restock checklist",
                "Photo-ready staging",
                "Laundry add-on",
                "Damage/issue report",
              ].map((it) => (
                <div
                  key={it}
                  className="flex items-start gap-2 text-white/85 text-sm"
                >
                  <Check
                    className="w-4 h-4"
                    style={{ color: colors.emerald }}
                  />
                  {it}
                </div>
              ))}
            </div>
          </div>

          {/* Office & Clinic */}
          <div id="service-office">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Shield className="w-5 h-5" style={{ color: colors.gold }} />{" "}
              Office & Clinic
            </h3>
            <p className="mt-2 text-white/85 max-w-3xl">
              Quiet, reliable routines for clinics, studios, and offices that
              require spotless presentation and hygiene.
            </p>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                "Reception & glass touchpoints",
                "Sanitize washrooms & staff areas",
                "Floors vacuum & mop",
                "Bins & recycling",
                "Desk-safe dusting",
                "After-hours scheduling",
              ].map((it) => (
                <div
                  key={it}
                  className="flex items-start gap-2 text-white/85 text-sm"
                >
                  <Check
                    className="w-4 h-4"
                    style={{ color: colors.emerald }}
                  />
                  {it}
                </div>
              ))}
            </div>
          </div>

          {/* Post-Renovation */}
          <div id="service-postreno">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5" style={{ color: colors.gold }} />{" "}
              Post-Renovation
            </h3>
            <p className="mt-2 text-white/85 max-w-3xl">
              Fine-dust removal and detail work to transition from construction
              to move-in condition.
            </p>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                "Ceilings/corners dusting (extendable)",
                "Baseboards, sills, frames",
                "Cabinets & drawers in/out",
                "Appliance detailing",
                "Sticker/film peel (non-damaging)",
                "Air vent cover wipe",
              ].map((it) => (
                <div
                  key={it}
                  className="flex items-start gap-2 text-white/85 text-sm"
                >
                  <Check
                    className="w-4 h-4"
                    style={{ color: colors.emerald }}
                  />
                  {it}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button
            className="rounded-2xl px-6 py-6 text-base"
            style={{ backgroundColor: colors.emerald }}
          >
            Get an Instant Quote
          </Button>
          <p className="text-xs text-white/60 mt-3">
            Custom scopes available. Tell us your priorities and we’ll tailor a
            plan.
          </p>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="py-16"
        style={{ backgroundColor: colors.midnight }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Our Prestige Process
          </h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Assess",
                text: "We learn your goals and define a tailored scope.",
              },
              {
                step: "02",
                title: "Prepare",
                text: "Eco-forward products and pro-grade equipment.",
              },
              {
                step: "03",
                title: "Gleam",
                text: "Detail-driven execution for superior finish.",
              },
              {
                step: "04",
                title: "Elevate",
                text: "Walkthrough + 24h satisfaction promise.",
              },
            ].map((p) => (
              <Card
                key={p.step}
                className="bg.white/5 bg-white/5 border-white/10 rounded-2xl"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span
                      className="text-sm px-2 py-1 rounded-md"
                      style={{ backgroundColor: colors.emerald }}
                    >
                      {p.step}
                    </span>
                    <span style={{ color: colors.gold }}>{p.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/85">{p.text}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Transparent Prestige Pricing
        </h2>
        <p className="text-center text-white/85 mt-2">
          Simple tiers, premium results. Custom quotes available.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Essential Shine",
              price: "$169",
              items: [
                "1-bed / studio",
                "Kitchen & bath detail",
                "Floors & surfaces",
              ],
            },
            {
              name: "Executive Brilliance",
              price: "$269",
              items: ["2-3 beds", "Deep clean add-ons", "Appliance fronts"],
            },
            {
              name: "Prestige Elevate",
              price: "$389",
              items: ["4+ beds / STR", "Inside oven/fridge", "Carpet refresh"],
            },
          ].map((t, i) => (
            <Card
              key={t.name}
              className={`rounded-2xl ${i === 1 ? "ring-2" : ""}`}
              style={{
                backgroundColor: i === 1 ? "white" : "#ffffff0A",
                color: i === 1 ? colors.navy : "white",
                borderColor: colors.gold,
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="font-bold">{t.name}</span>
                  <span
                    className="text-2xl"
                    style={{ color: i === 1 ? colors.emerald : colors.gold }}
                  >
                    {t.price}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {t.items.map((it) => (
                  <div key={it} className="flex items-center gap-2">
                    <Check
                      className="w-4 h-4"
                      style={{ color: i === 1 ? colors.emerald : colors.gold }}
                    />
                    <span>{it}</span>
                  </div>
                ))}
                <Button
                  className="w-full rounded-xl mt-2"
                  style={{
                    backgroundColor: i === 1 ? colors.emerald : colors.navy,
                    color: "white",
                  }}
                >
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-16"
        style={{ backgroundColor: colors.midnight }}
      >
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Where Trust Meets Excellence
            </h2>
            <p className="mt-4 text-white/85">
              Founded by Christine (Sagittarius ✨) and Ralp (Pisces 🌊), Gleam
              Pro blends fiery dedication with flowing care. Our mission is
              simple: elevate every environment we touch—delivering serenity,
              order, and prestige to your space.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge icon={Shield} text="Bonded & Insured" />
              <Badge icon={Star} text="Client-first Culture" />
              <Badge icon={Sparkles} text="Detail Obsessed" />
            </div>
          </div>
          <div className="relative">
            <div
              className="aspect-video rounded-2xl border border-white/10 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${colors.emerald}22, ${colors.gold}22)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-60">
                <GleamLogo size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          What Our Clients Say
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            "Flawless, hotel-level finish. Our home feels brand new!",
            "They anticipate needs and elevate the little details.",
            "Professional, punctual, and trustworthy—true peace of mind.",
          ].map((quote, idx) => (
            <Card key={idx} className="bg-white/5 border-white/10 rounded-2xl">
              <CardContent className="pt-6">
                <div className="flex gap-1" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{ color: colors.gold }}
                    />
                  ))}
                </div>
                <p className="mt-3 text-white/90">“{quote}”</p>
                <p className="mt-3 text-sm text-white/60">— Vancouver Client</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Service Areas
        </h2>
        <p className="text-center text-white/85 mt-2">
          Proudly serving Greater Vancouver and surrounding communities.
        </p>
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-white/85">
          {[
            "Vancouver",
            "Burnaby",
            "New Westminster",
            "Richmond",
            "North Vancouver",
            "West Vancouver",
            "Coquitlam",
            "Port Coquitlam",
            "Port Moody",
            "Surrey (select areas)",
            "Delta (select areas)",
            "Langley (select areas)",
          ].map((city) => (
            <li
              key={city}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-center"
            >
              {city}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQs */}
      <section
        id="faq"
        className="py-16"
        style={{ backgroundColor: colors.midnight }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">FAQs</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Are you insured and background-checked?",
                a: "Yes. Our team is fully insured, bonded, and background-checked for your peace of mind.",
              },
              {
                q: "Do you bring supplies and equipment?",
                a: "Absolutely. We use pro-grade equipment and eco-forward supplies. If you have preferences, tell us in your quote form.",
              },
              {
                q: "What is your satisfaction promise?",
                a: "If something isn’t perfect, let us know within 24h and we’ll make it right.",
              },
              {
                q: "How do I get pricing?",
                a: "Use the ‘Get an Instant Quote’ form. For unique spaces, we’ll confirm details by phone at (672) 970-3755.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <h3 className="font-semibold" style={{ color: colors.gold }}>
                  {item.q}
                </h3>
                <p className="mt-2 text-white/85">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Call CTA */}
      <a
        href="tel:+1-672-970-3755"
        className="fixed bottom-4 right-4 md:hidden rounded-full px-5 py-3 shadow-lg"
        style={{ backgroundColor: colors.emerald }}
      >
        Call Now
      </a>

      {/* Contact / Footer */}
      <footer
        id="contact"
        className="border-t border-white/10"
        style={{ backgroundColor: colors.midnight }}
      >
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <GleamLogo />
              <div>
                <div className="font-semibold" style={{ color: colors.gold }}>
                  Gleam Pro Cleaning
                </div>
                <div className="text-white/70">Shine • Elevate • Prestige</div>
              </div>
            </div>
            <p className="mt-3 text-white/70">
              Serving Greater Vancouver and surrounding areas.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <ul className="space-y-2 text-white/80">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Vancouver, BC
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (672) 970-3755
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@gleamprocleaning.com
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Hours</div>
            <ul className="space-y-1 text-white/80">
              <li>Mon–Fri: 8:00–18:00</li>
              <li>Sat: 9:00–16:00</li>
              <li>Sun: By appointment</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white/60 text-xs py-6 border-t border-white/10">
          © {new Date().getFullYear()} Gleam Pro Cleaning. All rights reserved.
        </div>
      </footer>

      {/* JSON-LD LocalBusiness SEO */}
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires raw injection
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Gleam Pro Cleaning",
            image: "https://www.gleamprocleaning.com/logo-gpc.png",
            telephone: "+1-672-970-3755",
            email: "hello@gleamprocleaning.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Vancouver",
              addressRegion: "BC",
              addressCountry: "CA",
            },
            areaServed: "Greater Vancouver",
            url: "https://www.gleamprocleaning.com",
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
