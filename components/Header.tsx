"use client";
import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { commercialServices, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLDetailsElement>(null);
  const mobileRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  function closeMobile() {
    mobileRef.current?.close();
  }
  function keepFocusInMenu(event: ReactKeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const elements = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        "a[href], button, summary",
      ),
    ).filter((element) => element.getClientRects().length > 0);
    const first = elements[0];
    const last = elements.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      )
        servicesRef.current.open = false;
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && servicesRef.current?.open) {
        servicesRef.current.open = false;
        servicesRef.current.querySelector("summary")?.focus();
      }
    }
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  useEffect(() => {
    const wideScreen = window.matchMedia("(min-width: 1100px)");
    const onResize = () => {
      if (wideScreen.matches) mobileRef.current?.close();
    };
    wideScreen.addEventListener("change", onResize);
    return () => wideScreen.removeEventListener("change", onResize);
  }, []);
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);
  const links = [
    { href: "/about", label: "Our story" },
    { href: "/service-areas", label: "Service areas" },
    { href: "/insights", label: "Cleaning insights" },
  ];
  return (
    <header className="site-header">
      <div className="header-announcement">
        <div className="gpc-container">
          <span>
            <MapPin size={12} aria-hidden="true" /> Locally owned. Proudly
            serving Metro Vancouver.
          </span>
          <a href={`tel:${site.telephone}`}>
            <Phone size={12} aria-hidden="true" /> {site.phone}
          </a>
        </div>
      </div>
      <div className="gpc-container header-main">
        <Link className="brand-link" href="/">
          <Image
            src="/logo-gpc.png"
            alt="Gleam Pro Cleaning"
            width={96}
            height={96}
            className="header-brand-logo"
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <details className="services-menu" ref={servicesRef}>
            <summary>
              Our services <ChevronDown size={14} aria-hidden="true" />
            </summary>
            <div className="services-dropdown">
              <span className="gpc-eyebrow">FOR YOUR BUSINESS</span>
              <Link
                href="/commercial-cleaning"
                onClick={() => {
                  if (servicesRef.current) servicesRef.current.open = false;
                }}
              >
                All commercial cleaning{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              {commercialServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => {
                    if (servicesRef.current) servicesRef.current.open = false;
                  }}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </details>
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href={site.quoteHref} className="gpc-button header-quote">
            Get a free quote <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <button
            className="mobile-menu-toggle"
            ref={menuButtonRef}
            aria-label="Open navigation menu"
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              mobileRef.current?.showModal();
              setMobileOpen(true);
            }}
          >
            <Menu size={23} aria-hidden="true" />
          </button>
        </div>
      </div>
      <dialog
        id="mobile-navigation"
        className="mobile-dialog"
        ref={mobileRef}
        aria-label="Navigation menu"
        onKeyDown={keepFocusInMenu}
        onClose={() => {
          setMobileOpen(false);
          menuButtonRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMobile();
        }}
      >
        <div className="mobile-dialog-body">
          <div className="mobile-dialog-heading">
            <span>Explore Gleam Pro</span>
            <button aria-label="Close navigation menu" onClick={closeMobile}>
              <X size={23} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            <Link href="/" onClick={closeMobile}>
              Home
            </Link>
            <details className="mobile-services">
              <summary>
                Our services <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <div>
                <Link href="/commercial-cleaning" onClick={closeMobile}>
                  All commercial cleaning
                </Link>
                {commercialServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={closeMobile}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </details>
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMobile}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href={site.quoteHref}
            className="gpc-button"
            onClick={closeMobile}
          >
            Get a free quote <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <a className="mobile-call" href={`tel:${site.telephone}`}>
            <Phone size={18} aria-hidden="true" /> {site.phone}
          </a>
        </div>
      </dialog>
    </header>
  );
}
