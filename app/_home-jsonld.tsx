const SITE = "https://gleampro.ca";

export default function HomeJsonLd({ areaNames }: { areaNames: string[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.2057,
      longitude: -122.911,
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
