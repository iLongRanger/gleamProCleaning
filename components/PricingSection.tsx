"use client";

import { useState } from "react";
import ChoosePlanModal from "./ChoosePlanModal";

const plans = [
  {
    name: "Essential",
    price: "$149+",
    blurb:
      "Perfect for studios & 1BR. High-touch surfaces, kitchen, bath, vacuum & mop.",
    features: ["Supplies included", "Eco-friendly", "Insured & bonded"],
  },
  {
    name: "Prestige",
    price: "$249+",
    blurb:
      "Signature deep clean for townhomes & 2–3BR homes. Window (interior) add-on.",
    features: ["Detail focus", "Appliance exterior", "Spot wall wipe"],
    featured: true,
  },
  {
    name: "Elite",
    price: "Custom",
    blurb:
      "Large homes or commercial. Recurring schedules, checklists, & QA photos.",
    features: ["Manager QA", "Flexible scheduling", "Priority support"],
  },
];

export default function PricingSection() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Transparent Prestige Pricing
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Clear packages, luxury results. No surprises—only sparkle.
          </p>
        </header>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`rounded-2xl p-6 sm:p-7 shadow-xl border bg-slate-800/60 backdrop-blur-md border-slate-700 transition ${
                p.featured ? "ring-2 ring-emerald-400" : ""
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-xl sm:text-2xl font-medium text-white">
                  {p.name}
                </h3>
                <div className="text-emerald-300 text-lg sm:text-xl font-semibold">
                  {p.price}
                </div>
              </div>
              <p className="mt-2 text-sm sm:text-base text-slate-300">
                {p.blurb}
              </p>
              <ul className="mt-4 space-y-2 text-slate-200 text-sm sm:text-base">
                {p.features.map((f) => (
                  <li key={`${p.name}-${f}`} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-6 w-full rounded-xl px-4 py-3 text-center text-slate-900 bg-emerald-400 font-semibold hover:bg-emerald-300 active:scale-[.99] focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                onClick={() => {
                  setSelectedPlan(p.name);
                  setOpen(true);
                }}
              >
                Choose {p.name}
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ChoosePlanModal
        open={open}
        plan={selectedPlan}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
