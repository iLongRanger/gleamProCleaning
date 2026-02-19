import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { commercial } from "@/components/commercial/ui";
import { getServiceBySlug, serviceCatalog } from "@/lib/service-catalog";
import { getServiceArea, serviceAreas } from "@/lib/service-areas";

type ServiceAreaServiceParams = {
  params: {
    slug: string;
    service: string;
  };
};

export function generateStaticParams() {
  return serviceAreas.flatMap((area) =>
    serviceCatalog.map((service) => ({
      slug: area.slug,
      service: service.slug,
    }))
  );
}

export function generateMetadata({
  params,
}: ServiceAreaServiceParams): Metadata {
  const area = getServiceArea(params.slug);
  const service = getServiceBySlug(params.service);
  if (!area || !service) {
    return { title: "Service Area | Gleam Pro Cleaning" };
  }

  return {
    title: `${service.label} in ${area.name} | Gleam Pro Cleaning`,
    description: `${service.label} in ${area.name}. ${service.description}`,
    alternates: {
      canonical: `/service-areas/${area.slug}/${service.slug}`,
    },
  };
}

export default function ServiceAreaServicePage({
  params,
}: ServiceAreaServiceParams) {
  const area = getServiceArea(params.slug);
  const service = getServiceBySlug(params.service);
  if (!area || !service) {
    notFound();
  }

  const requestType = service.category === "commercial" ? "commercial" : "residential";
  const pageUrl = `https://www.gleampro.ca/service-areas/${area.slug}/${service.slug}`;

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
            <li>
              <Link href={`/service-areas/${area.slug}`} className="hover:text-white">
                {area.name}
              </Link>
            </li>
            <li>/</li>
            <li className="text-white">{service.label}</li>
          </ol>
        </nav>

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className={commercial.glow} />
          <p className={commercial.eyebrow}>Service Area + Service</p>
          <h1 className={commercial.h1}>
            {service.label} in {area.name}
          </h1>
          <p className={commercial.lead}>
            {service.description} We serve {area.name} neighborhoods including{" "}
            {area.neighborhoods.slice(0, 3).join(", ")} and nearby areas.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/request-walkthrough?type=${requestType}`}
              className={commercial.cta}
            >
              {requestType === "commercial"
                ? "Request a Walk-Through"
                : "Get a Home Estimate"}
            </Link>
            <Link href={service.href} className={commercial.secondary}>
              View {service.label} Details
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className={commercial.section}>
            <h2 className={commercial.h2}>Coverage in {area.name}</h2>
            <ul className="mt-4 space-y-2">
              {area.neighborhoods.map((item) => (
                <li key={item} className={commercial.listItem}>
                  {service.label} support in {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={commercial.sectionAlt}>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={area.image}
                alt={`${service.label} in ${area.name}`}
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-white/80">
              Local teams and scheduling designed for {area.name} traffic, access,
              and service expectations.
            </p>
          </div>
        </section>

        <section className={commercial.section}>
          <h2 className={commercial.h2Large}>Related local services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {serviceCatalog
              .filter((item) => item.slug !== service.slug)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/service-areas/${area.slug}/${item.slug}`}
                  className={commercial.linkCard}
                >
                  <div className={`font-medium ${commercial.accent}`}>
                    {item.label} in {area.name}
                  </div>
                  <p className="mt-1 text-sm text-white/75">{item.description}</p>
                </Link>
              ))}
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: `${service.label} in ${area.name}`,
              serviceType: service.label,
              areaServed: {
                "@type": "City",
                name: area.name,
              },
              provider: {
                "@type": "LocalBusiness",
                name: "Gleam Pro Cleaning",
                url: "https://www.gleampro.ca",
                telephone: "+1-672-970-3755",
                email: "services@gleampro.ca",
              },
              description: `${service.label} available in ${area.name}.`,
              url: pageUrl,
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
                  item: `https://www.gleampro.ca/service-areas/${area.slug}`,
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: service.label,
                  item: pageUrl,
                },
              ],
            }),
          }}
        />
      </div>
    </main>
  );
}
