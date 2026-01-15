import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { commercial } from "@/components/commercial/ui";
import { getServiceArea, serviceAreas } from "@/lib/service-areas";

type ServiceAreaParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: ServiceAreaParams): Metadata {
  const area = getServiceArea(params.slug);
  if (!area) {
    return { title: "Service Area | Gleam Pro Cleaning" };
  }

  return {
    title: `${area.name} Cleaning Services | Gleam Pro Cleaning`,
    description: area.description,
  };
}

export default function ServiceAreaPage({ params }: ServiceAreaParams) {
  const area = getServiceArea(params.slug);
  if (!area) {
    notFound();
  }

  return (
    <main className={commercial.shell}>
      <div className={commercial.page}>
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
              name: "Gleam Pro Cleaning",
              url: `https://www.gleampro.ca/service-areas/${area.slug}`,
              image: "https://www.gleampro.ca/logo-gpc.png",
              telephone: "+1-672-970-3755",
              email: "hello@gleamprocleaning.com",
              areaServed: area.name,
              address: {
                "@type": "PostalAddress",
                addressLocality: "New Westminster",
                addressRegion: "BC",
                addressCountry: "CA",
              },
              hasMap: "https://www.google.com/maps?q=New+Westminster,+BC",
              priceRange: "$$",
            }),
          }}
        />
      </div>
    </main>
  );
}