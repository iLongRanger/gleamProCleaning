import Link from "next/link";
import { commercial } from "@/components/commercial/ui";

export default function RestaurantCleaningPage() {
  return (
    <div className={commercial.shell}>
      <div className="relative">
        <div className={commercial.glow} />
        <main className={`relative z-10 ${commercial.page}`}>
          {/* Header */}
          <section className="max-w-3xl">
            <p className={commercial.eyebrow}>
              Commercial Cleaning • Restaurants &amp; Pubs
            </p>

            <h1 className={commercial.h1}>
              Restaurant &amp; Pub Cleaning Services
            </h1>

            <p className={commercial.lead}>
              Consistent, inspection-ready cleaning for restaurants, pubs,
              cafés, and food service spaces across Metro Vancouver.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
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
          </section>

          {/* Why restaurants choose us */}
          <section className="mt-16 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className={commercial.h2Large}>
                Built for busy food service environments
              </h2>

              <p className="mt-4 text-white/80">
                Restaurants operate on tight schedules, high traffic, and strict
                health standards. Our cleaning systems are designed to keep your
                space consistently clean — not just “good enough” on inspection
                day.
              </p>

              <ul className="mt-6 space-y-2 text-white/80">
                <li>• Reliable recurring schedules</li>
                <li>• Consistent checklists and scope</li>
                <li>• High-touch and front-of-house focus</li>
                <li>• Clear communication with management</li>
              </ul>
            </div>

            <div className={commercial.cardSoft}>
              <h3 className={`text-lg font-semibold ${commercial.accent}`}>
                Ideal for:
              </h3>

              <ul className="mt-4 space-y-2 text-white/80">
                <li>• Restaurants &amp; pubs</li>
                <li>• Cafés &amp; coffee shops</li>
                <li>• Commissary kitchens</li>
                <li>• Food courts &amp; shared kitchens</li>
              </ul>

              <h3 className={`mt-6 text-lg font-semibold ${commercial.accent}`}>
                Typical cadence
              </h3>

              <p className="mt-2 text-white/80">
                Daily, 5× per week, or custom schedules based on your hours of
                operation and traffic.
              </p>
            </div>
          </section>

          {/* Checklist preview */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>
              Sample cleaning checklist (preview)
            </h2>

            <p className="mt-3 text-white/75">
              Final scope is customized during your walk-through. Below is a
              sample of what restaurants typically include.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3 text-white/80">
              <div>
                <h3 className={`font-semibold ${commercial.accent}`}>
                  Front of House
                </h3>
                <ul className="mt-3 space-y-1">
                  <li>• Floors vacuumed &amp; mopped</li>
                  <li>• Tables and chairs wiped</li>
                  <li>• Doors, glass, handles</li>
                  <li>• Spot cleaning walls</li>
                </ul>
              </div>

              <div>
                <h3 className={`font-semibold ${commercial.accent}`}>
                  Washrooms
                </h3>
                <ul className="mt-3 space-y-1">
                  <li>• Toilets &amp; urinals sanitized</li>
                  <li>• Sinks, mirrors, dispensers</li>
                  <li>• Floors and high-touch points</li>
                  <li>• Restocking (if provided)</li>
                </ul>
              </div>

              <div>
                <h3 className={`font-semibold ${commercial.accent}`}>
                  High-Touch Areas
                </h3>
                <ul className="mt-3 space-y-1">
                  <li>• Switches &amp; handles</li>
                  <li>• POS counters</li>
                  <li>• Railings &amp; ledges</li>
                  <li>• Staff common areas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Inspection readiness */}
          <section className="mt-16 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className={commercial.h2Large}>
                Stay inspection-ready year-round
              </h2>

              <p className="mt-4 text-white/80">
                Our goal is not last-minute cleanups — it’s maintaining a
                standard that helps you pass inspections confidently and
                consistently.
              </p>

              <p className="mt-4 text-white/80">
                After a walk-through, you receive a clear scope so expectations
                are aligned from day one.
              </p>
            </div>

            <div className={commercial.cardSoft}>
              <h3 className={`text-lg font-semibold ${commercial.accent}`}>
                What you get
              </h3>

              <ul className="mt-4 space-y-2 text-white/80">
                <li>• Fixed monthly proposal</li>
                <li>• Defined scope &amp; frequency</li>
                <li>• Reliable, trained cleaning team</li>
                <li>• Direct point of contact</li>
              </ul>
            </div>
          </section>

          {/* Final CTA */}
          <section className={`${commercial.sectionDark} mt-20 text-center`}>
            <h2 className={commercial.h2Large}>
              Get a clear proposal for your restaurant
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              Request a free walk-through and we’ll build a cleaning scope based
              on your space, schedule, and operational needs.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
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
