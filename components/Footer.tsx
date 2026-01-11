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
  { label: "Commercial Cleaning", href: "/commercial-cleaning" },
  { label: "Request Walk-Through", href: "/request-walkthrough" },
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
      <div className="text-center text-white/60 text-xs py-6 border-t border-white/10">
        © {new Date().getFullYear()} Gleam Pro Cleaning. All rights reserved.
      </div>
    </footer>
  );
}
