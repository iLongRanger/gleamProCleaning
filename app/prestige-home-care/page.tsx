"use client";
import HeroLogo from "@/components/HeroLogo";

import Image from "next/image";
import { Check, Shield, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChoosePlanModal from "@/components/ChoosePlanModal";
import { useState } from "react";

// ✅ Brand colors
const colors = {
  navy: "#0B2545",
  emerald: "#0FA36B",
  gold: "#C9A227",
  silver: "#E5E7EB",
  white: "#FFFFFF",
};

export default function PrestigeHomePage() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div style={{ backgroundColor: colors.navy }} className="text-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span style={{ color: "#C9A227" }}>Prestige</span> Home Care
            </h1>

            <p className="mt-4 text-white/85 text-lg">
              A premium residential cleaning experience designed for comfort,
              shine, and peace of mind.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                className="rounded-2xl px-6 py-3"
                style={{ backgroundColor: colors.emerald }}
                onClick={() => {
                  setSelectedPlan("Prestige Home Care");
                  setOpen(true);
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
          <HeroLogo />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16" style={{ backgroundColor: "#081A31" }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Licensed & Insured",
                text: "Your home is always protected.",
              },
              {
                icon: Sparkles,
                title: "Detail Obsessed",
                text: "Every surface polished to perfection.",
              },
              {
                icon: Star,
                title: "Prestige Guarantee",
                text: "Satisfaction backed by our 24h promise.",
              },
              {
                icon: Check,
                title: "Eco-Forward",
                text: "Safe products for your family & pets.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <item.icon
                  className="w-8 h-8 mb-3"
                  style={{ color: colors.gold }}
                />
                <h3
                  className="font-semibold mb-2"
                  style={{ color: colors.gold }}
                >
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">
          Prestige Home Care Packages
        </h2>
        <p className="text-center text-white/80 mt-2">
          Transparent pricing, flexible options, tailored to your home.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Essential Shine",
              price: "From $169",
              items: ["Kitchen & Bath", "Floors & Surfaces", "1-Bed / Studio"],
            },
            {
              name: "Executive Brilliance",
              price: "From $269",
              items: ["2-3 Bedrooms", "Deep Clean Add-ons", "Appliance Fronts"],
            },
            {
              name: "Prestige Elevate",
              price: "From $389",
              items: ["4+ Bedrooms", "Inside Oven/Fridge", "Carpet Refresh"],
            },
          ].map((pkg, i) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-6 border ${
                i === 1 ? "bg-white text-slate-900" : "bg-white/5 text-white"
              }`}
              style={{ borderColor: colors.gold }}
            >
              <h3 className="text-xl font-bold flex justify-between">
                {pkg.name}
                <span
                  style={{
                    color: i === 1 ? colors.emerald : colors.gold,
                  }}
                >
                  {pkg.price}
                </span>
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {pkg.items.map((item) => (
                  <li key={item} className="flex gap-2 items-center">
                    <Check
                      className="w-4 h-4"
                      style={{
                        color: i === 1 ? colors.emerald : colors.gold,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full mt-4 rounded-xl"
                style={{
                  backgroundColor: i === 1 ? colors.emerald : colors.navy,
                  color: "white",
                }}
                onClick={() => {
                  setSelectedPlan(pkg.name);
                  setOpen(true);
                }}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16" style={{ backgroundColor: "#081A31" }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">How to Book</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Request a Quote",
                text: "Tell us about your home & needs.",
              },
              {
                step: "02",
                title: "Customize Plan",
                text: "Choose your package & add-ons.",
              },
              {
                step: "03",
                title: "Schedule Service",
                text: "Pick a date that works best for you.",
              },
              {
                step: "04",
                title: "Relax & Shine",
                text: "Our team delivers hotel-level brilliance.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div
                  className="inline-block px-3 py-1 rounded-lg mb-3"
                  style={{ backgroundColor: colors.emerald }}
                >
                  {s.step}
                </div>
                <h3 className="font-semibold" style={{ color: colors.gold }}>
                  {s.title}
                </h3>
                <p className="text-white/80 mt-2 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16" style={{ backgroundColor: colors.midnight }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Popular Add-Ons</h2>
          <p className="text-white/85 mt-2">
            Enhance your clean with these tailored extras.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-white/90">
            {[
              "Inside oven & fridge",
              "Baseboards & blinds",
              "Balcony cleaning",
              "Laundry service (select areas)",
            ].map((addon) => (
              <li
                key={addon}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl"
              >
                {addon}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">FAQs</h2>

        {/* FAQ Cards */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[
            {
              q: "Do I need to be home during the cleaning?",
              a: "No, many of our clients provide entry instructions. Your home is secure with our insured and vetted team.",
            },
            {
              q: "Are your cleaning products safe for kids and pets?",
              a: "Yes. We use eco-forward, family-safe cleaning solutions. Let us know if you have specific sensitivities.",
            },
            {
              q: "Do you bring your own equipment?",
              a: "Absolutely. Our team arrives with professional-grade vacuums, microfiber cloths, and eco-friendly supplies.",
            },
            {
              q: "Can I book recurring cleanings?",
              a: "Yes, we offer weekly, bi-weekly, and monthly residential cleaning plans at a discounted rate.",
            },
            {
              q: "What if I need a special add-on service?",
              a: "You can request add-ons like inside oven/fridge, blinds, baseboards, or balcony cleaning when booking.",
            },
            {
              q: "What is your satisfaction guarantee?",
              a: "If something isn’t right, contact us within 24 hours and we’ll make it right—free of charge.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-5"
            >
              <h3 className="font-semibold" style={{ color: colors.gold }}>
                {faq.q}
              </h3>
              <p className="mt-2 text-white/80">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Ready for Prestige Home Care?</h2>
        <p className="mt-2 text-white/80">
          Book your clean today and experience the Gleam Pro difference.
        </p>
        <Button
          onClick={() => setOpen(true)}
          className="mt-6 rounded-2xl px-8 py-4 text-lg"
          style={{ backgroundColor: colors.emerald }}
        >
          Get Started
        </Button>
      </section>

      {/* Modal */}
      <ChoosePlanModal
        open={open}
        plan={selectedPlan}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
