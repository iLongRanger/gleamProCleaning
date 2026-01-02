import Link from "next/link";
import { commercial } from "@/components/commercial/ui";

export const metadata = {
  title: "Community Facility Cleaning in Metro Vancouver | Gleam Pro Cleaning",
  description:
    "Reliable cleaning for community centres, shared facilities, and multi-use spaces across Metro Vancouver. Clear scope, repeatable checklists, and inspection-ready results.",
};

export default function CommunityFacilitiesCleaningPage() {
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
                  Commercial Cleaning • Community Facilities
                </p>
                <h1 className={commercial.h1}>
                  Cleaning support for shared spaces with unpredictable traffic.
                </h1>
                <p className={commercial.lead}>
                  Community facilities need a scope that adapts: high-traffic
                  restrooms, multi-purpose rooms, entrances, and common
                  touchpoints. We deliver consistent results using clear
                  checklists, quality checks, and walk-through based scoping—so
                  standards don’t drift.
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
                    "Restroom-first + high-touch focus",
                    "Multi-room scope by use & schedule",
                    "Entryways, mats, floors, and glass",
                    "Issue reporting + quality checks",
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
                    Good fit for
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>• Community centres + rec facilities</li>
                    <li>• Shared-use buildings + common areas</li>
                    <li>• Multi-purpose halls + meeting rooms</li>
                    <li>• Offices inside facilities</li>
                    <li>• Gym / studio spaces (non-specialty)</li>
                  </ul>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className={`text-sm font-semibold ${commercial.accent}`}>
                      Typical cadence
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-white/80">
                      <li>• Daily / 5x week for heavy traffic</li>
                      <li>• 2–3x week for moderate traffic</li>
                      <li>• Event resets as needed</li>
                    </ul>
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
              <h2 className={commercial.h2}>
                Common challenges in shared facilities
              </h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>• Restrooms fall behind during peak hours</li>
                <li>• Entryways track in dirt and moisture</li>
                <li>• Multi-use rooms need fast, reliable resets</li>
                <li>• High-touch points get missed (doors, rails, switches)</li>
                <li>• Scope confusion between staff vs cleaners</li>
              </ul>
            </div>

            <div className={commercial.card}>
              <h2 className={commercial.h2}>What we aim to deliver</h2>
              <ul className="mt-4 space-y-3 text-white/80">
                <li>
                  • Clear scope by room + frequency (daily/weekly/monthly)
                </li>
                <li>
                  • Restrooms consistently cleaned, stocked, and odor-controlled
                </li>
                <li>• Floors maintained based on traffic and finish</li>
                <li>• Simple reporting and quick issue resolution</li>
                <li>• “Inspection-ready” standards for public-facing areas</li>
              </ul>
            </div>
          </section>

          {/* Scope */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>
              What’s included (typical facility scope)
            </h2>
            <p className={commercial.lead}>
              Your scope is customized during the walk-through. Here’s a typical
              baseline for community and shared facilities.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <ScopeCard
                title="Restrooms"
                items={[
                  "Clean + disinfect toilets/urinals/sinks",
                  "Mirrors + fixtures polished",
                  "High-touch points wiped (handles/dispensers)",
                  "Refill supplies (client-provided)",
                  "Mop floors + spot walls/partitions as needed",
                ]}
              />
              <ScopeCard
                title="Common Areas"
                items={[
                  "Trash/recycling removed",
                  "High-touch wipe-downs (rails, switches, door plates)",
                  "Spot glass cleaning (interior)",
                  "Vacuum carpets / dust mop hard floors",
                  "Entryway reset (mats, edges, corners)",
                ]}
              />
              <ScopeCard
                title="Multi-Purpose Rooms"
                items={[
                  "Reset surfaces and visible touchpoints",
                  "Spot clean marks on doors/walls (as needed)",
                  "Floor care based on use (vac/mop)",
                  "Trash removal and liner replacement",
                  "Event reset scope available",
                ]}
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className={`${commercial.h3} ${commercial.accent}`}>
                Optional add-ons (monthly / seasonal)
              </h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-white/80">
                <p>• Deep detail on baseboards and edges</p>
                <p>• Interior glass (full)</p>
                <p>• Floor scrub / machine clean (as applicable)</p>
                <p>• Wall spot cleaning in high-traffic zones</p>
                <p>• Disinfection focus weeks</p>
                <p>• Storage rooms / back-of-house tidy scope</p>
              </div>
            </div>
          </section>

          {/* Checklist preview */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>
              Checklist preview (how we prevent “scope drift”)
            </h2>
            <p className="mt-3 text-white/75">
              Shared spaces change daily. Our checklists keep expectations clear
              and repeatable.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PreviewList
                title="Per-visit essentials"
                items={[
                  "Restrooms disinfected + floors mopped",
                  "Trash/recycling emptied in common areas",
                  "High-touch points wiped (doors/rails/switches)",
                  "Entryways reset (mats, vacuum, spot mop)",
                  "Spot clean visible marks (as needed)",
                ]}
              />
              <PreviewList
                title="Weekly / rotating tasks"
                items={[
                  "Detailed dusting (ledges, frames, vents where reachable)",
                  "Corners/edges/detail floor work",
                  "Glass spot-clean upgraded to full interior glass",
                  "Door/handle detail + wall spot focus areas",
                  "Deep refresh of common touch zones",
                ]}
              />
            </div>

            <div className={commercial.notice}>
              <p className={commercial.noticeText}>
                Want a room-by-room scope built around your facility schedule?
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
                text="We review layout, peak hours, problem areas, access, and scheduling needs."
              />
              <StepCard
                step="2"
                title="Scope + cadence"
                text="You get a clear scope by room, with frequency and optional add-ons."
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
                q="Do you handle event resets?"
                a="We can add an event-reset scope depending on access and timing. We’ll confirm details during the walk-through."
              />
              <Faq
                q="Can you clean during off-hours?"
                a="Yes. Many facilities prefer evenings, early mornings, or weekends. We’ll align on access and alarms during the walk-through."
              />
              <Faq
                q="Do you bring supplies?"
                a="We can bring core tools and cleaners. Facilities typically provide consumables (paper, soap, liners). We’ll align during the walk-through."
              />
              <Faq
                q="What affects pricing?"
                a="Room count, traffic level, restroom count, floor types, frequency, and add-ons. The walk-through helps us quote accurately."
              />
            </div>
          </section>

          {/* Final CTA */}
          <section className={commercial.sectionDark}>
            <h2 className={commercial.h2Large}>
              Ready for a cleaner, more welcoming facility?
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Book a free walk-through and we’ll send a clear scope and quote
              based on your rooms, traffic, and schedule.
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
                href="/commercial-cleaning/offices"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See Office Cleaning
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
