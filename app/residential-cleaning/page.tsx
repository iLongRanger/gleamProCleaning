import type { Metadata } from "next";
import Link from "next/link";
import { residential } from "@/components/residential/ui";
import { serviceAreas as allServiceAreas } from "@/lib/service-areas";

const serviceAreaNames = allServiceAreas.map((area) => area.name);

export const metadata: Metadata = {
  title: "Residential Cleaning Services | Gleam Pro Cleaning",
  description:
    "Professional residential cleaning services in Metro Vancouver including recurring maintenance, deep cleaning, move-in/out, and carpet & upholstery care.",
  alternates: {
    canonical: "/residential-cleaning",
  },
  openGraph: {
    title: "Residential Cleaning Services in Metro Vancouver | Gleam Pro",
    description:
      "Recurring, deep, move-in/out, and carpet & upholstery cleaning — tailored to your home.",
    url: "/residential-cleaning",
    type: "website",
    images: [{ url: "/images/home/residential-hero.png", width: 1200, height: 630, alt: "Residential cleaning by Gleam Pro" }],
  },
};

export default function ResidentialCleaningHubPage() {
  return (
    <div className={residential.shell}>
      <div className="relative">
        <div className={residential.glow} />
        <main className={`relative z-10 ${residential.page}`}>
          <div className="max-w-3xl">
            <p className={residential.eyebrow}>
              Residential Cleaning • Metro Vancouver
            </p>

            <h1 className={residential.h1}>
              Residential Cleaning Services for Your Home
            </h1>

            <p className={residential.lead}>
              From recurring maintenance to specialty services, we deliver
              premium home cleaning tailored to your unique needs and schedule.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-walkthrough?type=residential" className={residential.cta}>
                Get a Free Home Estimate
              </Link>

              <Link
                href="/prestige-home-care"
                className={residential.secondary}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Featured service: Recurring Cleaning */}
          <section className={residential.section}>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className={residential.h2Large}>
                  Recurring Cleaning (Featured)
                </h2>
                <p className={residential.lead}>
                  Weekly, bi-weekly, or monthly maintenance to keep your home
                  consistently clean and comfortable. We adapt to your schedule
                  and preferences.
                </p>

                <ul className="mt-5 space-y-2 text-white/80">
                  <li>• Kitchen & bathroom maintenance</li>
                  <li>• Living areas & bedrooms</li>
                  <li>• Floors & high-touch surfaces</li>
                  <li>• Custom frequency & scope</li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/residential-cleaning/recurring"
                    className={residential.secondary}
                  >
                    View Recurring Cleaning
                  </Link>
                  <Link href="/request-walkthrough?type=residential" className={residential.cta}>
                    Get Home Estimate
                  </Link>
                </div>
              </div>

              <div className={residential.cardSoft}>
                <h3 className={`text-lg font-semibold ${residential.accent}`}>
                  Best for
                </h3>
                <p className="mt-2 text-white/80">
                  Busy families, professionals, and anyone seeking consistent
                  home maintenance without the hassle.
                </p>

                <h3
                  className={`mt-6 text-lg font-semibold ${residential.accent}`}
                >
                  Typical cadence
                </h3>
                <p className="mt-2 text-white/80">
                  Weekly, bi-weekly, or monthly based on your needs and
                  budget.
                </p>

                <h3
                  className={`mt-6 text-lg font-semibold ${residential.accent}`}
                >
                  What you receive
                </h3>
                <p className="mt-2 text-white/80">
                  Custom estimate based on square footage, condition, and specific
                  requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Other services */}
          <section className="mt-16">
            <h2 className={residential.h2Large}>Other Residential Services</h2>
            <p className={residential.lead}>
              Choose service that best matches your current needs.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Link
                href="/residential-cleaning/deep-cleaning"
                className={residential.linkCard}
              >
                <h3 className={`text-lg font-semibold ${residential.accent}`}>
                  Deep Cleaning
                </h3>
                <p className="mt-2 text-white/80">
                  Intensive one-time cleaning for spring refresh, before events,
                  or when your home needs extra attention.
                </p>
              </Link>

              <Link
                href="/residential-cleaning/move-in-out"
                className={residential.linkCard}
              >
                <h3 className={`text-lg font-semibold ${residential.accent}`}>
                  Move-In/Out
                </h3>
                <p className="mt-2 text-white/80">
                  Professional turnover service for renters, homeowners, and
                  property managers.
                </p>
              </Link>

              <Link
                href="/residential-cleaning/carpet-upholstery"
                className={residential.linkCard}
              >
                <h3 className={`text-lg font-semibold ${residential.accent}`}>
                  Carpet & Upholstery
                </h3>
                <p className="mt-2 text-white/80">
                  Professional extraction and fabric-safe cleaning for stains,
                  refresh, or allergy concerns.
                </p>
              </Link>

              <Link href="/residential-cleaning/faq" className={residential.linkCard}>
                <h3 className={`text-lg font-semibold ${residential.accent}`}>
                  Residential Cleaning FAQ
                </h3>
                <p className="mt-2 text-white/80">
                  Answers to common questions about pricing, service scope,
                  scheduling, and home preparation.
                </p>
              </Link>
            </div>
          </section>

           {/* Service areas */}
           <section className={residential.section}>
             <h2 className={residential.h2Large}>Service Areas</h2>
             <p className={residential.lead}>
               Serving Metro Vancouver including:
             </p>

             <div className="mt-5 flex flex-wrap gap-2">
               {allServiceAreas.map((area) => (
                 <Link
                   key={area.slug}
                   href={`/service-areas/${area.slug}/residential-cleaning`}
                   className={`${residential.pill} hover:bg-white/10 transition`}
                 >
                   {area.name}
                 </Link>
               ))}
             </div>
           </section>

          {/* Cross-links */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>Our Residential Services</h2>
            <p className="mt-2 text-sm text-white/75">
              Explore our residential cleaning options. All services start with a
              free estimate to understand your unique needs.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Link
                href="/residential-cleaning/recurring"
                className={residential.linkCard}
              >
                <div className={`font-medium ${residential.accent}`}>
                  Recurring Maintenance
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Weekly, bi-weekly, or monthly cleaning to maintain
                  consistently clean and comfortable living spaces.
                </div>
              </Link>

              <Link
                href="/residential-cleaning/deep-cleaning"
                className={residential.linkCard}
              >
                <div className={`font-medium ${residential.accent}`}>
                  Deep Cleaning
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Intensive one-time cleaning for special occasions,
                  seasonal refresh, or detailed home care.
                </div>
              </Link>

              <Link
                href="/residential-cleaning/move-in-out"
                className={residential.linkCard}
              >
                <div className={`font-medium ${residential.accent}`}>
                  Move-In/Out Service
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Professional turnover cleaning for smooth transitions
                  between homes or properties.
                </div>
              </Link>

              <Link
                href="/residential-cleaning/carpet-upholstery"
                className={residential.linkCard}
              >
                <div className={`font-medium ${residential.accent}`}>
                  Carpet & Upholstery Care
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Specialized cleaning for fabrics, carpets, and
                  upholstery using safe, effective methods.
                </div>
              </Link>

              <Link
                href="/residential-cleaning/faq"
                className={residential.linkCard}
              >
                <div className={`font-medium ${residential.accent}`}>
                  Residential Cleaning FAQ
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Quick answers to booking, pricing, prep, and service details
                  for homeowners.
                </div>
              </Link>
            </div>

            <div className="mt-6">
              <Link href="/request-walkthrough?type=residential" className={residential.cta}>
                Get a Free Home Estimate
              </Link>
            </div>
          </section>

          {/* What to expect */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>What to expect</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className={residential.cardSoft}>
                <div className={`text-sm font-semibold ${residential.accent}`}>Response time</div>
                <p className="mt-2 text-sm text-white/80">
                  Estimate replied within one business day. Recurring visits
                  scheduled around your week and confirmed in writing.
                </p>
              </div>
              <div className={residential.cardSoft}>
                <div className={`text-sm font-semibold ${residential.accent}`}>Pricing approach</div>
                <p className="mt-2 text-sm text-white/80">
                  Flat per-visit pricing based on home size, scope, and
                  frequency. Service starts from $150.
                </p>
              </div>
              <div className={residential.cardSoft}>
                <div className={`text-sm font-semibold ${residential.accent}`}>Insured & vetted</div>
                <p className="mt-2 text-sm text-white/80">
                  $1M commercial general liability insurance.
                  Reference-checked cleaners. Same faces, every visit.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>Common questions</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className={residential.cardSoft}>
                <p className={`text-sm font-semibold ${residential.accent}`}>
                  Do I need to be home during the cleaning?
                </p>
                <p className="mt-2 text-sm text-white/80">
                  No. Most clients give us a one-time code or key for recurring
                  visits. We confirm the entry method during onboarding and never
                  share access info between teams.
                </p>
              </div>
              <div className={residential.cardSoft}>
                <p className={`text-sm font-semibold ${residential.accent}`}>
                  What&apos;s the difference between a deep clean and a recurring clean?
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Deep cleans cover baseboards, inside cabinets, behind
                  appliances, and detail work that recurring visits don&apos;t
                  reach. Most new clients start with a deep clean, then move to
                  weekly or bi-weekly maintenance.
                </p>
              </div>
              <div className={residential.cardSoft}>
                <p className={`text-sm font-semibold ${residential.accent}`}>
                  Are your products safe for pets and kids?
                </p>
                <p className="mt-2 text-sm text-white/80">
                  By default we use low-fragrance, child- and pet-safe products.
                  Tell us about allergies or sensitivities during the estimate
                  and we&apos;ll match the chemistry.
                </p>
              </div>
              <div className={residential.cardSoft}>
                <p className={`text-sm font-semibold ${residential.accent}`}>
                  What if I&apos;m not happy with a visit?
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Let us know within 24 hours and we return to re-clean the
                  missed area at no charge. Your satisfaction is the standard
                  every visit is measured against.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/residential-cleaning/faq" className={residential.secondary}>
                See full residential FAQ
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className={residential.sectionDark}>
            <h2 className={residential.h2Large}>
              Ready for a premium home cleaning experience?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              Start with a free estimate and let us create a cleaning plan
              tailored to your home and lifestyle.
            </p>

            <div className="mt-6">
              <Link href="/request-walkthrough?type=residential" className={residential.ctaLight}>
                Get a Free Home Estimate
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
                  serviceType: "Residential Cleaning",
                  name: "Residential Cleaning Services in Metro Vancouver",
                  description:
                    "Recurring, deep, move-in/out, and carpet & upholstery cleaning for homes across Metro Vancouver.",
                  url: "https://gleampro.ca/residential-cleaning",
                  provider: { "@id": "https://gleampro.ca/#localbusiness" },
                  areaServed: serviceAreaNames.map((name) => ({ "@type": "City", name })),
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Residential Cleaning Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Recurring Cleaning",
                          url: "https://gleampro.ca/residential-cleaning/recurring",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Deep Cleaning",
                          url: "https://gleampro.ca/residential-cleaning/deep-cleaning",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Move-In / Move-Out Cleaning",
                          url: "https://gleampro.ca/residential-cleaning/move-in-out",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Carpet & Upholstery Cleaning",
                          url: "https://gleampro.ca/residential-cleaning/carpet-upholstery",
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
                      name: "Do I need to be home during the cleaning?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. Most clients give us a one-time code or key for recurring visits. We confirm the entry method during onboarding and never share access info between teams.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is the difference between a deep clean and a recurring clean?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Deep cleans cover baseboards, inside cabinets, behind appliances, and detail work that recurring visits do not reach. Most new clients start with a deep clean, then move to weekly or bi-weekly maintenance.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Are your cleaning products safe for pets and kids?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "By default we use low-fragrance, child- and pet-safe products. Tell us about allergies or sensitivities during the estimate and we will match the chemistry.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What if I am not happy with a visit?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Let us know within 24 hours and we return to re-clean the missed area at no charge. Your satisfaction is the standard every visit is measured against.",
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

