import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { commercialServices, site } from "@/lib/site";
export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="gpc-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand-link" href="/">
              <Image src="/logo-gpc.png" alt="" width={52} height={52} />
              <span>
                <strong>Gleam Pro.</strong>
                <small>PROFESSIONAL CLEANING</small>
              </span>
            </Link>
            <p>
              A cleaner space. A better start.
              <br />
              Family-owned commercial cleaning across Metro Vancouver.
            </p>
            <span className="footer-experience">
              Professional experience since 2019.
              <br />
              Incorporated in 2024.
            </span>
          </div>
          <div>
            <h2>For your business</h2>
            <ul>
              {commercialServices.map((service) => (
                <li key={service.href}>
                  <Link href={service.href}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>
              {[
                { label: "Our story", href: "/about" },
                { label: "Service areas", href: "/service-areas" },
                { label: "Cleaning insights", href: "/insights" },
                { label: "Common questions", href: "/commercial-cleaning/faq" },
                {
                  label: "Residential cleaning",
                  href: "/residential-cleaning",
                },
                { label: "Get a free quote", href: site.quoteHref },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h2>Let’s talk clean</h2>
            <a href={`tel:${site.telephone}`}>
              <Phone size={16} aria-hidden="true" /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail size={16} aria-hidden="true" /> {site.email}
            </a>
            <p>
              <MapPin size={16} aria-hidden="true" /> New Westminster, BC
            </p>
            <div className="footer-hours">
              <span>Office hours</span>
              <p>
                Mon–Fri: 8 am–6 pm
                <br />
                Sat: 9 am–4 pm
                <br />
                Sun: By appointment
              </p>
              <span>Cleaning scheduled around your business.</span>
            </div>
            <a
              className="footer-map"
              href="https://www.google.com/maps?q=New+Westminster,+BC"
              target="_blank"
              rel="noopener noreferrer"
            >
              View our home city on Google Maps{" "}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Gleam Pro Cleaning. All rights
            reserved.
          </p>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <span>Made for a fresh start.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
