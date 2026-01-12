import Link from "next/link";
import { residential } from "@/components/residential/ui";

export const metadata = {
  title: "Recurring Home Cleaning in Metro Vancouver | Gleam Pro Cleaning",
  description:
    "Weekly, bi-weekly, and monthly residential cleaning services. Consistent quality, trusted team, and custom schedules for your home.",
};

export default function RecurringCleaningPage() {
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
                  Residential Cleaning • Recurring Service
                </p>
                <h1 className={residential.h1}>
                  Consistent home cleaning{" "}
                  <span style={{ color: "#D4A574" }}>tailored to your schedule</span>
                </h1>
                <p className={residential.lead}>
                  Keep your home consistently clean with weekly, bi-weekly, or
                  monthly service. We adapt to your preferences and deliver
                  reliable quality you can count on.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/request-walkthrough?type=residential" className={residential.cta}>
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
                    "Weekly, bi-weekly, or monthly options",
                    "Same cleaner or team when possible",
                    "Kitchen, bathrooms, living areas, bedrooms",
                    "Custom scope based on your priorities",
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
                    <li>• Busy families</li>
                    <li>• Working professionals</li>
                    <li>• Regular maintenance needs</li>
                    <li>• Consistency-focused households</li>
                  </ul>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className={`text-sm font-semibold ${residential.accent}`}>
                      Typical cadence
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      Weekly for busy homes, bi-weekly for moderate traffic,
                      monthly for light maintenance.
                    </p>
                  </div>

                  <p className="mt-4 text-xs text-white/60">
                    Final scope confirmed during estimate walkthrough.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Problems / Outcomes */}
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className={residential.card}>
              <h2 className={residential.h2}>Common home cleaning challenges</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>• Never enough time for thorough cleaning</li>
                <li>• Inconsistent results from different services</li>
                <li>• High-traffic areas get dirty quickly</li>
                <li>• Hard to maintain cleaning schedule</li>
                <li>• Details like baseboards get missed</li>
              </ul>
            </div>

            <div className={residential.card}>
              <h2 className={residential.h2}>What consistent quality means</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>• Same team learns your home and preferences</li>
                <li>• Detailed checklist customized to your space</li>
                <li>• Reliable scheduling and communication</li>
                <li>• Quality checks and issue follow-up</li>
                <li>• Flexible to your changing needs</li>
              </ul>
            </div>
          </section>

          {/* Scope */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>
              What’s included (typical recurring scope)
            </h2>
            <p className={residential.lead}>
              Your scope is customized during estimate. Here's a typical
              baseline for recurring home cleaning.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <ScopeCard
                title="Kitchen"
                items={[
                  "Counters + backsplash cleaned",
                  "Sink + faucet polished",
                  "Appliance fronts wiped",
                  "Floor swept/mopped (as applicable)",
                  "Empty trash + replace liner",
                ]}
              />
              <ScopeCard
                title="Bathrooms"
                items={[
                  "Toilet + sink cleaned + disinfected",
                  "Shower/tub cleaned + fixtures polished",
                  "Mirrors wiped clean",
                  "Floors cleaned",
                  "Towel restocking (client-provided)",
                ]}
              />
              <ScopeCard
                title="Living Areas"
                items={[
                  "Surfaces dusted + wiped",
                  "Glass/mirrors cleaned",
                  "Floors vacuumed/mopped",
                  "High-touch points (switches, handles)",
                  "Decor items dusted (as applicable)",
                ]}
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className={`${residential.h3} ${residential.accent}`}>
                Frequency options
              </h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-3 text-sm text-white/80">
                <p>• Weekly - Consistent maintenance</p>
                <p>• Bi-weekly - Balanced approach</p>
                <p>• Monthly - Light maintenance</p>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>How it works</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <StepCard
                step="1"
                title="Free Estimate"
                text="We visit your home, understand your needs, and assess scope and frequency."
              />
              <StepCard
                step="2"
                title="Custom Plan"
                text="You receive a detailed estimate with options tailored to your home and schedule."
              />
              <StepCard
                step="3"
                title="Consistent Service"
                text="Your dedicated team delivers reliable quality with attention to detail."
              />
            </div>
          </section>

          {/* FAQ */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Faq
                q="Do I need to be home during cleaning?"
                a="Not necessarily. Many clients provide entry instructions. Our team is fully insured and background-checked."
              />
              <Faq
                q="Can I request the same cleaner each time?"
                a="Yes! We try to provide the same team members for consistency when scheduling permits."
              />
              <Faq
                q="What if I need to reschedule?"
                a="Just give us 24-48 hours notice and we'll happily reschedule at no extra charge."
              />
              <Faq
                q="Do you bring your own supplies?"
                a="We bring professional equipment and core cleaning supplies. We can use your preferred products if desired."
              />
            </div>
          </section>

          {/* Final CTA */}
          <section className={residential.sectionDark}>
            <h2 className={residential.h2Large}>
              Ready for consistent home cleaning?
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Start with a free estimate and we'll create a cleaning plan
              tailored to your home, family, and schedule.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/request-walkthrough?type=residential" className={residential.ctaLight}>
                Get a Free Home Estimate
              </Link>
              <Link
                href="/residential-cleaning/deep-cleaning"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Deep Cleaning
              </Link>
              <Link
                href="/residential-cleaning/move-in-out"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Move-In/Out
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