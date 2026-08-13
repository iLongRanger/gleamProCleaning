import type { Metadata } from "next";
import Link from "next/link";
import { Check, ClipboardList } from "lucide-react";
import { commercial } from "@/components/commercial/ui";

const articleUrl = "https://gleampro.ca/insights/restaurant-cleaning-checklist";
const publishedDate = "2026-08-13";

export const metadata: Metadata = {
  title: "Nightly Restaurant Cleaning Checklist",
  description:
    "A practical nightly restaurant cleaning checklist for front-of-house, washrooms, floors, high-touch areas, and clearly assigned back-of-house tasks.",
  alternates: { canonical: "/insights/restaurant-cleaning-checklist" },
  openGraph: {
    title: "Nightly Restaurant Cleaning Checklist | Gleam Pro",
    description:
      "Organize restaurant closing duties and professional cleaning tasks into a clear, repeatable nightly scope.",
    url: "/insights/restaurant-cleaning-checklist",
    type: "article",
    publishedTime: publishedDate,
    modifiedTime: publishedDate,
    images: [
      {
        url: "/images/home/taproom-cleaning.png",
        width: 1200,
        height: 630,
        alt: "Nightly cleaning in a restaurant or pub",
      },
    ],
  },
};

const frontOfHouseTasks = [
  "Remove waste and replace liners at assigned stations",
  "Wipe scoped tables, chairs, ledges, host stands, and service counters",
  "Spot-clean doors, partitions, interior glass, and visible wall marks",
  "Vacuum carpet and mats, including edges and under movable furniture",
  "Sweep or dust mop hard floors before the final wet-floor process",
  "Mop floors with the agreed product and allow safe drying time",
  "Reset entrances so mats, corners, and glass are ready for opening",
];

const washroomTasks = [
  "Clean and disinfect toilets, urinals, sinks, fixtures, and touchpoints",
  "Polish mirrors, dispensers, faucets, and other visible fixtures",
  "Spot-clean partitions, walls, doors, and handles",
  "Empty sanitary and general waste containers and replace liners",
  "Refill client-provided soap, paper, and other consumables",
  "Mop the full floor, including edges and behind fixtures where reachable",
  "Report leaks, damage, odour concerns, or low supply inventory",
];

const touchpointTasks = [
  "Entrance pulls, push plates, railings, and accessible door hardware",
  "Point-of-sale surrounds and guest-facing counter touch zones as scoped",
  "Light switches, staff-room handles, and common door controls",
  "Booth edges, chair backs, highchairs, and menus where assigned",
  "Washroom dispensers, faucets, locks, and support rails",
];

const rotatingTasks = [
  "Detail baseboards, floor edges, corners, and furniture feet",
  "Expand spot glass cleaning to full interior glass where included",
  "Dust high and low ledges, frames, vents, and reachable fixtures",
  "Machine scrub suitable hard floors or schedule deeper floor care",
  "Spot-clean upholstery or schedule carpet and fabric extraction",
  "Review wall marks and buildup in high-traffic routes",
];

export default function RestaurantCleaningChecklistPage() {
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
            <span className="text-white/80">Restaurant Cleaning Checklist</span>
          </nav>

          <article className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,760px)_260px] lg:items-start lg:justify-between">
            <div>
              <header>
                <p className={commercial.eyebrow}>Restaurant Operations Guide</p>
                <h1 className="font-display mt-5 text-[42px] font-light leading-[1.02] text-white sm:text-6xl lg:text-[72px]">
                  Nightly Restaurant Cleaning Checklist
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                  A restaurant cleaning program works best when closing staff and
                  professional cleaners know exactly where one scope ends and the
                  other begins. Use this checklist to build a repeatable nightly
                  routine for guest-facing and shared areas.
                </p>
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-y border-white/10 py-4 text-xs uppercase tracking-[0.16em] text-white/50">
                  <span>Gleam Pro Cleaning</span>
                  <time dateTime={publishedDate}>August 13, 2026</time>
                  <span>8 minute read</span>
                </div>
              </header>

              <section id="ownership" className="mt-14 scroll-mt-28">
                <h2 className={commercial.h2Large}>Assign ownership before the first clean</h2>
                <p className="mt-5 leading-7 text-white/75">
                  The most common source of missed work is not effort; it is an
                  unclear handoff. Closing staff may assume the cleaner handles a
                  task, while the cleaner&apos;s scope assumes staff completed it.
                  Write down who owns each area, the required result, and the
                  frequency.
                </p>
                <p className="mt-4 leading-7 text-white/75">
                  Restaurant staff generally retain responsibility for food-contact
                  surfaces, cooking equipment, food storage, dishwashing systems,
                  and the establishment&apos;s food-safety procedures unless a written
                  agreement explicitly says otherwise. Hood, duct, grease-trap,
                  pest-control, and other specialty work should also be assigned to
                  qualified providers.
                </p>
              </section>

              <ChecklistSection
                id="front-of-house"
                label="Every service night"
                heading="Front-of-house reset"
                intro="The opening impression depends on floors, entrances, furniture, glass, and waste being restored consistently after the final guest leaves."
                tasks={frontOfHouseTasks}
              />
              <ChecklistSection
                id="washrooms"
                label="Every service night"
                heading="Washroom cleaning"
                intro="Washrooms need a complete, documented reset rather than a quick visual check at closing."
                tasks={washroomTasks}
              />
              <ChecklistSection
                id="touchpoints"
                label="High-touch routine"
                heading="Define the surfaces people repeatedly touch"
                intro="Name the touchpoints in the scope so they do not disappear into a broad instruction such as clean the dining room."
                tasks={touchpointTasks}
              />

              <section id="back-of-house" className={commercial.sectionAlt}>
                <p className={commercial.eyebrow}>Back-of-house boundaries</p>
                <h2 className={commercial.h2Large}>Write the kitchen handoff in detail</h2>
                <p className="mt-5 leading-7 text-white/75">
                  If cleaners support back-of-house floors or non-food-contact
                  areas, define what must happen before they enter. Staff may need
                  to remove food, break down equipment, clear movable items, and
                  complete food-contact sanitation first. The cleaning scope should
                  identify approved chemistry, floor-drain handling, equipment that
                  cannot be moved, and any surfaces excluded from service.
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Staff closes", "Food, dishes, cooking equipment, and food-contact sanitation are completed according to the restaurant's procedures."],
                    ["Cleaner enters", "The agreed floors, waste points, washable non-food-contact surfaces, and support areas are accessible."],
                    ["Exceptions noted", "Blocked areas, spills, damage, supply shortages, and incomplete handoffs are reported."],
                    ["Opening verifies", "A manager checks critical areas before service and raises any issue through the agreed contact path."],
                  ].map(([title, text]) => (
                    <div key={title} className="border-l border-[#D4A574]/40 pl-4">
                      <h3 className={`${commercial.h3} ${commercial.accent}`}>{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
                    </div>
                  ))}
                </div>
              </section>

              <ChecklistSection
                id="rotating"
                label="Weekly & rotating"
                heading="Prevent detail work from drifting"
                intro="Not every task belongs on every visit. A written rotation keeps periodic work visible without overloading the nightly close."
                tasks={rotatingTasks}
              />

              <section id="quality" className="mt-14 scroll-mt-28 sm:mt-20">
                <h2 className={commercial.h2Large}>Use a short opening check</h2>
                <p className="mt-5 leading-7 text-white/75">
                  The opening manager should be able to inspect the restaurant in a
                  few minutes: entrance, dining-room floors, washrooms, visible
                  glass, waste points, and any scoped back-of-house area. Record
                  recurring misses by location and task, then adjust the checklist
                  or frequency instead of relying on vague feedback.
                </p>
                <div className={commercial.notice}>
                  <p className={commercial.noticeText}>
                    Need a nightly scope built around your closing time and floor plan?
                  </p>
                  <Link href="/commercial-cleaning/restaurants" className={commercial.cta}>
                    Explore Restaurant Cleaning
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
                      ["Scope ownership", "#ownership"],
                      ["Front of house", "#front-of-house"],
                      ["Washrooms", "#washrooms"],
                      ["High-touch areas", "#touchpoints"],
                      ["Back of house", "#back-of-house"],
                      ["Rotating work", "#rotating"],
                      ["Opening check", "#quality"],
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
                <p className="text-sm font-medium text-emerald-100">Open-ready by morning</p>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Request an on-site walk-through for your restaurant, pub, or cafe.
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
                  headline: "Nightly Restaurant Cleaning Checklist",
                  description:
                    "A practical nightly restaurant cleaning checklist for front-of-house, washrooms, high-touch areas, and clearly assigned back-of-house tasks.",
                  image: "https://gleampro.ca/images/home/taproom-cleaning.png",
                  datePublished: publishedDate,
                  dateModified: publishedDate,
                  mainEntityOfPage: articleUrl,
                  author: { "@type": "Organization", name: "Gleam Pro Cleaning", url: "https://gleampro.ca" },
                  publisher: {
                    "@type": "Organization",
                    name: "Gleam Pro Cleaning",
                    logo: { "@type": "ImageObject", url: "https://gleampro.ca/logo-gpc.png" },
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://gleampro.ca/" },
                    { "@type": "ListItem", position: 2, name: "Insights", item: "https://gleampro.ca/insights" },
                    { "@type": "ListItem", position: 3, name: "Restaurant Cleaning Checklist", item: articleUrl },
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
