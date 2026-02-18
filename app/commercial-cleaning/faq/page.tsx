import Link from "next/link";
import { commercial } from "@/components/commercial/ui";

export const metadata = {
  title: "Commercial Cleaning FAQ | Metro Vancouver | Gleam Pro Cleaning",
  description:
    "Answers to the most searched commercial cleaning questions: pricing, scope, frequency, supplies, after-hours service, insurance, and onboarding.",
  alternates: {
    canonical: "/commercial-cleaning/faq",
  },
};

const faqItems = [
  {
    q: "How much does commercial cleaning cost in Metro Vancouver?",
    a: "Pricing usually depends on square footage, traffic, number of washrooms, floor types, and service frequency. Most businesses get a fixed monthly proposal after a walk-through so scope and pricing are clear.",
  },
  {
    q: "What is included in commercial cleaning services?",
    a: "Most scopes include trash and recycling, washroom cleaning and disinfection, high-touch point wiping, floor care, kitchen or breakroom cleaning, and spot glass. Exact tasks are customized by facility type.",
  },
  {
    q: "How often should a commercial space be cleaned?",
    a: "High-traffic facilities often need daily or 5x-week service, while lower-traffic sites may run weekly or bi-weekly. The right schedule is based on occupancy, hours, and compliance expectations.",
  },
  {
    q: "Do you clean after hours or on weekends?",
    a: "Yes. After-hours and weekend cleaning is common for offices, restaurants, and shared facilities that need minimal disruption during operating hours.",
  },
  {
    q: "Do you bring supplies and equipment?",
    a: "We can provide cleaning tools and products. Many clients prefer to supply consumables like paper products, liners, and soap. This is finalized during onboarding.",
  },
  {
    q: "Are your cleaners insured and bonded?",
    a: "Professional commercial cleaning providers should carry liability coverage and worker protection. We review coverage details and site requirements before service starts.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "Not always. Contract length and terms vary by provider and service complexity. We recommend focusing on clear scope, service levels, and communication standards first.",
  },
  {
    q: "How long does onboarding take after a walk-through?",
    a: "Most projects can start quickly once scope, access procedures, and schedule are approved. Larger or multi-site accounts may need additional planning time.",
  },
  {
    q: "Can you customize checklists for our facility?",
    a: "Yes. Commercial cleaning should be checklist-based by area, frequency, and priority. Custom checklists are especially important for restaurants, offices, and community facilities.",
  },
  {
    q: "Do you offer green cleaning options?",
    a: "Yes. Many businesses request low-odor or eco-conscious products, especially in occupied spaces. Product selection can be aligned with your policy requirements.",
  },
  {
    q: "How do you maintain quality and consistency?",
    a: "Consistency comes from documented scope, recurring checklists, periodic inspections, and fast issue follow-up. A clear communication process prevents service drift.",
  },
  {
    q: "What should we prepare before the first clean?",
    a: "Provide access instructions, alarm or key protocols, approved service windows, and site priorities. If consumables are client-supplied, ensure they are stocked before the first visit.",
  },
];

export default function CommercialCleaningFaqPage() {
  return (
    <div className={commercial.shell}>
      <div className="relative">
        <div className={commercial.glow} />
        <main className={`relative z-10 ${commercial.page}`}>
          <section className={commercial.section}>
            <p className={commercial.eyebrow}>Commercial Cleaning FAQ</p>
            <h1 className={commercial.h1}>
              Most asked commercial cleaning questions
            </h1>
            <p className={commercial.lead}>
              This page answers the questions businesses ask most before hiring
              a commercial cleaning provider in Metro Vancouver.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
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
          </section>

          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faqItems.map((item) => (
                <Faq key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </section>

          <section className={commercial.section}>
            <h2 className={commercial.h2Large}>Related commercial pages</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link
                href="/commercial-cleaning/restaurants"
                className={commercial.linkCard}
              >
                <div className={`font-medium ${commercial.accent}`}>
                  Restaurant Cleaning
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Inspection-focused routines for food-service environments.
                </div>
              </Link>
              <Link href="/commercial-cleaning/offices" className={commercial.linkCard}>
                <div className={`font-medium ${commercial.accent}`}>
                  Office Cleaning
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Recurring cleaning for desks, meeting rooms, and shared spaces.
                </div>
              </Link>
              <Link
                href="/commercial-cleaning/community-facilities"
                className={commercial.linkCard}
              >
                <div className={`font-medium ${commercial.accent}`}>
                  Community Facilities
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Flexible schedules for multi-room and high-traffic properties.
                </div>
              </Link>
            </div>
          </section>

          <section className={commercial.sectionDark}>
            <h2 className={commercial.h2Large}>Need a tailored scope?</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              We will review your site, build a clear checklist, and provide a
              fixed proposal based on your facility and schedule.
            </p>
            <div className="mt-6">
              <Link
                href="/request-walkthrough?type=commercial"
                className={commercial.ctaLight}
              >
                Book Your Walk-Through
              </Link>
            </div>
          </section>
        </main>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className={commercial.cardSoft}>
      <p className={`text-sm font-semibold ${commercial.accent}`}>{q}</p>
      <p className="mt-2 text-sm leading-6 text-white/80">{a}</p>
    </div>
  );
}
