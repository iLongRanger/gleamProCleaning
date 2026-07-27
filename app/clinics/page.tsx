import type { Metadata } from "next";
import Link from "next/link";
import { commercial } from "@/components/commercial/ui";

export const metadata: Metadata = {
  title: "Clinic & Medical Office Cleaning in Metro Vancouver | Gleam Pro",
  description:
    "Daily clinic and medical office cleaning across Metro Vancouver. Hygiene routines, disinfection protocol, discreet service, insured commercial crews.",
  alternates: {
    canonical: "/clinics",
  },
  openGraph: {
    title: "Clinic & Medical Office Cleaning | Gleam Pro",
    description:
      "Daily cleaning for clinics that get inspected - because we already do it every day.",
    url: "/clinics",
    type: "website",
    images: [
      {
        url: "/images/service-areas/north-vancouver.jpg",
        width: 1200,
        height: 630,
        alt: "Clinic and medical office cleaning by Gleam Pro",
      },
    ],
  },
};

const walkthroughHref = "/request-walkthrough?type=commercial&facility=clinic";

export default function ClinicsPage() {
  return (
    <div className={commercial.shell}>
      <div className="relative">
        <div className={commercial.glow} />
        <main className={`relative z-10 ${commercial.page}`}>
          <section className={commercial.section}>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <p className={commercial.eyebrow}>
                  Commercial Cleaning - Clinics &amp; Medical Offices
                </p>
                <h1 className={commercial.h1}>
                  Daily cleaning for clinics that get inspected{" "}
                  <span style={{ color: "#D4A574" }}>- because we already do it every day.</span>
                </h1>
                <p className={commercial.lead}>
                  Clinic cleaning needs consistent hygiene standards,
                  disinfection protocol, discretion, and an insured crew that
                  understands access, privacy, and opening-time readiness.
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
                  Clinic-ready details
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li>Daily or 5x-week cleaning routines</li>
                  <li>High-touch disinfection protocol</li>
                  <li>Discreet after-hours access</li>
                  <li>$1M commercial liability insured</li>
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-white/60">
                  Start with a 30-day trial. No lock-in, cancel anytime.
                </p>
              </aside>
            </div>
          </section>

          <section className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              title="Hygiene standards"
              text="We build the scope around exam rooms, waiting areas, washrooms, staff zones, high-touch surfaces, and the cadence your clinic actually needs."
            />
            <InfoCard
              title="Disinfection protocol"
              text="Touchpoints, fixtures, handles, counters, and washroom surfaces are handled with clear routines and documented expectations."
            />
            <InfoCard
              title="Discretion and access"
              text="Owner-led night crews keep service quiet, consistent, and out of the way of patients and practitioners."
            />
          </section>

          <section className={commercial.sectionDark}>
            <h2 className={commercial.h2Large}>
              Get a clinic cleaning quote in 24 hours
            </h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Book a free 15-minute walkthrough. We will review hygiene
              priorities, rooms, surfaces, frequency, and access, then send a
              written quote within 24 hours.
            </p>
            <div className="mt-6">
              <Link href={walkthroughHref} className={commercial.ctaLight}>
                Request Clinic / Medical Walk-Through
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
