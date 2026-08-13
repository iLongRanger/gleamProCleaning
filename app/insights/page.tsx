import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, CalendarDays } from "lucide-react";
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
                <p className={commercial.eyebrow}>Latest guide</p>
                <h2 id="latest-insights" className={commercial.h2Large}>
                  Start with a scope people can verify.
                </h2>
              </div>
              <span className={commercial.pill}>Property management</span>
            </div>

            <Link
              href="/insights/property-manager-cleaning-checklist"
              className="group mt-8 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[180px_minmax(0,1fr)_auto] lg:items-center"
            >
              <div className="flex aspect-square items-center justify-center border border-white/10 bg-[#081A31] text-[#D4A574]">
                <Building2 className="h-14 w-14" aria-hidden="true" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/50">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    August 13, 2026
                  </span>
                  <span>8 minute read</span>
                </div>
                <h3 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
                  Commercial Cleaning Checklist for Property Managers
                </h3>
                <p className="mt-3 max-w-2xl leading-7 text-white/70">
                  A practical daily, weekly, monthly, and seasonal framework for
                  lobbies, corridors, elevators, amenities, washrooms, and
                  service areas.
                </p>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition group-hover:border-[#D4A574]/60 group-hover:text-[#D4A574]">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Read the property manager checklist</span>
              </span>
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
