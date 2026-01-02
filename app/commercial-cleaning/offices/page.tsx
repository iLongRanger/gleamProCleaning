import Link from "next/link";
import { commercial } from "@/components/commercial/ui";

export const metadata = {
  title: "Office Cleaning in Metro Vancouver | Gleam Pro Cleaning",
  description:
    "Reliable after-hours office cleaning for Metro Vancouver. Consistent checklists, quality checks, and a simple walk-through to get a tailored quote.",
};

export default function OfficeCleaningPage() {
  return (
    <div className={commercial.shell}>
      <div className="relative">
        <div className={commercial.glow} />
        <main className={`relative z-10 ${commercial.page}`}>
          {/* Hero */}
          <section className={commercial.section}>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className={commercial.eyebrow}>
                  Commercial Cleaning • Offices
                </p>
                <h1 className={commercial.h1}>
                  Office cleaning that stays consistent week after week.
                </h1>
                <p className={commercial.lead}>
                  Gleam Pro Cleaning provides dependable after-hours office
                  cleaning across Metro Vancouver. We use clear scope,
                  repeatable checklists, and quality checks—so your workplace is
                  always client-ready.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/request-walkthrough" className={commercial.cta}>
                    Request a Free Walk-Through
                  </Link>
                  <Link
                    href="/commercial-cleaning"
                    className={commercial.secondary}
                  >
                    Back to Commercial Cleaning
                  </Link>
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "After-hours + weekend options",
                    "Restrooms, kitchens, desks, floors",
                    "Quality checks + issue reporting",
                    "Flexible scope by area & traffic",
                  ].map((item) => (
                    <li key={item} className={commercial.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proof card */}
              <div className="w-full md:w-[360px]">
                <div className={commercial.cardSoft}>
                  <h2 className={`${commercial.h3} ${commercial.accent}`}>
                    Built for busy offices
                  </h2>
                  <p className="mt-2 text-white/80">
                    From small professional suites to multi-room admin
                    spaces—your scope is documented after a walk-through so
                    nothing is “assumed.”
                  </p>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className={`text-sm font-semibold ${commercial.accent}`}>
                      Typical service cadence
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-white/80">
                      <li>• 2–5x/week for higher traffic</li>
                      <li>• Weekly for standard offices</li>
                      <li>• Monthly detail add-ons</li>
                    </ul>
                  </div>
                  <p className="mt-4 text-xs text-white/60">
                    You’ll receive a tailored scope after the walk-through.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Problems / Outcomes */}
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className={commercial.card}>
              <h2 className={commercial.h2}>Common problems we solve</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>• Inconsistent cleaning between visits</li>
                <li>• Missed restrooms, fingerprints, trash overflow</li>
                <li>• Kitchen/breakroom smells and sticky floors</li>
                <li>• No accountability when issues happen</li>
                <li>• Confusing scope (“was that included?”)</li>
              </ul>
            </div>

            <div className={commercial.card}>
              <h2 className={commercial.h2}>What “done right” looks like</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>• Clear scope by area (daily/weekly/monthly)</li>
                <li>• High-touch points reset (doors, switches, handles)</li>
                <li>• Restrooms always stocked, cleaned, and odor-free</li>
                <li>• Floors maintained based on traffic and finish</li>
                <li>• Simple reporting + follow-up when needed</li>
              </ul>
            </div>
          </section>

          {/* Scope */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>
              What’s included (typical office scope)
            </h2>
            <p className={commercial.lead}>
              Final scope is confirmed during your walk-through. Here’s what
              most offices request as a baseline.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <ScopeCard
                title="Restrooms"
                items={[
                  "Clean + disinfect toilets/urinals/sinks",
                  "Mirrors + fixtures polished",
                  "Wipe partitions + high-touch points",
                  "Refill supplies (client-provided)",
                  "Mop floors + spot walls as needed",
                ]}
              />
              <ScopeCard
                title="Kitchens / Breakrooms"
                items={[
                  "Wipe counters + tables",
                  "Exterior of appliances (microwave/fridge)",
                  "Sink cleaned + disinfected",
                  "Trash + recycling removed",
                  "Spot clean floors + full mop as scheduled",
                ]}
              />
              <ScopeCard
                title="Work Areas"
                items={[
                  "Trash + recycling removed",
                  "High-touch points wiped",
                  "Glass spot clean (interior)",
                  "Vacuum carpets / dust mop hard floors",
                  "Spot mop + entryway care",
                ]}
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className={`${commercial.h3} ${commercial.accent}`}>
                Optional add-ons (monthly / quarterly)
              </h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-white/80">
                <p>• Baseboards and wall spot cleaning</p>
                <p>• Interior glass (full)</p>
                <p>• Chair/detail wipe-down</p>
                <p>• Disinfection focus weeks</p>
                <p>• Inside fridge clean-outs</p>
                <p>• Floor machine scrubs (as applicable)</p>
              </div>
            </div>
          </section>

          {/* Checklist preview */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>
              Checklist preview (how we stay consistent)
            </h2>
            <p className="mt-3 text-white/75">
              We document expectations by area so your cleaning doesn’t drift
              over time.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PreviewList
                title="Per-visit essentials"
                items={[
                  "Trash/recycling emptied + liners replaced as needed",
                  "Restrooms disinfected + floors mopped",
                  "High-touch points wiped (doors/switches/common handles)",
                  "Entryways reset (mat shake, vacuum, spot mop)",
                  "Kitchen counters/tables wiped; sink disinfected",
                ]}
              />
              <PreviewList
                title="Weekly / rotating tasks"
                items={[
                  "Detailed dusting (ledges, vents, frames)",
                  "Spot wall/door cleaning in high-traffic zones",
                  "Glass spot cleaning upgraded to full interior glass",
                  "Breakroom appliance exterior detail",
                  "Floor edge/detail work (corners/base areas)",
                ]}
              />
            </div>

            <div className={commercial.notice}>
              <p className={commercial.noticeText}>
                Want the full scope customized to your layout and traffic?
              </p>
              <Link href="/request-walkthrough" className={commercial.cta}>
                Request a Free Walk-Through
              </Link>
            </div>
          </section>

          {/* How it works */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>How it works</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <StepCard
                step="1"
                title="Walk-through"
                text="We review your layout, traffic, problem areas, access, and schedule requirements."
              />
              <StepCard
                step="2"
                title="Scope + cadence"
                text="You get a clear scope by area with visit frequency and optional detail add-ons."
              />
              <StepCard
                step="3"
                title="Consistent delivery"
                text="We clean to checklist and follow up on issues quickly—no guessing, no drift."
              />
            </div>
          </section>

          {/* FAQ */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Faq
                q="Do you clean after-hours?"
                a="Yes. Most offices prefer evenings or weekends. We’ll confirm access and timing during the walk-through."
              />
              <Faq
                q="Can you work around alarms and secure areas?"
                a="Yes. We can follow your access procedure and document what’s included/excluded by room."
              />
              <Faq
                q="Do you bring supplies?"
                a="We can bring core tools and cleaners. Many offices prefer providing consumables (paper towel, soap, liners). We’ll align during the walk-through."
              />
              <Faq
                q="What affects pricing?"
                a="Size, traffic level, restroom count, floor types, frequency, and any add-ons. The walk-through helps us quote accurately."
              />
            </div>
          </section>

          {/* Final CTA */}
          <section className={commercial.sectionDark}>
            <h2 className={commercial.h2Large}>
              Ready for a cleaner, calmer office?
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Book a free walk-through and we’ll send a clear scope and quote
              built around your schedule and traffic.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/request-walkthrough" className={commercial.ctaLight}>
                Request a Free Walk-Through
              </Link>
              <Link
                href="/commercial-cleaning/restaurants"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Restaurant Cleaning
              </Link>
              <Link
                href="/commercial-cleaning/community-facilities"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Community Facility Cleaning
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
    <div className={commercial.cardSoft}>
      <h3 className={`${commercial.h3} ${commercial.accent}`}>{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-white/80">
        {items.map((t) => (
          <li key={t}>• {t}</li>
        ))}
      </ul>
    </div>
  );
}

function PreviewList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className={commercial.cardSoft}>
      <h3 className={`${commercial.h3} ${commercial.accent}`}>{title}</h3>
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
    <div className={commercial.cardSoft}>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
          {step}
        </span>
        <h3 className={`${commercial.h3} ${commercial.accent}`}>{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-white/80">{text}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className={commercial.cardSoft}>
      <p className={`text-sm font-semibold ${commercial.accent}`}>{q}</p>
      <p className="mt-2 text-sm leading-6 text-white/80">{a}</p>
    </div>
  );
}
