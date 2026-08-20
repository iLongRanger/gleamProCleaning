import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Gleam Pro Cleaning",
  description:
    "Meet Gleam Pro Cleaning, a family-owned, owner-led cleaning company based in New Westminster and serving Metro Vancouver since 2019.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Gleam Pro Cleaning",
    description:
      "Family-owned, owner-led commercial and residential cleaning across Metro Vancouver.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/images/service-areas/new-westminster.jpg",
        width: 1600,
        height: 900,
        alt: "New Westminster, British Columbia",
      },
    ],
  },
};

const principles = [
  {
    number: "01",
    title: "Scope before promises",
    body: "We walk the space, listen to the priorities, and document the work before service begins. Anything outside the agreed scope is discussed first.",
  },
  {
    number: "02",
    title: "Consistency over shortcuts",
    body: "Recurring checklists, familiar crews when scheduling permits, and direct follow-up help keep standards steady from one visit to the next.",
  },
  {
    number: "03",
    title: "Accountability when it matters",
    body: "If something is missed, clients can report it within 24 hours. We return to address the missed item at no additional charge.",
  },
];

const serviceAreas = [
  "New Westminster",
  "Vancouver",
  "Burnaby",
  "Richmond",
  "Surrey",
  "Coquitlam",
  "Delta",
  "North Vancouver",
  "West Vancouver",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050E1F] text-white antialiased">
      <main>
        <section className="relative min-h-[620px] overflow-hidden sm:min-h-[700px] lg:min-h-[760px]">
          <Image
            src="/images/service-areas/new-westminster.jpg"
            alt="New Westminster, home of Gleam Pro Cleaning"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#050E1F]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050E1F] via-[#050E1F]/65 to-[#050E1F]/10" />

          <div className="relative mx-auto flex min-h-[620px] max-w-[1280px] items-end px-5 pb-16 pt-24 sm:min-h-[700px] sm:px-8 sm:pb-20 lg:min-h-[760px] lg:pb-24">
            <div className="max-w-4xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#D4A574]">
                New Westminster · Metro Vancouver
              </p>
              <h1 className="mt-5 font-display text-5xl font-light leading-none text-white sm:text-6xl md:text-7xl lg:text-[92px]">
                Gleam Pro Cleaning
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
                A family-owned, owner-led cleaning company built around clear
                scopes, dependable routines, and spaces that are ready when
                people arrive.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/request-walkthrough?type=commercial"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#F4EFE6] px-6 py-3.5 text-sm font-medium text-[#0B2545] transition hover:bg-white"
                >
                  Request a walk-through
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </Link>
                <Link
                  href="/commercial-cleaning"
                  className="inline-flex items-center rounded-full border border-white/25 bg-[#050E1F]/25 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-[#050E1F]/45"
                >
                  Explore our services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#F4EFE6] text-[#050E1F]">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
            {[
              ["2019", "On the floor since"],
              ["2024", "Incorporated"],
              ["$1M", "Liability insurance"],
              ["9", "Metro Vancouver cities"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border-b border-[#050E1F]/10 px-2 py-7 last:border-b-0 even:border-l even:border-[#050E1F]/10 sm:py-9 lg:border-b-0 lg:border-l lg:first:border-l-0"
              >
                <div className="font-display text-4xl leading-none sm:text-5xl">
                  {value}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-[#050E1F]/60">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#D4A574]">
                Our story
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
                Built on the floor, not behind a desk.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-white/72 sm:text-lg lg:col-span-7 lg:col-start-6">
              <p>
                Gleam Pro has been doing professional cleaning work since 2019
                and became incorporated in 2024. From our base in New
                Westminster, we serve businesses and homes across Metro
                Vancouver.
              </p>
              <p>
                Commercial cleaning is at the centre of our work, particularly
                recurring service for restaurants, pubs, offices, clinics,
                managed properties, and community facilities. We also provide
                residential recurring, deep, move, carpet, and upholstery
                cleaning.
              </p>
              <p>
                Our approach is practical: understand the site, agree on the
                checklist, document access and timing, and follow up directly.
                We would rather confirm a requirement than make a promise we
                cannot support.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#081A31]">
          <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#D4A574]">
                How we work
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
                The standard is clear before the first visit.
              </h2>
            </div>

            <div className="mt-14 border-t border-white/12">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="grid gap-4 border-b border-white/12 py-8 sm:grid-cols-[80px_1fr] lg:grid-cols-[120px_0.8fr_1.2fr] lg:items-start lg:py-10"
                >
                  <span className="font-display text-3xl text-[#D4A574]/60">
                    {principle.number}
                  </span>
                  <h3 className="font-display text-2xl text-white sm:text-3xl">
                    {principle.title}
                  </h3>
                  <p className="max-w-2xl text-[15px] leading-7 text-white/65">
                    {principle.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4A574]/35 text-[#D4A574]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl">
                Straightforward about who does the work.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                Cleaning services are performed by vetted independent
                contractors. Gleam Pro carries $1 million in commercial general
                liability insurance, and a certificate of insurance is
                available on request before service begins.
              </p>
              <Link
                href="/terms"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#D4A574] transition hover:text-white"
              >
                Read our service terms
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0FA36B]/40 text-[#4DD49B]">
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl">
                Local routes across Metro Vancouver.
              </h2>
              <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3 text-sm text-white/72">
                    <Check className="h-4 w-4 shrink-0 text-[#4DD49B]" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/service-areas"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#D4A574] transition hover:text-white"
              >
                View service areas
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#0B2545]">
          <div className="mx-auto max-w-[1280px] px-5 py-20 text-center sm:px-8 sm:py-28">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#D4A574]">
              Start with the space
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              A clear proposal begins with a clear conversation.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70">
              Tell us what you manage, where it is, and what ready needs to
              look like. We will review the scope and recommend the next step.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/request-walkthrough?type=commercial"
                className="group inline-flex items-center gap-2 rounded-full bg-[#F4EFE6] px-6 py-3.5 text-sm font-medium text-[#0B2545] transition hover:bg-white"
              >
                Request a walk-through
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <a
                href="tel:+17782230719"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/45 hover:bg-white/[0.05]"
              >
                Call 778 223 0719
              </a>
            </div>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://gleampro.ca/about#webpage",
            url: "https://gleampro.ca/about",
            name: "About Gleam Pro Cleaning",
            description:
              "Gleam Pro Cleaning is a family-owned, owner-led cleaning company based in New Westminster and serving Metro Vancouver.",
            mainEntity: { "@id": "https://gleampro.ca/#localbusiness" },
          }),
        }}
      />
    </div>
  );
}
