/**
 * New-year commercial offer. The banner hides itself automatically once
 * OFFER_ENDS_AT passes (end of Jan 31, 2027, Vancouver time).
 */
export const rateLockOffer = {
  id: "rate-lock-2027",
  headline: "Lock your 2027 rate.",
  text: "Sign up for recurring commercial cleaning by January 31 and your rate is locked for all of 2027, plus a free one-day reset of your washrooms and floors in your first month.",
  cta: "Book a free walkthrough",
  href: "/request-walkthrough?type=commercial",
  endsAt: "2027-02-01T00:00:00-08:00",
} as const;

export function isOfferActive(now: Date | number, endsAt: string = rateLockOffer.endsAt) {
  return new Date(now).getTime() < new Date(endsAt).getTime();
}
