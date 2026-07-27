import type { Metadata } from "next";
import Link from "next/link";
import { commercial } from "@/components/commercial/ui";

export const metadata: Metadata = {
  title: "Brewery & Taproom Cleaning in Vancouver | Gleam Pro Cleaning",
  description:
    "Nightly brewery and taproom cleaning for Vancouver and Metro Vancouver. Taproom floors, back-of-house, washrooms, patios, and owner-led crews.",
  alternates: {
    canonical: "/breweries",
  },
  openGraph: {
    title: "Brewery & Taproom Cleaning | Gleam Pro",
    description:
      "We clean a Vancouver brewery every single night. Taproom floors, back-of-house, washrooms - open-ready by morning.",
    url: "/breweries",
    type: "website",
    images: [
      {
        url: "/images/home/commercial-hero.png",
        width: 1200,
        height: 630,
        alt: "Brewery and taproom cleaning by Gleam Pro",
      },
    ],
  },
};

const walkthroughHref = "/request-walkthrough?type=commercial&facility=brewery";

export default function BreweriesPage() {
  return (
    <div className={commercial.shell}>
      <div className="relative">
        <div className={commercial.glow} />
        <main className={`relative z-10 ${commercial.page}`}>
          <section className={commercial.section}>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className={commercial.eyebrow}>
                  Commercial Cleaning - Breweries &amp; Taprooms
                </p>
                <h1 className={commercial.h1}>
                  We clean a Vancouver brewery every single night.{" "}
                  <span style={{ color: "#D4A574" }}>
                    Taproom floors, back-of-house, washrooms - open-ready by morning.
                  </span>
                </h1>
                <p className={commercial.lead}>
                  Sticky floors, patio-season traffic, back-of-house buildup,
                  and washrooms that need to feel reset before the first pour.
                  We clean at night so service is not interrupted, and the same
                  crew returns every visit.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={walkthroughHref} className={commercial.cta}>
                    Request a Free Walk-Through
                  </Link>
                  <Link href="/commercial-cleaning" className={commercial.secondary}>
                    Back to Commercial Cleaning
                  </Link>
                </div>
              </div>

              <aside className={`lg:col-span-4 ${commercial.cardSoft}`}>
                <h2 className={`${commercial.h3} ${commercial.accent}`}>
                  Built for nightly hospitality routines
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li>Taproom floors and sticky spill zones</li>
                  <li>Back-of-house and staff touchpoints</li>
                  <li>Washrooms reset before opening</li>
                  <li>Owner&apos;s cell number for quick issues</li>
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-white/60">
                  Start with a 30-day trial. No lock-in, cancel anytime.
                </p>
              </aside>
            </div>
          </section>

          <section className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Sticky-floor and patio-season pain"
              text="Beer, food service, wet weather, and patio traffic create residue that gets noticed fast. We focus on the guest-facing details your team sees every morning."
            />
            <InfoCard
              title="Night service, zero disruption"
              text="Cleaning happens after close or before open, with access and lock-up documented during the walkthrough."
            />
            <InfoCard
              title="Same crew every visit"
              text="A consistent owner-led crew learns your space, your closing rhythm, and the details that cannot be captured by a generic checklist."
            />
          </section>

          <section className={commercial.sectionDark}>
            <h2 className={commercial.h2Large}>
              Get a brewery cleaning quote in 24 hours
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Book a free 15-minute walkthrough. We will review taproom floors,
              back-of-house, washrooms, access, and schedule, then send a written
              quote within 24 hours.
            </p>
            <div className="mt-6">
              <Link href={walkthroughHref} className={commercial.ctaLight}>
                Request Brewery / Taproom Walk-Through
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className={commercial.cardSoft}>
      <h2 className={`${commercial.h3} ${commercial.accent}`}>{title}</h2>
      <p className="mt-3 text-sm leading-6 text-white/80">{text}</p>
    </div>
  );
}
