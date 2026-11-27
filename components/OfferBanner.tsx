import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { isOfferActive, rateLockOffer } from "@/lib/offer";

const OFFER_ENDS_MS = new Date(rateLockOffer.endsAt).getTime();
// Evaluated when the page is built/rendered on the server.
const ACTIVE_AT_RENDER = isOfferActive(Date.now());

export default function OfferBanner() {
  // Not rendered at all once a build happens after the deadline.
  if (!ACTIVE_AT_RENDER) return null;

  return (
    <>
      {/*
        Static pages may be served after the deadline without a rebuild, so
        the visitor's browser also hides the banner before it paints.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: `if(Date.now()>=${OFFER_ENDS_MS})document.documentElement.setAttribute("data-offer-ended","");`,
        }}
      />
      <aside className="offer-banner" aria-label="Limited-time offer">
        <div className="gpc-container">
          <p>
            <strong>{rateLockOffer.headline}</strong> {rateLockOffer.text}
          </p>
          <Link
            href={rateLockOffer.href}
            className="offer-banner-cta"
            data-offer={rateLockOffer.id}
          >
            {rateLockOffer.cta} <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </aside>
    </>
  );
}
