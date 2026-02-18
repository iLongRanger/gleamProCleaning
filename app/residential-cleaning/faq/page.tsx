import Link from "next/link";
import { residential } from "@/components/residential/ui";

export const metadata = {
  title: "Residential Cleaning FAQ | Metro Vancouver | Gleam Pro Cleaning",
  description:
    "Answers to common residential cleaning questions: pricing, what is included, frequency, supplies, pets, deep cleaning, move-in/out, and booking policies.",
  alternates: {
    canonical: "/residential-cleaning/faq",
  },
};

const faqItems = [
  {
    q: "How much does residential cleaning cost in Metro Vancouver?",
    a: "Pricing usually depends on home size, current condition, bathrooms, service type, and visit frequency. Most homes receive a custom estimate after details are reviewed.",
  },
  {
    q: "What is included in a standard home cleaning?",
    a: "Typical service includes kitchens, bathrooms, floors, dusting, high-touch surfaces, trash removal, and general reset of living areas and bedrooms.",
  },
  {
    q: "How often should I schedule house cleaning?",
    a: "Many homes choose weekly or bi-weekly service for consistent upkeep. Monthly cleaning can work for lighter-use homes or clients who maintain between visits.",
  },
  {
    q: "What is the difference between standard and deep cleaning?",
    a: "Standard cleaning handles routine maintenance, while deep cleaning adds extra detail work in buildup-prone areas such as baseboards, fixtures, and hard-to-reach spots.",
  },
  {
    q: "Do you bring cleaning supplies and equipment?",
    a: "Yes, we can provide supplies and equipment. If you prefer specific products for allergies, surfaces, or scent sensitivity, we can align to your preferences.",
  },
  {
    q: "Do you offer pet-friendly cleaning?",
    a: "Yes. We can use pet-conscious approaches and coordinate around pets in the home. Let us know your preferences before your appointment.",
  },
  {
    q: "How long does a home cleaning appointment take?",
    a: "Timing varies by home size, layout, and condition. First visits and deep cleanings usually take longer than recurring maintenance visits.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "Not necessarily. Many clients provide secure entry instructions. We can work with your preferred access process and communication plan.",
  },
  {
    q: "What should I do before the cleaners arrive?",
    a: "A quick tidy of personal items helps the team focus on cleaning. Please also share any priority areas, surface cautions, or access notes in advance.",
  },
  {
    q: "Can I customize my cleaning checklist?",
    a: "Yes. We can tailor priorities by room, include add-ons, and adjust the scope over time based on your household needs and schedule.",
  },
  {
    q: "What is your cancellation or rescheduling policy?",
    a: "Policies vary by booking type, but advance notice is always recommended so your appointment can be moved without service disruption.",
  },
  {
    q: "Do you provide move-in and move-out cleaning?",
    a: "Yes. Move-in/out service focuses on turnover-ready results and can be scoped for homes, apartments, and rental properties.",
  },
];

export default function ResidentialCleaningFaqPage() {
  return (
    <div className={residential.shell}>
      <div className="relative">
        <div className={residential.glow} />
        <main className={`relative z-10 ${residential.page}`}>
          <section className={residential.section}>
            <p className={residential.eyebrow}>Residential Cleaning FAQ</p>
            <h1 className={residential.h1}>
              Most asked residential cleaning questions
            </h1>
            <p className={residential.lead}>
              This page covers the questions homeowners ask most before booking
              residential cleaning in Metro Vancouver.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/request-walkthrough?type=residential"
                className={residential.cta}
              >
                Get a Free Home Estimate
              </Link>
              <Link
                href="/residential-cleaning"
                className={residential.secondary}
              >
                Back to Residential Cleaning
              </Link>
            </div>
          </section>

          <section className={residential.section}>
            <h2 className={residential.h2Large}>FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faqItems.map((item) => (
                <Faq key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </section>

          <section className={residential.section}>
            <h2 className={residential.h2Large}>Related residential pages</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link
                href="/residential-cleaning/recurring"
                className={residential.linkCard}
              >
                <div className={`font-medium ${residential.accent}`}>
                  Recurring Cleaning
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Weekly, bi-weekly, or monthly maintenance plans.
                </div>
              </Link>
              <Link
                href="/residential-cleaning/deep-cleaning"
                className={residential.linkCard}
              >
                <div className={`font-medium ${residential.accent}`}>
                  Deep Cleaning
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Detail-focused one-time service for full-home resets.
                </div>
              </Link>
              <Link
                href="/residential-cleaning/move-in-out"
                className={residential.linkCard}
              >
                <div className={`font-medium ${residential.accent}`}>
                  Move-In/Out Cleaning
                </div>
                <div className="mt-1 text-sm text-white/75">
                  Turnover cleaning for homes, rentals, and transitions.
                </div>
              </Link>
            </div>
          </section>

          <section className={residential.sectionDark}>
            <h2 className={residential.h2Large}>Need a tailored home plan?</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              We will review your home, priorities, and schedule to provide a
              clear estimate and recommended service cadence.
            </p>
            <div className="mt-6">
              <Link
                href="/request-walkthrough?type=residential"
                className={residential.ctaLight}
              >
                Book Your Home Estimate
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
    <div className={residential.cardSoft}>
      <p className={`text-sm font-semibold ${residential.accent}`}>{q}</p>
      <p className="mt-2 text-sm leading-6 text-white/80">{a}</p>
    </div>
  );
}
