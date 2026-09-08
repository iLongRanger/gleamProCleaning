import Link from "next/link";
import { ArrowLeft, Check, Clock3, Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";
export default async function RequestWalkthroughPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; facility?: string }>;
}) {
  const params = await searchParams;
  const type = params.type === "residential" ? "residential" : "commercial";
  const facility = [
    "brewery",
    "clinic",
    "restaurant",
    "office",
    "community",
    "other",
  ].includes(params.facility ?? "")
    ? params.facility
    : "";
  return (
    <div className="quote-page">
      <div className="gpc-container">
        <Link href="/" className="quote-back">
          <ArrowLeft size={15} aria-hidden="true" /> Back to home
        </Link>
        <div className="quote-page-grid">
          <div className="quote-page-copy">
            <p className="gpc-eyebrow">A CLEANER SPACE STARTS WITH HELLO</p>
            <h1>
              Let’s take cleaning
              <br />
              off <em>your list.</em>
            </h1>
            <p>
              Tell us a little about your space. We’ll get in touch to discuss
              your cleaning needs and the next steps. There’s no obligation.
            </p>
            <ul>
              <li>
                <Check size={19} aria-hidden="true" /> A cleaning plan around
                your priorities
              </li>
              <li>
                <Check size={19} aria-hidden="true" /> Clear pricing before we
                get started
              </li>
              <li>
                <Check size={19} aria-hidden="true" /> A local, family-owned
                team
              </li>
            </ul>
            <div className="quote-page-contact">
              <span>Prefer to speak with us?</span>
              <a href={`tel:${site.telephone}`}>
                <Phone size={20} aria-hidden="true" /> {site.phone}
              </a>
              <p>
                <Clock3 size={14} aria-hidden="true" /> Mon–Fri, 8 am–6 pm ·
                Sat, 9 am–4 pm
              </p>
            </div>
          </div>
          <div className="quote-card">
            <h2>Get your free quote.</h2>
            <LeadForm
              key={`${type}-${facility}`}
              source="walkthrough-page"
              initialType={type}
              initialFacility={facility}
              allowResidential
            />
            <p className="quote-trial">
              Commercial cleaning: start with a 30-day trial.
              <br />
              No lock-in. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
