import type { Metadata } from "next";
import Link from "next/link";
import { commercial } from "@/components/commercial/ui";
import { serviceAreas as allServiceAreas } from "@/lib/service-areas";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services in Metro Vancouver",
  description:
    "Commercial-first cleaning for restaurants, offices, and community facilities. Request a free walk-through for a tailored proposal.",
  alternates: {
    canonical: "/commercial-cleaning",
  },
  openGraph: {
    title: "Commercial Cleaning Services in Metro Vancouver | Gleam Pro",
    description:
      "Restaurants, offices, and community facilities — walk-through quoted, named-team executed.",
    url: "/commercial-cleaning",
    type: "website",
    images: [{ url: "/images/home/commercial-hero.png", width: 1200, height: 630, alt: "Commercial cleaning by Gleam Pro" }],
  },
};

const serviceAreaNames = allServiceAreas.map((area) => area.name);

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
              Commercial Cleaning Services{" "}
              <span style={{ color: "#D4A574" }}>for Businesses</span>
            </h1>

            <p className={commercial.lead}>
              Reliable teams, consistent results, and clear communication —
              designed for breweries, kitchens, clinics, offices, and community facilities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-walkthrough?type=commercial" className={commercial.cta}>
                Request a Free Walk-Through
              </Link>

              <Link
                href="/breweries"
                className={commercial.secondary}
              >
                Brewery Cleaning
              </Link>

              <Link
                href="/clinics"
                className={commercial.secondary}
              >
                Clinic Cleaning
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
                href="/breweries"
                className={commercial.linkCard}
              >
                <h3 className={`text-lg font-semibold ${commercial.accent}`}>
                  Breweries &amp; Taprooms
                </h3>
                <p className="mt-2 text-white/80">
                  Nightly cleaning for taproom floors, back-of-house, washrooms,
                  and patio-season traffic.
                </p>
              </Link>

              <Link
                href="/clinics"
                className={commercial.linkCard}
              >
                <h3 className={`text-lg font-semibold ${commercial.accent}`}>
                  Clinics &amp; Medical Offices
                </h3>
                <p className="mt-2 text-white/80">
                  Discreet cleaning with hygiene routines for spaces that get inspected.
                </p>
              </Link>

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

              <Link
                href="/commercial-cleaning/property-management"
                className={commercial.linkCard}
              >
                <h3 className={`text-lg font-semibold ${commercial.accent}`}>
                  Property Management
                </h3>
                <p className="mt-2 text-white/80">
                  Recurring common-area cleaning for strata, rental, and
                  multi-tenant properties.
                </p>
              </Link>

              <Link href="/commercial-cleaning/faq" className={commercial.linkCard}>
                <h3 className={`text-lg font-semibold ${commercial.accent}`}>
                  Commercial Cleaning FAQ
                </h3>
                <p className="mt-2 text-white/80">
                  Answers to common questions about pricing, scope, scheduling,
                  and onboarding.
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
              {allServiceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className={`${commercial.pill} hover:bg-white/10 transition`}
                >
                  {area.name}
                </Link>
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

          {/* What to expect */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>What to expect</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className={commercial.cardSoft}>
                <div className={`text-sm font-semibold ${commercial.accent}`}>Response time</div>
                <p className="mt-2 text-sm text-white/80">
                  Walk-through booked within one business day. Written proposal
                  delivered within 24 hours of the site visit.
                </p>
              </div>
              <div className={commercial.cardSoft}>
                <div className={`text-sm font-semibold ${commercial.accent}`}>Pricing approach</div>
                <p className="mt-2 text-sm text-white/80">
                  Fixed monthly proposals based on actual scope from a
                  walk-through — no square-footage calculator, no surprise
                  add-ons. Service starts from $250.
                </p>
              </div>
              <div className={commercial.cardSoft}>
                <div className={`text-sm font-semibold ${commercial.accent}`}>Insured</div>
                <p className="mt-2 text-sm text-white/80">
                  $1M commercial general liability insurance.
                  Certificate of insurance available on request before the first visit.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>Common questions</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className={commercial.cardSoft}>
                <p className={`text-sm font-semibold ${commercial.accent}`}>
                  How quickly can you start?
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Most accounts onboard within 5–10 business days after the
                  walk-through. Rush starts are available for urgent openings or
                  facility transitions.
                </p>
              </div>
              <div className={commercial.cardSoft}>
                <p className={`text-sm font-semibold ${commercial.accent}`}>
                  Do you bring your own supplies?
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Yes. Standard supplies and equipment are included. We&apos;ll
                  also use your preferred chemistry (eco-cert, fragrance-free,
                  hospital-grade) if you have an in-house standard.
                </p>
              </div>
              <div className={commercial.cardSoft}>
                <p className={`text-sm font-semibold ${commercial.accent}`}>
                  Can you clean after hours?
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Most commercial accounts run early-morning or evening. Hours
                  are confirmed in the written scope and don&apos;t change without
                  notice.
                </p>
              </div>
              <div className={commercial.cardSoft}>
                <p className={`text-sm font-semibold ${commercial.accent}`}>
                  What happens if something is missed?
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Flag it within 24 hours and we return to make it right at no
                  additional charge. Recurring accounts include weekly quality
                  audits.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/commercial-cleaning/faq" className={commercial.secondary}>
                See full commercial FAQ
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  serviceType: "Commercial Cleaning",
                  name: "Commercial Cleaning Services in Metro Vancouver",
                  description:
                    "Commercial-first cleaning for restaurants, offices, and community facilities across Metro Vancouver.",
                  url: "https://gleampro.ca/commercial-cleaning",
                  provider: { "@id": "https://gleampro.ca/#localbusiness" },
                  areaServed: serviceAreaNames.map((name) => ({ "@type": "City", name })),
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Commercial Cleaning Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Brewery & Taproom Cleaning",
                          url: "https://gleampro.ca/breweries",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Clinic & Medical Office Cleaning",
                          url: "https://gleampro.ca/clinics",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Restaurant & Pub Cleaning",
                          url: "https://gleampro.ca/commercial-cleaning/restaurants",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Office Cleaning",
                          url: "https://gleampro.ca/commercial-cleaning/offices",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Community Facility Cleaning",
                          url: "https://gleampro.ca/commercial-cleaning/community-facilities",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Property Management Cleaning",
                          url: "https://gleampro.ca/commercial-cleaning/property-management",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "How quickly can you start commercial cleaning service?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most accounts onboard within 5–10 business days after the walk-through. Rush starts are available for urgent openings or facility transitions.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do you bring your own cleaning supplies?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Standard supplies and equipment are included. We can also use your preferred chemistry (eco-cert, fragrance-free, hospital-grade) if you have an in-house standard.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can you clean after business hours?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most commercial accounts run early-morning or evening. Hours are confirmed in the written scope and do not change without notice.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What happens if something is missed?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Flag it within 24 hours and we return to make it right at no additional charge. Recurring accounts include weekly quality audits.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </div>
    </div>
  );
}

