"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const commercialLinks = [
  { label: "Overview", href: "/commercial-cleaning" },
  { label: "Restaurants", href: "/commercial-cleaning/restaurants" },
  { label: "Offices", href: "/commercial-cleaning/offices" },
  { label: "Community Facilities", href: "/commercial-cleaning/community-facilities" },
  { label: "Commercial FAQ", href: "/commercial-cleaning/faq" },
];

const residentialLinks = [
  { label: "Overview", href: "/residential-cleaning" },
  { label: "Prestige Home Care", href: "/prestige-home-care" },
  { label: "Recurring Cleaning", href: "/residential-cleaning/recurring" },
  { label: "Deep Cleaning", href: "/residential-cleaning/deep-cleaning" },
  { label: "Move-In/Out", href: "/residential-cleaning/move-in-out" },
  { label: "Carpet & Upholstery", href: "/residential-cleaning/carpet-upholstery" },
  { label: "Residential FAQ", href: "/residential-cleaning/faq" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Areas by Service", href: "/service-areas/by-service" },
  { label: "Request Walk-Through", href: "/request-walkthrough?type=commercial" },
];

const eyebrow =
  "text-[10px] font-medium uppercase tracking-[0.28em] text-[#C9A227]";
const colHeading = "font-display text-lg text-white";
const linkCls =
  "group inline-flex items-center gap-1.5 text-sm text-white/65 hover:text-white transition";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 bg-[#050E1F] text-white antialiased"
    >
      {/* atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(700px 320px at 8% 0%, rgba(15,163,107,0.10), transparent 60%), radial-gradient(700px 320px at 92% 0%, rgba(201,162,39,0.10), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grain mix-blend-overlay opacity-[0.18]" />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 pt-20 sm:pt-24 pb-10">
        {/* Wordmark row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-12 border-b border-white/10">
          <div className="max-w-xl">
            <div className={eyebrow}>Gleam Pro Cleaning · Est. 2019</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] text-white">
              Spaces that open ready,{" "}
              <span className="italic text-white/60">homes that feel settled.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
              Premium commercial and residential cleaning across Metro Vancouver.
              Walk-through quoted, named-team executed.
            </p>
          </div>
          <Link
            href="/request-walkthrough?type=commercial"
            className="group inline-flex items-center gap-2 self-start lg:self-end rounded-full px-6 py-3.5 text-[14px] font-medium tracking-wide text-[#0B2545] bg-[#F4EFE6] hover:bg-white transition shadow-[0_18px_50px_-18px_rgba(244,239,230,0.55)]"
          >
            Request walk-through
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-14">
          {/* Brand + Company */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-gpc.png"
                alt="Gleam Pro Cleaning"
                width={56}
                height={56}
                className="h-14 w-14"
              />
              <div>
                <div className="font-display text-lg leading-tight text-white">
                  Gleam Pro
                </div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                  Shine · Elevate · Prestige
                </div>
              </div>
            </div>

            <div>
              <div className={eyebrow}>Company</div>
              <ul className="mt-4 space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkCls}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Commercial */}
          <div className="lg:col-span-3">
            <div className={eyebrow}>Commercial</div>
            <h3 className={`mt-2 ${colHeading}`}>For your business.</h3>
            <ul className="mt-5 space-y-2.5">
              {commercialLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkCls}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Residential */}
          <div className="lg:col-span-3">
            <div className={eyebrow}>Residential</div>
            <h3 className={`mt-2 ${colHeading}`}>For your home.</h3>
            <ul className="mt-5 space-y-2.5">
              {residentialLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkCls}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-7">
            <div>
              <div className={eyebrow}>Contact</div>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/75">
                  <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>New Westminster, BC</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/75">
                  <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <a
                    href="tel:+17786810922"
                    className="tabular hover:text-white transition"
                  >
                    (778) 681-0922
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/75">
                  <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <a
                    href="mailto:services@gleampro.ca"
                    className="hover:text-white transition"
                  >
                    services@gleampro.ca
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className={eyebrow}>Hours</div>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  ["Mon–Fri", "8:00 – 18:00"],
                  ["Sat", "9:00 – 16:00"],
                  ["Sun", "By appointment"],
                ].map(([day, hours]) => (
                  <li
                    key={day}
                    className="flex justify-between max-w-[220px] text-white/65"
                  >
                    <span>{day}</span>
                    <span className="tabular text-white/85">{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] overflow-hidden">
          <div className="px-6 py-4 flex items-center justify-between border-b border-white/10">
            <div>
              <div className={eyebrow}>Service area</div>
              <div className="mt-1 font-display text-base text-white">
                Metro Vancouver
              </div>
            </div>
            <div className="text-xs text-white/50">9 cities served</div>
          </div>
          <iframe
            title="Gleam Pro Cleaning service area map"
            src="https://www.google.com/maps?q=New%20Westminster%2C%20BC&output=embed"
            className="h-64 w-full grayscale-[0.3] contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Legal */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/50">
          <div suppressHydrationWarning>© {new Date().getFullYear()} Gleam Pro Cleaning. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
            <span className="tracking-[0.18em] uppercase">Vancouver · Burnaby · Surrey · +6</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
