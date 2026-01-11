import Link from "next/link";
import { residential } from "@/components/residential/ui";

export const metadata = {
  title: "Move-In/Out Cleaning in Metro Vancouver | Gleam Pro Cleaning",
  description:
    "Professional move-in and move-out cleaning services in Metro Vancouver. Thorough turnover cleaning for renters, homeowners, and property managers.",
};

export default function MoveInOutPage() {
  return (
    <div className={residential.shell}>
      <div className="relative">
        <div className={residential.glow} />
        <main className={`relative z-10 ${residential.page}`}>
          {/* Hero */}
          <section className={residential.section}>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className={residential.eyebrow}>
                  Residential Cleaning • Move-In/Out Service
                </p>
                <h1 className={residential.h1}>
                  Smooth transition cleaning{" "}
                  <span style={{ color: "#D4A574" }}">for your next move</span>
                </h1>
                <p className={residential.lead}>
                  Whether you're moving in or out, our turnover service ensures
                  the space is perfectly clean for the next chapter. We handle
                  everything from detailed cleaning to final walkthrough.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/request-walkthrough" className={residential.cta}>
                    Get a Free Home Estimate
                  </Link>
                  <Link
                    href="/residential-cleaning"
                    className={residential.secondary}
                  >
                    Back to Residential Services
                  </Link>
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Perfect for renters and homeowners",
                    "Property manager approved services", 
                    "Detailed cleaning before or after occupancy",
                    "Final walkthrough included",
                  ].map((item) => (
                    <li key={item} className={residential.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proof / Fit card */}
              <div className="w-full md:w-[360px]">
                <div className={residential.cardSoft}>
                  <h2 className={`${residential.h3} ${residential.accent}`}>
                    Ideal for
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>• Renters moving between properties</li>
                    <li>• Homeowners preparing to sell</li>
                    <li>• Property managers between tenants</li>
                    <li>• Anyone needing move-ready cleanliness</li>
                  </ul>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className={`text-sm font-semibold ${residential.accent}`}>
                      Move timing
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      Move-out: Before you hand over keys
                      Move-in: Before you unpack and settle in
                    </p>
                  </div>

                  <p className="mt-4 text-xs text-white/60">
                    Both services include final walkthrough verification.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Problems / Outcomes */}
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className={residential.card}>
              <h2 className={residential.h2}>Move-out challenges</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>• Limited time between moving out and handover</li>
                <li>• Security deposit depends on cleaning quality</li>
                <li>• Hard to clean empty space thoroughly</li>
                <li>• Special attention needed for appliances</li>
                <li>• Need to meet landlord/property standards</li>
              </ul>
            </div>

            <div className={residential.card}>
              <h2 className={residential.h2}>Move-in benefits</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>• Start in fresh, perfectly clean space</li>
                <li>• Professional disinfection for peace of mind</li>
                <li>• Ready for immediate unpacking and settling</li>
                <li>• Addresses any previous occupant issues</li>
                <li>• Clean floors and surfaces for furniture placement</li>
              </ul>
            </div>
          </section>

          {/* Scope */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>
              What's included (comprehensive turnover cleaning)
            </h2>
            <p className={residential.lead}>
              Complete cleaning to ensure space is ready for next occupancy.
              Customized based on property size and specific requirements.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <ScopeCard
                title="All Living Areas"
                items={[
                  "Walls spot cleaned as needed",
                  "All light fixtures + ceiling fans dusted",
                  "Doors, frames + handles cleaned",
                  "Baseboards detailed",
                  "Floors vacuumed/mopped/washed",
                ]}
              />
              <ScopeCard
                title="Kitchen & Bathrooms"
                items={[
                  "All cabinets (interior + exterior) cleaned",
                  "Countertops + backsplashes detailed",
                  "Appliances cleaned inside + out",
                  "Sinks, toilets, showers/tubs disinfected",
                  "Tile grout cleaned as needed",
                ]}
              />
              <ScopeCard
                title="Windows + Fixtures"
                items={[
                  "Interior glass cleaned",
                  "Window sills + frames detailed",
                  "Light switch plates + outlet covers",
                  "Heating/AC vents cleaned",
                  "Closet interiors wiped down",
                ]}
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className={`${residential.h3} ${residential.accent}`}>
                Specialized services
              </h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-white/80">
                <p>• Carpet cleaning before/after moving</p>
                <p>• Garage or storage area cleaning</p>
                <p>• Refrigerator deep cleaning/defrost</p>
                <p>• Oven + appliance detail cleaning</p>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>How it works</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <StepCard
                step="1"
                title="Property Assessment"
                text="We evaluate the space, discuss timing, and understand any specific requirements or problem areas."
              />
              <StepCard
                step="2"
                title="Move Schedule Plan"
                text="We coordinate cleaning around your moving timeline for smooth transition before or after occupancy."
              />
              <StepCard
                step="3"
                title="Turnover Cleaning"
                text="Complete cleaning with final walkthrough to ensure space meets move-ready standards."
              />
            </div>
          </section>

          {/* FAQ */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Faq
                q="When should I schedule move-out cleaning?"
                a="Schedule 1-2 days before your final move-out to allow time for any touch-ups and ensure you meet property handover standards."
              />
              <Faq
                q="Do I need to be present during cleaning?"
                a="Not required. We can coordinate with property managers or use lockbox access. Final walkthrough can be done with you or remotely."
              />
              <Faq
                q="What about carpet cleaning?"
                a="Carpet cleaning can be included as an add-on. We recommend professional extraction for best results, especially for move-out situations."
              />
              <Faq
                q="Do you clean appliances?"
                a="Yes, we clean appliances inside and out including refrigerator, oven, dishwasher, and microwave as part of standard service."
              />
            </div>
          </section>

          {/* Final CTA */}
          <section className={residential.sectionDark}>
            <h2 className={residential.h2Large}>
              Ready for a seamless move?
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Start with a free consultation and We'll create a turnover
              cleaning plan that meets your timeline and standards.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/request-walkthrough" className={residential.ctaLight}>
                Get a Free Home Estimate
              </Link>
              <Link
                href="/residential-cleaning/recurring"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Recurring Cleaning
              </Link>
              <Link
                href="/residential-cleaning/deep-cleaning"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Deep Cleaning
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function ScopeCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className={residential.cardSoft}>
      <h3 className={`${residential.h3} ${residential.accent}`}>{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-white/80">
        {items.map((t) => (
          <li key={t}>• {t}</li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className={residential.cardSoft}>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
          {step}
        </span>
        <h3 className={`${residential.h3} ${residential.accent}`}>{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-white/80">{text}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className={residential.cardSoft}>
      <p className={`text-sm font-semibold ${residential.accent}`}>{q}</p>
      <p className="mt-2 text-sm leading-6 text-white/80">{a}</p>
    </div>
  );
}