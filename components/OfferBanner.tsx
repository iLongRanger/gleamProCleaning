"use client";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { ArrowUpRight } from "lucide-react";
import { isOfferActive, januaryOffer } from "@/lib/offers";

const offer = januaryOffer;
const noSubscription = () => () => {};

export default function OfferBanner() {
  // Pages are statically rendered, so the server HTML always includes the
  // banner and the browser checks the date after hydration: once the offer
  // ends, it disappears without a redeploy and without a hydration mismatch.
  const active = useSyncExternalStore(
    noSubscription,
    () => isOfferActive(offer),
    () => true,
  );
  if (!active) return null;
  return (
    <aside className="offer-banner" aria-label={offer.headline}>
      <div className="gpc-container">
        <p>
          <strong>{offer.headline}:</strong>{" "}
          <span className="offer-banner-long">{offer.message}</span>
          <span className="offer-banner-short">{offer.shortMessage}</span>
        </p>
        <Link href={offer.ctaHref} className="offer-banner-cta">
          {offer.ctaLabel} <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
