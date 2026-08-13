import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, CalendarDays, UtensilsCrossed } from "lucide-react";
import { commercial } from "@/components/commercial/ui";

export const metadata: Metadata = {
  title: "Commercial Cleaning Insights",
  description:
    "Practical commercial cleaning guides, checklists, and planning advice for property managers and facility teams across Metro Vancouver.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Commercial Cleaning Insights | Gleam Pro",
    description:
      "Practical cleaning guides and checklists for Metro Vancouver property and facility teams.",
    url: "/insights",
    type: "website",
  },
};

export default function InsightsPage() {
  return (
    <div className={commercial.shell}>
      <div className="relative">
        <div className={commercial.glow} />
        <main className={`relative z-10 ${commercial.page}`}>
          <header className="max-w-3xl py-6 sm:py-10">
            <p className={commercial.eyebrow}>Gleam Pro Insights</p>
            <h1 className={commercial.h1}>
              Practical guidance for{" "}
              <span style={{ color: "#D4A574" }}>better-kept buildings.</span>
            </h1>
            <p className={commercial.lead}>
              Cleaning scopes, checklists, and operational advice for property
              managers and facility teams across Metro Vancouver.
            </p>
          </header>

          <section className={commercial.section} aria-labelledby="latest-insights">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className={commercial.eyebrow}>Operational guides</p>
                <h2 id="latest-insights" className={commercial.h2Large}>
                  Start with a scope people can verify.
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-5 border-t border-white/10 pt-8 lg:grid-cols-2">
              {[
                {
                  href: "/insights/restaurant-cleaning-checklist",
                  category: "Restaurants & pubs",
                  title: "Nightly Restaurant Cleaning Checklist",
                  description:
                    "A clear nightly handoff for front-of-house, washrooms, high-touch areas, floors, and scoped back-of-house support.",
                  icon: <UtensilsCrossed className="h-10 w-10" aria-hidden="true" />,
                },
                {
                  href: "/insights/property-manager-cleaning-checklist",
                  category: "Property management",
                  title: "Commercial Cleaning Checklist for Property Managers",
                  description:
                    "A daily, weekly, monthly, and seasonal framework for lobbies, corridors, elevators, amenities, and service areas.",
                  icon: <Building2 className="h-10 w-10" aria-hidden="true" />,
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group border border-white/10 bg-[#081A31] p-6 transition hover:border-white/25"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="text-[#D4A574]">{article.icon}</div>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:text-[#D4A574]" aria-hidden="true" />
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/50">
                    <span className={commercial.pill}>{article.category}</span>
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      August 13, 2026
                    </span>
                    <span>8 minute read</span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl leading-tight text-white">
                    {article.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/70">{article.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
