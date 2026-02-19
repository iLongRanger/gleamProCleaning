import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { commercial } from "@/components/commercial/ui";
import { getServiceArea, serviceAreas } from "@/lib/service-areas";

type ServiceAreaParams = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: ServiceAreaParams): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) {
    return { title: "Service Area | Gleam Pro Cleaning" };
  }

  return {
    title: `${area.name} Cleaning Services | Gleam Pro Cleaning`,
    description: area.description,
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
  };
}

const CITY_COORDINATES: Record<string, { latitude: number; longitude: number }> = {
  vancouver: { latitude: 49.2827, longitude: -123.1207 },
  burnaby: { latitude: 49.2488, longitude: -122.9805 },
  "new-westminster": { latitude: 49.2057, longitude: -122.911 },
  surrey: { latitude: 49.1913, longitude: -122.849 },
  richmond: { latitude: 49.1666, longitude: -123.1336 },
  coquitlam: { latitude: 49.2838, longitude: -122.7932 },
  "north-vancouver": { latitude: 49.3209, longitude: -123.0723 },
  "west-vancouver": { latitude: 49.328, longitude: -123.1602 },
  delta: { latitude: 49.0847, longitude: -123.0587 },
};

const CITY_PROOF: Record<
  string,
  {
    testimonial: { quote: string; source: string };
    caseStudy: { title: string; challenge: string; outcome: string };
  }
> = {
  vancouver: {
    testimonial: {
      quote:
        "Our weekly office clean has stayed consistent for months, even with late meetings and changing traffic.",
      source: "Operations Manager, Downtown Vancouver",
    },
    caseStudy: {
      title: "Downtown Office + Client-Facing Lobby",
      challenge:
        "High foot traffic and visible glass areas needed reliable evening service.",
      outcome:
        "Scope was split by daily and weekly tasks, improving consistency and reducing complaints.",
    },
  },
  burnaby: {
    testimonial: {
      quote:
        "Communication has been fast and clear, and our washrooms are now consistently stocked and reset.",
      source: "Facility Coordinator, Burnaby",
    },
    caseStudy: {
      title: "Mixed-Use Facility Near Metrotown",
      challenge: "Multiple washrooms and uneven traffic across floors.",
      outcome:
        "A zone-based checklist improved accountability and stabilized service quality.",
    },
  },
  "new-westminster": {
    testimonial: {
      quote:
        "They adapted quickly to our schedule changes and still kept our standards high.",
      source: "Business Owner, New Westminster",
    },
    caseStudy: {
      title: "Local Retail + Office Backroom",
      challenge:
        "Evening access windows were tight and required efficient turnover.",
      outcome:
        "The team implemented a timed sequence for front and back areas to meet closing deadlines.",
    },
  },
  surrey: {
    testimonial: {
      quote:
        "We run a busy site and needed dependable coverage. The quality checks made a big difference.",
      source: "Site Supervisor, Surrey",
    },
    caseStudy: {
      title: "Multi-Tenant Commercial Site",
      challenge: "Different tenant expectations and rotating occupancy levels.",
      outcome:
        "Custom scopes by tenant zone reduced missed items and improved response time.",
    },
  },
  richmond: {
    testimonial: {
      quote:
        "After-hours cleaning has been smooth and our common spaces are always guest-ready in the morning.",
      source: "Property Administrator, Richmond",
    },
    caseStudy: {
      title: "Office + Shared Amenity Spaces",
      challenge: "Heavy evening use of breakrooms and corridors.",
      outcome:
        "Rebalanced nightly focus areas to keep high-traffic zones consistently clean.",
    },
  },
  coquitlam: {
    testimonial: {
      quote:
        "The checklist format made expectations clear for everyone on our team.",
      source: "Operations Lead, Coquitlam",
    },
    caseStudy: {
      title: "Professional Services Office",
      challenge:
        "Inconsistent results from previous providers and unclear scope ownership.",
      outcome:
        "Documented task ownership and routine inspection notes improved consistency.",
    },
  },
  "north-vancouver": {
    testimonial: {
      quote:
        "Detail quality has been excellent, especially in the lobby and washroom areas.",
      source: "Office Manager, North Vancouver",
    },
    caseStudy: {
      title: "Clinic + Admin Space",
      challenge: "High-touch surfaces and strict presentation standards.",
      outcome:
        "Enhanced disinfection rotation and touchpoint tracking improved daily readiness.",
    },
  },
  "west-vancouver": {
    testimonial: {
      quote:
        "Their team is reliable and careful in high-detail areas where presentation matters most.",
      source: "Property Manager, West Vancouver",
    },
    caseStudy: {
      title: "Premium Residential + Office Suite",
      challenge:
        "Demand for quiet, low-disruption service with high detail expectations.",
      outcome:
        "Refined checklist cadence delivered consistent results with minimal interruption.",
    },
  },
  delta: {
    testimonial: {
      quote:
        "Scheduling has been flexible and the quality has stayed strong across multiple visits.",
      source: "Facility Lead, Delta",
    },
    caseStudy: {
      title: "Warehouse Office + Front Reception",
      challenge:
        "Dust-prone traffic transitions between operations and office zones.",
      outcome:
        "Focused entry-point and shared-space routines improved cleanliness across shifts.",
    },
  },
};

export default async function ServiceAreaPage({ params }: ServiceAreaParams) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) {
    notFound();
  }
  const cityCoordinates = CITY_COORDINATES[area.slug];
  const cityProof = CITY_PROOF[area.slug];
  const areaUrl = `https://www.gleampro.ca/service-areas/${area.slug}`;

  return (
    <main className={commercial.shell}>
      <div className={commercial.page}>
        <nav className="mb-6 text-sm text-white/70" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/service-areas" className="hover:text-white">
                Service Areas
              </Link>
            </li>
            <li>/</li>
            <li className="text-white">{area.name}</li>
          </ol>
        </nav>

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className={commercial.glow} />
          <p className={commercial.eyebrow}>Service Area</p>
          <h1 className={commercial.h1}>{area.name} Cleaning Services</h1>
          <p className={commercial.lead}>{area.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/request-walkthrough?type=commercial"
              className={commercial.cta}
            >
              Request a Walk-Through
            </Link>
            <Link
              href="/request-walkthrough?type=residential"
              className={commercial.secondary}
            >
              Get a Residential Estimate
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className={commercial.section}>
            <h2 className={commercial.h2}>Neighborhoods we cover</h2>
            <ul className="mt-4 space-y-2">
              {area.neighborhoods.map((item) => (
                <li key={item} className={commercial.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={commercial.sectionAlt}>
            <h2 className={commercial.h2}>What to expect</h2>
            <ul className="mt-4 space-y-2 text-white/80">
              <li className={commercial.listItem}>
                Clear scopes and checklists tailored to your site.
              </li>
              <li className={commercial.listItem}>
                Consistent teams and accountable follow-through.
              </li>
              <li className={commercial.listItem}>
                Daytime or after-hours scheduling based on your needs.
              </li>
              <li className={commercial.listItem}>
                Rapid response for urgent requests.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className={commercial.section}>
            <h2 className={commercial.h2}>Local client snapshot</h2>
            <p className="mt-4 text-white/80">
              &ldquo;{cityProof.testimonial.quote}&rdquo;
            </p>
            <p className="mt-3 text-sm text-white/70">
              {cityProof.testimonial.source}
            </p>
          </div>
          <div className={commercial.sectionAlt}>
            <h2 className={commercial.h2}>Recent {area.name} case example</h2>
            <h3 className={`mt-4 text-base font-semibold ${commercial.accent}`}>
              {cityProof.caseStudy.title}
            </h3>
            <p className="mt-2 text-sm text-white/80">
              <span className="font-semibold text-white">Challenge:</span>{" "}
              {cityProof.caseStudy.challenge}
            </p>
            <p className="mt-2 text-sm text-white/80">
              <span className="font-semibold text-white">Outcome:</span>{" "}
              {cityProof.caseStudy.outcome}
            </p>
          </div>
        </section>

        <section className={commercial.sectionAlt}>
          <h2 className={commercial.h2Large}>Explore services in {area.name}</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Link
              href={`/service-areas/${area.slug}/commercial-cleaning`}
              className={commercial.linkCard}
            >
              <div className={`font-medium ${commercial.accent}`}>
                Commercial Cleaning
              </div>
              <p className="mt-1 text-sm text-white/75">
                Offices, restaurants, and community facility cleaning support.
              </p>
            </Link>
            <Link
              href={`/service-areas/${area.slug}/residential-cleaning`}
              className={commercial.linkCard}
            >
              <div className={`font-medium ${commercial.accent}`}>
                Residential Cleaning
              </div>
              <p className="mt-1 text-sm text-white/75">
                Recurring, deep cleaning, and move-in/out services for homes.
              </p>
            </Link>
          </div>
          <div className="mt-4">
            <Link href="/service-areas/by-service" className={commercial.secondary}>
              Browse All Areas by Service Type
            </Link>
          </div>
        </section>

        <section className={commercial.sectionDark}>
          <h2 className={commercial.h2Large}>Ready to book in {area.name}?</h2>
          <p className={commercial.body}>
            Tell us about your facility or home and we will provide next steps
            within one business day.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/request-walkthrough?type=commercial"
              className={commercial.cta}
            >
              Start a Commercial Walk-Through
            </Link>
            <Link href="/" className={commercial.secondary}>
              Return to Home
            </Link>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${areaUrl}#localbusiness`,
              name: "Gleam Pro Cleaning",
              url: areaUrl,
              image: [
                "https://www.gleampro.ca/logo-gpc.png",
                `https://www.gleampro.ca${area.image}`,
              ],
              telephone: "+1-672-970-3755",
              email: "services@gleampro.ca",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-672-970-3755",
                  contactType: "customer service",
                  areaServed: area.name,
                  availableLanguage: ["English"],
                },
              ],
              areaServed: [
                { "@type": "City", name: area.name },
                ...area.neighborhoods.map((item) => ({ "@type": "Place", name: item })),
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "New Westminster",
                addressRegion: "BC",
                postalCode: "V3M",
                addressCountry: "CA",
              },
              geo: cityCoordinates
                ? {
                    "@type": "GeoCoordinates",
                    latitude: cityCoordinates.latitude,
                    longitude: cityCoordinates.longitude,
                  }
                : undefined,
              hasMap: "https://www.google.com/maps?q=New+Westminster,+BC",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "16:00",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: `Cleaning Services in ${area.name}`,
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Commercial Cleaning",
                      areaServed: area.name,
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Residential Cleaning",
                      areaServed: area.name,
                    },
                  },
                ],
              },
              priceRange: "$$",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.gleampro.ca/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Service Areas",
                  item: "https://www.gleampro.ca/service-areas",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: area.name,
                  item: areaUrl,
                },
              ],
            }),
          }}
        />
      </div>
    </main>
  );
}
