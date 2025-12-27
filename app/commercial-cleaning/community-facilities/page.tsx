import Link from "next/link";

export const metadata = {
  title: "Community Facility Cleaning in Metro Vancouver | Gleam Pro Cleaning",
  description:
    "Reliable cleaning for community centres, shared facilities, and multi-use spaces across Metro Vancouver. Clear scope, repeatable checklists, and inspection-ready results.",
};

export default function CommunityFacilitiesCleaningPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="rounded-3xl border bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-emerald-700">
              Commercial Cleaning • Community Facilities
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Cleaning support for shared spaces with unpredictable traffic.
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Community facilities need a scope that adapts: high-traffic
              restrooms, multi-purpose rooms, entrances, and common touchpoints.
              We deliver consistent results using clear checklists, quality
              checks, and walk-through based scoping—so standards don’t drift.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/request-walkthrough"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
              >
                Request a Free Walk-Through
              </Link>
              <Link
                href="/commercial-cleaning"
                className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
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
                <li
                  key={item}
                  className="rounded-2xl border bg-slate-50 px-4 py-3 text-sm text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Proof / Fit card */}
          <div className="w-full md:w-[360px]">
            <div className="rounded-3xl border bg-slate-50 p-6">
              <h2 className="text-base font-semibold text-slate-900">
                Good fit for
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Community centres + rec facilities</li>
                <li>• Shared-use buildings + common areas</li>
                <li>• Multi-purpose halls + meeting rooms</li>
                <li>• Offices inside facilities</li>
                <li>• Gym / studio spaces (non-specialty)</li>
              </ul>

              <div className="mt-5 rounded-2xl bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Typical cadence
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  <li>• Daily / 5x week for heavy traffic</li>
                  <li>• 2–3x week for moderate traffic</li>
                  <li>• Event resets as needed</li>
                </ul>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Final scope is confirmed during the walk-through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems / Outcomes */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Common challenges in shared facilities
          </h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>• Restrooms fall behind during peak hours</li>
            <li>• Entryways track in dirt and moisture</li>
            <li>• Multi-use rooms need fast, reliable resets</li>
            <li>• High-touch points get missed (doors, rails, switches)</li>
            <li>• Scope confusion between staff vs cleaners</li>
          </ul>
        </div>

        <div className="rounded-3xl border bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            What we aim to deliver
          </h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>• Clear scope by room + frequency (daily/weekly/monthly)</li>
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
      <section className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">
          What’s included (typical facility scope)
        </h2>
        <p className="mt-3 text-slate-600">
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

        <div className="mt-8 rounded-2xl bg-slate-50 p-5">
          <h3 className="text-base font-semibold text-slate-900">
            Optional add-ons (monthly / seasonal)
          </h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-slate-700">
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
      <section className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">
          Checklist preview (how we prevent “scope drift”)
        </h2>
        <p className="mt-3 text-slate-600">
          Shared spaces change daily. Our checklists keep expectations clear and
          repeatable.
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

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-emerald-50 p-5">
          <p className="text-sm font-medium text-emerald-900">
            Want a room-by-room scope built around your facility schedule?
          </p>
          <Link
            href="/request-walkthrough"
            className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
          >
            Request a Free Walk-Through
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
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
      <section className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
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
      <section className="mt-10 rounded-3xl border bg-slate-900 p-8 text-white shadow-sm">
        <h2 className="text-2xl font-bold">
          Ready for a cleaner, more welcoming facility?
        </h2>
        <p className="mt-3 max-w-2xl text-white/80">
          Book a free walk-through and we’ll send a clear scope and quote based
          on your rooms, traffic, and schedule.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/request-walkthrough"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Request a Free Walk-Through
          </Link>
          <Link
            href="/commercial-cleaning/restaurants"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            See Restaurant Cleaning
          </Link>
        </div>
      </section>
    </main>
  );
}

function ScopeCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border bg-slate-50 p-6">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {items.map((t) => (
          <li key={t}>• {t}</li>
        ))}
      </ul>
    </div>
  );
}

function PreviewList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border bg-slate-50 p-6">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
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
    <div className="rounded-3xl border bg-slate-50 p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
          {step}
        </span>
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-3xl border bg-slate-50 p-6">
      <p className="text-sm font-semibold text-slate-900">{q}</p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{a}</p>
    </div>
  );
}
