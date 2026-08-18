export type LisaAction =
  | { label: string; href: string; kind: "link" }
  | { label: string; kind: "lead" };

export type LisaServiceIntent =
  | "restaurants"
  | "breweries"
  | "clinics"
  | "offices"
  | "property-management"
  | "community-facilities"
  | "residential-services"
  | "deep-cleaning"
  | "move-cleaning"
  | "carpet-upholstery"
  | "post-renovation";

export type LisaConversationContext = {
  serviceIntent?: LisaServiceIntent;
  unknownCount?: number;
};

export type LisaReply = {
  intent: string;
  answer: string;
  actions?: LisaAction[];
  answered: boolean;
  context?: LisaConversationContext;
};

type KnowledgeEntry = LisaReply & {
  phrases: string[];
  keywords: string[];
};

const walkthroughAction: LisaAction = {
  label: "Request a walk-through",
  kind: "lead",
};

const knowledgeBase: KnowledgeEntry[] = [
  {
    intent: "company-about",
    phrases: [
      "tell me about gleam pro",
      "about your company",
      "who is gleam pro",
      "how long have you been cleaning",
      "when did you start",
    ],
    keywords: ["company", "about", "founded", "started", "history"],
    answer:
      "Gleam Pro is a family-owned cleaning company located in New Westminster and serving Metro Vancouver. We've been on the floor since 2019 and incorporated since 2024. Our website focuses on owner-led, recurring commercial cleaning along with residential cleaning services.",
    actions: [
      { label: "Explore our services", href: "/commercial-cleaning", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "company-registration",
    phrases: [
      "are you registered",
      "is gleam pro registered",
      "registered company",
      "are you incorporated",
      "is gleam pro incorporated",
      "when were you incorporated",
    ],
    keywords: ["registered", "registration", "incorporated"],
    answer:
      "Yes, Gleam Pro has been incorporated since 2024. If you mean a specific licence, certification, or registration, please tell me which one. I won't claim a credential that isn't confirmed on our website.",
    actions: [
      { label: "Contact the team", href: "mailto:services@gleampro.ca", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "company-credentials",
    phrases: [
      "insured and registered",
      "registered and insured",
      "are you insured and registered",
    ],
    keywords: ["insured", "registered", "credentials"],
    answer:
      "Yes. Gleam Pro has been incorporated since 2024 and carries $1 million in commercial general liability insurance. If you need a specific licence, certificate, or registration, tell me which one and our team can confirm whether it applies.",
    actions: [
      { label: "Contact the team", href: "mailto:services@gleampro.ca", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "service-overview",
    phrases: [
      "what services do you offer",
      "what services do you provide",
      "what are your services",
      "tell me about your services",
      "which services do you offer",
      "services you offer",
      "do you clean restaurants schools clinics or offices",
    ],
    keywords: ["services", "offer", "provide"],
    answer:
      "We offer both commercial and residential cleaning. For businesses, we clean restaurants, pubs, cafes, breweries and taprooms, clinics, offices, managed properties, schools, and community facilities. For homes, we offer recurring cleaning, deep cleaning, move-in or move-out cleaning, and carpet or upholstery care. What kind of space can I help you with?",
    actions: [
      { label: "Commercial services", href: "/commercial-cleaning", kind: "link" },
      { label: "Residential services", href: "/residential-cleaning", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "commercial-pricing",
    phrases: ["how much", "what does it cost", "commercial cleaning price", "cleaning rates", "get a quote"],
    keywords: ["price", "pricing", "cost", "quote", "estimate", "rate"],
    answer:
      "That depends on the size of your space, traffic, washrooms, floor types, cleaning frequency, and the scope you need. After a free on-site walk-through, we'll provide a fixed monthly proposal. I can't calculate or promise a price in chat, but I can help you request a walk-through.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "quote-request",
    phrases: [
      "can you give me a quote",
      "can i get a quote",
      "i need a quote",
      "request a quote",
      "get an estimate",
      "can you give me an estimate",
      "can i have an estimate",
      "i need an estimate",
      "what affects the price",
      "book an estimate",
    ],
    keywords: ["quote", "estimate"],
    answer:
      "Absolutely! I can help you request a quote. Is it for a commercial space or a home? You can also open the request form below and share the details with our team.",
    actions: [{ label: "Request a quote", kind: "lead" }],
    answered: true,
  },
  {
    intent: "residential-pricing",
    phrases: ["house cleaning cost", "home cleaning cost", "residential cleaning price", "price for my home"],
    keywords: ["house", "home", "residential", "pricing", "cost", "estimate"],
    answer:
      "That depends on your home's size, condition, number of bathrooms, the service you need, and how often you'd like us to visit. We'll provide a tailored estimate after reviewing those details. I can't calculate or promise a price in chat, but I can help you request an estimate.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "commercial-services",
    phrases: ["commercial services", "commercial spaces", "what do you clean", "what is included", "clean my business"],
    keywords: ["commercial", "business", "facility", "services", "included", "scope"],
    answer:
      "A typical commercial scope can include waste and recycling, washrooms, high-touch surfaces, floors, breakrooms or approved kitchen areas, and spot glass. We'll confirm the exact areas and frequency with you during the walk-through. What type of business do you have?",
    actions: [
      { label: "Commercial services", href: "/commercial-cleaning", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "scope-clarification",
    phrases: [
      "what tasks are included",
      "what cleaning tasks are included",
      "what is part of the service",
    ],
    keywords: ["tasks", "included", "scope"],
    answer:
      "I can give you the right checklist once I know the space. Is this for a commercial facility or a home?",
    answered: false,
  },
  {
    intent: "restaurants",
    phrases: ["restaurant cleaning", "pub cleaning", "cafe cleaning", "kitchen cleaning", "back of house"],
    keywords: ["restaurant", "restaurants", "pub", "cafe", "dining", "kitchen", "washroom", "taproom"],
    answer:
      "Yes, we clean restaurants, pubs, and cafes after hours. Your scope can include agreed front-of-house areas, washrooms, floors, touchpoints, and back-of-house support. Specialty work such as food-contact sanitation, hoods and ducts, or grease traps would need to be confirmed separately. Would you like to arrange a walk-through?",
    actions: [
      { label: "Restaurant cleaning", href: "/commercial-cleaning/restaurants", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "breweries",
    phrases: ["brewery cleaning", "taproom cleaning", "clean a brewery"],
    keywords: ["brewery", "breweries", "taproom", "taprooms", "patio"],
    answer:
      "Yes, we provide after-hours cleaning for breweries and taprooms. We can build the scope around taproom floors, washrooms, patios, and approved back-of-house areas so your venue is ready before opening. Would you like to request a walk-through?",
    actions: [
      { label: "Brewery and taproom cleaning", href: "/breweries", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "clinics",
    phrases: ["clinic cleaning", "medical office cleaning", "healthcare cleaning"],
    keywords: ["clinic", "clinics", "medical", "healthcare", "treatment"],
    answer:
      "Yes, we provide recurring cleaning for clinics and medical offices. During the walk-through, we'll review your hygiene, disinfection, access, and product requirements. I can't confirm a clinical protocol or compliance standard in chat, but our team can review your specific requirements with you.",
    actions: [
      { label: "Clinic cleaning", href: "/clinics", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "offices",
    phrases: ["office cleaning", "clean offices", "clean our office", "workplace cleaning"],
    keywords: ["office", "offices", "workplace", "boardroom", "breakroom"],
    answer:
      "Yes, we clean offices. Your checklist can include work areas, washrooms, kitchens or breakrooms, waste, touchpoints, floors, and spot glass. We'll tailor the final scope and frequency to your layout and operating hours.",
    actions: [
      { label: "Office cleaning", href: "/commercial-cleaning/offices", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "property-management",
    phrases: ["property management cleaning", "strata cleaning", "apartment common areas", "building cleaning"],
    keywords: ["property", "strata", "building", "lobby", "corridor", "elevator", "amenity"],
    answer:
      "We work with property managers on recurring common-area cleaning. That can include entrances, lobbies, corridors, elevators, shared washrooms, amenity spaces, and service areas. We can confirm the exact scope during a walk-through.",
    actions: [
      { label: "Property management", href: "/commercial-cleaning/property-management", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "community-facilities",
    phrases: [
      "community centre cleaning",
      "community facility cleaning",
      "event space cleaning",
      "school cleaning",
      "clean schools",
    ],
    keywords: [
      "community",
      "facility",
      "facilities",
      "event",
      "hall",
      "recreation",
      "school",
      "schools",
    ],
    answer:
      "Yes, we can clean schools and community facilities. A scope can cover entrances, classrooms or activity rooms, washrooms, shared kitchens, touchpoints, waste, and floors. We'll confirm the areas and recommend a frequency based on room use, traffic, and the facility schedule.",
    actions: [
      { label: "Community facilities", href: "/commercial-cleaning/community-facilities", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "residential-services",
    phrases: [
      "residential cleaning",
      "house cleaning",
      "home cleaning",
      "clean my home",
      "what home cleaning services do you offer",
    ],
    keywords: ["residential", "house", "home", "bedroom", "bathroom", "family"],
    answer:
      "We offer recurring home cleaning, deep cleaning, move-in or move-out cleaning, and carpet or upholstery care. Before service, we'll confirm your rooms, priorities, product needs, and schedule. Which service are you interested in?",
    actions: [
      { label: "Residential cleaning", href: "/residential-cleaning", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "standard-home-scope",
    phrases: [
      "what is included in home cleaning",
      "what is included in regular house cleaning",
      "standard home cleaning",
      "regular house cleaning includes",
      "what do you clean in a home",
    ],
    keywords: ["standard", "routine", "home", "included", "scope"],
    answer:
      "A typical home cleaning includes kitchens, bathrooms, floors, dusting, high-touch surfaces, trash removal, and a general reset of living areas and bedrooms. We can tailor priorities by room when we review your home.",
    actions: [
      { label: "Residential cleaning", href: "/residential-cleaning", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "post-renovation",
    phrases: ["post renovation cleaning", "post reno cleaning", "after renovation cleaning", "construction dust"],
    keywords: ["renovation", "reno", "construction"],
    answer:
      "Post-renovation cleaning is listed among our tailored residential services. Because renovation dust and conditions vary, our team will need to review the space and confirm the scope before providing an estimate.",
    actions: [
      { label: "Residential cleaning", href: "/residential-cleaning", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "deep-cleaning",
    phrases: ["deep cleaning", "deep clean", "spring cleaning"],
    keywords: ["deep", "detailed", "buildup", "baseboards"],
    answer:
      "A deep clean is a one-time, detail-focused service for buildup-prone and harder-to-reach areas beyond regular maintenance. We'll confirm the exact inclusions based on your home's condition and priorities.",
    actions: [
      { label: "Deep cleaning", href: "/residential-cleaning/deep-cleaning", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "move-cleaning",
    phrases: ["move in cleaning", "move-in cleaning", "move out cleaning", "move-out cleaning", "turnover cleaning"],
    keywords: ["move", "moving", "turnover", "rental", "vacant"],
    answer:
      "Yes, we offer move-in and move-out cleaning for homes, apartments, and rental turnovers. We'll confirm access, the cleaning scope, any add-ons, and areas needing special attention before the visit.",
    actions: [
      { label: "Move-in and move-out", href: "/residential-cleaning/move-in-out", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "carpet-upholstery",
    phrases: ["carpet cleaning", "upholstery cleaning", "clean my sofa", "clean my couch"],
    keywords: ["carpet", "upholstery", "sofa", "couch", "fabric", "stain"],
    answer:
      "Yes, we clean suitable carpets and upholstery. Our team will first review the material, condition, stains, and access before confirming the cleaning method or expected result.",
    actions: [
      { label: "Carpet and upholstery", href: "/residential-cleaning/carpet-upholstery", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "carpet-drying",
    phrases: ["carpet drying time", "how long do carpets take to dry", "when will carpet be dry"],
    keywords: ["carpet", "dry", "drying", "hours"],
    answer:
      "Carpets typically take 6 to 12 hours to dry, depending on humidity and airflow. Good ventilation helps, and air movers may be available when needed.",
    actions: [
      { label: "Carpet and upholstery", href: "/residential-cleaning/carpet-upholstery", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "carpet-stains",
    phrases: ["remove old stains", "set in stains", "can you remove carpet stains", "stain removal"],
    keywords: ["stain", "stains", "permanent"],
    answer:
      "Many old stains can be improved or removed, but some may be permanent. We'll assess the material and stain first, then set realistic expectations before cleaning.",
    actions: [
      { label: "Carpet and upholstery", href: "/residential-cleaning/carpet-upholstery", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "carpet-frequency",
    phrases: [
      "how often should carpets be cleaned",
      "how often should carpets be professionally cleaned",
      "carpet cleaning frequency",
      "when to clean carpets",
    ],
    keywords: ["carpet", "often", "frequency"],
    answer:
      "For normal traffic, our website recommends professional carpet cleaning every 12 to 18 months. Homes with pets, allergies, or high-traffic areas may need it more often.",
    actions: [
      { label: "Carpet and upholstery", href: "/residential-cleaning/carpet-upholstery", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "service-areas",
    phrases: [
      "where do you serve",
      "which cities",
      "service area",
      "areas do you cover",
      "do you serve",
      "do you cover",
      "service my area",
    ],
    keywords: ["vancouver", "burnaby", "westminster", "surrey", "richmond", "coquitlam", "delta", "city", "cities", "location", "area"],
    answer:
      "We serve Vancouver, Burnaby, New Westminster, Surrey, Richmond, Coquitlam, North Vancouver, West Vancouver, and Delta. Share your city or address with our team and they'll confirm route availability for you.",
    actions: [
      { label: "View service areas", href: "/service-areas", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "company-location",
    phrases: [
      "where is your office",
      "where are you located",
      "where is your company located",
      "office address",
      "business address",
      "company location",
      "can i visit your office",
    ],
    keywords: ["located", "address", "location", "visit"],
    answer:
      "We're located in New Westminster and service Metro Vancouver. Our website doesn't list a public street address, so please call us at 778 223 0719 or email services@gleampro.ca before planning a visit.",
    actions: [
      { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "frequency",
    phrases: ["how often", "cleaning frequency", "every day", "weekly cleaning", "bi-weekly cleaning", "monthly cleaning"],
    keywords: ["daily", "nightly", "weekly", "biweekly", "monthly", "frequency", "schedule"],
    answer:
      "We can build a schedule around your needs. Commercial cleaning can be daily, five times per week, weekly, bi-weekly, or custom, depending on traffic and operations. Residential maintenance is commonly weekly, bi-weekly, or monthly.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "minimum-frequency",
    phrases: [
      "minimum service frequency",
      "minimum cleaning frequency",
      "minimum number of visits",
    ],
    keywords: ["minimum", "frequency", "visits"],
    answer:
      "Our website lists daily, five-times-weekly, weekly, bi-weekly, monthly, and custom schedules, but it doesn't state one universal minimum for every client. Tell me whether this is for a commercial space or home, and the team can confirm the available frequency for your scope.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "home-access",
    phrases: [
      "do i need to be home",
      "need to be present",
      "clean while i am away",
      "entry instructions",
      "lockbox access",
      "provide a key or lockbox code",
    ],
    keywords: ["present", "away", "entry", "lockbox", "access"],
    answer:
      "You don't necessarily need to be home. Many residential clients provide secure entry instructions, and move cleaning can also be coordinated through a property manager or lockbox. We'll confirm your preferred access and communication process in advance.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "cleaning-preparation",
    phrases: [
      "prepare before cleaning",
      "before the cleaners arrive",
      "before the first clean",
      "what should i do before",
      "how should we prepare",
    ],
    keywords: ["prepare", "before", "arrive", "first"],
    answer:
      "For a home visit, a quick tidy of personal items, valuables, and clutter helps the team focus on cleaning. Please share priority areas, surface cautions, and access notes in advance. Commercial clients should also provide key or alarm procedures, approved service windows, site priorities, and any client-supplied consumables.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "cleaning-duration",
    phrases: [
      "how long does cleaning take",
      "how long does deep cleaning take",
      "how long will it take",
      "cleaning appointment length",
      "deep cleaning time",
    ],
    keywords: ["long", "duration", "time", "hours"],
    answer:
      "Home-cleaning time depends on the home's size, layout, and condition. First visits and deep cleans usually take longer than recurring visits; the deep-cleaning page gives a typical range of 4 to 8 hours. We'll provide a more specific estimate after reviewing your home.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "pet-friendly",
    phrases: [
      "pet friendly cleaning",
      "safe for pets",
      "safe for children",
      "kids and pets",
      "pets in the home",
    ],
    keywords: ["pet", "pets", "children", "kids", "family", "allergies"],
    answer:
      "Yes. We can use pet-conscious, family-safe approaches and coordinate around pets in the home. We also offer eco-forward products and can accommodate specific allergies, scent sensitivities, or product preferences when you tell us in advance.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "rescheduling",
    phrases: [
      "reschedule my cleaning",
      "cancellation policy",
      "cancel my cleaning",
      "change my appointment",
      "how much notice",
    ],
    keywords: ["reschedule", "cancel", "cancellation", "notice", "appointment"],
    answer:
      "For recurring residential cleaning, our website asks for 24 to 48 hours' notice to reschedule at no extra charge. Other booking policies can vary, so advance notice is recommended and the applicable terms should be confirmed with the team.",
    actions: [
      { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "custom-checklist",
    phrases: [
      "customize the checklist",
      "custom cleaning checklist",
      "choose what gets cleaned",
      "tailor the scope",
      "special priorities",
    ],
    keywords: ["customize", "custom", "checklist", "priorities", "tailor"],
    answer:
      "Yes. Commercial checklists can be customized by area, frequency, and priority. Residential plans can also be tailored by room, add-ons, and household priorities, then adjusted over time as your needs change.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "after-hours",
    phrases: [
      "after hours",
      "overnight cleaning",
      "night cleaning",
      "weekend cleaning",
      "clean on weekends",
      "before we open",
    ],
    keywords: ["night", "nightly", "overnight", "weekend", "weekends", "closed", "opening"],
    answer:
      "Yes, after-hours and weekend cleaning is common for our commercial clients. Before the first visit, we'll confirm the service window along with access, alarm, and lock-up instructions.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "security-access",
    phrases: [
      "work around alarms",
      "work with our alarm",
      "secure areas",
      "alarm procedure",
      "key protocol",
      "access procedure",
      "lock up instructions",
    ],
    keywords: ["alarm", "secure", "security", "keys", "access", "lock"],
    answer:
      "Yes. We can follow your access, alarm, key, and lock-up procedures. For offices and other commercial spaces, we'll document the approved service window and which rooms are included or excluded before service begins.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "supplies",
    phrases: [
      "bring supplies",
      "bring equipment",
      "provide equipment",
      "cleaning products",
    ],
    keywords: ["supplies", "equipment", "products", "chemicals", "consumables", "soap", "liners", "paper"],
    answer:
      "Yes, we can provide the cleaning tools and products. We'll confirm consumables such as paper products, liners, and soap during onboarding. Just let us know about any product preferences or surface restrictions before service.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "green-cleaning",
    phrases: [
      "green cleaning",
      "use green products",
      "eco friendly products",
      "eco conscious products",
      "low odor products",
      "fragrance free",
      "scent sensitivity",
    ],
    keywords: ["green", "eco", "odor", "fragrance", "scent", "sensitivity"],
    answer:
      "Yes. We offer eco-conscious and low-odor product options, and we can align product selection with workplace policies or household sensitivities. Tell us about allergies, preferred products, or surface restrictions before service.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "insurance",
    phrases: ["are you insured", "liability insurance", "insurance certificate"],
    keywords: ["insured", "insurance", "liability", "certificate", "coverage"],
    answer:
      "Yes, Gleam Pro Cleaning carries $1 million in commercial general liability insurance. We can provide a certificate of insurance on request before service starts.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "quality",
    phrases: [
      "quality control",
      "same cleaner",
      "same crew",
      "same cleaning crew",
      "check cleaning quality",
      "missed something",
      "service issue",
    ],
    keywords: ["quality", "consistent", "consistency", "crew", "checklist", "inspection", "issue", "complaint"],
    answer:
      "We support consistent service with a documented scope, recurring checklists, periodic inspections, and direct follow-up when there's an issue. Our goal is to keep a consistent crew that learns your site, subject to scheduling and operational needs.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "property-reporting",
    phrases: [
      "cleaning reports",
      "report to property manager",
      "document completed visits",
      "maintenance concerns",
      "service reports",
    ],
    keywords: ["report", "reports", "reporting", "document", "maintenance"],
    answer:
      "Yes. For property-management accounts, we can document completed visits, note supply or maintenance concerns, and provide a clear contact path for follow-up. Reporting expectations are included in the written scope.",
    actions: [
      { label: "Property management", href: "/commercial-cleaning/property-management", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "restaurant-inspections",
    phrases: [
      "handle inspections",
      "inspection ready",
      "food safety inspection",
      "restaurant inspection",
    ],
    keywords: ["inspection", "inspections", "compliance", "food", "safety"],
    answer:
      "We don't replace your internal food-safety program or guarantee inspection results. We do help maintain consistent cleanliness and presentation so agreed public-facing restaurant areas stay inspection-ready.",
    actions: [
      { label: "Restaurant cleaning", href: "/commercial-cleaning/restaurants", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "event-resets",
    phrases: ["event reset", "clean after an event", "event cleanup", "between events"],
    keywords: ["event", "events", "reset", "cleanup"],
    answer:
      "Yes, an event-reset scope can be added for community facilities when access and timing allow. We'll confirm the rooms, tasks, access, and timing during the walk-through.",
    actions: [
      { label: "Community facilities", href: "/commercial-cleaning/community-facilities", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "trial",
    phrases: ["long term contract", "30 day trial", "no lock in", "cancel anytime", "contract length"],
    keywords: ["trial", "contract", "commitment", "lock", "cancel"],
    answer:
      "You can start with our 30-day trial, with no long-term lock-in. Your proposal or service agreement will clearly document the scope, service terms, and cancellation requirements.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "walkthrough",
    phrases: [
      "how does it work",
      "book a walkthrough",
      "request a walkthrough",
      "request a walk through",
      "schedule a walkthrough",
      "schedule a walk through",
      "start service",
      "get started",
    ],
    keywords: ["walkthrough", "walk-through", "onboarding", "start", "proposal", "process"],
    answer:
      "It's simple. For commercial cleaning, we start with a free 15-minute walk-through. For residential cleaning, you can request an estimate. We'll review your space and priorities, then provide a written proposal; commercial proposals are normally sent within 24 hours after the visit.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "onboarding",
    phrases: [
      "how long does onboarding take",
      "when can service start",
      "how quickly can service begin",
      "start after walkthrough",
      "onboarding process",
      "rush start",
    ],
    keywords: ["onboarding", "start", "quickly", "rush", "transition"],
    answer:
      "Most commercial accounts onboard within 5 to 10 business days after the walk-through, once the scope, access procedures, and schedule are approved. Larger or multi-site accounts may need more planning, and rush starts may be available for urgent openings or facility transitions.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "move-cleaning-details",
    phrases: [
      "when should i schedule move out cleaning",
      "clean appliances",
      "clean inside ovens and refrigerators",
      "do you clean inside the oven for move out cleaning",
      "inside the oven",
      "inside the fridge",
      "carpet cleaning with move out",
    ],
    keywords: ["appliances", "oven", "fridge", "refrigerator", "move", "schedule"],
    answer:
      "For move-out cleaning, our website recommends booking 1 to 2 days before final handover. Standard service includes cleaning appliances inside and out, including the refrigerator, oven, dishwasher, and microwave. Carpet extraction can be added when needed.",
    actions: [
      { label: "Move-in and move-out", href: "/residential-cleaning/move-in-out", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "cleaning-guides",
    phrases: [
      "cleaning checklist",
      "restaurant cleaning checklist",
      "restaurant cleaning guide",
      "property manager checklist",
      "cleaning tips",
      "insights articles",
    ],
    keywords: ["guide", "guides", "article", "articles", "tips"],
    answer:
      "Yes. Our Insights section includes a nightly restaurant cleaning checklist and a property-manager cleaning checklist covering recurring tasks, periodic detail work, and scope review.",
    actions: [
      { label: "View cleaning insights", href: "/insights", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "quote-validity",
    phrases: ["how long is my quote valid", "quote expiry", "proposal expiry", "quote valid for"],
    keywords: ["quote", "proposal", "valid", "expiry", "expires"],
    answer:
      "Walk-through quotes are valid for 30 days from the date they're issued. Your scope is documented in writing, and work outside that scope is confirmed and quoted separately before it's performed.",
    actions: [
      { label: "View terms", href: "/terms", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "payment-terms",
    phrases: [
      "when is payment due",
      "how do invoices work",
      "payment terms",
      "monthly invoice",
      "when do i pay",
      "how do i pay",
    ],
    keywords: ["payment", "pay", "invoice", "invoices", "due", "billing"],
    answer:
      "One-time work is invoiced on completion. Recurring accounts are invoiced on the schedule agreed at signup, typically monthly. Overdue balances may pause future service until they're resolved.",
    actions: [
      { label: "View terms", href: "/terms", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "satisfaction-policy",
    phrases: [
      "what if something is missed",
      "what if you miss something",
      "not happy with cleaning",
      "unhappy with the cleaning",
      "satisfaction policy",
      "will you come back",
      "request a reclean",
    ],
    keywords: ["miss", "missed", "satisfaction", "reclean", "refund", "issue"],
    answer:
      "If something is missed, please tell us within 24 hours of the visit. Our terms say we'll return to make it right at no extra charge. Completed visits aren't refunded when a re-clean wasn't requested.",
    actions: [
      { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
      { label: "View terms", href: "/terms", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "cleaning-team",
    phrases: [
      "are cleaners background checked",
      "are cleaners vetted",
      "are cleaners employees",
      "independent contractors",
      "who does the cleaning",
    ],
    keywords: ["cleaners", "vetted", "background", "employees", "contractors", "team"],
    answer:
      "Cleaning is performed by vetted independent contractors. Our residential pages also state that team members are background-checked, and recurring service aims to keep the same cleaner or team when scheduling permits.",
    actions: [
      { label: "View terms", href: "/terms", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "privacy",
    phrases: [
      "privacy policy",
      "what data do you collect",
      "do you sell my information",
      "do you sell my data",
      "is lisa recording me",
      "does lisa store messages",
      "delete my information",
    ],
    keywords: ["privacy", "data", "information", "recording", "messages", "delete"],
    answer:
      "Ordinary questions to Lisa are matched to approved answers in your browser and aren't stored or sent to an external AI provider. Contact details are collected only when you submit a request. Gleam Pro doesn't sell your information, and you can request access, correction, or deletion by emailing services@gleampro.ca.",
    actions: [
      { label: "View privacy policy", href: "/privacy", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "contact",
    phrases: ["phone number", "email address", "contact you", "talk to someone", "speak to a person"],
    keywords: ["phone", "call", "email", "contact", "person", "human", "team"],
    answer:
      "Of course. You can call us at 778 223 0719, email services@gleampro.ca, or leave your details here. Our team will follow up within one business day.",
    actions: [
      { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "hours",
    phrases: ["business hours", "when are you open", "office hours"],
    keywords: ["hours", "open", "monday", "saturday", "sunday"],
    answer:
      "Our office is open Monday to Friday from 8:00 to 18:00 and Saturday from 9:00 to 16:00. Sunday is by appointment. Cleaning service times are arranged separately with each client.",
    actions: [
      { label: "Call Gleam Pro", href: "tel:+17782230719", kind: "link" },
    ],
    answered: true,
  },
];

export const lisaSuggestions = [
  "What commercial spaces do you clean?",
  "How does pricing work?",
  "Which cities do you serve?",
  "Can I request a walk-through?",
] as const;

const manipulationPatterns = [
  /ignore (all |any )?(previous|prior|above) (instructions|rules)/,
  /reveal (your|the) (prompt|instructions|rules)/,
  /system prompt/,
  /developer message/,
  /pretend (you are|to be)/,
  /jailbreak/,
];

const confirmationPatterns = [
  /are you available/,
  /can you come (today|tomorrow|on)/,
  /book (me|us) (for|on)/,
  /what time can you/,
  /do you have an opening/,
  /guarantee/,
];

const specialistPatterns = [
  /mould|mold/,
  /asbestos/,
  /biohazard/,
  /crime scene/,
  /needles|sharps/,
  /pest control/,
  /fire damage/,
  /flood damage/,
  /hazardous/,
];

const serviceAliases: Record<LisaServiceIntent, string[]> = {
  restaurants: [
    "restaurant",
    "restaurants",
    "pub",
    "pubs",
    "cafe",
    "cafes",
    "bistro",
    "diner",
  ],
  breweries: ["brewery", "breweries", "taproom", "taprooms"],
  clinics: ["medical office", "medical offices", "clinic", "clinics", "healthcare"],
  offices: ["office", "offices", "workplace", "workplaces"],
  "property-management": [
    "property management",
    "property manager",
    "strata",
    "condo building",
    "apartment building",
  ],
  "community-facilities": [
    "community centre",
    "community center",
    "community facility",
    "community facilities",
    "event hall",
    "recreation centre",
    "recreation center",
    "school",
    "schools",
    "shcool",
    "shcools",
    "schols",
  ],
  "residential-services": ["residential", "house", "houses", "home", "homes"],
  "deep-cleaning": ["deep cleaning", "deep clean", "spring cleaning"],
  "move-cleaning": [
    "move in",
    "move out",
    "moving clean",
    "turnover cleaning",
    "rental turnover",
  ],
  "carpet-upholstery": [
    "carpet",
    "carpets",
    "upholstery",
    "sofa",
    "couch",
  ],
  "post-renovation": [
    "post renovation",
    "post reno",
    "after renovation",
    "construction dust",
  ],
};

const residentialServiceIntents = new Set<LisaServiceIntent>([
  "residential-services",
  "deep-cleaning",
  "move-cleaning",
  "carpet-upholstery",
  "post-renovation",
]);

const pricingPattern = /\b(how much|cost|costs|price|prices|pricing|quote|estimate|rate|rates)\b/;
const frequencyPattern = /\b(how often|frequency|daily|nightly|weekly|bi weekly|monthly)\b/;
const scopeFollowUpPattern =
  /\b(what is included|what s included|what do you clean|tell me more|more information|what about that)\b/;
const ambiguousCleaningPattern =
  /\b(can you clean|do you clean|cleaning service|clean my|clean our)\b/;
const companyLocationPattern =
  /\b(where (is|s) your office|where (is|s) your company located|where are you located|office address|business address|company location|visit your office)\b/;

const shortPricingTerms = new Set([
  "cost",
  "costs",
  "estimate",
  "price",
  "prices",
  "pricing",
  "quote",
  "rate",
  "rates",
]);
const shortServiceTerms = new Set([
  "clean",
  "cleaning",
  "service",
  "services",
]);
const strongOneWordIntents: Record<string, string> = {
  address: "company-location",
  contact: "contact",
  email: "contact",
  equipment: "supplies",
  hours: "hours",
  incorporated: "company-registration",
  insurance: "insurance",
  location: "company-location",
  phone: "contact",
  registered: "company-registration",
  registration: "company-registration",
  supplies: "supplies",
};

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9$@+\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function editDistance(a: string, b: string): number {
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);

  for (let row = 1; row <= a.length; row += 1) {
    const current = [row];
    for (let column = 1; column <= b.length; column += 1) {
      const substitutionCost = a[row - 1] === b[column - 1] ? 0 : 1;
      current[column] = Math.min(
        current[column - 1] + 1,
        previous[column] + 1,
        previous[column - 1] + substitutionCost
      );
    }
    previous.splice(0, previous.length, ...current);
  }

  return previous[b.length];
}

function isShortPricingInquiry(question: string): boolean {
  if (question.includes(" ")) return false;
  if (shortPricingTerms.has(question)) return true;

  return ["estimate", "pricing", "price", "quote", "cost"].some(
    (term) => editDistance(question, term) <= (term.length >= 7 ? 2 : 1)
  );
}

function isShortServiceInquiry(question: string): boolean {
  if (question.includes(" ")) return false;
  if (shortServiceTerms.has(question)) return true;

  return ["service", "services", "cleaning"].some(
    (term) => editDistance(question, term) <= 1
  );
}

function findServiceIntent(question: string): LisaServiceIntent | undefined {
  const exactMatches: Array<{ intent: LisaServiceIntent; length: number }> = [];

  for (const [intent, aliases] of Object.entries(serviceAliases) as Array<
    [LisaServiceIntent, string[]]
  >) {
    for (const alias of aliases) {
      const normalizedAlias = normalize(alias);
      const exactPattern = new RegExp(`\\b${normalizedAlias.replace(/\s+/g, "\\s+")}\\b`);
      if (exactPattern.test(question)) {
        exactMatches.push({ intent, length: normalizedAlias.length });
      }
    }
  }

  if (exactMatches.length > 0) {
    return exactMatches.sort((a, b) => b.length - a.length)[0].intent;
  }

  const words = question.split(" ").filter((word) => word.length >= 5);
  for (const word of words) {
    for (const [intent, aliases] of Object.entries(serviceAliases) as Array<
      [LisaServiceIntent, string[]]
    >) {
      for (const alias of aliases) {
        const normalizedAlias = normalize(alias);
        if (normalizedAlias.includes(" ") || normalizedAlias.length < 5) continue;
        const maxDistance = normalizedAlias.length >= 9 ? 2 : 1;
        if (editDistance(word, normalizedAlias) <= maxDistance) return intent;
      }
    }
  }

  return undefined;
}

function replyFromEntry(
  intent: string,
  context: LisaConversationContext
): LisaReply | undefined {
  const entry = knowledgeBase.find((candidate) => candidate.intent === intent);
  if (!entry) return undefined;
  const { phrases: _phrases, keywords: _keywords, ...reply } = entry;
  return { ...reply, context };
}

function understoodContext(
  current: LisaConversationContext,
  serviceIntent?: LisaServiceIntent
): LisaConversationContext {
  return {
    serviceIntent: serviceIntent ?? current.serviceIntent,
    unknownCount: 0,
  };
}

function containsPhrase(question: string, phrase: string): boolean {
  return ` ${question} `.includes(` ${phrase} `);
}

function scoreEntry(question: string, entry: KnowledgeEntry): number {
  const words = new Set(question.split(" ").filter((word) => word.length > 2));
  let score = 0;

  const normalizedPhrases = new Set(entry.phrases.map((phrase) => normalize(phrase)));
  for (const normalizedPhrase of normalizedPhrases) {
    if (containsPhrase(question, normalizedPhrase)) {
      score += 7 + normalizedPhrase.split(" ").length;
      continue;
    }

    const phraseWords = normalizedPhrase
      .split(" ")
      .filter((word) => word.length > 2);
    if (phraseWords.length >= 2 && phraseWords.every((word) => words.has(word))) {
      score += 5;
    }
  }

  for (const keyword of entry.keywords) {
    const normalizedKeyword = normalize(keyword);
    if (normalizedKeyword.includes(" ")) {
      if (containsPhrase(question, normalizedKeyword)) score += 4;
    } else if (words.has(normalizedKeyword)) {
      score += 2;
    }
  }

  return score;
}

export function answerLisaQuestion(
  rawQuestion: string,
  currentContext: LisaConversationContext = {}
): LisaReply {
  const question = normalize(rawQuestion.slice(0, 300));

  if (!question) {
    return {
      intent: "empty",
      answer: "What would you like to know about Gleam Pro's cleaning services?",
      answered: false,
      context: currentContext,
    };
  }

  if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(question)) {
    return {
      intent: "greeting",
      answer:
        "Hi! I'm Lisa, Gleam Pro's virtual assistant. I can help with our services, service areas, scheduling basics, pricing information, or a walk-through request. What can I help you with today?",
      answered: true,
      context: understoodContext(currentContext),
    };
  }

  if (manipulationPatterns.some((pattern) => pattern.test(question))) {
    return {
      intent: "guardrail-manipulation",
      answer:
        "I can only help with information published by Gleam Pro, and I can't change or share my operating rules. You're welcome to ask about our cleaning services or request a walk-through.",
      answered: false,
      context: currentContext,
    };
  }

  if (specialistPatterns.some((pattern) => pattern.test(question))) {
    return {
      intent: "guardrail-specialist",
      answer:
        "I don't have confirmed website information about hazardous or specialist remediation work, so I don't want to guess. Please call our team at 778 223 0719 so they can review the request and tell you whether a qualified provider is required.",
      actions: [
        { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
      ],
      answered: false,
      context: currentContext,
    };
  }

  if (confirmationPatterns.some((pattern) => pattern.test(question))) {
    return {
      intent: "guardrail-availability",
      answer:
        "I can help you ask the team, but I can't see the live schedule or guarantee a start date. Leave your details here and they'll confirm route availability and timing directly with you.",
      actions: [walkthroughAction],
      answered: false,
      context: currentContext,
    };
  }

  if (companyLocationPattern.test(question)) {
    const reply = replyFromEntry(
      "company-location",
      understoodContext(currentContext)
    );
    if (reply) return reply;
  }

  if (isShortPricingInquiry(question)) {
    const reply = replyFromEntry("quote-request", understoodContext(currentContext));
    if (reply) return reply;
  }

  if (question === "availability") {
    return {
      intent: "guardrail-availability",
      answer:
        "Are you asking about a specific date or general service availability? I can't see the live schedule, but you can leave your details and the team will confirm route availability and timing directly with you.",
      actions: [walkthroughAction],
      answered: false,
      context: currentContext,
    };
  }

  const oneWordIntent = strongOneWordIntents[question];
  if (oneWordIntent) {
    const reply = replyFromEntry(oneWordIntent, understoodContext(currentContext));
    if (reply) return reply;
  }

  if (isShortServiceInquiry(question)) {
    return {
      intent: "clarify-service",
      answer:
        "Of course! Is this for a restaurant, office, clinic, brewery or taproom, managed property, school or community facility, or home?",
      answered: false,
      context: understoodContext(currentContext),
    };
  }

  const detectedServiceIntent = findServiceIntent(question);
  const serviceIntent = detectedServiceIntent ?? currentContext.serviceIntent;
  const nextContext = understoodContext(currentContext, detectedServiceIntent);

  if (pricingPattern.test(question) && serviceIntent) {
    const pricingIntent = residentialServiceIntents.has(serviceIntent)
      ? "residential-pricing"
      : "commercial-pricing";
    const reply = replyFromEntry(pricingIntent, nextContext);
    if (reply) return reply;
  }

  if (
    frequencyPattern.test(question) &&
    currentContext.serviceIntent &&
    !detectedServiceIntent
  ) {
    const reply = replyFromEntry("frequency", nextContext);
    if (reply) return reply;
  }

  if (scopeFollowUpPattern.test(question) && currentContext.serviceIntent) {
    const reply = replyFromEntry(currentContext.serviceIntent, nextContext);
    if (reply) return reply;
  }

  const bestMatch = knowledgeBase
    .map((entry) => ({ entry, score: scoreEntry(question, entry) }))
    .sort((a, b) => b.score - a.score)[0];

  if (bestMatch && bestMatch.score >= 4) {
    const { phrases: _phrases, keywords: _keywords, ...reply } = bestMatch.entry;
    return { ...reply, context: nextContext };
  }

  if (detectedServiceIntent) {
    const reply = replyFromEntry(detectedServiceIntent, nextContext);
    if (reply) return reply;
  }

  if (!bestMatch || bestMatch.score < 4) {
    if (ambiguousCleaningPattern.test(question)) {
      return {
        intent: "clarify-service",
        answer:
          "Sure! What kind of space do you need cleaned: a restaurant, office, clinic, brewery or taproom, managed property, school or community facility, or home?",
        answered: false,
        context: understoodContext(currentContext),
      };
    }

    const unknownCount = (currentContext.unknownCount ?? 0) + 1;
    if (unknownCount < 2) {
      return {
        intent: "unknown-clarify",
        answer:
          "I'm not quite sure what you mean. Are you asking about a cleaning service, pricing, service frequency, service areas, or a walk-through?",
        answered: false,
        context: { ...currentContext, unknownCount },
      };
    }

    return {
      intent: "unknown",
      answer:
        "I couldn't find that answer in Gleam Pro's website information, so I don't want to guess. I can help you contact the team for an accurate answer.",
      actions: [
        { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
        walkthroughAction,
      ],
      answered: false,
      context: { ...currentContext, unknownCount },
    };
  }

  return {
    intent: "unknown",
    answer:
      "I couldn't find that answer in Gleam Pro's website information, so I don't want to guess. I can help you contact the team for an accurate answer.",
    answered: false,
    context: currentContext,
  };
}
