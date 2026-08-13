import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  ClipboardCheck,
  Clock3,
  MessageSquareText,
} from "lucide-react";
import { commercial } from "@/components/commercial/ui";
import { serviceAreas } from "@/lib/service-areas";

const canonicalUrl =
  "https://gleampro.ca/commercial-cleaning/property-management";

const faqs = [
  {
    question: "Do you clean strata and multi-unit residential buildings?",
    answer:
      "Yes. We build recurring scopes for shared areas such as lobbies, corridors, elevators, amenity rooms, washrooms, and building entrances. The exact scope is confirmed during an on-site walk-through.",
  },
  {
    question: "Can you provide cleaning reports to a property manager?",
    answer:
      "Yes. We can document completed visits, note supply or maintenance concerns, and provide a clear contact path for follow-up items. Reporting expectations are included in the written scope.",
  },
  {
    question: "Can cleaning be scheduled outside busy building hours?",
    answer:
      "Yes. We offer early-morning, daytime, evening, and custom recurring schedules based on access, resident traffic, tenant activity, and building rules.",
  },
  {
    question: "What affects the price of common-area cleaning?",
    answer:
      "Pricing depends on the number of floors and shared spaces, traffic levels, floor materials, washroom count, service frequency, access requirements, and any periodic floor or glass work.",
  },
];

export const metadata: Metadata = {
  title: "Property Management Cleaning in Metro Vancouver",
  description:
    "Common-area and strata cleaning for property managers across Metro Vancouver. Clear scopes, consistent teams, inspections, and responsive reporting.",
  alternates: {
    canonical: "/commercial-cleaning/property-management",
  },
  openGraph: {
    title: "Property Management Cleaning in Metro Vancouver | Gleam Pro",
    description:
      "Reliable common-area cleaning for strata, rental, and multi-tenant properties across Metro Vancouver.",
    url: "/commercial-cleaning/property-management",
    type: "website",
    images: [
      {
        url: "/images/home/commercial-overview-cleaning.png",
        width: 1200,
        height: 630,
        alt: "Gleam Pro commercial common-area cleaning",
      },
    ],
  },
};

export default function PropertyManagementCleaningPage() {
  return (
    <div className={commercial.shell}>
      <div className="relative">
        <div className={commercial.glow} />
        <main className={`relative z-10 ${commercial.page}`}>
          <section className={commercial.section}>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
              <div className="max-w-3xl">
                <p className={commercial.eyebrow}>
                  Commercial Cleaning &bull; Property Management
                </p>
                <h1 className={commercial.h1}>
                  Common-area cleaning that keeps your properties{" "}
                  <span style={{ color: "#D4A574" }}>ready every day.</span>
                </h1>
                <p className={commercial.lead}>
                  We help property managers maintain clean, presentable strata,
                  rental, and multi-tenant buildings with documented scopes,
                  consistent teams, and straightforward issue reporting across
                  Metro Vancouver.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/request-walkthrough?type=commercial"
                    className={commercial.cta}
                  >
                    Request a Free Walk-Through
                  </Link>
                  <Link href="/commercial-cleaning" className={commercial.secondary}>
                    Back to Commercial Cleaning
                  </Link>
                </div>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Clear tasks by area and frequency",
                    "Named teams for recurring properties",
                    "Quality checks and issue follow-up",
                    "Scheduling around residents and tenants",
                  ].map((item) => (
                    <li key={item} className={commercial.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className={commercial.cardSoft} aria-label="Property types served">
                <Building2 className="h-8 w-8 text-[#D4A574]" aria-hidden="true" />
                <h2 className={`mt-5 ${commercial.h3} ${commercial.accent}`}>
                  Built for managed properties
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li>Strata and condominium buildings</li>
                  <li>Purpose-built rental properties</li>
                  <li>Multi-tenant commercial buildings</li>
                  <li>Mixed-use developments</li>
                  <li>Shared amenity and common areas</li>
                </ul>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className={`text-sm font-medium ${commercial.accent}`}>
                    Typical cadence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Daily, several times per week, weekly, or a custom schedule
                    based on traffic and building priorities.
                  </p>
                </div>
              </aside>
            </div>
          </section>

          <section className={commercial.section}>
            <p className={commercial.eyebrow}>A scope residents can see</p>
            <h2 className={commercial.h2Large}>
              Common areas covered from entrance to amenity floor.
            </h2>
            <p className={commercial.lead}>
              Every proposal is built after a walk-through. These are the areas
              property managers most often include in a recurring program.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <ScopeCard
                title="Lobbies & Entrances"
                items={[
                  "Vacuum, dust mop, or mop floors",
                  "Reset entrance mats and floor edges",
                  "Spot-clean interior glass and doors",
                  "Wipe handles, intercoms, and touchpoints",
                ]}
              />
              <ScopeCard
                title="Corridors & Elevators"
                items={[
                  "Vacuum carpeted corridors",
                  "Mop hard-surface floors",
                  "Clean elevator tracks and visible surfaces",
                  "Spot-clean doors, walls, and baseboards",
                ]}
              />
              <ScopeCard
                title="Amenity Spaces"
                items={[
                  "Clean shared kitchens and counters",
                  "Reset meeting and activity rooms",
                  "Disinfect high-touch surfaces",
                  "Remove waste and replace liners",
                ]}
              />
              <ScopeCard
                title="Washrooms"
                items={[
                  "Clean and disinfect fixtures",
                  "Polish mirrors and dispensers",
                  "Mop floors and spot-clean partitions",
                  "Refill client-provided consumables",
                ]}
              />
              <ScopeCard
                title="Service Areas"
                items={[
                  "Garbage-room floor and touchpoint cleaning",
                  "Mailroom and parcel-area resets",
                  "Stairwell sweeping and spot cleaning",
                  "Management-office cleaning as scoped",
                ]}
              />
              <ScopeCard
                title="Periodic Work"
                items={[
                  "Machine floor scrubbing",
                  "Carpet and upholstery cleaning",
                  "Interior glass detailing",
                  "Seasonal entrance and edge detailing",
                ]}
              />
            </div>
          </section>

          <section className="mt-14 grid gap-5 sm:mt-20 md:grid-cols-3">
            <ProcessCard
              icon={<ClipboardCheck className="h-6 w-6" aria-hidden="true" />}
              number="01"
              title="Walk-through & scope"
              text="We review every shared area, floor type, access point, concern, and service frequency with your property team."
            />
            <ProcessCard
              icon={<Clock3 className="h-6 w-6" aria-hidden="true" />}
              number="02"
              title="Scheduled delivery"
              text="A recurring team follows the written checklist at agreed times, with rotating detail work built into the schedule."
            />
            <ProcessCard
              icon={<MessageSquareText className="h-6 w-6" aria-hidden="true" />}
              number="03"
              title="Reporting & follow-up"
              text="Your manager has a clear contact for service notes, supply concerns, maintenance observations, and issue resolution."
            />
          </section>

          <section className={commercial.sectionAlt}>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className={commercial.eyebrow}>Operational consistency</p>
                <h2 className={commercial.h2Large}>
                  Less time chasing cleaners. More confidence in the building.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Documented scope", "Tasks are assigned by area and cadence so expectations stay clear."],
                  ["Quality checks", "Recurring inspections identify drift before it becomes a complaint."],
                  ["Responsive contact", "Managers have a direct path for questions and service follow-up."],
                  ["Multi-site planning", "Scopes can be standardized while respecting each property's needs."],
                ].map(([title, text]) => (
                  <div key={title} className="border-l border-[#D4A574]/40 pl-4">
                    <h3 className={`${commercial.h3} ${commercial.accent}`}>{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>Property cleaning across Metro Vancouver</h2>
            <p className={commercial.lead}>
              Based in New Westminster, we support managed properties throughout
              the Lower Mainland with recurring common-area cleaning.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}/property-management`}
                  className={commercial.pill}
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </section>

          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>Common questions</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.question} className={commercial.cardSoft}>
                  <h3 className={`${commercial.h3} ${commercial.accent}`}>
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={commercial.sectionDark}>
            <p className={commercial.eyebrow}>A clearer building-wide scope</p>
            <h2 className={commercial.h2Large}>
              Let&apos;s walk the property before we price it.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/75">
              Show us the traffic patterns, recurring concerns, and spaces that
              matter most. We&apos;ll return a written scope and proposal built for
              your building.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/request-walkthrough?type=commercial"
                className={commercial.ctaLight}
              >
                Request a Free Walk-Through
              </Link>
              <a href="tel:+17782230719" className={commercial.secondary}>
                Call 778 223 0719
              </a>
            </div>
          </section>
        </main>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  name: "Property Management and Common-Area Cleaning",
                  serviceType: "Property Management Cleaning",
                  description:
                    "Recurring common-area cleaning for strata, rental, mixed-use, and multi-tenant properties across Metro Vancouver.",
                  url: canonicalUrl,
                  provider: { "@id": "https://gleampro.ca/#localbusiness" },
                  areaServed: serviceAreas.map((area) => ({
                    "@type": "City",
                    name: area.name,
                  })),
                },
                {
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
                      name: "Commercial Cleaning",
                      item: "https://gleampro.ca/commercial-cleaning",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "Property Management Cleaning",
                      item: canonicalUrl,
                    },
                  ],
                },
                {
                  "@type": "FAQPage",
                  mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: faq.answer,
                    },
                  })),
                },
              ],
            }),
          }}
        />
      </div>
    </div>
  );
}

function ScopeCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className={commercial.cardSoft}>
      <h3 className={`${commercial.h3} ${commercial.accent}`}>{title}</h3>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-white/75">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0FA36B]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ProcessCard({
  icon,
  number,
  title,
  text,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className={commercial.card}>
      <div className="flex items-center justify-between text-[#D4A574]">
        {icon}
        <span className="font-display text-3xl text-white/15">{number}</span>
      </div>
      <h2 className={`mt-6 ${commercial.h3} ${commercial.accent}`}>{title}</h2>
      <p className="mt-3 text-sm leading-6 text-white/75">{text}</p>
    </article>
  );
}
