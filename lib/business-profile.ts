/**
 * Business facts used for trust content and structured data.
 *
 * RULE: only publish facts the owner has confirmed. Anything marked
 * `null`, an empty array, or `status: "needs-owner-confirmation"` is a
 * placeholder and is NOT rendered on the site or in schema until the owner
 * supplies or confirms it. Never fill these with guesses.
 */

export type CredentialStatus = "confirmed" | "needs-owner-confirmation";

export type Credential = {
  id: string;
  title: string;
  detail: string;
  status: CredentialStatus;
};

export type Review = {
  quote: string;
  /** Reviewer name exactly as shown on the source (e.g. Google). */
  author: string;
  /** Optional role/business, only if the reviewer agreed to it. */
  context?: string;
  source: "Google";
  /** ISO date the review was posted. */
  date: string;
  /** Set true only after the client agreed to be quoted on the site. */
  permissionToPublish: boolean;
};

export type SocialProfile = {
  label: "Google Business Profile" | "Instagram" | "Facebook" | "LinkedIn";
  url: string;
};

export const businessProfile = {
  legalName: "Gleam Pro Cleaning",
  address: {
    /** OWNER TO SUPPLY: street address, or leave null to stay a service-area business. */
    streetAddress: "6-1209 Fourth Avenue" as string | null,
    /** OWNER TO SUPPLY together with the street address. */
    postalCode: "V3M 1T8" as string | null,
    addressLocality: "New Westminster",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  /**
   * OWNER TO SUPPLY: the public Google Business Profile (Maps) URL.
   * Must match the name, phone and address on the profile exactly.
   */
  googleBusinessProfileUrl:
    "https://maps.google.com/maps?cid=16432121775463123768" as string | null,
  /** Direct "write a review" link, already published in public/marketing/google-reviews. */
  googleReviewUrl: "https://g.page/r/CTjLcJSxnwrkEAE/review",
  /** OWNER TO SUPPLY: add Instagram / Facebook / LinkedIn URLs once the pages exist. */
  socialProfiles: [] as SocialProfile[],
} as const;

export const credentials: Credential[] = [
  {
    id: "liability-insurance",
    title: "$1M commercial general liability insurance",
    detail: "Certificate of insurance available on request before your first visit.",
    status: "confirmed",
  },
  {
    id: "incorporated",
    title: "Incorporated business since 2024",
    detail: "Professional cleaning experience since 2019.",
    status: "confirmed",
  },
  {
    id: "written-scope",
    title: "Written scope and 30-day trial",
    detail: "Your checklist, schedule and price are agreed in writing. No lock-in.",
    status: "confirmed",
  },
  // ---- Hidden until the owner confirms each one and can show proof on request ----
  {
    id: "worksafebc",
    title: "WorkSafeBC registered",
    detail: "Clearance letter available on request.",
    status: "needs-owner-confirmation",
  },
  {
    id: "background-checks",
    title: "Criminal record checks",
    detail: "Every crew member is checked before working in your space.",
    status: "needs-owner-confirmation",
  },
  {
    id: "business-licence",
    title: "Licensed in the cities we serve",
    detail: "Municipal or inter-municipal business licence on file.",
    status: "needs-owner-confirmation",
  },
  {
    id: "whmis",
    title: "WHMIS-trained crews",
    detail: "Safe handling and labelling of cleaning chemicals.",
    status: "needs-owner-confirmation",
  },
  {
    id: "bonded",
    title: "Bonded",
    detail: "Coverage for client property and keys.",
    status: "needs-owner-confirmation",
  },
];

/**
 * Real client reviews only. Copy them word-for-word from Google, and only
 * after the client agrees to be quoted. Leave empty until then: the site
 * shows a "leave a review" link instead of testimonials.
 */
export const reviews: Review[] = [];

export const publishedCredentials = credentials.filter(
  (item) => item.status === "confirmed",
);

export const publishedReviews = reviews.filter((item) => item.permissionToPublish);

export function profileLinks(): string[] {
  return [
    businessProfile.googleBusinessProfileUrl,
    ...businessProfile.socialProfiles.map((profile) => profile.url),
  ].filter((url): url is string => Boolean(url));
}
