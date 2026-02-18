export type ServiceArea = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  neighborhoods: string[];
  image: string;
  imageAlt: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "vancouver",
    name: "Vancouver",
    headline: "Commercial and residential cleaning in Vancouver",
    description:
      "Downtown cores, hospitality venues, and busy offices need consistent teams. We support Vancouver clients with reliable schedules and inspection-ready detail.",
    neighborhoods: [
      "Downtown",
      "Kitsilano",
      "Mount Pleasant",
      "East Vancouver",
      "South Granville",
    ],
    image: "/images/home/commercial-hero.png",
    imageAlt: "Commercial cleaning in Vancouver",
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    headline: "Burnaby cleaning teams for offices and facilities",
    description:
      "From business parks to community facilities, we help Burnaby clients keep spaces guest-ready with clear scopes and responsive service.",
    neighborhoods: ["Metrotown", "Brentwood", "Lougheed", "Edmonds"],
    image: "/images/home/1.png",
    imageAlt: "Cleaning service in Burnaby",
  },
  {
    slug: "new-westminster",
    name: "New Westminster",
    headline: "New Westminster service coverage",
    description:
      "We are based in New Westminster and support local offices, restaurants, and residential properties with consistent, premium cleaning.",
    neighborhoods: ["Uptown", "Downtown", "Sapperton", "Queens Park"],
    image: "/images/home/residential-hero.png",
    imageAlt: "Cleaning service in New Westminster",
  },
  {
    slug: "surrey",
    name: "Surrey",
    headline: "Surrey commercial and residential cleaning",
    description:
      "Growing teams across Surrey let us cover multi-site businesses while keeping the same inspection standard.",
    neighborhoods: ["Central City", "Guildford", "Fleetwood", "South Surrey"],
    image: "/images/home/commercial-hero.png",
    imageAlt: "Commercial cleaning in Surrey",
  },
  {
    slug: "richmond",
    name: "Richmond",
    headline: "Richmond facility and office cleaning",
    description:
      "We serve Richmond clients with reliable teams for retail, offices, and facilities that need after-hours care.",
    neighborhoods: ["City Centre", "Steveston", "Bridgeport"],
    image: "/images/home/1.png",
    imageAlt: "Cleaning service in Richmond",
  },
  {
    slug: "coquitlam",
    name: "Coquitlam",
    headline: "Coquitlam cleaning services",
    description:
      "Commercial-first systems work well for Coquitlam offices and multi-tenant facilities with recurring schedules.",
    neighborhoods: ["Town Centre", "Maillardville", "Westwood Plateau"],
    image: "/images/home/commercial-hero.png",
    imageAlt: "Cleaning service in Coquitlam",
  },
  {
    slug: "north-vancouver",
    name: "North Vancouver",
    headline: "North Vancouver cleaning coverage",
    description:
      "We support North Vancouver clients with trusted teams for offices, clinics, and premium homes.",
    neighborhoods: ["Lower Lonsdale", "Lynn Valley", "Edgemont"],
    image: "/images/home/residential-hero.png",
    imageAlt: "Cleaning service in North Vancouver",
  },
  {
    slug: "west-vancouver",
    name: "West Vancouver",
    headline: "West Vancouver premium cleaning",
    description:
      "Premium care and reliable crews for West Vancouver businesses and residences that demand detail.",
    neighborhoods: ["Ambleside", "Dundarave", "British Properties"],
    image: "/images/home/residential-hero.png",
    imageAlt: "Cleaning service in West Vancouver",
  },
  {
    slug: "delta",
    name: "Delta",
    headline: "Delta commercial and residential cleaning",
    description:
      "We serve Delta clients with reliable teams for commercial facilities, offices, and residential properties across Ladner, Tsawwassen, and North Delta.",
    neighborhoods: ["Ladner", "Tsawwassen", "North Delta", "Scottsdale"],
    image: "/images/home/commercial-hero.png",
    imageAlt: "Cleaning service in Delta",
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export const serviceAreaSlugs = serviceAreas.map((area) => area.slug);
