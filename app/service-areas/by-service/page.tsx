import Link from "next/link";
import { commercial } from "@/components/commercial/ui";
import { serviceCatalog } from "@/lib/service-catalog";
import { serviceAreas } from "@/lib/service-areas";

export const metadata = {
  title: "Service Areas by Cleaning Service | Gleam Pro Cleaning",
  description:
    "Explore commercial and residential cleaning services by city across Metro Vancouver, including offices, restaurants, recurring home cleaning, and deep cleaning.",
  alternates: {
    canonical: "/service-areas/by-service",
  },
};

const commercialServices = serviceCatalog.filter(
  (service) => service.category === "commercial"
);
const residentialServices = serviceCatalog.filter(
  (service) => service.category === "residential"
);

export default function ServiceAreasByServicePage() {
  return (
    <main className={commercial.shell}>
      <div className={commercial.page}>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className={commercial.glow} />
          <p className={commercial.eyebrow}>Service Areas by Service</p>
          <h1 className={commercial.h1}>
            Find cleaning services by city and service type
          </h1>
          <p className={commercial.lead}>
            Use this page to explore where each commercial and residential
            service is available across Metro Vancouver.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/service-areas" className={commercial.secondary}>
              View All Service Areas
            </Link>
            <Link
              href="/request-walkthrough?type=commercial"
              className={commercial.cta}
            >
              Request a Walk-Through
            </Link>
          </div>
        </section>

        <section className={commercial.section}>
          <h2 className={commercial.h2Large}>Commercial services by area</h2>
          <div className="mt-6 space-y-4">
            {commercialServices.map((service) => (
              <div key={service.href} className={commercial.cardSoft}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className={`text-base font-semibold ${commercial.accent}`}>
                    {service.label}
                  </h3>
                  <Link href={service.href} className={commercial.secondary}>
                    View Service
                  </Link>
                </div>
                <p className="mt-2 text-sm text-white/80">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <Link
                      key={`${service.slug}-${area.slug}`}
                      href={`/service-areas/${area.slug}/${service.slug}`}
                      className={commercial.pill}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={commercial.section}>
          <h2 className={commercial.h2Large}>Residential services by area</h2>
          <div className="mt-6 space-y-4">
            {residentialServices.map((service) => (
              <div key={service.href} className={commercial.cardSoft}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className={`text-base font-semibold ${commercial.accent}`}>
                    {service.label}
                  </h3>
                  <Link href={service.href} className={commercial.secondary}>
                    View Service
                  </Link>
                </div>
                <p className="mt-2 text-sm text-white/80">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <Link
                      key={`${service.slug}-${area.slug}`}
                      href={`/service-areas/${area.slug}/${service.slug}`}
                      className={commercial.pill}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
