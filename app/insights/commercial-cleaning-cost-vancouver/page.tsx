import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, ClipboardList } from "lucide-react";
import { commercial } from "@/components/commercial/ui";
import { site } from "@/lib/site";

const path = "/insights/commercial-cleaning-cost-vancouver";
const articleUrl = `${site.url}${path}`;
const publishedDate = "2026-09-16";
const title = "Commercial Cleaning Costs in Metro Vancouver";
const description =
  "Understand commercial cleaning costs in Metro Vancouver: pricing factors, service frequency, proposal comparisons, and what to prepare for a free walkthrough.";

export const metadata: Metadata = {
  title: { absolute: "Commercial Cleaning Costs Vancouver | Gleam Pro" },
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    type: "article",
    publishedTime: publishedDate,
    modifiedTime: publishedDate,
    authors: [site.name],
    images: [{ url: site.socialImage, width: 1200, height: 630, alt: title }],
  },
};

const factors = [
  ["The area that actually needs cleaning", "Total floor area is a starting point. A walkthrough also identifies occupied rooms, shared areas, flooring, furniture, and spaces excluded from the scope. Two buildings with the same square footage can require different amounts of work."],
  ["Facility use and foot traffic", "An office, restaurant, clinic, and shared residential building have different routines. Washroom use, food-service areas, public entrances, and frequently touched surfaces affect the checklist and time needed."],
  ["Tasks and cleaning frequency", "A quote should distinguish tasks performed every visit from weekly or monthly detail work. Increasing visits changes the monthly total, while longer gaps between visits may leave more work to complete each time."],
  ["Flooring and periodic detail work", "Routine vacuuming and mopping are different from carpet extraction, upholstery cleaning, or machine floor care. Identify periodic services separately so the recurring price is easy to understand."],
  ["Access and the available work window", "Keys, alarm procedures, elevators, parking, and the time between closing and opening all affect the service plan. Discuss these during the walkthrough rather than assuming every after-hours schedule is available."],
  ["Supplies and agreed responsibilities", "Clarify who provides cleaning equipment, products, waste liners, and washroom consumables. If your site requires specific products or procedures, include those requirements before comparing prices."],
] as const;

const proposalChecks = [
  "The same rooms and approximate cleanable area are included in each quote.",
  "The number of visits and agreed access times are stated in writing.",
  "Each task has a frequency: every visit, weekly, monthly, or separately scheduled.",
  "Periodic floor care, deep cleaning, and other add-ons are clearly identified.",
  "Supplies, consumables, exclusions, and any applicable taxes are explained.",
  "There is a named contact and a clear way to report missed work.",
  "Trial, cancellation, and service-change terms are available before you start.",
] as const;

const questions = [
  {
    question: "How much does commercial cleaning cost in Vancouver?",
    answer: "There is no single price that fits every facility. Gleam Pro bases its written quote on the cleanable area, facility use, task list, cleaning frequency, and access requirements. A free walkthrough helps establish the scope before a price is agreed.",
  },
  {
    question: "Does Gleam Pro publish an hourly or per-square-foot rate?",
    answer: "Gleam Pro does not publish a standard commercial hourly or per-square-foot rate. We quote the agreed work for your property rather than using a generic rate as a substitute for a site assessment.",
  },
  {
    question: "Is nightly cleaning always the right choice?",
    answer: "No. Cleaning frequency should reflect how the property is used and which areas need attention. High-use washrooms, busy entrances, and food-service spaces may need a different routine from a lightly used office. We review the schedule during the walkthrough.",
  },
  {
    question: "Are deep cleaning and carpet cleaning included in recurring service?",
    answer: "Include these only when they are explicitly listed in your written scope. Routine service and periodic detail work should be identified separately, including the areas covered and how often the work is scheduled.",
  },
  {
    question: "Can I request a quote outside Vancouver?",
    answer: "Yes. Gleam Pro serves Burnaby, New Westminster, Vancouver, Richmond, Surrey, Coquitlam, Delta, North Vancouver, and West Vancouver. Share your address and preferred timing so we can confirm a suitable service plan.",
  },
] as const;

export default function CommercialCleaningCostPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: title,
        description,
        mainEntityOfPage: articleUrl,
        image: `${site.url}${site.socialImage}`,
        datePublished: `${publishedDate}T09:00:00-07:00`,
        dateModified: `${publishedDate}T09:00:00-07:00`,
        author: { "@type": "Organization", name: site.name, url: `${site.url}/about` },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
          logo: { "@type": "ImageObject", url: `${site.url}/logo-gpc.png` },
        },
        inLanguage: "en-CA",
        articleSection: "Commercial cleaning planning",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Cleaning insights", item: `${site.url}/insights` },
          { "@type": "ListItem", position: 3, name: "Commercial cleaning costs", item: articleUrl },
        ],
      },
    ],
  };

  return (
    <div className={commercial.shell}>
      <div className={commercial.page}>
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-[#4B5968]">
          <Link href="/" className="underline underline-offset-4">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/insights" className="underline underline-offset-4">Cleaning insights</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Commercial cleaning costs</span>
        </nav>

        <article>
          <header className="mt-10 max-w-4xl">
            <p className={commercial.eyebrow}>A clearer quote starts here</p>
            <h1 className={commercial.h1}>{title}</h1>
            <p className={commercial.lead}>
              Know what you are comparing before you choose a cleaning company.
              A practical guide for business owners, office managers, and property teams.
            </p>
            <p className="mt-6 text-sm text-[#4B5968]">
              By <Link href="/about" className="underline underline-offset-4">{site.name}</Link>
              {" · "}<time dateTime={publishedDate}>September 16, 2026</time>
            </p>
          </header>

          <section className={commercial.sectionAlt} aria-labelledby="quick-answer">
            <p className={commercial.eyebrow}>The short answer</p>
            <h2 id="quick-answer" className={`mt-3 ${commercial.h2}`}>How much will your commercial cleaning cost?</h2>
            <p className={commercial.body}>
              Commercial cleaning costs depend on your cleanable floor area, facility use,
              cleaning frequency, task list, and access requirements. Gleam Pro does not
              publish a universal hourly or square-foot rate: we assess your space during
              a free, approximately 15-minute walkthrough and provide a written proposal
              within 24 hours after the visit. Your scope and price are agreed before cleaning begins.
            </p>
            <Link href={site.quoteHref} className={`mt-6 ${commercial.cta}`}>
              Get a quote for your space <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>

          <nav aria-label="In this guide" className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#055F4B]">
            {[["pricing-factors", "Pricing factors"], ["frequency", "Service frequency"], ["compare-quotes", "Compare quotes"], ["walkthrough", "Prepare for a walkthrough"], ["questions", "Common questions"]].map(([id, label]) => (
              <a key={id} href={`#${id}`} className="py-2 underline underline-offset-4">{label}</a>
            ))}
          </nav>

          <section id="pricing-factors" className={`scroll-mt-40 ${commercial.section}`} aria-labelledby="factors-heading">
            <p className={commercial.eyebrow}>What changes the quote</p>
            <h2 id="factors-heading" className={`mt-3 ${commercial.h2Large}`}>Six factors behind the price.</h2>
            <dl className="mt-8 grid gap-6 md:grid-cols-2">
              {factors.map(([heading, body], index) => (
                <div key={heading} className="border-t border-[#D8CEB9] pt-5">
                  <dt className="flex gap-3 font-semibold text-[#055F4B]">
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{heading}
                  </dt>
                  <dd className={commercial.body}>{body}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="frequency" className={`scroll-mt-40 ${commercial.section}`} aria-labelledby="frequency-heading">
            <h2 id="frequency-heading" className={commercial.h2Large}>Compare the schedule as well as the total.</h2>
            <p className={commercial.body}>
              A lower monthly figure may cover fewer visits or a shorter checklist.
              Ask each provider to quote the same areas, tasks, and frequency.
              Then compare what is included, rather than treating the headline price as the whole proposal.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["Offices & workplaces", "Plan around occupancy, shared kitchens, washroom use, and the days your team is on site.", "/commercial-cleaning/offices", "Office cleaning scope"],
                ["Restaurants & pubs", "Agree on the nightly handoff and distinguish front-of-house work from specifically scoped back-of-house tasks.", "/commercial-cleaning/restaurants", "Restaurant cleaning scope"],
                ["Managed properties", "Separate high-traffic common-area routines from rotating detail work in corridors, amenities, and service areas.", "/commercial-cleaning/property-management", "Property management scope"],
              ].map(([heading, body, href, label]) => (
                <div key={href} className={commercial.card}>
                  <h3 className={commercial.h3}>{heading}</h3>
                  <p className={commercial.body}>{body}</p>
                  <Link href={href} className="mt-5 inline-block py-2 text-sm font-semibold text-[#055F4B] underline underline-offset-4">{label}</Link>
                </div>
              ))}
            </div>
          </section>

          <section id="compare-quotes" className={`scroll-mt-40 ${commercial.sectionAlt}`} aria-labelledby="compare-heading">
            <ClipboardList className="h-8 w-8 text-[#055F4B]" aria-hidden="true" />
            <h2 id="compare-heading" className={`mt-4 ${commercial.h2Large}`}>A checklist for comparing cleaning proposals.</h2>
            <ul className="mt-6 space-y-4">
              {proposalChecks.map((item) => (
                <li key={item} className="flex gap-3 text-[#4B5968]">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[#055F4B]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className={commercial.body}>
              Ask for clarification when a proposal says only “general cleaning.”
              A usable scope explains what will be done and how you can check it.
              Our <Link href="/insights/property-manager-cleaning-checklist" className="font-semibold text-[#055F4B] underline underline-offset-4">property manager checklist</Link>
              {" and "}<Link href="/insights/restaurant-cleaning-checklist" className="font-semibold text-[#055F4B] underline underline-offset-4">restaurant cleaning checklist</Link>
              {" "}can help you prepare the task list.
            </p>
          </section>

          <section id="walkthrough" className={`scroll-mt-40 ${commercial.section}`} aria-labelledby="walkthrough-heading">
            <h2 id="walkthrough-heading" className={commercial.h2Large}>What to prepare for your free walkthrough.</h2>
            <p className={commercial.body}>
              Have your business address, approximate floor area, opening hours,
              preferred cleaning days, and priority areas ready. A floor plan or a current
              checklist is useful if you have one. Point out recurring problems such as
              entrance soil, washroom shortages, floor marks, or missed detail work.
            </p>
            <p className={commercial.body}>
              Show us the access route and any storage areas, alarms, or building rules
              that affect the work. Tell us which tasks your own team handles and which
              you want included. We can then build a proposal around the actual handoff,
              rather than relying on square footage alone.
            </p>
            <p className={commercial.body}>
              Based in New Westminster, we serve businesses across Metro Vancouver,
              with nightly routes focused on Burnaby, New Westminster, and Vancouver.
              Check our <Link href="/service-areas" className="font-semibold text-[#055F4B] underline underline-offset-4">service areas</Link>
              {" "}and share your location so we can review timing for your property.
            </p>
          </section>

          <section id="questions" className={`scroll-mt-40 ${commercial.section}`} aria-labelledby="questions-heading">
            <h2 id="questions-heading" className={commercial.h2Large}>Common commercial cleaning pricing questions.</h2>
            <div className="mt-8 divide-y divide-[#D8CEB9]">
              {questions.map(({ question, answer }) => (
                <details key={question} className="py-5">
                  <summary className="cursor-pointer py-2 font-semibold text-[#055F4B]">{question}</summary>
                  <p className={commercial.body}>{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className={commercial.sectionDark} aria-labelledby="quote-heading">
            <p className={commercial.eyebrow}>A price built around your property</p>
            <h2 id="quote-heading" className={`mt-3 ${commercial.h2Large}`}>Get a clear scope and a written quote.</h2>
            <p className={commercial.body}>Tell us about your space. We will review the work, access, and schedule before recommending the next step.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={site.quoteHref} className={commercial.cta}>Request a free walkthrough</Link>
              <a href={`tel:${site.telephone}`} className={commercial.secondary}>Call {site.phone}</a>
            </div>
          </section>
        </article>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </div>
  );
}
