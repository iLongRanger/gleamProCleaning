import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { commercial } from "@/components/commercial/ui";
import TrustSection from "@/components/TrustSection";
import { getServiceArea, serviceAreas } from "@/lib/service-areas";
import { localBusinessSchema } from "@/lib/structured-data";

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
    return { title: "Service Area" };
  }

  const ogImage = area.image || `/images/service-areas/${area.slug}.jpg`;
  return {
    title: `${area.name} Commercial Cleaning Services`,
    description: area.metaDescription,
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
    openGraph: {
      title: `${area.name} Commercial Cleaning Services | Gleam Pro Cleaning`,
      description: area.metaDescription,
      url: `/service-areas/${area.slug}`,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${area.name} — Gleam Pro Cleaning` }],
    },
  };
}

export default async function ServiceAreaPage({ params }: ServiceAreaParams) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) {
    notFound();
  }
  const areaUrl = `https://gleampro.ca/service-areas/${area.slug}`;

  return (
    <div className={commercial.shell}>
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
          <h1 className={commercial.h1}>
            {area.name}{" "}
            <span style={{ color: "#055F4B" }}>Cleaning Services</span>
          </h1>
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

        <section className={commercial.section}>
          <p className={commercial.eyebrow}>
            {area.route === "core"
              ? "On our nightly routes"
              : "Served by scheduled appointment"}
          </p>
          <h2 className={`${commercial.h2Large} mt-3`}>
            Commercial cleaning in {area.name}
          </h2>
          {area.intro.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-3xl text-white/80">
              {paragraph}
            </p>
          ))}
        </section>

        <section className={commercial.sectionAlt}>
          <h2 className={commercial.h2Large}>
            Who we clean for in {area.name}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {area.focus.map((item) => (
              <Link key={item.title} href={item.href} className={commercial.linkCard}>
                <h3 className={`font-medium ${commercial.accent}`}>{item.title}</h3>
                <p className="mt-2 text-sm text-white/75">{item.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className={commercial.section}>
            <h2 className={commercial.h2}>What we plan for in {area.name}</h2>
            <ul className="mt-4 space-y-3 text-white/80">
              {area.considerations.map((item) => (
                <li key={item} className={commercial.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={commercial.sectionAlt}>
            <h2 className={commercial.h2}>Neighbourhoods we cover</h2>
            <ul className="mt-4 space-y-2">
              {area.neighborhoods.map((item) => (
                <li key={item} className={commercial.listItem}>
                  {item}
                </li>
              ))}
            </ul>
            <h2 className={`${commercial.h2} mt-8`}>How it works</h2>
            <ul className="mt-4 space-y-2 text-white/80">
              <li className={commercial.listItem}>
                Free walkthrough of your {area.name} space.
              </li>
              <li className={commercial.listItem}>
                Written scope and proposal within 24 hours of the visit.
              </li>
              <li className={commercial.listItem}>
                30-day trial with no lock-in.
              </li>
              <li className={commercial.listItem}>
                Missed something? Tell us within 24 hours for a free re-clean.
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-12 sm:mt-16">
          <TrustSection tone="light" headingId="area-trust-heading" />
        </div>

        <section className={commercial.section}>
          <h2 className={commercial.h2Large}>
            {area.name} cleaning questions
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {area.faqs.map((faq) => (
              <div key={faq.question} className={commercial.cardSoft}>
                <h3 className={`text-sm font-semibold ${commercial.accent}`}>
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-white/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={commercial.sectionAlt}>
          <h2 className={commercial.h2Large}>Explore services in {area.name}</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Link
              href="/commercial-cleaning"
              className={commercial.linkCard}
            >
              <div className={`font-medium ${commercial.accent}`}>
                Commercial Cleaning in {area.name}
              </div>
              <p className="mt-1 text-sm text-white/75">
                Offices, restaurants, and community facility cleaning support.
              </p>
            </Link>
            <Link
              href="/residential-cleaning"
              className={commercial.linkCard}
            >
              <div className={`font-medium ${commercial.accent}`}>
                Residential Cleaning in {area.name}
              </div>
              <p className="mt-1 text-sm text-white/75">
                Recurring, deep cleaning, and move-in/out services for homes.
              </p>
            </Link>
          </div>

          <h3 className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-white/55">
            Browse by service
          </h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/commercial-cleaning/restaurants" className={commercial.linkCard}>
              <div className="text-sm font-medium text-white">Restaurants &amp; Pubs</div>
              <div className="mt-1 text-xs text-white/60">Inspection-ready cleaning</div>
            </Link>
            <Link href="/commercial-cleaning/offices" className={commercial.linkCard}>
              <div className="text-sm font-medium text-white">Office Cleaning</div>
              <div className="mt-1 text-xs text-white/60">Daily and recurring scopes</div>
            </Link>
            <Link href="/commercial-cleaning/community-facilities" className={commercial.linkCard}>
              <div className="text-sm font-medium text-white">Community Facilities</div>
              <div className="mt-1 text-xs text-white/60">Reliable janitorial support</div>
            </Link>
            <Link href="/residential-cleaning/recurring" className={commercial.linkCard}>
              <div className="text-sm font-medium text-white">Recurring Home Cleaning</div>
              <div className="mt-1 text-xs text-white/60">Weekly / bi-weekly / monthly</div>
            </Link>
            <Link href="/residential-cleaning/deep-cleaning" className={commercial.linkCard}>
              <div className="text-sm font-medium text-white">Deep Cleaning</div>
              <div className="mt-1 text-xs text-white/60">One-time top-to-bottom resets</div>
            </Link>
            <Link href="/residential-cleaning/move-in-out" className={commercial.linkCard}>
              <div className="text-sm font-medium text-white">Move-In / Move-Out</div>
              <div className="mt-1 text-xs text-white/60">Spotless turnover cleans</div>
            </Link>
          </div>

          <div className="mt-6">
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
              "@type": "Service",
              "@id": `${areaUrl}#service`,
              name: `Cleaning Services in ${area.name}`,
              url: areaUrl,
              description: area.description,
              serviceType: ["Commercial cleaning", "Residential cleaning"],
              provider: localBusinessSchema(),
              areaServed: [
                { "@type": "City", name: area.name },
                ...area.neighborhoods.map((name) => ({ "@type": "Place", name })),
              ],
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
                  item: "https://gleampro.ca/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Service Areas",
                  item: "https://gleampro.ca/service-areas",
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
    </div>
  );
}
