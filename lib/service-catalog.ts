export type ServiceCategory = "commercial" | "residential";

export type ServiceCatalogItem = {
  slug: string;
  label: string;
  href: string;
  category: ServiceCategory;
  description: string;
};

export const serviceCatalog: ServiceCatalogItem[] = [
  {
    slug: "commercial-cleaning",
    label: "Commercial Cleaning",
    href: "/commercial-cleaning",
    category: "commercial",
    description:
      "General janitorial support for offices, facilities, and business operations.",
  },
  {
    slug: "restaurants",
    label: "Restaurant Cleaning",
    href: "/commercial-cleaning/restaurants",
    category: "commercial",
    description:
      "Inspection-focused cleaning programs for restaurants, pubs, and food service spaces.",
  },
  {
    slug: "offices",
    label: "Office Cleaning",
    href: "/commercial-cleaning/offices",
    category: "commercial",
    description:
      "After-hours and recurring office cleaning for workspaces and shared amenities.",
  },
  {
    slug: "community-facilities",
    label: "Community Facility Cleaning",
    href: "/commercial-cleaning/community-facilities",
    category: "commercial",
    description:
      "Flexible routines for high-traffic public and multi-room community spaces.",
  },
  {
    slug: "residential-cleaning",
    label: "Residential Cleaning",
    href: "/residential-cleaning",
    category: "residential",
    description:
      "Recurring and one-time home cleaning options tailored to lifestyle and schedule.",
  },
  {
    slug: "recurring",
    label: "Recurring Cleaning",
    href: "/residential-cleaning/recurring",
    category: "residential",
    description: "Weekly, bi-weekly, and monthly maintenance cleaning services.",
  },
  {
    slug: "deep-cleaning",
    label: "Deep Cleaning",
    href: "/residential-cleaning/deep-cleaning",
    category: "residential",
    description:
      "Detail-heavy one-time cleaning for seasonal resets and special occasions.",
  },
  {
    slug: "move-in-out",
    label: "Move-In/Out Cleaning",
    href: "/residential-cleaning/move-in-out",
    category: "residential",
    description:
      "Turnover-ready cleaning for moving transitions, rentals, and property prep.",
  },
  {
    slug: "carpet-upholstery",
    label: "Carpet & Upholstery",
    href: "/residential-cleaning/carpet-upholstery",
    category: "residential",
    description:
      "Fabric-safe cleaning for carpets, furniture, and high-use soft surfaces.",
  },
];

export function getServiceBySlug(slug: string): ServiceCatalogItem | undefined {
  return serviceCatalog.find((item) => item.slug === slug);
}
