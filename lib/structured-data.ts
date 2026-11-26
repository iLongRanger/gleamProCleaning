import { businessProfile, profileLinks } from "@/lib/business-profile";
import { site } from "@/lib/site";

export const LOCAL_BUSINESS_ID = `${site.url}/#localbusiness`;

export function postalAddressSchema() {
  const { streetAddress, postalCode, addressLocality, addressRegion, addressCountry } =
    businessProfile.address;
  return {
    "@type": "PostalAddress",
    ...(streetAddress ? { streetAddress } : {}),
    addressLocality,
    addressRegion,
    ...(postalCode ? { postalCode } : {}),
    addressCountry,
  };
}

/**
 * Single source for the LocalBusiness entity so the name, phone, address and
 * profile links stay identical on every page (NAP consistency).
 */
export function localBusinessSchema(extra: Record<string, unknown> = {}) {
  const sameAs = profileLinks();
  return {
    "@type": "LocalBusiness",
    "@id": LOCAL_BUSINESS_ID,
    name: site.name,
    url: site.url,
    image: `${site.url}/logo-gpc.png`,
    logo: `${site.url}/logo-gpc.png`,
    telephone: "+1-778-223-0719",
    email: site.email,
    address: postalAddressSchema(),
    hasMap:
      businessProfile.googleBusinessProfileUrl ??
      "https://www.google.com/maps?q=New+Westminster,+BC",
    ...(sameAs.length ? { sameAs } : {}),
    ...extra,
  };
}
