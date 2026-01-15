"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const colors = {
  gold: "#C9A227",
  midnight: "#081A31",
};

const nav = [
  { label: "Home", href: "/" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Commercial Cleaning", href: "/commercial-cleaning" },
  { label: "Residential Cleaning", href: "/residential-cleaning" },
  { label: "Prestige Home Care", href: "/prestige-home-care" },
  { label: "Request Walk-Through", href: "/request-walkthrough?type=commercial" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10" style={{ backgroundColor: colors.midnight }}>
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
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
          <p className="mt-3 text-white/70">
            Serving Greater Vancouver and surrounding areas.
          </p>
        </div>

        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="space-y-2 text-white/80">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-2">Contact</div>
          <ul className="space-y-2 text-white/80">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              New Westminster, BC
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (672) 970-3755
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              hello@gleamprocleaning.com
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-2">Hours</div>
          <ul className="space-y-1 text-white/80">
            <li>Mon–Fri: 8:00–18:00</li>
            <li>Sat: 9:00–16:00</li>
            <li>Sun: By appointment</li>
          </ul>
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
