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
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
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
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-white/90 hover:text-white transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Button
            asChild
            className="rounded-2xl px-5"
            style={{ backgroundColor: colors.emerald }}
          >
            <Link href="#quote">Request a Free Walk-Through</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
