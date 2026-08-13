import type { Metadata } from "next";
import Link from "next/link";
import { Check, ClipboardList } from "lucide-react";
import { commercial } from "@/components/commercial/ui";

const articleUrl =
  "https://gleampro.ca/insights/property-manager-cleaning-checklist";
const publishedDate = "2026-08-13";

export const metadata: Metadata = {
  title: "Commercial Cleaning Checklist for Property Managers",
  description:
    "A practical commercial cleaning checklist for Metro Vancouver property managers, organized by daily, weekly, monthly, and seasonal building tasks.",
  alternates: {
    canonical: "/insights/property-manager-cleaning-checklist",
  },
  openGraph: {
    title: "Commercial Cleaning Checklist for Property Managers",
    description:
      "Build a clearer common-area cleaning scope with daily, weekly, monthly, and seasonal tasks.",
    url: "/insights/property-manager-cleaning-checklist",
    type: "article",
    publishedTime: publishedDate,
    modifiedTime: publishedDate,
    images: [
      {
        url: "/images/home/commercial-overview-cleaning.png",
        width: 1200,
        height: 630,
        alt: "Commercial common-area cleaning checklist for property managers",
      },
    ],
  },
};

const dailyTasks = [
  "Inspect and reset entrances, lobby floors, mats, and visible glass",
  "Vacuum or dust mop high-traffic corridors and elevator landings",
  "Clean elevator floors, controls, doors, and visible wall marks",
  "Empty common-area waste and replace liners",
  "Clean and disinfect shared washroom fixtures and touchpoints",
  "Check amenity rooms and shared kitchens after scheduled use",
  "Report spills, damage, supply shortages, or maintenance concerns",
];

const weeklyTasks = [
  "Detail floor edges, corners, baseboards, and elevator tracks",
  "Dust ledges, frames, vents, mailboxes, and reachable fixtures",
  "Clean interior entrance glass beyond daily spot cleaning",
  "Wipe stair rails, door plates, intercoms, and other touchpoints",
  "Detail amenity furniture, counters, cabinet fronts, and appliances",
  "Review garbage-room floors, doors, and high-contact surfaces",
];

const monthlyTasks = [
  "Review wall, door, and baseboard marks throughout shared areas",
  "Detail light fixtures, high ledges, vents, and low-access dust points",
  "Machine scrub suitable hard floors where routine mopping is insufficient",
  "Inspect carpet spotting needs and identify areas for extraction cleaning",
  "Review storage, service, and management-office areas included in scope",
  "Compare inspection findings with resident or tenant concerns",
];

const seasonalTasks = [
  "Adjust entrance mat and floor care for rain, salt, and winter moisture",
  "Schedule carpet extraction or upholstery cleaning based on traffic",
  "Plan floor refinishing, stripping, waxing, or sealing where applicable",
  "Deep-clean interior glass, frames, and difficult-to-reach edges",
  "Reset patios, shared outdoor entrances, and seasonal amenity spaces",
  "Review scope and frequency before peak occupancy or event periods",
];

export default function PropertyManagerCleaningChecklistPage() {
  return (
    <div className={commercial.shell}>
      <div className="relative">
        <div className={commercial.glow} />
        <main className="relative z-10 mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-white/55">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href="/insights" className="transition hover:text-white">Insights</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white/80">Property Manager Checklist</span>
          </nav>

          <article className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,760px)_260px] lg:items-start lg:justify-between">
            <div>
              <header>
                <p className={commercial.eyebrow}>Property Management Guide</p>
                <h1 className="font-display mt-5 text-[42px] font-light leading-[1.02] text-white sm:text-6xl lg:text-[72px]">
                  Commercial Cleaning Checklist for Property Managers
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  A useful cleaning scope should tell your team what gets done,
                  where it gets done, and how often. This framework helps property
                  managers turn broad expectations into a checklist that can be
                  quoted, inspected, and maintained.
                </p>
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-y border-white/10 py-4 text-xs uppercase tracking-[0.16em] text-white/50">
                  <span>Gleam Pro Cleaning</span>
                  <time dateTime={publishedDate}>August 13, 2026</time>
                  <span>8 minute read</span>
                </div>
              </header>

              <section id="building-profile" className="mt-14 scroll-mt-28">
                <h2 className={commercial.h2Large}>Start with the building profile</h2>
                <p className="mt-5 leading-7 text-white/75">
                  Frequency should follow actual use, not a generic template. A
                  busy rental tower with daily deliveries, pets, and evening
                  amenity bookings needs a different routine from a small strata
                  building with limited shared space.
                </p>
                <p className="mt-4 leading-7 text-white/75">
                  Before setting the checklist, document the number of floors,
                  entrances, elevators, washrooms, amenity rooms, floor materials,
                  waste areas, service windows, access rules, and known complaint
                  points. Also identify which duties belong to cleaning staff,
                  building staff, landscapers, or waste contractors.
                </p>
              </section>

              <ChecklistSection
                id="daily"
                label="Daily or per visit"
                heading="Protect the areas people notice first."
                intro="Daily tasks should concentrate on presentation, sanitation, waste, and safety in the building's busiest shared spaces."
                tasks={dailyTasks}
              />
              <ChecklistSection
                id="weekly"
                label="Weekly"
                heading="Catch detail work before it becomes buildup."
                intro="Weekly rotation keeps edges, touchpoints, fixtures, and secondary spaces from drifting below standard."
                tasks={weeklyTasks}
              />
              <ChecklistSection
                id="monthly"
                label="Monthly"
                heading="Inspect the building beyond the routine."
                intro="Monthly work should combine deeper cleaning with a management review of recurring marks, floor condition, and service concerns."
                tasks={monthlyTasks}
              />
              <ChecklistSection
                id="seasonal"
                label="Quarterly & seasonal"
                heading="Plan the work routine visits cannot solve."
                intro="Periodic projects protect floor finishes, fabrics, entrances, and other surfaces affected by weather and long-term traffic."
                tasks={seasonalTasks}
              />

              <section id="reporting" className={commercial.sectionAlt}>
                <p className={commercial.eyebrow}>Quality control</p>
                <h2 className={commercial.h2Large}>Make the checklist inspectable.</h2>
                <p className="mt-5 leading-7 text-white/75">
                  A checklist is only useful when the property manager can verify
                  the result. Define who receives service notes, how missed work is
                  reported, when inspections happen, and what requires a separate
                  maintenance request. Photos can help with unusual incidents, but
                  routine reporting should stay concise enough to be used every visit.
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Completion", "Record the visit date, service window, and completed rotation tasks."],
                    ["Exceptions", "Note blocked rooms, access issues, spills, damage, or missing supplies."],
                    ["Inspection", "Review a representative sample of areas on a consistent schedule."],
                    ["Resolution", "Define who responds, the expected timeframe, and how closure is confirmed."],
                  ].map(([title, text]) => (
                    <div key={title} className="border-l border-[#D4A574]/40 pl-4">
                      <h3 className={`${commercial.h3} ${commercial.accent}`}>{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="proposal" className="mt-14 scroll-mt-28 sm:mt-20">
                <h2 className={commercial.h2Large}>What to include in a cleaning proposal</h2>
                <p className="mt-5 leading-7 text-white/75">
                  Ask each provider to price the same documented scope. The
                  proposal should identify service frequency, included areas,
                  periodic work, supplies and consumables, access procedures,
                  communication expectations, insurance, and the process for
                  approving work outside the recurring agreement.
                </p>
                <div className={commercial.notice}>
                  <p className={commercial.noticeText}>
                    Need this checklist adapted to your strata, rental, or multi-tenant building?
                  </p>
                  <Link
                    href="/commercial-cleaning/property-management"
                    className={commercial.cta}
                  >
                    Explore Property Cleaning
                  </Link>
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="border border-white/10 bg-[#081A31] p-6">
                <ClipboardList className="h-7 w-7 text-[#D4A574]" aria-hidden="true" />
                <h2 className="mt-4 font-display text-xl text-white">In this guide</h2>
                <nav className="mt-4" aria-label="Article sections">
                  <ol className="space-y-3 text-sm text-white/65">
                    {[
                      ["Building profile", "#building-profile"],
                      ["Daily tasks", "#daily"],
                      ["Weekly tasks", "#weekly"],
                      ["Monthly tasks", "#monthly"],
                      ["Seasonal work", "#seasonal"],
                      ["Reporting", "#reporting"],
                      ["Proposal checklist", "#proposal"],
                    ].map(([label, href], index) => (
                      <li key={href}>
                        <a href={href} className="flex gap-3 transition hover:text-white">
                          <span className="text-[#D4A574]/70">{String(index + 1).padStart(2, "0")}</span>
                          <span>{label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
              <div className="mt-4 border border-emerald-400/20 bg-emerald-900/20 p-6">
                <p className="text-sm font-medium text-emerald-100">
                  Scope built around your building
                </p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Request a no-obligation on-site walk-through across Metro Vancouver.
                </p>
                <Link
                  href="/request-walkthrough?type=commercial"
                  className="mt-4 inline-flex text-sm font-medium text-white underline decoration-[#D4A574] underline-offset-4"
                >
                  Request a walk-through
                </Link>
              </div>
            </aside>
          </article>
        </main>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  headline: "Commercial Cleaning Checklist for Property Managers",
                  description:
                    "A practical commercial cleaning checklist organized by daily, weekly, monthly, and seasonal building tasks.",
                  image: "https://gleampro.ca/images/home/commercial-overview-cleaning.png",
                  datePublished: publishedDate,
                  dateModified: publishedDate,
                  mainEntityOfPage: articleUrl,
                  author: {
                    "@type": "Organization",
                    name: "Gleam Pro Cleaning",
                    url: "https://gleampro.ca",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "Gleam Pro Cleaning",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://gleampro.ca/logo-gpc.png",
                    },
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://gleampro.ca/" },
                    { "@type": "ListItem", position: 2, name: "Insights", item: "https://gleampro.ca/insights" },
                    { "@type": "ListItem", position: 3, name: "Property Manager Cleaning Checklist", item: articleUrl },
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

function ChecklistSection({
  id,
  label,
  heading,
  intro,
  tasks,
}: {
  id: string;
  label: string;
  heading: string;
  intro: string;
  tasks: string[];
}) {
  return (
    <section id={id} className="mt-14 scroll-mt-28 border-t border-white/10 pt-12 sm:mt-20">
      <p className={commercial.eyebrow}>{label}</p>
      <h2 className={`mt-4 ${commercial.h2Large}`}>{heading}</h2>
      <p className="mt-4 max-w-2xl leading-7 text-white/70">{intro}</p>
      <ul className="mt-7 divide-y divide-white/10 border-y border-white/10">
        {tasks.map((task) => (
          <li key={task} className="flex gap-4 py-4 text-[15px] leading-6 text-white/80">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-emerald-400/35 text-emerald-300">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
