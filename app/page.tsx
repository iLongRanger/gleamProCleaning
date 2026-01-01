"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Shield,
  Star,
  Sparkles,
  ChevronRight,
  Home as HomeIcon,
  Truck,
  Sofa,
  Briefcase,
  Hammer,
  LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

// Modal
import ChoosePlanModal from "@/components/ChoosePlanModal";

// Brand palette
const colors = {
  navy: "#0B2545",
  emerald: "#0FA36B",
  gold: "#C9A227",
  silver: "#E5E7EB",
  midnight: "#081A31",
};

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div
        className="text-2xl sm:text-3xl md:text-4xl font-bold"
        style={{ color: colors.gold }}
      >
        {value}
      </div>
      <div className="text-xs sm:text-sm text-gray-300">{label}</div>
    </div>
  );
}

function Badge({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-2 border border-white/10 text-xs sm:text-sm">
      <Icon className="w-4 h-4" style={{ color: colors.emerald }} />
      <span className="text-white/90">{text}</span>
    </div>
  );
}

export default function Page() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div style={{ backgroundColor: colors.navy }} className="text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Decorative lights */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none z-0"
          style={{
            background: `radial-gradient(400px 200px at 20% 20%, ${colors.gold}, transparent),
                         radial-gradient(400px 200px at 80% 10%, ${colors.emerald}, transparent)`,
          }}
        />
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
          {/* Left */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Professional Commercial Cleaning for{" "}
              <span style={{ color: colors.gold }}>Metro Vancouver</span>{" "}
            </motion.h1>
            <p className="mt-4 text-white/85 max-w-xl text-sm sm:text-base">
              Reliable teams for restaurants, offices, and community facilities
              — consistent results, clear communication, and contract-ready
              service.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
              <Badge icon={Shield} text="Fully insured & vetted" />
              <Badge icon={Sparkles} text="5-Star Detail Standard" />
              <Badge icon={Star} text="Prestige Guarantee" />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="rounded-2xl px-4 py-3 text-sm sm:px-6 sm:py-6 sm:text-base"
                style={{ backgroundColor: colors.emerald }}
              >
                <Link href="/request-walkthrough">
                  Request a Free Walk-Through
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
                <a href="#services">Explore Services</a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Stat value="500+" label="Spaces Elevated" />
              <Stat value="98%" label="Repeat Clients" />
              <Stat value="24h" label="Satisfaction Promise" />
            </div>
          </div>

          {/* Right: Quote form */}
          <motion.div
            id="quote"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/95 text-slate-900 border-0 shadow-xl rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Image
                    src="/logo-gpc-bg.png"
                    alt="Gleam Pro Cleaning logo"
                    className="h-10 sm:h-12 w-auto max-w-full"
                    width={150}
                    height={50}
                  />
                  <Link href="/request-walkthrough">
                    Request a Free Walk-Through
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/xkgvkrgy"
                  method="POST"
                  className="space-y-3"
                  onSubmit={() => setSent(true)}
                >
                  <Input name="name" placeholder="Full Name" required />
                  <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <Input name="phone" placeholder="Phone" />
                  <Input name="city" placeholder="City / Neighbourhood" />
                  <Textarea
                    name="details"
                    placeholder="Tell us about your space (size, rooms, preferences)"
                  />
                  <p className="text-xs text-slate-600">
                    For exact pricing, we start with an on-site walkthrough.
                  </p>
                  <Button
                    type="submit"
                    className="w-full rounded-xl text-sm sm:text-base py-3 sm:py-4"
                    style={{ backgroundColor: colors.navy, color: "white" }}
                  >
                    {sent ? "Request Sent ✓" : "Get a Free Walk-Through"}
                  </Button>
                  <p className="text-xs text-slate-600">
                    By submitting, you agree to our Terms & Privacy Policy.
                  </p>
                </form>
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

      {/* Services */}
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

        {/* Overview cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: HomeIcon,
              title: "Prestige Home Care",
              desc: "Recurring or one-time deep cleans for lasting comfort and shine.",
              link: "/prestige-home-care",
            },
            {
              icon: Truck,
              title: "Move-In / Move-Out",
              desc: "Meticulous vacant cleans for keys-ready transitions.",
              link: "#service-move",
            },
            {
              icon: Sofa,
              title: "Carpet & Upholstery",
              desc: "Hot-water extraction + fabric-safe treatments.",
              link: "#service-carpet",
            },
            {
              icon: Briefcase,
              title: "Office, Clinic and Commercial Spaces",
              desc: "Discreet, hygienic routines for professional spaces.",
              link: "#service-office",
            },
            {
              icon: Sparkles,
              title: "Short-Stay Turnovers",
              desc: "Hotel-grade resets for Airbnbs & executive rentals.",
              link: "#service-shortstay",
            },
            {
              icon: Hammer,
              title: "Post-Renovation",
              desc: "Fine-dust removal and detailed construction resets.",
              link: "#service-reno",
            },
          ].map((service, i) => (
            <a key={i} href={service.link}>
              <Card className="bg-white/5 border-white/10 rounded-2xl hover:bg-white/10 transition cursor-pointer">
                <CardHeader>
                  <CardTitle
                    className="flex items-center gap-2 text-lg"
                    style={{ color: colors.gold }}
                  >
                    <service.icon className="w-5 h-5" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/85">
                  {service.desc}
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Details */}
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
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  h: "Kitchen",
                  items: [
                    "Counters, backsplash, sinks, taps",
                    "Appliance exteriors + stovetop",
                    "Cabinet fronts (spot wipe)",
                    "Floors vacuum & mop",
                  ],
                },
                {
                  h: "Bathrooms",
                  items: [
                    "Shower/tub, tile, glass, grout edges",
                    "Toilets in/outside + base",
                    "Mirrors, vanities, fixtures",
                    "Floors vacuum & mop",
                  ],
                },
                {
                  h: "Living / Bedrooms",
                  items: [
                    "Dusting (surfaces, decor, sills)",
                    "Vacuum carpets & rugs",
                    "Hard floors vacuum & mop",
                    "Make beds (upon request)",
                  ],
                },
              ].map((col) => (
                <div
                  key={col.h}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <h4 className="font-semibold" style={{ color: colors.gold }}>
                    {col.h}
                  </h4>
                  <ul className="mt-2 space-y-2 text-white/85 text-sm">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <Check
                          className="w-4 h-4"
                          style={{ color: colors.emerald }}
                        />{" "}
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10">
                Add-ons: Inside oven/fridge • Baseboards • Blinds • Inside
                windows • Balcony
              </span>
            </div>
          </div>

          {/* Move-In / Move-Out */}
          <div id="service-move">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Shield className="w-5 h-5" style={{ color: colors.gold }} />{" "}
              Move-In / Move-Out
            </h3>
            <p className="mt-2 text-white/85 max-w-3xl">
              Detailed vacant clean to meet landlord/strata expectations and
              listing standards. Ideal before keys exchange.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  h: "Appliances",
                  items: ["Inside fridge/oven", "Vent/return covers"],
                },
                {
                  h: "Cabinetry & Storage",
                  items: ["Cabinets & drawers inside", "Closets & shelves"],
                },
                {
                  h: "Detailing",
                  items: [
                    "Baseboards, trim, switches",
                    "Spot walls (within reach)",
                  ],
                },
              ].map((col) => (
                <div
                  key={col.h}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <h4 className="font-semibold" style={{ color: colors.gold }}>
                    {col.h}
                  </h4>
                  <ul className="mt-2 space-y-2 text-white/85 text-sm">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <Check
                          className="w-4 h-4"
                          style={{ color: colors.emerald }}
                        />{" "}
                        {it}
                      </li>
                    ))}
                  </ul>
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
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  h: "Pre-Treatment",
                  items: [
                    "Assess fibres & stains",
                    "Pre-spray high-traffic areas",
                  ],
                },
                {
                  h: "Extraction & Clean",
                  items: ["Hot-water extraction", "Spot/stain treatment"],
                },
                {
                  h: "After-Care",
                  items: [
                    "Deodorize & neutralize",
                    "Protectant add-on • Dry time tips",
                  ],
                },
              ].map((col) => (
                <div
                  key={col.h}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <h4 className="font-semibold" style={{ color: colors.gold }}>
                    {col.h}
                  </h4>
                  <ul className="mt-2 space-y-2 text-white/85 text-sm">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <Check
                          className="w-4 h-4"
                          style={{ color: colors.emerald }}
                        />{" "}
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Short-Stay Turnovers */}
          <div id="service-shortstay">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5" style={{ color: colors.gold }} />{" "}
              Short-Stay Turnovers
            </h3>
            <p className="mt-2 text-white/85 max-w-3xl">
              Fast, hotel-grade staging for Airbnbs and executive rentals to
              protect ratings and wow guests.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  h: "Bedroom",
                  items: ["Linen change & bed styling", "Vacuum & dusting"],
                },
                {
                  h: "Bath & Amenities",
                  items: ["Hotel-fold towels", "Amenities restock"],
                },
                {
                  h: "Final Staging",
                  items: [
                    "Photo-ready surfaces",
                    "Laundry add-on • Damage report",
                  ],
                },
              ].map((col) => (
                <div
                  key={col.h}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <h4 className="font-semibold" style={{ color: colors.gold }}>
                    {col.h}
                  </h4>
                  <ul className="mt-2 space-y-2 text-white/85 text-sm">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <Check
                          className="w-4 h-4"
                          style={{ color: colors.emerald }}
                        />{" "}
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Office & Clinic */}
          <div id="service-office">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Shield className="w-5 h-5" style={{ color: colors.gold }} />{" "}
              Offices, Clinics and Commercial Spaces
            </h3>
            <p className="mt-2 text-white/85 max-w-3xl">
              Quiet, reliable routines for clinics, studios, and offices that
              require spotless presentation and hygiene.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  h: "Reception & Common",
                  items: ["Glass & touchpoints", "Floors vacuum & mop"],
                },
                {
                  h: "Workspaces",
                  items: ["Desk-safe dusting", "Bins & recycling"],
                },
                {
                  h: "Washrooms",
                  items: [
                    "Sanitize fixtures & counters",
                    "After-hours scheduling",
                  ],
                },
              ].map((col) => (
                <div
                  key={col.h}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <h4 className="font-semibold" style={{ color: colors.gold }}>
                    {col.h}
                  </h4>
                  <ul className="mt-2 space-y-2 text-white/85 text-sm">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <Check
                          className="w-4 h-4"
                          style={{ color: colors.emerald }}
                        />{" "}
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Post-Renovation */}
          <div id="service-reno">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5" style={{ color: colors.gold }} />{" "}
              Post-Renovation
            </h3>
            <p className="mt-2 text-white/85 max-w-3xl">
              Fine-dust removal and detail work to transition from construction
              to move-in condition.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  h: "Dusting & Air",
                  items: [
                    "Ceilings/corners (extendable)",
                    "Air vent cover wipe",
                  ],
                },
                {
                  h: "Cabinetry & Fixtures",
                  items: ["Cabinets & drawers in/out", "Appliance detailing"],
                },
                {
                  h: "Floors & Finishes",
                  items: [
                    "Baseboards, sills, frames",
                    "Sticker/film peel (non-damaging)",
                  ],
                },
              ].map((col) => (
                <div
                  key={col.h}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <h4 className="font-semibold" style={{ color: colors.gold }}>
                    {col.h}
                  </h4>
                  <ul className="mt-2 space-y-2 text-white/85 text-sm">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <Check
                          className="w-4 h-4"
                          style={{ color: colors.emerald }}
                        />{" "}
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA to quote */}
        <div className="mt-10 text-center">
          <Button
            asChild
            className="rounded-2xl px-4 py-3 text-sm sm:px-6 sm:py-6 sm:text-base"
            style={{ backgroundColor: colors.emerald }}
          >
            <Link href="/request-walkthrough">Request a Free Walk-Through</Link>
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
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
                className="bg-white/5 border-white/10 rounded-2xl"
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
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              name: "Essential Shine",
              price: "From $169",
              items: [
                "1-bed / studio",
                "Kitchen & bath detail",
                "Floors & surfaces",
              ],
            },
            {
              name: "Executive Brilliance",
              price: "From $269",
              items: ["2-3 beds", "Deep clean add-ons", "Appliance fronts"],
            },
            {
              name: "Prestige Elevate",
              price: "From $389",
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
                  className="w-full rounded-xl mt-2 text-sm sm:text-base py-3 sm:py-4"
                  style={{
                    backgroundColor: i === 1 ? colors.emerald : colors.navy,
                    color: "white",
                  }}
                  type="button"
                  onClick={() => {
                    setSelectedPlan(t.name);
                    setOpen(true);
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
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Where Trust Meets Excellence
            </h2>
            <p className="mt-4 text-white/85">
              Founded by Christine and Ralp, Gleam Pro blends fiery dedication
              with flowing care. Our mission is simple: elevate every
              environment we touch—delivering serenity, order, and prestige to
              your space.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge icon={Shield} text="Insured" />
              <Badge icon={Star} text="Client-first Culture" />
              <Badge icon={Sparkles} text="Detail Obsessed" />
            </div>
          </div>
          <div className="relative">
            <Image
              src="/logo-gpc.png"
              alt="Gleam Pro Cleaning logo"
              className="max-w-full h-auto"
              width={300}
              height={100}
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          What Our Clients Say
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Are you insured and background-checked?",
                a: "Yes. Our team is fully insured and background-checked for your peace of mind.",
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
        className="fixed bottom-4 right-4 md:hidden rounded-full px-5 py-3 shadow-lg text-sm"
        style={{ backgroundColor: colors.emerald }}
      >
        Call Now
      </a>

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

      {/* Modal mounted once at the end */}
      <ChoosePlanModal
        open={open}
        plan={selectedPlan}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
