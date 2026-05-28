import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Gleam Pro Cleaning collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

const updated = "May 26, 2026";

export default function PrivacyPage() {
  return (
    <div className="bg-[#050E1F] text-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#C9A227]">
          Privacy
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.05]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-white/55">Last updated {updated}</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-white/75">
          <section>
            <h2 className="font-display text-2xl text-white">Who we are</h2>
            <p className="mt-3">
              Gleam Pro Cleaning (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)
              provides commercial and residential cleaning services across Metro
              Vancouver, British Columbia, Canada. You can reach us at{" "}
              <a href="mailto:services@gleampro.ca" className="text-white underline">
                services@gleampro.ca
              </a>{" "}
              or{" "}
              <a href="tel:+17786810922" className="text-white underline">
                (778) 681-0922
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">
              Information we collect
            </h2>
            <p className="mt-3">
              When you request a walk-through or estimate we collect the
              information you provide: name, business name (commercial requests),
              email, phone number, service address, preferred frequency, and any
              notes about your space. We also collect basic technical data when
              you visit our site (browser type, pages viewed, approximate
              location based on IP) for analytics.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">
              How we use your information
            </h2>
            <p className="mt-3">We use the information you provide to:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Respond to your walk-through or estimate request</li>
              <li>Schedule and deliver the cleaning services you book</li>
              <li>Send service-related communications and invoices</li>
              <li>Improve our website and service offerings</li>
            </ul>
            <p className="mt-3">
              We do not sell your information. We do not share it with third
              parties except as needed to deliver the service you requested
              (e.g. payment processors) or where required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">Cookies & analytics</h2>
            <p className="mt-3">
              We use first-party cookies and privacy-respecting analytics to
              understand which pages are useful and how visitors find us. You can
              disable cookies in your browser settings without affecting your
              ability to submit a request.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">Data retention</h2>
            <p className="mt-3">
              We retain lead and customer records for as long as needed to
              service your account and meet our legal and accounting obligations
              under Canadian and British Columbia law. You may request deletion
              of your information at any time by emailing{" "}
              <a href="mailto:services@gleampro.ca" className="text-white underline">
                services@gleampro.ca
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">Your rights</h2>
            <p className="mt-3">
              Under British Columbia&rsquo;s Personal Information Protection Act
              (PIPA) you can ask to access, correct, or delete the personal
              information we hold about you. Contact{" "}
              <a href="mailto:services@gleampro.ca" className="text-white underline">
                services@gleampro.ca
              </a>{" "}
              and we&rsquo;ll respond within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">Changes</h2>
            <p className="mt-3">
              We may update this policy from time to time. Material changes will
              be reflected on this page with a new &ldquo;Last updated&rdquo; date.
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm">
          <Link href="/terms" className="text-white/70 hover:text-white">
            Terms of Service
          </Link>
          <Link href="/" className="text-white/70 hover:text-white">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
