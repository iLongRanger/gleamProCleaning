import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of Gleam Pro Cleaning services and this website.",
  alternates: { canonical: "/terms" },
};

const updated = "May 26, 2026";

export default function TermsPage() {
  return (
    <div className="bg-[#050E1F] text-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#C9A227]">
          Terms
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.05]">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-white/55">Last updated {updated}</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-white/75">
          <section>
            <h2 className="font-display text-2xl text-white">Acceptance</h2>
            <p className="mt-3">
              By submitting a walk-through request, requesting an estimate, or
              booking service with Gleam Pro Cleaning you agree to these terms.
              If you do not agree, please do not submit a request.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">Quotes & scope</h2>
            <p className="mt-3">
              Walk-through quotes are valid for 30 days from the date issued.
              Scope is documented in writing before service begins. Any work
              outside the documented scope will be confirmed and quoted
              separately before being performed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">
              Scheduling, cancellation & access
            </h2>
            <p className="mt-3">
              We ask for at least 24 hours&rsquo; notice for cancellation or
              rescheduling of a confirmed visit. Lock-outs or denied access at
              the scheduled time may be billed at the standard visit rate. We
              will work with you to recover the visit on the next available
              date.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">Payment</h2>
            <p className="mt-3">
              Invoices for one-time work are due on completion. Recurring
              accounts are invoiced on the schedule agreed at signup (typically
              monthly). Overdue balances may pause future service until
              resolved.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">
              Insurance & liability
            </h2>
            <p className="mt-3">
              Gleam Pro Cleaning carries $1,000,000 commercial general liability
              insurance. Cleaning services are performed by vetted independent
              contractors. We will repair or replace items damaged through our
              negligence or the negligence of our contractors during a service
              visit. Our total liability for any claim is limited to the amount
              paid for the visit during which the loss occurred. We are not
              liable for pre-existing damage, normal wear, or items not disclosed
              prior to service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">Satisfaction</h2>
            <p className="mt-3">
              If something is missed, let us know within 24 hours of the visit
              and we will return to make it right at no additional charge. We
              do not offer refunds for completed visits where re-clean was not
              requested.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">Website use</h2>
            <p className="mt-3">
              The content on this website is provided for general information.
              We make reasonable efforts to keep pricing and service details
              current but reserve the right to update or correct information at
              any time without notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">Governing law</h2>
            <p className="mt-3">
              These terms are governed by the laws of the Province of British
              Columbia and applicable Canadian federal law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-white">Contact</h2>
            <p className="mt-3">
              Questions about these terms?{" "}
              <a href="mailto:services@gleampro.ca" className="text-white underline">
                services@gleampro.ca
              </a>{" "}
              ·{" "}
              <a href="tel:+17786810922" className="text-white underline">
                (778) 681-0922
              </a>
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-sm">
          <Link href="/privacy" className="text-white/70 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/" className="text-white/70 hover:text-white">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
