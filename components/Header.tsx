"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  ArrowUpRight,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  cta?: boolean;
  children?: Array<{ label: string; href: string }>;
};

type DesktopMenu = "commercial" | null;

const PHONE_DISPLAY = "778 223 0719";
const PHONE_TEL = "tel:+17782230719";
const EMAIL_DISPLAY = "services@gleampro.ca";
const EMAIL_MAILTO = "mailto:services@gleampro.ca";

const DESKTOP_CLOSE_DELAY_MS = 180;

function getDesktopMenuKey(label: string): DesktopMenu {
  if (label === "Commercial Cleaning") return "commercial";
  return null;
}

const navLinkCls =
  "text-[13px] font-medium tracking-wide text-white/75 transition hover:text-white";
const ctaPrimaryCls =
  "group inline-flex items-center gap-1.5 rounded-full bg-[#F4EFE6] px-5 py-2.5 text-[13px] font-medium tracking-wide text-[#0B2545] hover:bg-white transition shadow-[0_18px_50px_-18px_rgba(244,239,230,0.45)]";
const ctaSecondaryCls =
  "inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[13px] font-medium tracking-wide text-white/85 hover:border-white/40 hover:bg-white/[0.04] transition";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCommercialOpen, setMobileCommercialOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState<DesktopMenu>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- canonical client-only mount check for portal gating
    setMounted(true);
  }, []);

  const closeTimerRef = useRef<number | null>(null);

  const mobilePanelId = useId();
  const desktopCommercialMenuId = useId();

  const nav: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "Service Areas", href: "/service-areas" },
      {
        label: "Commercial Cleaning",
        href: "/commercial-cleaning",
        children: [
          { label: "Breweries & Taprooms", href: "/breweries" },
          { label: "Clinics & Medical Offices", href: "/clinics" },
          { label: "Restaurants", href: "/commercial-cleaning/restaurants" },
          { label: "Offices", href: "/commercial-cleaning/offices" },
          { label: "Community Facilities", href: "/commercial-cleaning/community-facilities" },
          { label: "Commercial FAQ", href: "/commercial-cleaning/faq" },
        ],
      },
      {
        label: "Request Walk-Through",
        href: "/request-walkthrough?type=commercial",
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
      setDesktopMenuOpen(null);
    }, DESKTOP_CLOSE_DELAY_MS);
  };

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    setMobileCommercialOpen(false);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        setDesktopMenuOpen(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMobileMenu]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const measure = () => {
      const el = headerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setHeaderHeight(Math.ceil(rect.height));
    };
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, [mobileOpen]);

  useEffect(() => {
    return () => clearDesktopCloseTimer();
  }, []);

  const ctaItem = nav.find((n) => n.cta);
  const nonCtaItems = nav.filter((n) => !n.cta);

  const mobileLinkCls =
    "block rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/[0.06] hover:text-white transition";
  const mobileSubLinkCls =
    "block rounded-xl px-4 py-2.5 text-sm text-white/70 hover:bg-white/[0.05] hover:text-white transition";

  const mobilePortal =
    mounted && mobileOpen
      ? createPortal(
          <>
            <button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-[60] bg-[#050E1F]/80 backdrop-blur-sm md:hidden"
              onClick={closeMobileMenu}
            />

            <div
              id={mobilePanelId}
              className="fixed left-0 right-0 z-[70] md:hidden"
              style={{ top: headerHeight }}
            >
              <div className="border-t border-white/10 bg-[#050E1F]">
                <div className="mx-auto max-w-[1280px] px-5 py-5">
                  <div className="space-y-2">
                    <Link href="/" className={mobileLinkCls} onClick={closeMobileMenu}>
                      Home
                    </Link>
                    <Link href="/service-areas" className={mobileLinkCls} onClick={closeMobileMenu}>
                      Service Areas
                    </Link>

                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/[0.06] hover:text-white transition"
                      aria-expanded={mobileCommercialOpen}
                      onClick={() => {
                        setMobileCommercialOpen((v) => {
                          return !v;
                        });
                      }}
                    >
                      <span>Commercial Cleaning</span>
                      <ChevronDown
                        className={[
                          "h-4 w-4 transition-transform text-white/50",
                          mobileCommercialOpen ? "rotate-180" : "",
                        ].join(" ")}
                      />
                    </button>

                    {mobileCommercialOpen && (
                      <div className="space-y-1 pl-2 py-1">
                        <Link href="/commercial-cleaning" className={mobileSubLinkCls} onClick={closeMobileMenu}>
                          Overview
                        </Link>
                        <Link href="/breweries" className={mobileSubLinkCls} onClick={closeMobileMenu}>
                          Breweries &amp; Taprooms
                        </Link>
                        <Link href="/clinics" className={mobileSubLinkCls} onClick={closeMobileMenu}>
                          Clinics &amp; Medical Offices
                        </Link>
                        <Link href="/commercial-cleaning/restaurants" className={mobileSubLinkCls} onClick={closeMobileMenu}>
                          Restaurants
                        </Link>
                        <Link href="/commercial-cleaning/offices" className={mobileSubLinkCls} onClick={closeMobileMenu}>
                          Offices
                        </Link>
                        <Link href="/commercial-cleaning/community-facilities" className={mobileSubLinkCls} onClick={closeMobileMenu}>
                          Community Facilities
                        </Link>
                        <Link href="/commercial-cleaning/faq" className={mobileSubLinkCls} onClick={closeMobileMenu}>
                          Commercial FAQ
                        </Link>
                      </div>
                    )}

                    <div className="pt-3 mt-2 border-t border-white/10 space-y-2">
                      {ctaItem ? (
                        <Link
                          href={ctaItem.href}
                          className="flex items-center justify-between rounded-2xl bg-[#F4EFE6] px-4 py-3.5 text-sm font-medium text-[#0B2545]"
                          onClick={closeMobileMenu}
                        >
                          <span>{ctaItem.label}</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      ) : null}

                      <a
                        href={PHONE_TEL}
                        className="flex items-center justify-between rounded-2xl border border-white/15 px-4 py-3 text-sm text-white/85 hover:bg-white/[0.04] transition"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Phone className="h-4 w-4 text-[#C9A227]" />
                          <span className="tabular">{PHONE_DISPLAY}</span>
                        </span>
                      </a>

                      <a
                        href={EMAIL_MAILTO}
                        className="flex items-center justify-between rounded-2xl border border-white/15 px-4 py-3 text-sm text-white/75 hover:bg-white/[0.04] transition"
                        onClick={closeMobileMenu}
                      >
                        <span className="inline-flex items-center gap-2">
                          <Mail className="h-4 w-4 text-[#C9A227]" />
                          {EMAIL_DISPLAY}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body
        )
      : null;

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-40 antialiased"
      >
        {/* Top utility bar (desktop only) */}
        <div className="hidden md:block bg-[#050E1F] border-b border-white/[0.06]">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-2 text-[11px]">
            <div className="flex items-center gap-6 text-white/55">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-1.5 hover:text-white transition"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <Phone className="h-3 w-3 text-[#C9A227]" />
                <span className="tabular tracking-wide">{PHONE_DISPLAY}</span>
              </a>
              <a
                href={EMAIL_MAILTO}
                className="inline-flex items-center gap-1.5 hover:text-white transition"
                aria-label={`Email ${EMAIL_DISPLAY}`}
              >
                <Mail className="h-3 w-3 text-[#C9A227]" />
                <span className="tracking-wide">{EMAIL_DISPLAY}</span>
              </a>
              <span className="hidden lg:inline-flex items-center gap-2 uppercase tracking-[0.22em] text-white/40">
                <span className="inline-block h-px w-6 bg-white/20" />
                Mon–Sat
              </span>
            </div>
            <div className="flex items-center gap-4 text-white/40">
              <Facebook className="h-3.5 w-3.5 hover:text-white transition cursor-pointer" />
              <Instagram className="h-3.5 w-3.5 hover:text-white transition cursor-pointer" />
              <Linkedin className="h-3.5 w-3.5 hover:text-white transition cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="relative bg-[#050E1F]/85 backdrop-blur-xl border-b border-white/[0.08]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(500px 220px at 8% 0%, rgba(15,163,107,0.10), transparent 60%), radial-gradient(500px 220px at 92% 0%, rgba(201,162,39,0.10), transparent 60%)",
            }}
          />
          <div className="relative mx-auto flex max-w-[1280px] items-center justify-between px-5 sm:px-8 py-3.5">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/logo-gpc.png"
                alt="Gleam Pro Cleaning logo"
                className="h-9 w-auto md:h-10"
                width={150}
                height={50}
                priority
              />
            </Link>

            <nav
              className="hidden items-center gap-7 md:flex"
              aria-label="Primary navigation"
            >
              {nonCtaItems.map((item) => {
                const hasChildren =
                  Array.isArray(item.children) && item.children.length > 0;

                if (!hasChildren) {
                  return (
                    <Link key={item.label} href={item.href} className={navLinkCls}>
                      {item.label}
                    </Link>
                  );
                }

                const menuKey = getDesktopMenuKey(item.label);
                if (!menuKey) return null;

                const isOpen = desktopMenuOpen === menuKey;
                const menuId = desktopCommercialMenuId;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      clearDesktopCloseTimer();
                      setDesktopMenuOpen(menuKey);
                    }}
                    onMouseLeave={() => {
                      scheduleDesktopClose();
                    }}
                  >
                    <button
                      type="button"
                      className={`${navLinkCls} inline-flex items-center gap-1`}
                      aria-haspopup="menu"
                      aria-expanded={isOpen}
                      aria-controls={menuId}
                      onClick={() => {
                        clearDesktopCloseTimer();
                        setDesktopMenuOpen((prev) =>
                          prev === menuKey ? null : menuKey
                        );
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 opacity-60 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      id={menuId}
                      role="menu"
                      className={[
                        "absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-white/10 bg-[#050E1F] p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl",
                        isOpen
                          ? "opacity-100 translate-y-0"
                          : "pointer-events-none opacity-0 translate-y-1",
                        "transition-all duration-200",
                      ].join(" ")}
                      onMouseEnter={() => {
                        clearDesktopCloseTimer();
                        setDesktopMenuOpen(menuKey);
                      }}
                      onMouseLeave={() => {
                        scheduleDesktopClose();
                      }}
                    >
                      <Link
                        href={item.href}
                        role="menuitem"
                        className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-white hover:bg-white/[0.06]"
                        onClick={() => setDesktopMenuOpen(null)}
                      >
                        <span>Overview</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-white/40" />
                      </Link>
                      <div className="my-1.5 h-px bg-white/[0.08]" />
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className="block rounded-xl px-3.5 py-2.5 text-sm text-white/70 hover:bg-white/[0.05] hover:text-white transition"
                          onClick={() => setDesktopMenuOpen(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}

              <a href={PHONE_TEL} className={ctaSecondaryCls}>
                <Phone className="h-3.5 w-3.5 text-[#C9A227]" />
                <span className="tabular">Call</span>
              </a>

              {ctaItem ? (
                <Link href={ctaItem.href} className={ctaPrimaryCls}>
                  Walk-through
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
                </Link>
              ) : null}
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] h-10 w-10 text-[#C9A227] hover:bg-white/[0.08] transition"
                aria-label="Call us"
              >
                <Phone className="h-4 w-4" />
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] h-10 w-10 text-white hover:bg-white/[0.08] transition"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls={mobilePanelId}
                onClick={() => {
                  if (mobileOpen) closeMobileMenu();
                  else setMobileOpen(true);
                }}
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobilePortal}
    </>
  );
}
