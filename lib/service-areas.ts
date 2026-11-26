export type ServiceAreaFaq = { question: string; answer: string };

export type ServiceAreaFocus = {
  title: string;
  text: string;
  href: string;
};

export type ServiceArea = {
  slug: string;
  name: string;
  headline: string;
  /** Short summary used on listing pages and as the hero lead. */
  description: string;
  /** 140-160 character meta description for search results. */
  metaDescription: string;
  /**
   * "core" = on our nightly Burnaby / New Westminster / Vancouver routes.
   * "extended" = served by scheduled appointment, confirmed at walkthrough.
   */
  route: "core" | "extended";
  /** Unique local overview paragraphs. */
  intro: string[];
  /** Facility types that matter most in this city, with local context. */
  focus: ServiceAreaFocus[];
  /** Practical, local things we plan for during the walkthrough. */
  considerations: string[];
  faqs: ServiceAreaFaq[];
  neighborhoods: string[];
  image: string;
  imageAlt: string;
};

const RESTAURANTS = "/commercial-cleaning/restaurants";
const OFFICES = "/commercial-cleaning/offices";
const CLINICS = "/clinics";
const BREWERIES = "/breweries";
const PROPERTY = "/commercial-cleaning/property-management";
const COMMUNITY = "/commercial-cleaning/community-facilities";

export const serviceAreas: ServiceArea[] = [
  {
    slug: "vancouver",
    name: "Vancouver",
    headline: "Commercial and residential cleaning in Vancouver",
    description:
      "Downtown cores, hospitality venues, and busy offices need consistent teams. We support Vancouver clients with reliable schedules and inspection-ready detail.",
    metaDescription:
      "After-hours commercial cleaning in Vancouver for restaurants, offices, clinics and breweries. Owner-led crews, written scope, 30-day no-lock-in trial.",
    route: "core",
    intro: [
      "Vancouver is one of our three core nightly routes. Our owner-led crews clean after closing, so your restaurant, office or clinic is ready before the first customer or staff member walks in.",
      "From Gastown and Yaletown dining rooms to Broadway medical offices and the craft breweries around Main Street, Vancouver businesses keep long hours and get a lot of foot traffic. We build each scope around when you close, how you get in, and which rooms matter most to your customers.",
    ],
    focus: [
      {
        title: "Restaurants and pubs",
        text: "Late-closing kitchens and dining rooms in Downtown, Gastown, Yaletown and Kitsilano. Floors, washrooms and front-of-house cleaned overnight, with the kitchen line handled to your checklist.",
        href: RESTAURANTS,
      },
      {
        title: "Offices",
        text: "Tower suites and smaller offices that need nightly or several-times-a-week cleaning, coordinated with building security and loading rules.",
        href: OFFICES,
      },
      {
        title: "Clinics and medical offices",
        text: "Practices along the Broadway corridor and across the city that need consistent touchpoint disinfection and discreet, after-hours service.",
        href: CLINICS,
      },
      {
        title: "Breweries and taprooms",
        text: "Taprooms around Mount Pleasant and East Vancouver, with sticky floors, glassware areas and washrooms ready for the next day's service.",
        href: BREWERIES,
      },
    ],
    considerations: [
      "Downtown towers often need building-issued fobs, security sign-in and set times for elevator or loading-dock use. We sort these out with your property manager before the first visit.",
      "Late closing times are normal here, so we schedule cleaning after your last staff member leaves, seven days a week.",
      "Street parking is limited in dense neighbourhoods, so we plan arrival times and equipment around your building.",
    ],
    faqs: [
      {
        question: "Do you clean downtown Vancouver offices after hours?",
        answer:
          "Yes. Vancouver is on our nightly routes. During the walkthrough we confirm building access, security sign-in and your preferred cleaning window, then put it all in your written scope.",
      },
      {
        question: "Can you clean a Vancouver restaurant after a late close?",
        answer:
          "Yes. We clean after your last staff member leaves, seven days a week, and agree on alarm and lock-up steps in advance.",
      },
      {
        question: "How do I get a price for my Vancouver space?",
        answer:
          "Book a free walkthrough. We look at the space, agree on the scope, and send a written proposal within 24 hours after the visit.",
      },
    ],
    neighborhoods: [
      "Downtown",
      "Gastown",
      "Yaletown",
      "Kitsilano",
      "Mount Pleasant",
      "Fairview",
      "East Vancouver",
      "South Granville",
    ],
    image: "/images/service-areas/vancouver.jpg",
    imageAlt: "Commercial cleaning in Vancouver",
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    headline: "Burnaby cleaning teams for offices and facilities",
    description:
      "From business parks to community facilities, we help Burnaby clients keep spaces guest-ready with clear scopes and responsive service.",
    metaDescription:
      "Commercial cleaning in Burnaby for offices, restaurants, clinics and business parks near Metrotown and Brentwood. Owner-led, after-hours, 30-day trial.",
    route: "core",
    intro: [
      "Burnaby is next door to our New Westminster base and one of our three core nightly routes. That means short travel times and a consistent crew that gets to know your space.",
      "Burnaby has a bit of everything: office towers and retail around Metrotown and Brentwood, restaurants along Hastings Street and Kingsway, and business parks in areas like Lake City and Glenlyon. We write a scope that fits how your building actually runs.",
    ],
    focus: [
      {
        title: "Offices and business parks",
        text: "Multi-tenant offices and light-industrial units that need reliable nightly or weekly cleaning, plus common areas and washrooms.",
        href: OFFICES,
      },
      {
        title: "Restaurants",
        text: "Restaurants along Hastings Street, Kingsway and around the town centres, cleaned after close so you open to a fresh dining room.",
        href: RESTAURANTS,
      },
      {
        title: "Clinics",
        text: "Dental and medical offices around Metrotown, Brentwood and Lougheed that need consistent disinfection of high-touch surfaces.",
        href: CLINICS,
      },
      {
        title: "Property management",
        text: "Lobbies, amenity rooms and common areas in Burnaby's newer towers, on a schedule that suits residents and the strata or property manager.",
        href: PROPERTY,
      },
    ],
    considerations: [
      "Business parks often have shared entrances and alarm systems. We confirm alarm codes, key or fob handover and lock-up steps during the walkthrough.",
      "Towers around Metrotown and Brentwood usually need elevator and loading bookings. We work those into the schedule.",
      "Because Burnaby is close to our base, we can usually respond quickly to an urgent re-clean.",
    ],
    faqs: [
      {
        question: "How quickly can you start cleaning in Burnaby?",
        answer:
          "Burnaby is on our core nightly routes. After the free walkthrough we send a written proposal within 24 hours, and we can usually start soon after you approve it.",
      },
      {
        question: "Do you clean offices in business-park units?",
        answer:
          "Yes. We clean offices, washrooms, lunchrooms and front areas in business-park units. We list exactly which areas are included in your written scope.",
      },
      {
        question: "Is there a long-term contract?",
        answer:
          "No. You can start with a 30-day trial with no lock-in. If something is missed, tell us within 24 hours and we will re-clean it for free.",
      },
    ],
    neighborhoods: [
      "Metrotown",
      "Brentwood",
      "Lougheed",
      "Edmonds",
      "Burnaby Heights",
      "Lake City",
    ],
    image: "/images/service-areas/burnaby.jpg",
    imageAlt: "Cleaning service in Burnaby",
  },
  {
    slug: "new-westminster",
    name: "New Westminster",
    headline: "New Westminster service coverage",
    description:
      "We are based in New Westminster and support local offices, restaurants, and residential properties with consistent, premium cleaning.",
    metaDescription:
      "Local commercial cleaning in New Westminster, our home city. Restaurants, offices and clinics from Columbia Street to Sapperton. Owner-led, after-hours.",
    route: "core",
    intro: [
      "New Westminster is home. We are based here, so local businesses get the shortest response times on our routes and talk directly with the owners who run the crews.",
      "The city mixes heritage storefronts on Columbia Street, shops and offices in Uptown along Sixth Street, medical offices around Sapperton, and restaurants near the Quay. Older buildings need a different approach than new ones, and we plan for that.",
    ],
    focus: [
      {
        title: "Restaurants and cafés",
        text: "Downtown and Uptown restaurants, cafés and pubs cleaned after close, including washrooms, floors and front-of-house.",
        href: RESTAURANTS,
      },
      {
        title: "Clinics",
        text: "Medical and dental offices around Sapperton and Uptown that need careful, consistent disinfection and discreet service.",
        href: CLINICS,
      },
      {
        title: "Offices",
        text: "Small and mid-size offices downtown and in Uptown, cleaned nightly or a few times a week.",
        href: OFFICES,
      },
      {
        title: "Community facilities",
        text: "Studios, halls and community spaces with heavy evening use that need to be ready again the next morning.",
        href: COMMUNITY,
      },
    ],
    considerations: [
      "Heritage buildings downtown often have original wood floors, tile and older fixtures. We choose products and methods that are safe for them.",
      "Many storefronts have back-lane access. We confirm entrances, alarms and lock-up routines during the walkthrough.",
      "As our home city, New Westminster gets the fastest response for urgent requests and free re-cleans.",
    ],
    faqs: [
      {
        question: "Are you a New Westminster company?",
        answer:
          "Yes. Gleam Pro Cleaning is a family-owned company based in New Westminster, and the owners lead the crews.",
      },
      {
        question: "Can you clean heritage buildings on Columbia Street?",
        answer:
          "Yes. We look at the flooring and fixtures during the walkthrough and choose methods that suit older surfaces. Anything special goes into your written scope.",
      },
      {
        question: "Do you serve Queensborough?",
        answer:
          "Yes. Queensborough is part of New Westminster and is covered by our local routes.",
      },
    ],
    neighborhoods: [
      "Downtown",
      "Uptown",
      "Sapperton",
      "Queens Park",
      "Quay",
      "Queensborough",
    ],
    image: "/images/service-areas/new-westminster.jpg",
    imageAlt: "Cleaning service in New Westminster",
  },
  {
    slug: "surrey",
    name: "Surrey",
    headline: "Surrey commercial and residential cleaning",
    description:
      "Growing teams across Surrey let us cover multi-site businesses while keeping the same inspection standard.",
    metaDescription:
      "Commercial cleaning in Surrey for offices, restaurants, clinics and multi-site businesses in City Centre, Guildford, Fleetwood and South Surrey.",
    route: "extended",
    intro: [
      "Surrey is a big city with several town centres, so we plan Surrey service by neighbourhood. We confirm the days and times we can be on site during your walkthrough, before you commit to anything.",
      "We work best with Surrey businesses that want a regular schedule: offices in City Centre, restaurants and shops around Guildford and Fleetwood, and clinics across the city. Multi-location businesses get one scope and one point of contact.",
    ],
    focus: [
      {
        title: "Offices",
        text: "Offices in and around City Centre that want a consistent crew and a written checklist.",
        href: OFFICES,
      },
      {
        title: "Restaurants",
        text: "Restaurants in Guildford, Fleetwood, Newton and South Surrey, cleaned after close on an agreed schedule.",
        href: RESTAURANTS,
      },
      {
        title: "Clinics",
        text: "Medical and dental offices that need dependable, scheduled disinfection and a crew who knows the space.",
        href: CLINICS,
      },
      {
        title: "Multi-site businesses",
        text: "Owners with more than one Metro Vancouver location who want the same standard and one contact at every site.",
        href: PROPERTY,
      },
    ],
    considerations: [
      "Surrey covers a large area, so we group visits by neighbourhood and confirm your cleaning window before you sign up.",
      "Plazas and strip malls often share parking and service entrances. We confirm access and alarm steps on the walkthrough.",
      "If you have sites in Burnaby, New Westminster or Vancouver too, we can put them all under one scope.",
    ],
    faqs: [
      {
        question: "Do you offer nightly cleaning in Surrey?",
        answer:
          "We serve Surrey by scheduled appointment. During the walkthrough we confirm which days and times we can commit to, and put them in your written scope.",
      },
      {
        question: "Which parts of Surrey do you cover?",
        answer:
          "City Centre, Guildford, Fleetwood, Newton and South Surrey. If your business is elsewhere in Surrey, ask us and we will confirm.",
      },
      {
        question: "Can you clean several of our locations?",
        answer:
          "Yes. We can cover multiple Metro Vancouver sites with one scope, one invoice and one point of contact.",
      },
    ],
    neighborhoods: [
      "City Centre",
      "Guildford",
      "Fleetwood",
      "Newton",
      "South Surrey",
    ],
    image: "/images/service-areas/surrey.jpg",
    imageAlt: "Commercial cleaning in Surrey",
  },
  {
    slug: "richmond",
    name: "Richmond",
    headline: "Richmond facility and office cleaning",
    description:
      "We serve Richmond clients with reliable teams for retail, offices, and facilities that need after-hours care.",
    metaDescription:
      "Commercial cleaning in Richmond for restaurants, offices and clinics along No. 3 Road, City Centre and Steveston. Written scope, no lock-in trial.",
    route: "extended",
    intro: [
      "Richmond is a busy city for restaurants and offices, especially in City Centre along No. 3 Road and in Steveston Village. We serve Richmond by scheduled appointment and confirm your cleaning days during the walkthrough.",
      "Restaurants here often run late and see heavy weekend traffic, while offices and clinics in City Centre need steady weekday cleaning. We write the scope around your hours, not ours.",
    ],
    focus: [
      {
        title: "Restaurants",
        text: "City Centre and Steveston restaurants cleaned after close, with washrooms, floors and dining rooms ready for the next service.",
        href: RESTAURANTS,
      },
      {
        title: "Offices",
        text: "Offices in City Centre and business areas like Bridgeport that want a consistent crew and a checklist.",
        href: OFFICES,
      },
      {
        title: "Clinics",
        text: "Medical and dental offices that need scheduled disinfection of reception, treatment rooms and washrooms.",
        href: CLINICS,
      },
      {
        title: "Community spaces",
        text: "Studios and community spaces with evening classes that need to be reset for the next day.",
        href: COMMUNITY,
      },
    ],
    considerations: [
      "Restaurants in shopping plazas often share service corridors and garbage areas. We confirm which areas are yours to clean.",
      "Weekend rushes in Steveston and City Centre may need an extra visit. We can build that into your schedule.",
      "We confirm travel time and your cleaning window before you commit.",
    ],
    faqs: [
      {
        question: "Do you serve Richmond restaurants?",
        answer:
          "Yes. We serve Richmond by scheduled appointment. After a free walkthrough we confirm your cleaning days and send a written proposal within 24 hours.",
      },
      {
        question: "Can you add extra cleans after busy weekends?",
        answer:
          "Yes. We can add a visit after your busiest days and list it in your written scope so the price is clear.",
      },
      {
        question: "Is there a contract?",
        answer:
          "You can start with a 30-day trial with no lock-in, and cancel anytime.",
      },
    ],
    neighborhoods: ["City Centre", "Steveston", "Bridgeport", "Brighouse"],
    image: "/images/service-areas/richmond.jpg",
    imageAlt: "Cleaning service in Richmond",
  },
  {
    slug: "coquitlam",
    name: "Coquitlam",
    headline: "Coquitlam cleaning services",
    description:
      "Commercial-first systems work well for Coquitlam offices and multi-tenant facilities with recurring schedules.",
    metaDescription:
      "Commercial cleaning in Coquitlam for offices, clinics, restaurants and multi-tenant buildings near City Centre, Burquitlam and Austin Heights.",
    route: "extended",
    intro: [
      "Coquitlam has grown quickly around its SkyTrain stations, with new offices, clinics and mixed-use buildings in City Centre and Burquitlam. We serve Coquitlam by scheduled appointment, a short drive from our New Westminster base.",
      "Many Coquitlam businesses are in multi-tenant buildings with shared lobbies and washrooms. We make clear in writing which areas we clean, so nothing falls between you and your landlord.",
    ],
    focus: [
      {
        title: "Offices",
        text: "Offices in City Centre and Burquitlam that want regular weekday cleaning and a consistent crew.",
        href: OFFICES,
      },
      {
        title: "Clinics",
        text: "Medical, dental and physio clinics that need dependable disinfection of treatment rooms and reception.",
        href: CLINICS,
      },
      {
        title: "Restaurants",
        text: "Restaurants around Austin Heights, Maillardville and City Centre, cleaned after close.",
        href: RESTAURANTS,
      },
      {
        title: "Multi-tenant buildings",
        text: "Shared lobbies, hallways and washrooms for property managers who want one reliable cleaning partner.",
        href: PROPERTY,
      },
    ],
    considerations: [
      "In shared buildings, we confirm which areas are your responsibility and which belong to the landlord or strata.",
      "Newer buildings often use fob access and set hours. We arrange access before the first visit.",
      "We confirm your cleaning days during the walkthrough, before you commit.",
    ],
    faqs: [
      {
        question: "Do you clean offices in Coquitlam City Centre?",
        answer:
          "Yes. We serve Coquitlam by scheduled appointment and confirm your cleaning days during the free walkthrough.",
      },
      {
        question: "Can you clean the common areas of our building?",
        answer:
          "Yes. We work with property managers on lobbies, hallways, washrooms and amenity rooms, with every area listed in the written scope.",
      },
      {
        question: "What if something is missed?",
        answer:
          "Tell us within 24 hours and we will re-clean it for free.",
      },
    ],
    neighborhoods: [
      "City Centre",
      "Burquitlam",
      "Austin Heights",
      "Maillardville",
      "Westwood Plateau",
    ],
    image: "/images/service-areas/coquitlam.jpg",
    imageAlt: "Cleaning service in Coquitlam",
  },
  {
    slug: "north-vancouver",
    name: "North Vancouver",
    headline: "North Vancouver cleaning coverage",
    description:
      "We support North Vancouver clients with trusted teams for offices, clinics, and premium homes.",
    metaDescription:
      "Commercial cleaning in North Vancouver for clinics, offices and restaurants in Lonsdale, Lynn Valley and Edgemont. Owner-led crews, written scope.",
    route: "extended",
    intro: [
      "North Vancouver businesses are spread along Lonsdale Avenue, from the Shipyards and Lower Lonsdale up to Central Lonsdale, plus village centres like Lynn Valley and Edgemont. We serve North Vancouver by scheduled appointment.",
      "Central Lonsdale has many medical and dental offices, while Lower Lonsdale is full of restaurants and cafés. We plan visits around bridge traffic so your cleaning happens on time.",
    ],
    focus: [
      {
        title: "Clinics",
        text: "Medical, dental and physio offices along Lonsdale that need consistent disinfection and discreet service.",
        href: CLINICS,
      },
      {
        title: "Restaurants and cafés",
        text: "Lower Lonsdale and Shipyards restaurants cleaned after close, ready for the next morning.",
        href: RESTAURANTS,
      },
      {
        title: "Offices",
        text: "Small offices and professional practices that want a reliable weekly or several-times-a-week clean.",
        href: OFFICES,
      },
      {
        title: "Community spaces",
        text: "Studios and community spaces with busy evening schedules.",
        href: COMMUNITY,
      },
    ],
    considerations: [
      "Bridge traffic can affect arrival times, so we agree on a cleaning window that works reliably.",
      "Clinics often have patient privacy needs. We agree on which rooms we enter and how files and equipment are handled.",
      "We confirm your cleaning days during the walkthrough, before you commit.",
    ],
    faqs: [
      {
        question: "Do you serve North Vancouver?",
        answer:
          "Yes, by scheduled appointment. We confirm your days and times during the free walkthrough and put them in your written scope.",
      },
      {
        question: "Can you clean a medical or dental clinic on Lonsdale?",
        answer:
          "Yes. We follow a written disinfection checklist for reception, treatment rooms and washrooms, and clean after hours so patients are not disturbed.",
      },
      {
        question: "Do you bring your own supplies?",
        answer:
          "Yes. Standard supplies and equipment are included. Consumables like paper towels, liners and hand soap are agreed during onboarding.",
      },
    ],
    neighborhoods: [
      "Lower Lonsdale",
      "Central Lonsdale",
      "Lynn Valley",
      "Edgemont",
      "Marine Drive",
    ],
    image: "/images/service-areas/north-vancouver.jpg",
    imageAlt: "Cleaning service in North Vancouver",
  },
  {
    slug: "west-vancouver",
    name: "West Vancouver",
    headline: "West Vancouver premium cleaning",
    description:
      "Premium care and reliable crews for West Vancouver businesses and residences that demand detail.",
    metaDescription:
      "Detail-focused cleaning in West Vancouver for offices, clinics, restaurants and homes in Ambleside, Dundarave and Park Royal. Written scope, no lock-in.",
    route: "extended",
    intro: [
      "West Vancouver businesses expect a high standard. Boutiques, restaurants and professional offices along Marine Drive in Ambleside and Dundarave need spaces that look right every day. We serve West Vancouver by scheduled appointment.",
      "We also offer residential estimates for West Vancouver homes, including recurring and deep cleaning, with the same written scope and owner-led crews.",
    ],
    focus: [
      {
        title: "Professional offices",
        text: "Financial, legal and other professional offices that want a polished reception and meeting rooms every morning.",
        href: OFFICES,
      },
      {
        title: "Clinics",
        text: "Medical, dental and wellness clinics that need careful, consistent disinfection.",
        href: CLINICS,
      },
      {
        title: "Restaurants",
        text: "Ambleside and Dundarave restaurants and cafés cleaned after close.",
        href: RESTAURANTS,
      },
      {
        title: "Homes",
        text: "Recurring and deep cleaning for West Vancouver homes, quoted after a visit.",
        href: "/residential-cleaning",
      },
    ],
    considerations: [
      "High-end finishes like natural stone and hardwood need the right products. We note surfaces during the walkthrough.",
      "Storefronts on Marine Drive often need cleaning before opening rather than overnight. We schedule around you.",
      "We confirm your cleaning days during the walkthrough, before you commit.",
    ],
    faqs: [
      {
        question: "Do you serve West Vancouver businesses?",
        answer:
          "Yes, by scheduled appointment. We confirm your cleaning days during the free walkthrough.",
      },
      {
        question: "Can you clean natural stone and hardwood?",
        answer:
          "Yes. We note special surfaces during the walkthrough and use suitable products and methods, listed in your written scope.",
      },
      {
        question: "Do you also clean homes in West Vancouver?",
        answer:
          "Yes. Choose Residential on our quote form for a home cleaning estimate.",
      },
    ],
    neighborhoods: [
      "Ambleside",
      "Dundarave",
      "Park Royal",
      "British Properties",
    ],
    image: "/images/service-areas/west-vancouver.jpg",
    imageAlt: "Cleaning service in West Vancouver",
  },
  {
    slug: "delta",
    name: "Delta",
    headline: "Delta commercial and residential cleaning",
    description:
      "We serve Delta clients with reliable teams for commercial facilities, offices, and residential properties across Ladner, Tsawwassen, and North Delta.",
    metaDescription:
      "Commercial cleaning in Delta for offices, restaurants, clinics and industrial-park offices in North Delta, Ladner, Tsawwassen, Tilbury and Annacis Island.",
    route: "extended",
    intro: [
      "Delta has three very different communities, North Delta, Ladner and Tsawwassen, plus large business and industrial areas like Tilbury and Annacis Island. We serve Delta by scheduled appointment.",
      "Industrial-park businesses usually need their offices, lunchrooms and washrooms cleaned while the warehouse keeps running. Village restaurants and clinics in Ladner and Tsawwassen need a reliable, after-hours crew. We write a scope for each.",
    ],
    focus: [
      {
        title: "Industrial-park offices",
        text: "Office areas, lunchrooms and washrooms at businesses in Tilbury and on Annacis Island.",
        href: OFFICES,
      },
      {
        title: "Restaurants",
        text: "Ladner Village, Tsawwassen and Scott Road restaurants cleaned after close.",
        href: RESTAURANTS,
      },
      {
        title: "Clinics",
        text: "Medical and dental offices that need dependable scheduled disinfection.",
        href: CLINICS,
      },
      {
        title: "Community spaces",
        text: "Studios, halls and community spaces used in the evenings.",
        href: COMMUNITY,
      },
    ],
    considerations: [
      "Industrial sites often have shift workers on site. We agree on which areas we clean and when, so we do not get in the way.",
      "Site safety rules and sign-in steps are confirmed during the walkthrough.",
      "We confirm your cleaning days and travel time before you commit.",
    ],
    faqs: [
      {
        question: "Do you clean offices at industrial sites in Delta?",
        answer:
          "Yes. We clean office areas, lunchrooms and washrooms, and follow your site's sign-in and safety rules.",
      },
      {
        question: "Which parts of Delta do you serve?",
        answer:
          "North Delta, Ladner, Tsawwassen, Tilbury and Annacis Island, by scheduled appointment.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Book a free walkthrough. We send a written proposal within 24 hours after the visit.",
      },
    ],
    neighborhoods: [
      "North Delta",
      "Ladner",
      "Tsawwassen",
      "Tilbury",
      "Annacis Island",
    ],
    image: "/images/service-areas/delta.jpg",
    imageAlt: "Cleaning service in Delta",
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

export const serviceAreaSlugs = serviceAreas.map((area) => area.slug);
