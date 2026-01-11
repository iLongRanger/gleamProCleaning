"use client";

import Link from "next/link";
import { Shield, Sparkles, Star, Home, Calendar, Sofa } from "lucide-react";
import { residential } from "@/components/residential/ui";

export const metadata = {
  title: "Premium Home Cleaning in Metro Vancouver | Gleam Pro Cleaning",
  description:
    "Professional residential cleaning services including recurring, deep cleaning, move-in/out, and carpet care. Estimate-based pricing for your unique home needs.",
};

export default function PrestigeHomePage() {
  return (
    <div className={residential.shell}>
      <div className="relative">
        <div className={residential.glow} />
        <main className={`relative z-10 ${residential.page}`}>
          {/* Hero */}
          <section className={residential.section}>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className={residential.eyebrow}>
                  Residential Cleaning • Premium Home Care
                </p>
                <h1 className={residential.h1}>
                  Premium home cleaning{" "}
                  <span style={{ color: "#D4A574" }}>tailored to your space</span>
                </h1>
                <p className={residential.lead}>
                  From recurring maintenance to deep cleans and move-in/out services,
                  we deliver hotel-level brilliance for your home. Every service is
                  estimate-based to match your specific needs.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/request-walkthrough" className={residential.cta}>
                    Get a Free Home Estimate
                  </Link>
                  <Link
                    href="/residential-cleaning"
                    className={residential.secondary}
                  >
                    See Residential Services
                  </Link>
                </div>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Recurring weekly/bi-weekly cleaning",
                    "One-time deep cleaning services",
                    "Move-in/out specialty services", 
                    "Carpet & upholstery care",
                  ].map((item) => (
                    <li key={item} className={residential.listItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proof / Fit card */}
              <div className="w-full md:w-[360px]">
                <div className={residential.cardSoft}>
                  <h2 className={`${residential.h3} ${residential.accent}`}>
                    Ideal for
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    <li>• Busy families & professionals</li>
                    <li>• Homeowners seeking consistent quality</li>
                    <li>• Life transitions (moving, events)</li>
                    <li>• Anyone needing trusted, vetted cleaners</li>
                  </ul>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className={`text-sm font-semibold ${residential.accent}`}>
                      How it works
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      Start with a free estimate. We'll assess your space,
                      discuss your needs, and provide a clear quote based on
                      scope and frequency.
                    </p>
                  </div>

                  <p className="mt-4 text-xs text-white/60">
                      No pricing tables - every home is unique.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="mt-16">
            <h2 className={residential.h2Large}>Residential Services</h2>
            <p className={residential.lead}>
              Choose the service that best matches your needs.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link
                href="/residential-cleaning/recurring"
                className={residential.linkCard}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Home className={`w-6 h-6 ${residential.accent}`} />
                  <h3 className={`text-lg font-semibold ${residential.accent}`}>
                    Recurring Cleaning
                  </h3>
                </div>
                <p className="text-white/80">
                  Weekly, bi-weekly, or monthly maintenance to keep your home
                  consistently clean and comfortable.
                </p>
              </Link>

              <Link
                href="/residential-cleaning/deep-cleaning"
                className={residential.linkCard}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className={`w-6 h-6 ${residential.accent}`} />
                  <h3 className={`text-lg font-semibold ${residential.accent}`}>
                    Deep Cleaning
                  </h3>
                </div>
                <p className="text-white/80">
                  Intensive one-time cleaning for spring refresh, before events,
                  or when your home needs extra attention.
                </p>
              </Link>

              <Link
                href="/residential-cleaning/move-in-out"
                className={residential.linkCard}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className={`w-6 h-6 ${residential.accent}`} />
                  <h3 className={`text-lg font-semibold ${residential.accent}`}>
                    Move-In/Out
                  </h3>
                </div>
                <p className="text-white/80">
                  Professional turnover service for renters, homeowners, and
                  property managers.
                </p>
              </Link>

              <Link
                href="/residential-cleaning/carpet-upholstery"
                className={residential.linkCard}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Sofa className={`w-6 h-6 ${residential.accent}`} />
                  <h3 className={`text-lg font-semibold ${residential.accent}`}>
                    Carpet & Upholstery
                  </h3>
                </div>
                <p className="text-white/80">
                  Professional extraction and fabric-safe cleaning methods for
                  stains, refresh, or allergy concerns.
                </p>
              </Link>
            </div>
          </section>

          {/* How it works */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>How it works</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <StepCard
                step="1"
                title="Free Estimate"
                text="We assess your space, discuss needs, and understand your priorities."
              />
              <StepCard
                step="2"
                title="Custom Quote"
                text="You receive a clear estimate based on scope, frequency, and unique requirements."
              />
              <StepCard
                step="3"
                title="Premium Service"
                text="Our insured team delivers consistent quality with attention to detail."
              />
            </div>
          </section>

          {/* FAQ */}
          <section className={residential.section}>
            <h2 className={residential.h2Large}>FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Faq
                q="How is residential pricing determined?"
                a="Every home is unique. We provide custom estimates based on square footage, condition, frequency, and specific services needed."
              />
              <Faq
                q="Do I need to be home during cleaning?"
                a="Not necessarily. Many clients provide entry instructions. Our team is fully insured and background-checked."
              />
              <Faq
                q="Are your products safe for kids and pets?"
                a="Yes. We use eco-forward, family-safe cleaning products and can accommodate specific sensitivities."
              />
              <Faq
                q="Do you bring your own supplies?"
                a="We bring professional equipment and core cleaning supplies. We can use your preferred products if desired."
              />
            </div>
          </section>

          {/* Final CTA */}
          <section className={residential.sectionDark}>
            <h2 className={residential.h2Large}>
              Ready for a premium home cleaning experience?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">
              Start with a free estimate and let us create a cleaning plan
              tailored to your home and lifestyle.
            </p>

            <div className="mt-6">
              <Link href="/request-walkthrough" className={residential.ctaLight}>
                Get a Free Home Estimate
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function StepCard({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className={residential.cardSoft}>
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
          {step}
        </span>
        <h3 className={`${residential.h3} ${residential.accent}`}>{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-white/80">{text}</p>
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