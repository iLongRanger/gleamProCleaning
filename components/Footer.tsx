"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const colors = {
  gold: "#C9A227",
  midnight: "#081A31",
};

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
  { label: "Request Walk-Through", href: "/request-walkthrough?type=commercial" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10" style={{ backgroundColor: colors.midnight }}>
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo-gpc.png"
                alt="Gleam Pro Cleaning logo"
                className="h-22 w-22"
                width={150}
                height={50}
              />
              <div>
                <div className="font-semibold" style={{ color: colors.gold }}>
                  Gleam Pro Cleaning
                </div>
                <div className="text-white/70">Shine • Elevate • Prestige</div>
              </div>
            </div>
            <p className="mt-3 text-white/70 leading-relaxed">
              Serving Greater Vancouver and surrounding areas with premium commercial and residential cleaning services.
            </p>
          </div>
          
          <div>
            <div className="font-semibold mb-2 text-white/90">Company</div>
            <ul className="space-y-2 text-white/80">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-4 text-lg text-white/90">Commercial</div>
          <ul className="space-y-3 text-white/80">
            {commercialLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors block">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-4 text-lg text-white/90">Residential</div>
          <ul className="space-y-3 text-white/80">
            {residentialLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors block">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <div>
            <div className="font-semibold mb-4 text-lg text-white/90">Contact</div>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A227] shrink-0" />
                <span>New Westminster, BC</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C9A227] shrink-0" />
                <a href="tel:+16729703755" className="hover:text-white transition-colors">(672) 970-3755</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C9A227] shrink-0" />
                <a href="mailto:services@gleampro.ca" className="hover:text-white transition-colors">services@gleampro.ca</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-2 text-white/90">Hours</div>
            <ul className="space-y-1 text-white/80">
              <li className="flex justify-between max-w-[200px]">
                <span>Mon–Fri:</span>
                <span>8:00–18:00</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Sat:</span>
                <span>9:00–16:00</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Sun:</span>
                <span>By appointment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold text-white/90">
            Service Area Map
          </div>
          <div className="mt-3 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Gleam Pro Cleaning service area map"
              src="https://www.google.com/maps?q=New%20Westminster%2C%20BC&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-2 text-xs text-white/60">
            Serving Metro Vancouver and surrounding areas.
          </p>
        </div>
      </div>
      <div className="text-center text-white/60 text-xs py-6 border-t border-white/10">
        © {new Date().getFullYear()} Gleam Pro Cleaning. All rights reserved.
      </div>
    </footer>
  );
}
