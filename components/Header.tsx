"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const colors = {
  navy: "#0B2545",
  emerald: "#0FA36B",
  gold: "#C9A227",
  midnight: "#081A31",
};

const nav = [
  { label: "Home", href: "/" },

  {
    label: "Commercial Cleaning",
    href: "/commercial-cleaning",
    children: [
      { label: "Restaurants", href: "/commercial-cleaning/restaurants" },
      { label: "Offices", href: "/commercial-cleaning/offices" },
      {
        label: "Community Facilities",
        href: "/commercial-cleaning/community-facilities",
      },
    ],
  },

  { label: "Request Walk-Through", href: "/request-walkthrough", cta: true },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
      {/* Top Bar */}
      <div
        className="hidden md:block text-sm"
        style={{ backgroundColor: colors.midnight }}
      >
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(672) 970-3755</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hello@gleamprocleaning.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4 opacity-80">
            <Facebook className="w-4 h-4" />
            <Instagram className="w-4 h-4" />
            <Linkedin className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-gpc.png"
            alt="Gleam Pro Cleaning logo"
            className="h-8 w-auto md:h-10"
            width={150}
            height={50}
          />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const isCTA = Boolean(item.cta);
            const hasChildren =
              Array.isArray((item as any).children) &&
              (item as any).children.length > 0;

            return (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={
                    isCTA
                      ? "rounded-md bg-black px-4 py-2 text-sm font-semibold text-white"
                      : "text-sm font-medium"
                  }
                >
                  {item.label}
                </Link>

                {hasChildren && (
                  <div className="absolute left-0 top-full z-50 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                    <div className="w-64 rounded-md border bg-white p-2 shadow-md">
                      {(item as any).children.map((child: any) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded px-3 py-2 text-sm hover:bg-gray-100"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
