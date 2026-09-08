import { commercialServices, site } from "@/lib/site";

const SITE = site.url;

export default function HomeJsonLd({ areaNames }: { areaNames: string[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE}/#localbusiness`,
    name: "Gleam Pro Cleaning",
    url: SITE,
    image: `${SITE}/logo-gpc.png`,
    logo: `${SITE}/logo-gpc.png`,
    telephone: "+1-778-223-0719",
    email: "services@gleampro.ca",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Westminster",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    areaServed: areaNames.map((name) => ({ "@type": "City", name })),
    hasMap: "https://www.google.com/maps?q=New+Westminster,+BC",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-778-223-0719",
        contactType: "customer service",
        areaServed: "CA-BC",
        availableLanguage: ["English"],
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    description:
      "Family-owned commercial cleaning for restaurants, breweries, offices, clinics, and community facilities across Metro Vancouver.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial cleaning services",
      itemListElement: commercialServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${service.name} cleaning`,
          url: `${SITE}${service.href}`,
          provider: { "@id": `${SITE}/#localbusiness` },
          areaServed: "Metro Vancouver, BC",
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
