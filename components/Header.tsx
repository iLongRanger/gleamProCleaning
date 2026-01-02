"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Mail,
  Menu,
  Phone,
  X,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

import { brand, commercial } from "@/components/commercial/ui";

type NavItem = {
  label: string;
  href: string;
  cta?: boolean;
  children?: Array<{ label: string; href: string }>;
};

const PHONE_DISPLAY = "(672) 970-3755";
const PHONE_TEL = "tel:+16729703755";
const EMAIL_DISPLAY = "hello@gleamprocleaning.com";
const EMAIL_MAILTO = "mailto:hello@gleamprocleaning.com";

// small delay prevents “menu disappears before click” when moving from trigger → menu
const DESKTOP_CLOSE_DELAY_MS = 180;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCommercialOpen, setMobileCommercialOpen] = useState(false);
  const [desktopCommercialOpen, setDesktopCommercialOpen] = useState(false);

  const closeTimerRef = useRef<number | null>(null);

  const mobilePanelId = useId();
  const desktopCommercialMenuId = useId();

  const nav: NavItem[] = useMemo(
    () => [
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
      {
        label: "Request Walk-Through",
        href: "/request-walkthrough",
        cta: true,
      },
    ],
    []
  );

  const clearDesktopCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleDesktopClose = () => {
    clearDesktopCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setDesktopCommercialOpen(false);
    }, DESKTOP_CLOSE_DELAY_MS);
  };

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setDesktopCommercialOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => clearDesktopCloseTimer();
  }, []);

  const ctaItem = nav.find((n) => n.cta);
  const nonCtaItems = nav.filter((n) => !n.cta);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-white/0 backdrop-blur supports-[backdrop-filter]:bg-white/5">
      {/* Top Bar (desktop) */}
      <div
        className="hidden md:block text-sm"
        style={{ backgroundColor: brand.midnight }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-6">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 text-white/90 hover:text-white"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <Phone className="h-4 w-4" />
              <span>{PHONE_DISPLAY}</span>
            </a>

            <a
              href={EMAIL_MAILTO}
              className="flex items-center gap-2 text-white/90 hover:text-white"
              aria-label={`Email ${EMAIL_DISPLAY}`}
            >
              <Mail className="h-4 w-4" />
              <span>{EMAIL_DISPLAY}</span>
            </a>
          </div>

          {/* Keeping icons (no URLs assumed). */}
          <div className="flex items-center gap-4 opacity-80">
            <Facebook className="h-4 w-4" />
            <Instagram className="h-4 w-4" />
            <Linkedin className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="relative">
        {/* subtle prestige glow behind the header row */}
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(400px_200px_at_20%_0%,#C9A227,transparent),radial-gradient(400px_200px_at_80%_0%,#0FA36B,transparent)]" />

        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-gpc.png"
              alt="Gleam Pro Cleaning logo"
              className="h-8 w-auto md:h-10"
              width={150}
              height={50}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Primary navigation"
          >
            {nonCtaItems.map((item) => {
              const hasChildren =
                Array.isArray(item.children) && item.children.length > 0;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-white/90 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  // Hover behavior with delay (prevents menu vanishing before click)
                  onMouseEnter={() => {
                    clearDesktopCloseTimer();
                    setDesktopCommercialOpen(true);
                  }}
                  onMouseLeave={() => {
                    // Delay close so cursor can travel into menu
                    scheduleDesktopClose();
                  }}
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-sm font-medium text-white/90 transition hover:text-white"
                    aria-haspopup="menu"
                    aria-expanded={desktopCommercialOpen}
                    aria-controls={desktopCommercialMenuId}
                    onClick={() => {
                      clearDesktopCloseTimer();
                      setDesktopCommercialOpen((v) => !v);
                    }}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 opacity-80" />
                  </button>

                  <div
                    id={desktopCommercialMenuId}
                    role="menu"
                    // NOTE: keep it mounted + pointer-enabled when open
                    className={[
                      "absolute left-0 top-full z-50 mt-2 w-72 rounded-2xl border border-white/10 bg-[#081A31] p-2 shadow-xl",
                      desktopCommercialOpen
                        ? "opacity-100"
                        : "pointer-events-none opacity-0",
                      "transition-opacity",
                    ].join(" ")}
                    onMouseEnter={() => {
                      // If we’re over the menu, cancel any scheduled close
                      clearDesktopCloseTimer();
                      setDesktopCommercialOpen(true);
                    }}
                    onMouseLeave={() => {
                      // If leaving menu, close with delay (feels smoother)
                      scheduleDesktopClose();
                    }}
                  >
                    {/* Parent landing link */}
                    <Link
                      href={item.href}
                      role="menuitem"
                      className="block rounded-xl px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
                      onClick={() => setDesktopCommercialOpen(false)}
                    >
                      Overview
                    </Link>

                    <div className="my-2 h-px bg-white/10" />

                    {item.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                        onClick={() => setDesktopCommercialOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Call Us (desktop) */}
            <a href={PHONE_TEL} className={commercial.secondary}>
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </a>

            {/* Primary CTA (desktop) */}
            {ctaItem ? (
              <Link href={ctaItem.href} className={commercial.cta}>
                {ctaItem.label}
              </Link>
            ) : null}
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Call (mobile quick action) */}
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-[#C9A227] transition hover:bg-white/10"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
            </a>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls={mobilePanelId}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          id={mobilePanelId}
          className={mobileOpen ? "block md:hidden" : "hidden md:hidden"}
        >
          <div className="border-t border-white/10 bg-[#081A31]">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>

                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                  aria-expanded={mobileCommercialOpen}
                  onClick={() => setMobileCommercialOpen((v) => !v)}
                >
                  <span>Commercial Cleaning</span>
                  <ChevronDown
                    className={[
                      "h-4 w-4 transition-transform",
                      mobileCommercialOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </button>

                {mobileCommercialOpen && (
                  <div className="space-y-2 pl-2">
                    <Link
                      href="/commercial-cleaning"
                      className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Overview
                    </Link>
                    <Link
                      href="/commercial-cleaning/restaurants"
                      className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Restaurants
                    </Link>
                    <Link
                      href="/commercial-cleaning/offices"
                      className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Offices
                    </Link>
                    <Link
                      href="/commercial-cleaning/community-facilities"
                      className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Community Facilities
                    </Link>
                  </div>
                )}

                <a href={PHONE_TEL} className={commercial.secondary}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </a>

                {ctaItem ? (
                  <Link
                    href={ctaItem.href}
                    className={commercial.cta}
                    onClick={() => setMobileOpen(false)}
                  >
                    {ctaItem.label}
                  </Link>
                ) : null}

                <a
                  href={EMAIL_MAILTO}
                  className="mt-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  <Mail className="h-4 w-4" />
                  {EMAIL_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile overlay (tap outside to close) */}
        {mobileOpen ? (
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-30 bg-black/40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        ) : null}
      </div>
    </header>
  );
}
