import Link from "next/link";
import { commercial } from "@/components/commercial/ui";

export const metadata = {
  title: "Restaurant Cleaning in Metro Vancouver | Gleam Pro Cleaning",
  description:
    "Consistent, inspection-ready cleaning for restaurants, pubs, cafés, and food service spaces across Metro Vancouver. Clear scope, repeatable checklists, and reliable after-hours service.",
};

export default function RestaurantCleaningPage() {
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
                  Commercial Cleaning • Restaurants &amp; Pubs
                </p>
                <h1 className={commercial.h1}>
                  Restaurant &amp; pub cleaning that stays inspection-ready.
                </h1>
                <p className={commercial.lead}>
                  Restaurants operate on tight schedules, high traffic, and
                  strict health standards. We deliver consistent results using
                  clear scope, repeatable checklists, and quality checks—so your
                  space stays clean week after week, not just on inspection day.
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
                    "After-hours + late-night options",
                    "Front-of-house + high-touch focus",
                    "Restrooms + floors kept consistent",
                    "Clear scope + quality checks",
                  ].map((item) => (
                    <li key={item} className={commercial.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proof / Fit card */}
              <div className="w-full md:w-[360px]">
                <div className={commercial.cardSoft}>
                  <h2 className={`${commercial.h3} ${commercial.accent}`}>
                    Ideal for
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>• Restaurants + pubs</li>
                    <li>• Cafés + coffee shops</li>
                    <li>• Commissary kitchens</li>
                    <li>• Food courts + shared kitchens</li>
                  </ul>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className={`text-sm font-semibold ${commercial.accent}`}>
                      Typical cadence
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      Daily, 5× per week, or custom schedules based on your
                      hours and traffic.
                    </p>
                  </div>

                  <p className="mt-4 text-xs text-white/60">
                    Final scope is confirmed during the walk-through.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Problems / Outcomes */}
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className={commercial.card}>
              <h2 className={commercial.h2}>Common restaurant cleaning gaps</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>• Front-of-house looks “okay” but details get missed</li>
                <li>• Restrooms slip behind during peak traffic</li>
                <li>• Sticky floors and corners build up over time</li>
                <li>• High-touch points missed (doors, rails, switches)</li>
                <li>• Scope confusion between staff vs cleaners</li>
              </ul>
            </div>

            <div className={commercial.card}>
              <h2 className={commercial.h2}>What “inspection-ready” means</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>
                  • Clear scope by area + frequency (daily/weekly/monthly)
                </li>
                <li>• Restrooms consistently cleaned and odor-controlled</li>
                <li>• Floors maintained based on traffic and finish</li>
                <li>• High-touch reset across guest-facing areas</li>
                <li>• Simple reporting + quick follow-up</li>
              </ul>
            </div>
          </section>

          {/* Scope */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>
              What’s included (typical restaurant scope)
            </h2>
            <p className={commercial.lead}>
              Your scope is customized during the walk-through. Here’s a typical
              baseline for restaurants, pubs, and cafés.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <ScopeCard
                title="Front of House"
                items={[
                  "Vacuum + mop floors (as applicable)",
                  "Tables/chairs wiped (as scoped)",
                  "Doors/glass spot clean (interior)",
                  "Spot clean visible marks (as needed)",
                  "Entryway reset (mats, edges, corners)",
                ]}
              />
              <ScopeCard
                title="Washrooms"
                items={[
                  "Clean + disinfect toilets/urinals/sinks",
                  "Mirrors + fixtures polished",
                  "High-touch points wiped (handles/dispensers)",
                  "Refill supplies (client-provided)",
                  "Mop floors + spot walls/partitions as needed",
                ]}
              />
              <ScopeCard
                title="High-Touch Areas"
                items={[
                  "Switches + handles wiped",
                  "Rails + ledges detail",
                  "POS counter touch zones",
                  "Doors + push plates",
                  "Staff common touchpoints (as scoped)",
                ]}
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className={`${commercial.h3} ${commercial.accent}`}>
                Optional add-ons (weekly / monthly)
              </h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-white/80">
                <p>• Deep detail on baseboards and edges</p>
                <p>• Interior glass (full)</p>
                <p>• Floor scrub / machine clean (as applicable)</p>
                <p>• Wall spot cleaning in high-traffic zones</p>
                <p>• Disinfection focus weeks</p>
                <p>• Back-of-house support (if included in scope)</p>
              </div>
            </div>
          </section>

          {/* Checklist preview */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>
              Checklist preview (how we keep standards consistent)
            </h2>
            <p className="mt-3 text-white/75">
              We document expectations by area so your cleaning doesn’t drift
              over time.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PreviewList
                title="Per-visit essentials"
                items={[
                  "Washrooms disinfected + floors mopped",
                  "Floors reset (vacuum/mop based on surfaces)",
                  "High-touch points wiped (doors/rails/switches)",
                  "Entryway reset (mats, edges, corners)",
                  "Spot clean visible marks (as needed)",
                ]}
              />
              <PreviewList
                title="Weekly / rotating tasks"
                items={[
                  "Detailed dusting (ledges, frames where reachable)",
                  "Corners/edges/detail floor work",
                  "Glass spot-clean upgraded to full interior glass",
                  "Door/handle detail + wall spot focus areas",
                  "Deep refresh of common touch zones",
                ]}
              />
            </div>

            <div className={commercial.notice}>
              <p className={commercial.noticeText}>
                Want a scope built around your hours and inspection priorities?
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
                text="We review layout, hours, problem areas, access, and scheduling needs."
              />
              <StepCard
                step="2"
                title="Scope + cadence"
                text="You get a clear scope by area, with frequency and optional add-ons."
              />
              <StepCard
                step="3"
                title="Consistent delivery"
                text="We clean to checklist and follow up quickly when issues come up."
              />
            </div>
          </section>

          {/* FAQ */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Faq
                q="Do you clean after-hours?"
                a="Yes. Most restaurants prefer late evenings or early mornings. We’ll confirm access and timing during the walk-through."
              />
              <Faq
                q="Do you handle inspections?"
                a="We don’t replace your internal food safety program, but we help maintain consistent cleanliness and presentation so public-facing areas stay inspection-ready."
              />
              <Faq
                q="Do you bring supplies?"
                a="We can bring core tools and cleaners. Restaurants typically provide consumables (paper, soap, liners). We’ll align during the walk-through."
              />
              <Faq
                q="What affects pricing?"
                a="Square footage, restroom count, traffic level, floor types, frequency, and add-ons. The walk-through helps us quote accurately."
              />
            </div>
          </section>

          {/* Final CTA */}
          <section className={commercial.sectionDark}>
            <h2 className={commercial.h2Large}>
              Get a clear proposal for your restaurant
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Request a free walk-through and we’ll build a cleaning scope based
              on your space, schedule, and operational needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/request-walkthrough" className={commercial.ctaLight}>
                Request a Free Walk-Through
              </Link>
              <Link
                href="/commercial-cleaning/offices"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Office Cleaning
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
