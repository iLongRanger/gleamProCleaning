import Link from "next/link";
import { commercial } from "@/components/commercial/ui";

export const metadata = {
  title: "Commercial Cleaning Services in Metro Vancouver",
  description:
    "Commercial-first cleaning for restaurants, offices, and community facilities. Request a free walk-through for a tailored proposal.",
};

const serviceAreas = [
  "Vancouver",
  "Burnaby",
  "New Westminster",
  "Surrey",
  "Delta",
  "Coquitlam",
];

export default function CommercialCleaningHubPage() {
  return (
    <div className={commercial.shell}>
      <div className="relative">
        <div className={commercial.glow} />
        <main className={`relative z-10 ${commercial.page}`}>
          <div className="max-w-3xl">
            <p className={commercial.eyebrow}>
              Commercial Cleaning • Metro Vancouver
            </p>

            <h1 className={commercial.h1}>
              Commercial Cleaning Services for Businesses
            </h1>

            <p className={commercial.lead}>
              Reliable teams, consistent results, and clear communication —
              designed for restaurants, offices, and community facilities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-walkthrough?type=commercial" className={commercial.cta}>
                Request a Free Walk-Through
              </Link>

              <Link
                href="/commercial-cleaning/restaurants"
                className={commercial.secondary}
              >
                Restaurant Cleaning
              </Link>
            </div>
          </div>

          {/* Featured vertical: Restaurants */}
          <section className={commercial.section}>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className={commercial.h2Large}>
                  Restaurant &amp; Pub Cleaning (Featured)
                </h2>
                <p className={commercial.lead}>
                  Busy kitchens need consistent cleanliness and predictable
                  checklists. We help you stay inspection-ready with dependable
                  service and documented scope.
                </p>

                <ul className="mt-5 space-y-2 text-white/80">
                  <li>• Front-of-house + washrooms</li>
                  <li>• Floors, glass, high-touch areas</li>
                  <li>• Closing support and recurring maintenance</li>
                  <li>• Custom scope based on traffic + schedule</li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/commercial-cleaning/restaurants"
                    className={commercial.secondary}
                  >
                    View Restaurant Cleaning
                  </Link>
                  <Link href="/request-walkthrough?type=commercial" className={commercial.cta}>
                    Request Walk-Through
                  </Link>
                </div>
              </div>

              <div className={commercial.cardSoft}>
                <h3 className={`text-lg font-semibold ${commercial.accent}`}>
                  Best for
                </h3>
                <p className="mt-2 text-white/80">
                  Restaurants, pubs, cafés, commissary kitchens, and food
                  service spaces that need consistent standards and fast
                  communication.
                </p>

                <h3
                  className={`mt-6 text-lg font-semibold ${commercial.accent}`}
                >
                  Typical cadence
                </h3>
                <p className="mt-2 text-white/80">
                  Daily, 5x/week, or custom schedules depending on hours of
                  operation and traffic.
                </p>

                <h3
                  className={`mt-6 text-lg font-semibold ${commercial.accent}`}
                >
                  What you receive
                </h3>
                <p className="mt-2 text-white/80">
                  A fixed monthly proposal after an on-site walk-through.
                </p>
              </div>
            </div>
          </section>

          {/* Other verticals */}
          <section className="mt-16">
            <h2 className={commercial.h2Large}>Other Commercial Cleaning</h2>
            <p className={commercial.lead}>
              Choose the vertical that best matches your facility.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Link
                href="/commercial-cleaning/offices"
                className={commercial.linkCard}
              >
                <h3 className={`text-lg font-semibold ${commercial.accent}`}>
                  Office Cleaning
                </h3>
                <p className="mt-2 text-white/80">
                  Professional cleaning for workspaces, meeting rooms, kitchens,
                  and washrooms.
                </p>
              </Link>

              <Link
                href="/commercial-cleaning/community-facilities"
                className={commercial.linkCard}
              >
                <h3 className={`text-lg font-semibold ${commercial.accent}`}>
                  Community Facilities
                </h3>
                <p className="mt-2 text-white/80">
                  Reliable janitorial support for shared spaces, centers, and
                  facilities with varied traffic.
                </p>
              </Link>

              <Link href="/request-walkthrough?type=commercial" className={commercial.linkCard}>
                <h3 className={`text-lg font-semibold ${commercial.accent}`}>
                  Request a Walk-Through
                </h3>
                <p className="mt-2 text-white/80">
                  We’ll review your space and provide a fixed monthly proposal.
                </p>
              </Link>
            </div>
          </section>

          {/* Service areas */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>Service Areas</h2>
            <p className={commercial.lead}>
              Serving Metro Vancouver including:
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className={commercial.pill}>
                  {area}
                </span>
              ))}
            </div>
          </section>

          {/* Cross-links */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>Industries we serve</h2>
            <p className="mt-2 text-sm text-white/75">
              Explore our most common commercial cleaning scopes. All services
              start with a free walk-through and a tailored checklist.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link
                href="/commercial-cleaning/restaurants"
                className={commercial.linkCard}
              >
                <div className={`font-medium ${commercial.accent}`}>
                  Restaurants &amp; Pubs
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Grease control, high-touch surfaces, washrooms, and
                  inspection-ready routines.
                </div>
              </Link>

              <Link
                href="/commercial-cleaning/offices"
                className={commercial.linkCard}
              >
                <div className={`font-medium ${commercial.accent}`}>
                  Offices
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Desks, meeting rooms, kitchens, restrooms, and consistent
                  presentation.
                </div>
              </Link>

              <Link
                href="/commercial-cleaning/community-facilities"
                className={commercial.linkCard}
              >
                <div className={`font-medium ${commercial.accent}`}>
                  Community Facilities
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Multi-room facilities, higher foot traffic, and dependable
                  sanitation standards.
                </div>
              </Link>
            </div>

            <div className="mt-6">
              <Link href="/request-walkthrough?type=commercial" className={commercial.cta}>
                Request a Free Walk-Through
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className={commercial.sectionDark}>
            <h2 className={commercial.h2Large}>
              Ready for a cleaner, more consistent facility?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              Request a walk-through and we’ll send a clear proposal based on
              your scope and schedule.
            </p>

            <div className="mt-6">
              <Link href="/request-walkthrough?type=commercial" className={commercial.ctaLight}>
                Request a Free Walk-Through
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

