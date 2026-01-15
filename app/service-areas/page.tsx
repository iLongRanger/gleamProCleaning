import Image from "next/image";
import Link from "next/link";
import { commercial } from "@/components/commercial/ui";
import { serviceAreas } from "@/lib/service-areas";

export const metadata = {
  title: "Service Areas | Gleam Pro Cleaning",
  description:
    "Service coverage across Metro Vancouver for commercial and residential cleaning.",
};

export default function ServiceAreasPage() {
  return (
    <main className={commercial.shell}>
      <div className={commercial.page}>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className={commercial.glow} />
          <p className={commercial.eyebrow}>Service Areas</p>
          <h1 className={commercial.h1}>Metro Vancouver cleaning coverage</h1>
          <p className={commercial.lead}>
            We serve commercial and residential clients across Metro Vancouver.
            Choose your city to see local coverage and the fastest way to get a
            quote.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className={`${commercial.linkCard} overflow-hidden`}
            >
              <div className="h-44 w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={area.image}
                  alt={area.imageAlt}
                  width={640}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white">
                {area.name}
              </h2>
              <p className="mt-2 text-white/80">{area.headline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {area.neighborhoods.slice(0, 4).map((item) => (
                  <span key={item} className={commercial.pill}>
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </section>

        <section className={commercial.sectionAlt}>
          <h2 className={commercial.h2Large}>Need a walkthrough or estimate?</h2>
          <p className={commercial.body}>
            We start commercial quotes with a walkthrough. Residential estimates
            are tailored to your home and schedule.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
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
      </div>
    </main>
  );
}
