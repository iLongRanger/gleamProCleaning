/**
 * Time-limited promotions shown across the site. When an offer's end date
 * passes, the banner hides itself, so an expired offer never stays live even
 * if nobody redeploys.
 */
export const januaryOffer = {
  id: "january-2027-rate-lock",
  // End of day January 31, 2027, Pacific time (PST, UTC-8).
  endsAt: "2027-02-01T08:00:00Z",
  headline: "January offer",
  message:
    "Start recurring commercial cleaning by January 31 and your rate is locked for all of 2027, plus a free one-day washroom and floor reset in your first month.",
  shortMessage:
    "Sign up by Jan 31: rate locked for 2027 + a free washroom and floor reset.",
  ctaLabel: "Book a free walkthrough",
  ctaHref: "/request-walkthrough?type=commercial",
} as const;

export function isOfferActive(
  offer: { endsAt: string },
  now: Date = new Date(),
) {
  return now.getTime() < new Date(offer.endsAt).getTime();
}
