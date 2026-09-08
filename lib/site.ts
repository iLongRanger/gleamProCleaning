export const site = {
  name: "Gleam Pro Cleaning",
  url: "https://gleampro.ca",
  phone: "778 223 0719",
  telephone: "+17782230719",
  email: "services@gleampro.ca",
  quoteHref: "/request-walkthrough?type=commercial",
  socialImage: "/opengraph-image",
} as const;

export const commercialServices = [
  {
    name: "Restaurants & pubs",
    href: "/commercial-cleaning/restaurants",
    facility: "restaurant",
  },
  { name: "Breweries & taprooms", href: "/breweries", facility: "brewery" },
  {
    name: "Offices & workplaces",
    href: "/commercial-cleaning/offices",
    facility: "office",
  },
  { name: "Clinics & medical offices", href: "/clinics", facility: "clinic" },
  {
    name: "Property management",
    href: "/commercial-cleaning/property-management",
    facility: "other",
  },
  {
    name: "Community facilities",
    href: "/commercial-cleaning/community-facilities",
    facility: "community",
  },
] as const;

export const homeFaqs = [
  {
    question: "How much does commercial cleaning cost?",
    answer:
      "Your quote depends on the size of your space, cleaning frequency, and the work involved. We start with a free, 15-minute walkthrough and send a written proposal within 24 hours after the visit. Your scope and price are agreed before cleaning begins.",
  },
  {
    question: "Can you clean after we close?",
    answer:
      "Yes. Our owner-led crews provide nightly service, seven days a week. We agree on access, alarm instructions, and a cleaning schedule around your opening hours during the walkthrough.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Our nightly routes focus on Burnaby, New Westminster, and Vancouver. We also serve Richmond, Surrey, Coquitlam, Delta, North Vancouver, and West Vancouver. Share your location so we can confirm a schedule for your property.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "You can start with a 30-day trial, with no lock-in and the option to cancel anytime. We confirm your cleaning scope, schedule, and service terms in writing before you start.",
  },
  {
    question: "Do you also offer residential cleaning?",
    answer:
      "Yes. We offer recurring home cleaning, deep cleaning, move-in and move-out cleaning, and carpet and upholstery care. Choose Residential on our quote form to request a home cleaning estimate.",
  },
] as const;
