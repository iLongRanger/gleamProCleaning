export type LisaAction =
  | { label: string; href: string; kind: "link" }
  | { label: string; kind: "lead" }
  | { label: string; value: string; kind: "question" };

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
  market?: "commercial" | "residential";
  city?: string;
  cities?: string[];
  frequency?: string;
  serviceWindow?: "daytime" | "after-hours" | "weekend";
  squareFeet?: string;
  bedrooms?: number;
  bathrooms?: number;
  siteCount?: number;
  unitCount?: number;
  requestedTiming?: string;
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

const marketQuickReplies: LisaAction[] = [
  { label: "Commercial", value: "commercial cleaning", kind: "question" },
  { label: "Residential", value: "residential cleaning", kind: "question" },
];

const facilityQuickReplies: LisaAction[] = [
  { label: "Restaurant", value: "restaurant cleaning", kind: "question" },
  { label: "Office", value: "office cleaning", kind: "question" },
  { label: "Clinic", value: "clinic cleaning", kind: "question" },
  { label: "Brewery / taproom", value: "taproom cleaning", kind: "question" },
  { label: "School / community", value: "school cleaning", kind: "question" },
  { label: "Managed property", value: "property management cleaning", kind: "question" },
  { label: "Home", value: "home cleaning", kind: "question" },
];

const topicQuickReplies: LisaAction[] = [
  { label: "Services", value: "services", kind: "question" },
  { label: "Pricing", value: "price", kind: "question" },
  { label: "Service areas", value: "service areas", kind: "question" },
  { label: "Walk-through", value: "request a walkthrough", kind: "question" },
];

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
      { label: "About Gleam Pro", href: "/about", kind: "link" },
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
    intent: "unconfirmed-licence",
    phrases: [
      "are you licensed",
      "do you have a business licence",
      "business license",
      "business licence",
    ],
    keywords: ["licensed", "license", "licence"],
    answer:
      "Gleam Pro's website confirms that the company has been incorporated since 2024, but it does not publish a specific business licence. Tell the team which licence your property requires and they will confirm it without assuming.",
    actions: [
      { label: "Contact the team", href: "mailto:services@gleampro.ca", kind: "link" },
    ],
    answered: false,
  },
  {
    intent: "unconfirmed-gst-registration",
    phrases: ["are you gst registered", "gst number", "gst registration"],
    keywords: ["gst"],
    answer:
      "Gleam Pro's website confirms incorporation, but it does not publish or confirm a GST registration number. Please ask the team to confirm the applicable tax and registration details for your invoice or proposal.",
    actions: [
      { label: "Contact the team", href: "mailto:services@gleampro.ca", kind: "link" },
    ],
    answered: false,
  },
  {
    intent: "assistant-identity",
    phrases: ["are you a robot", "are you ai", "are you a real person", "who are you"],
    keywords: ["robot", "assistant"],
    answer:
      "I'm Lisa, Gleam Pro's website assistant, not a person. I match your questions to information published on this website and can connect you with the Gleam Pro team when you need a personal or account-specific answer.",
    actions: [
      { label: "Contact the team", value: "talk to a person", kind: "question" },
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
      "how does pricing work",
      "book an estimate",
    ],
    keywords: ["quote", "estimate"],
    answer:
      "Absolutely! I can help you request a quote. Is it for a commercial space or a home? You can also open the request form below and share the details with our team.",
    actions: [
      ...marketQuickReplies,
      { label: "Request a quote", kind: "lead" },
    ],
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
    phrases: ["commercial cleaning", "commercial services", "commercial spaces", "what do you clean", "what is included", "clean my business"],
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
    actions: marketQuickReplies,
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
    phrases: [
      "property management cleaning",
      "strata cleaning",
      "apartment common areas",
      "building cleaning",
      "clean lobbies elevators and hallways",
      "clean the garbage room",
      "garbage room cleaning",
    ],
    keywords: ["property", "strata", "building", "lobby", "hallway", "corridor", "elevator", "amenity", "garbage"],
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
    phrases: [
      "deep cleaning",
      "deep clean",
      "spring cleaning",
      "are baseboards included",
      "clean baseboards",
    ],
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
    actions: [...marketQuickReplies, walkthroughAction],
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
      "use a lockbox",
      "cleaners use a lockbox",
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
      "how long will the cleaning take",
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
      "are you pet friendly",
      "pet friendly cleaning",
      "safe for pets",
      "safe for children",
      "kids and pets",
      "pets in the home",
      "i have pets",
      "i have a dog",
      "i have a cat",
    ],
    keywords: ["pet", "pets", "dog", "dogs", "cat", "cats", "children", "kids", "family", "allergies"],
    answer:
      "Yes. We can use pet-conscious approaches and coordinate around pets in the home. Our residential pages also state that low-fragrance, child- and pet-safe products are used by default. Please share any pet, allergy, or product considerations before the appointment.",
    actions: [
      { label: "Residential cleaning FAQ", href: "/residential-cleaning/faq", kind: "link" },
      walkthroughAction,
    ],
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
      "protect my alarm code",
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
      "use my products",
      "use customer products",
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
      "allergic to bleach",
      "product allergy",
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
    phrases: [
      "do you require a contract",
      "is there a minimum term",
      "do you offer a trial",
      "is there a trial period",
      "long term contract",
      "30 day trial",
      "no lock in",
      "cancel anytime",
      "contract length",
    ],
    keywords: ["trial", "contract", "commitment", "lock", "cancel", "term"],
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
      "do you clean inside the oven for move out cleaning",
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
    intent: "appliance-cleaning",
    phrases: [
      "clean appliances",
      "clean inside ovens and refrigerators",
      "clean inside the oven",
      "inside the oven",
      "inside the fridge",
    ],
    keywords: ["appliance", "appliances", "oven", "fridge", "refrigerator"],
    answer:
      "Inside-appliance cleaning is confirmed on our website for move-in and move-out service. For recurring or deep cleaning, please include the oven, refrigerator, or other appliance in your request so the team can confirm whether it can be included or added to your scope.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "interior-window-cleaning",
    phrases: [
      "clean inside windows",
      "clean interior windows",
      "inside window cleaning",
      "interior window cleaning",
    ],
    keywords: ["window", "windows", "interior"],
    answer:
      "Interior window cleaning is not listed as a standard inclusion on our residential pages. Please add it to your request so the team can confirm the accessible windows, scope, and whether it can be included or quoted separately.",
    actions: [walkthroughAction],
    answered: false,
  },
  {
    intent: "linen-service",
    phrases: [
      "change bed sheets",
      "change the bed sheets",
      "change linens",
      "make the beds",
    ],
    keywords: ["sheets", "linens", "beds"],
    answer:
      "Changing bed sheets or linens is not listed as a standard inclusion on our website. Add it to your request and the team will confirm whether it can be included in your residential checklist.",
    actions: [walkthroughAction],
    answered: false,
  },
  {
    intent: "restaurant-specialty",
    phrases: [
      "clean grease hoods",
      "clean kitchen hoods",
      "clean fryers",
      "wash dishes",
      "clean beer tanks",
      "food safe chemicals",
      "food safe products",
      "hood cleaning",
      "duct cleaning",
      "grease trap cleaning",
    ],
    keywords: ["hood", "hoods", "duct", "ducts", "grease", "trap", "fryer", "fryers", "dishes", "tanks"],
    answer:
      "Hoods, ducts, grease traps, fryers, dishes, production tanks, kitchen equipment, beverage lines, and food-contact sanitation are specialty items that are not included automatically. The team must review and confirm them separately during your walk-through, and a qualified specialist may be required.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "childcare-facilities",
    phrases: ["daycare cleaning", "clean a daycare", "clean daycares", "childcare cleaning"],
    keywords: ["daycare", "daycares", "childcare"],
    answer:
      "Our website confirms school and community-facility cleaning, but it does not specifically confirm daycare or childcare facilities. I can connect you with the team to review the facility requirements and confirm whether we can provide the right scope.",
    actions: [walkthroughAction],
    answered: false,
  },
  {
    intent: "balcony-cleaning",
    phrases: [
      "clean the balcony",
      "what about the balcony",
      "balcony cleaning",
      "clean balconies",
    ],
    keywords: ["balcony", "balconies"],
    answer:
      "Balcony cleaning is not listed as a standard residential inclusion on our website. Add it to your request and the team will confirm the accessible area, surfaces, and whether it can be included or quoted separately.",
    actions: [walkthroughAction],
    answered: false,
  },
  {
    intent: "patio-cleaning",
    phrases: ["clean the patio", "patio cleaning", "clean patios"],
    keywords: ["patio", "patios"],
    answer:
      "Gleam Pro's brewery and taproom page lists patios as an area that can be included in an approved scope. For another facility type, the team must review the patio's access, surfaces, and cleaning requirements before confirming it.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "laundry-service",
    phrases: ["do laundry", "laundry service", "wash my clothes"],
    keywords: ["laundry", "clothes"],
    answer:
      "Laundry is not listed as a standard cleaning inclusion on our website. Add it to your request and the team will confirm whether that task can be included in your residential checklist.",
    actions: [walkthroughAction],
    answered: false,
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
      "do you guarantee your work",
      "do you guarantee the cleaning",
      "satisfaction guarantee",
      "what if something is missed",
      "what if you miss something",
      "not happy with cleaning",
      "unhappy with the cleaning",
      "satisfaction policy",
      "will you come back",
      "request a reclean",
      "make a complaint",
      "file a complaint",
    ],
    keywords: ["miss", "missed", "satisfaction", "guarantee", "reclean", "refund", "issue"],
    answer:
      "If something is missed, please tell us within 24 hours of the visit. Our terms say we'll return to make it right at no extra charge. Completed visits aren't refunded when a re-clean wasn't requested.",
    actions: [
      { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
      { label: "View terms", href: "/terms", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "damage-policy",
    phrases: [
      "cleaner breaks something",
      "cleaner damages something",
      "what happens if something breaks",
      "damage during cleaning",
    ],
    keywords: ["breaks", "broken", "damage", "damages", "negligence"],
    answer:
      "Our terms state that Gleam Pro will repair or replace items damaged through its negligence or a contractor's negligence during a service visit. The terms exclude pre-existing damage and normal wear, and total liability is limited as described on the terms page.",
    actions: [
      { label: "View terms", href: "/terms", kind: "link" },
      { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
    ],
    answered: true,
  },
  {
    intent: "cleaning-team",
    phrases: [
      "are cleaners background checked",
      "criminal record checks",
      "criminal background checks",
      "are cleaners vetted",
      "are cleaners employees",
      "do you subcontract",
      "subcontract the cleaning",
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
    intent: "unconfirmed-credential",
    phrases: [
      "are your cleaners bonded",
      "are you bonded",
      "bonded cleaners",
    ],
    keywords: ["bonded", "bonding"],
    answer:
      "Our website confirms $1 million in commercial general liability insurance and vetted independent contractors, but it does not state that Gleam Pro or every cleaner is bonded. Please contact the team if bonding is required for your property so they can confirm it accurately.",
    actions: [
      { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
      walkthroughAction,
    ],
    answered: false,
  },
  {
    intent: "worksafe-credential",
    phrases: [
      "worksafebc clearance",
      "worksafe clearance",
      "wcb clearance",
      "certificate of insurance and worksafe",
    ],
    keywords: ["worksafebc", "worksafe", "wcb", "clearance"],
    answer:
      "Gleam Pro's website confirms $1 million in commercial general liability insurance and that a certificate of insurance is available on request. It does not publish a WorkSafeBC or WCB clearance status, so the team must confirm that requirement directly before service.",
    actions: [
      { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
      walkthroughAction,
    ],
    answered: false,
  },
  {
    intent: "unconfirmed-training",
    phrases: [
      "whmis trained",
      "healthcare training",
      "clinical training",
      "special training",
    ],
    keywords: ["whmis", "training", "trained"],
    answer:
      "Gleam Pro's website does not publish a WHMIS, clinical, or facility-specific training credential. Share the exact training requirement with the team and they will confirm whether the assigned crew meets it before service.",
    actions: [walkthroughAction],
    answered: false,
  },
  {
    intent: "clinic-disinfection",
    phrases: [
      "disinfect exam rooms",
      "disinfect treatment rooms",
      "clinic disinfection",
      "dental disinfection",
    ],
    keywords: ["disinfect", "disinfection", "exam", "treatment"],
    answer:
      "For clinics and medical offices, the team reviews hygiene, disinfection, access, and product requirements during the walk-through. Lisa cannot confirm a clinical protocol or compliance standard, so the exact exam-room or treatment-room procedure must be approved in your written scope.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "unpublished-account-detail",
    phrases: [
      "provide references",
      "customer references",
      "invoice each office separately",
      "separate invoices",
      "work on statutory holidays",
      "holiday service",
      "speak french",
      "snow removal",
      "emergency spills",
      "turn a unit around",
      "turnaround time",
    ],
    keywords: ["references", "holiday", "holidays", "french", "snow", "separate"],
    answer:
      "That operational or account detail is not confirmed on Gleam Pro's website, so I don't want to assume. Please leave your details or call the team so they can confirm the requirement for your location and proposed scope.",
    actions: [
      { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
      walkthroughAction,
    ],
    answered: false,
  },
  {
    intent: "unpublished-billing-detail",
    phrases: [
      "what payment methods do you accept",
      "how can i pay",
      "can i pay by credit card",
      "can i pay cash",
      "do prices include tax",
      "is tax included",
    ],
    keywords: ["card", "cash", "cheque", "tax", "taxes"],
    answer:
      "Our website explains when invoices are due, but it does not list accepted payment methods or confirm whether a quoted amount includes tax. The team will confirm those billing details with your proposal or booking.",
    actions: [
      { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
      { label: "View terms", href: "/terms", kind: "link" },
    ],
    answered: false,
  },
  {
    intent: "privacy",
    phrases: [
      "privacy policy",
      "what data do you collect",
      "do you sell my information",
      "do you sell my data",
      "is lisa recording me",
      "are chats recorded",
      "is this chat recorded",
      "does lisa store messages",
      "delete my information",
      "delete my phone number",
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
    phrases: [
      "phone number",
      "email address",
      "contact you",
      "talk to someone",
      "talk to a person",
      "speak to a person",
      "can someone call me",
      "contact the team",
    ],
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
  /ignore (your|the) instructions/,
  /private customer (information|data)/,
  /reveal customer (information|data)/,
  /reveal (your|the) (prompt|instructions|rules)/,
  /system prompt/,
  /developer message/,
  /pretend (you are|to be)/,
  /jailbreak/,
];

const confirmationPatterns = [
  /are you available/,
  /can (you|someone) (come|start)\b/,
  /can i (book|schedule)\b/,
  /book (me|us) (for|on)/,
  /\b(start|come|book|schedule) (today|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/,
  /what time can you/,
  /do you have an opening/,
  /\bneed to start\b/,
  /\b(?:begin|start) (?:at )?(?:the )?(?:beginning|start) of next month\b/,
  /\bvisit next (week|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/,
  /\bmove out date\b/,
  /\bprefer (monday|tuesday|wednesday|thursday|friday|saturday|sunday)s?\b/,
  /\bwalk ?through (?:on )?(today|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/,
  /\b(today|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday)(?: morning| afternoon| evening)? works best\b/,
  /\b(?:today|tomorrow) at \d{1,2}\s*(?:am|pm)\b/,
  /\b(?:not|no) (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday).*(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday).*(?:better|prefer)\b/,
  /guarantee .*(today|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday)/,
  /\b(urgent|urgently|asap|as soon as possible)\b/,
];

const humanHandoffPattern =
  /\b(?:(?:talk|speak|connect)\s+(?:me\s+)?(?:to|with)\s+(?:a\s+|the\s+)?(?:person|human|agent|team|owner)|(?:can|have)\s+someone\s+call\s+me|call me back|request a callback|human|agent)\b/;
const satisfactionGuaranteePattern =
  /\bguarantee (your work|the cleaning|the service)|satisfaction guarantee\b/;
const appliancePattern =
  /\b(inside (the )?(oven|fridge|refrigerator)|clean (the )?(oven|fridge|refrigerator)|clean appliances?)\b/;
const restaurantSpecialtyPattern =
  /\b(hood|hoods|duct|ducts|grease trap|grease traps|kitchen equipment|beer line|beer lines|beverage line|beverage lines)\b/;
const unlistedServiceAreaPattern =
  /\b(langley|maple ridge|port coquitlam|port moody|white rock)\b/;
const standaloneSchedulePattern =
  /^(today|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday)$/;
const worksafePattern =
  /\b(worksafebc|worksafe|wcb|workers compensation|worker compensation)\b/;
const privacyRequestPattern =
  /\b(are chats recorded|is this chat recorded|delete my (phone number|information|data)|remove my (phone number|information|data))\b/;
const customerPhonePattern =
  /(?:\b(?:my|our) (?:phone|telephone|mobile|cell) (?:number )?(?:is|:)\s*\d|\bcall (?:me|us) (?:at|on)\s*\d)/;
const customerEmailPattern =
  /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/i;
const emailedQuotePattern =
  /\b(email me (a |the )?quote|send (me )?(a |the )?quote (by|to my) email)\b/;
const unlistedFacilityPattern =
  /\b(nightclub|night club|gym|gyms|fitness cent(?:er|re)|retail(?: store)?|stores|warehouse|warehouses|airbnb|short term rental)\b/;
const referenceRequestPattern = /\b(reference|references|testimonial|testimonials)\b/;
const combinedBondingPattern = /\b(?:insured.*bonded|bonded.*insured)\b/;
const employeeStatusPattern =
  /\b(?:are (?:all |your )?(?:workers|cleaners|staff) employees|employees or contractors|who (?:performs|does) the cleaning)\b/;
const ownerQuestionPattern = /\b(?:who owns (?:gleam pro|the company)|who is the owner)\b/;
const pricingPolicyPattern =
  /\b(?:minimum charge|minimum price|deposit required|require (?:a )?deposit|hidden fees?|budget is|budget of|charge gst|gst charged|estimate free|free estimate|walk ?through free|free walk ?through)\b/;
const cancellationAccessPattern =
  /\b(?:i want to cancel|cancel (?:my )?(?:service|visit|appointment|cleaning)|reschedule|locked out|lock out|denied access)\b/;
const residentialExtraPattern =
  /\b(?:ceiling fans?|walls?|inside (?:the )?cabinets?|cabinet interiors?|powder room)\b/;
const unpublishedOperationsPattern =
  /\b(?:wear uniforms?|uniformed|minimum charge|minimum price)\b/;
const affirmativePattern =
  /^(?:yes|yes please|sure|sounds good|okay|ok|okay book it|book it|please do|that works)$/;
const declinePattern =
  /^(?:no|no thanks|no thank you|actually never mind|never mind|not now)$/;

const specialistPatterns = [
  /mould|mold/,
  /asbestos/,
  /biohazard/,
  /crime scene/,
  /needles|sharps/,
  /medical waste/,
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
  clinics: [
    "medical office",
    "medical offices",
    "dental office",
    "dental clinic",
    "dentist office",
    "clinic",
    "clinics",
    "healthcare",
  ],
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
  "residential-services": [
    "residential",
    "house",
    "houses",
    "home",
    "homes",
    "condo",
    "condos",
    "apartment",
    "apartments",
    "townhouse",
    "townhouses",
    "townhome",
    "townhomes",
  ],
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
const frequencyPattern =
  /\b(how often|frequency|daily|nightly|nigthly|every night|every morning|every 2 weeks|every two weeks|every second week|once every month|every month|monday to friday|monday through friday|mon to fri|mon through fri|weeknights?|monday.+wednesday.+friday|saturday and sunday|(?:[1-7]x|nights?|mornings?|evenings?|times?|days?) (?:a|per) week|twice (?:a|per) week|weekly|bi weekly|biweekly|every other week|monthly)\b/;
const scopeFollowUpPattern =
  /\b(what is included|what s included|what do you clean|tell me more|more information|what about that)\b/;
const ambiguousCleaningPattern =
  /\b(can you clean|do you clean|cleaning service|clean my|clean our|looking for (a )?cleaner|need (a )?cleaner)\b/;
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
  "qoute",
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
  agent: "contact",
  address: "company-location",
  commercial: "commercial-services",
  contact: "contact",
  email: "contact",
  equipment: "supplies",
  hours: "hours",
  human: "contact",
  incorporated: "company-registration",
  insurance: "insurance",
  location: "company-location",
  phone: "contact",
  registered: "company-registration",
  registration: "company-registration",
  supplies: "supplies",
};
const metroCityAliases: Record<string, string[]> = {
  Vancouver: ["vancouver"],
  Burnaby: ["burnaby"],
  "New Westminster": ["new westminster", "new west"],
  Surrey: ["surrey"],
  Richmond: ["richmond"],
  Coquitlam: ["coquitlam"],
  "North Vancouver": ["north vancouver"],
  "West Vancouver": ["west vancouver"],
  Delta: ["delta"],
};

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/(\d)\.(\d)/g, "$1decimal$2")
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

function findMentionedCities(question: string): string[] {
  const matches: Array<{
    city: string;
    alias: string;
    start: number;
    end: number;
  }> = [];

  for (const [city, aliases] of Object.entries(metroCityAliases)) {
    for (const alias of aliases) {
      const pattern = new RegExp(`\\b${alias.replace(/\s+/g, "\\s+")}\\b`, "g");
      for (const match of question.matchAll(pattern)) {
        const start = match.index ?? 0;
        matches.push({ city, alias, start, end: start + match[0].length });
      }
    }
  }

  const distinctMatches = matches.filter(
    (match) =>
      !matches.some(
        (other) =>
          other.city !== match.city &&
          other.start <= match.start &&
          other.end >= match.end &&
          other.alias.length > match.alias.length
      )
  );
  const positiveMatches = distinctMatches.filter((match) => {
    const prefix = question.slice(Math.max(0, match.start - 4), match.start);
    return !/(not|no)\s$/.test(prefix);
  });

  return positiveMatches
    .sort((a, b) => a.start - b.start)
    .map((match) => match.city)
    .filter((city, index, cities) => cities.indexOf(city) === index);
}

const countWords: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
};

function parseCount(value: string): number {
  return countWords[value] ?? Number(value);
}

function extractConversationContext(
  question: string,
  current: LisaConversationContext,
  serviceIntent?: LisaServiceIntent
): LisaConversationContext {
  const next: LisaConversationContext = {
    ...current,
    serviceIntent: serviceIntent ?? current.serviceIntent,
    unknownCount: 0,
  };

  if (serviceIntent) {
    next.market = residentialServiceIntents.has(serviceIntent)
      ? "residential"
      : "commercial";
  } else if (/\b(residential|home|house|condo|apartment|townhouse|townhome)\b/.test(question)) {
    next.market = "residential";
  } else if (/\b(commercial|business|facility)\b/.test(question)) {
    next.market = "commercial";
  }

  const mentionedCities = findMentionedCities(question);
  if (mentionedCities.length > 0) {
    const isCorrection = /\b(actually|correction|definitely|meant|no|not|sorry)\b/.test(
      question
    );
    const existingCities = next.cities ?? (next.city ? [next.city] : []);
    next.cities = isCorrection
      ? mentionedCities
      : [...new Set([...existingCities, ...mentionedCities])];
    next.city = mentionedCities[mentionedCities.length - 1];
  }

  const weeklyCountMatch = question.match(
    /\b(one|two|three|four|five|six|seven|twice|[1-7])\s*(?:x\s*)?(?:nights?|mornings?|evenings?|times?|days?)?\s*(?:a|per)\s+week\b/
  );
  const weeklyCounts: Record<string, string> = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    twice: "2",
  };

  const biWeeklyNegated = /\b(not|no)\s+(biweekly|bi weekly)\b/.test(question);
  const weeklyNegated = /\b(not|no)\s+weekly\b/.test(question);

  if (weeklyCountMatch) {
    const count = weeklyCounts[weeklyCountMatch[1]] ?? weeklyCountMatch[1];
    next.frequency = `${count}x weekly`;
  } else if (/\b(monday to friday|monday through friday|mon to fri|mon through fri)\b/.test(question)) {
    next.frequency = "5x weekly";
  } else if (
    /\bmonday\b/.test(question) &&
    /\bwednesday\b/.test(question) &&
    /\bfriday\b/.test(question)
  ) {
    next.frequency = "3x weekly";
  } else if (/\b(saturday and sunday|saturdays and sundays)\b/.test(question)) {
    next.frequency = "weekends";
  } else if (/\b(5x|five times|five days)\b/.test(question)) {
    next.frequency = "5x weekly";
  } else if (/\b(every 2 weeks|every two weeks|every second week)\b/.test(question)) {
    next.frequency = "bi-weekly";
  } else if (
    !biWeeklyNegated &&
    /\b(bi weekly|biweekly|every other week)\b/.test(question)
  ) {
    next.frequency = "bi-weekly";
  } else if (/\b(nightly|nigthly|every night|each night|weeknights?)\b/.test(question)) {
    next.frequency = "nightly";
  } else if (/\bdaily\b/.test(question)) {
    next.frequency = "daily";
  } else if (!weeklyNegated && /\bweekly\b/.test(question)) {
    next.frequency = "weekly";
  } else if (/\b(monthly|once every month|every month)\b/.test(question)) {
    next.frequency = "monthly";
  } else if (/\bevery morning\b/.test(question)) {
    next.frequency = "daily";
  } else if (/\bcustom (schedule|frequency)\b/.test(question)) {
    next.frequency = "custom";
  }

  if (/\b(weekend|weekends|saturday and sunday|saturdays and sundays)\b/.test(question)) {
    next.serviceWindow = "weekend";
  } else if (/\b(after hours|after close|after patients leave|after \d{1,2}\s*(am|pm)|after midnight|closes? at \d{1,2}\s*(am|pm)|overnight|midnight|night|nights|nightly|nigthly|weeknight|weeknights|evening|evenings)\b/.test(question)) {
    next.serviceWindow = "after-hours";
  } else if (/\b(daytime|business hours|morning|mornings|before opening)\b/.test(question)) {
    next.serviceWindow = "daytime";
  }

  const squareFeetMatch = question.match(
    /\b(\d+(?:\s\d{3})*)\s*(?:square foot|square feet|sq feet|sq ft|sqft|sf)\b/
  );
  if (squareFeetMatch) {
    next.squareFeet = `${squareFeetMatch[1].replace(/\s/g, "")} sq ft`;
  } else {
    const compactSquareFeetMatch = question.match(
      /\b(\d+(?:decimal\d+)?)k\s*(?:square foot|square feet|sq feet|sq ft|sqft|sf)?\b/
    );
    const wordSquareFeetMatch = question.match(
      /\b(one|two|three|four|five|six|seven|eight|nine|ten) thousand\s*(?:square foot|square feet|sq feet|sq ft|sqft|sf)\b/
    );
    if (compactSquareFeetMatch) {
      next.squareFeet = `${Math.round(
        Number(compactSquareFeetMatch[1].replace("decimal", ".")) * 1000
      )} sq ft`;
    } else if (wordSquareFeetMatch) {
      next.squareFeet = `${parseCount(wordSquareFeetMatch[1]) * 1000} sq ft`;
    }
  }

  const bedroomMatch = question.match(
    /\b(one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s*(?:bedroom|bedrooms|bed|beds)\b/
  );
  if (bedroomMatch) next.bedrooms = parseCount(bedroomMatch[1]);

  const bathroomMatch = question.match(
    /\b(one|two|three|four|five|six|seven|eight|nine|ten|\d+(?:decimal\d+)?)\s*(?:bathroom|bathrooms|bath|baths)\b/
  );
  if (bathroomMatch) {
    next.bathrooms = Number(
      bathroomMatch[1].includes("decimal")
        ? bathroomMatch[1].replace("decimal", ".")
        : parseCount(bathroomMatch[1])
    );
  } else if (/\bone and a half (bathroom|bathrooms|bath|baths)\b/.test(question)) {
    next.bathrooms = 1.5;
  }
  if (/\bpowder room\b/.test(question)) {
    next.bathrooms = (next.bathrooms ?? current.bathrooms ?? 0) + 0.5;
  }

  const siteCountMatch = question.match(
    /\b(one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+(?:locations?|sites?|cafes?|restaurants?|offices?)\b/
  );
  if (siteCountMatch) next.siteCount = parseCount(siteCountMatch[1]);

  const unitCountMatch = question.match(
    /\b(one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+units?\b/
  );
  if (unitCountMatch) next.unitCount = parseCount(unitCountMatch[1]);

  const correctedDayMatch = question.match(
    /\b(?:not|no)\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)[^a-z]+(?:but\s+)?(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/
  );
  const requestedTimingMatch = question.match(
    /\b((?:next\s+)?(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|week)s?(?:\s+(?:morning|afternoon|evening))?(?:\s+at\s+\d{1,2}\s*(?:am|pm))?|(?:today|tomorrow)(?:\s+at\s+\d{1,2}\s*(?:am|pm))?|asap|(?:the\s+)?(?:beginning|start) of next month|(?:january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2})\b/
  );
  const requestedTiming = correctedDayMatch?.[1] ?? requestedTimingMatch?.[1];
  if (
    requestedTiming &&
    (/\b(book|schedule|start|come|available|availability|appointment|visit|walkthrough|works best|prefer|date)\b/.test(
      question
    ) || standaloneSchedulePattern.test(question) || Boolean(current.serviceIntent || current.market))
  ) {
    next.requestedTiming = requestedTiming;
  }

  return next;
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
  serviceIntent?: LisaServiceIntent,
  question = ""
): LisaConversationContext {
  return extractConversationContext(question, current, serviceIntent);
}

function containsPhrase(question: string, phrase: string): boolean {
  return ` ${question} `.includes(` ${phrase} `);
}

function scoreEntry(question: string, entry: KnowledgeEntry): number {
  const allWords = new Set(question.split(" "));
  const words = new Set([...allWords].filter((word) => word.length > 2));
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
    const phraseTokens = normalizedPhrase.split(" ");
    if (
      phraseWords.length >= 2 &&
      phraseWords.every((word) => words.has(word)) &&
      phraseTokens.every((word) => allWords.has(word))
    ) {
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

  if (privacyRequestPattern.test(question)) {
    const reply = replyFromEntry(
      "privacy",
      understoodContext(currentContext, currentContext.serviceIntent, question)
    );
    if (reply) return reply;
  }

  if (customerPhonePattern.test(question) || customerEmailPattern.test(rawQuestion)) {
    return {
      intent: "contact-details-form",
      answer:
        "For privacy, I don't capture a phone number from an ordinary chat message. Please open the secure request form below and enter your contact details there so the Gleam Pro team can follow up.",
      actions: [walkthroughAction],
      answered: false,
      context: currentContext,
    };
  }

  if (emailedQuotePattern.test(question)) {
    return {
      intent: "quote-delivery",
      answer:
        "Yes, the team can send your proposal to the email address you provide. Please use the request form below so your email and cleaning details are submitted securely; Lisa does not capture contact details from ordinary chat messages.",
      actions: [walkthroughAction],
      answered: true,
      context: currentContext,
    };
  }

  if (declinePattern.test(question)) {
    return {
      intent: "conversation-close",
      answer: "No problem. I'm here if you need help with anything else.",
      answered: true,
      context: currentContext,
    };
  }

  if (affirmativePattern.test(question)) {
    if (currentContext.serviceIntent || currentContext.market) {
      return {
        intent: "lead-confirmation",
        answer:
          "Great. Please open the secure request form below and share your contact details. The Gleam Pro team will review your request and confirm the quote or walk-through with you.",
        actions: [walkthroughAction],
        answered: true,
        context: currentContext,
      };
    }
    return {
      intent: "acknowledgement",
      answer: "Great. What type of cleaning can I help you with?",
      actions: facilityQuickReplies,
      answered: true,
      context: currentContext,
    };
  }

  if (referenceRequestPattern.test(question)) {
    const reply = replyFromEntry(
      "unpublished-account-detail",
      understoodContext(currentContext, currentContext.serviceIntent, question)
    );
    if (reply) return reply;
  }

  if (combinedBondingPattern.test(question)) {
    return {
      intent: "unconfirmed-credential",
      answer:
        "Gleam Pro carries $1 million in commercial general liability insurance and can provide a certificate on request. The website does not state that Gleam Pro or every cleaner is bonded, so the team must confirm bonding if your property requires it.",
      actions: [walkthroughAction],
      answered: false,
      context: currentContext,
    };
  }

  if (employeeStatusPattern.test(question)) {
    const reply = replyFromEntry("cleaning-team", currentContext);
    if (reply) return reply;
  }

  if (unpublishedOperationsPattern.test(question)) {
    const reply = replyFromEntry("unpublished-account-detail", currentContext);
    if (reply) return reply;
  }

  if (ownerQuestionPattern.test(question)) {
    return {
      intent: "company-owner",
      answer:
        "Gleam Pro is described on the website as family-owned and owner-led. The website does not publish an owner's name, so I won't guess.",
      actions: [
        { label: "Contact the team", href: "mailto:services@gleampro.ca", kind: "link" },
      ],
      answered: true,
      context: currentContext,
    };
  }

  if (pricingPolicyPattern.test(question)) {
    if (/\b(?:estimate free|free estimate|walk ?through free|free walk ?through)\b/.test(question)) {
      return {
        intent: "free-estimate",
        answer:
          "Yes. Gleam Pro offers a free 15-minute walk-through for commercial cleaning and a free estimate for residential cleaning.",
        actions: [walkthroughAction],
        answered: true,
        context: currentContext,
      };
    }
    if (/\b(?:charge gst|gst charged)\b/.test(question)) {
      const reply = replyFromEntry("unpublished-billing-detail", currentContext);
      if (reply) return reply;
    }
    return {
      intent: "unpublished-pricing-detail",
      answer:
        "That pricing detail is not published on Gleam Pro's website, so I don't want to assume. The team will confirm any deposit, minimum charge, taxes, and all quoted work before you approve a proposal. Work outside the written scope is quoted separately before it is performed.",
      actions: [walkthroughAction],
      answered: false,
      context: currentContext,
    };
  }

  if (cancellationAccessPattern.test(question)) {
    if (/\b(?:locked out|lock out|denied access)\b/.test(question)) {
      return {
        intent: "access-policy",
        answer:
          "Gleam Pro's terms say a lockout or denied access at the scheduled time may be billed at the standard visit rate. The team will work with you to recover the visit on the next available date.",
        actions: [{ label: "View terms", href: "/terms", kind: "link" }],
        answered: true,
        context: currentContext,
      };
    }
    const reply = replyFromEntry(
      "rescheduling",
      understoodContext(currentContext, currentContext.serviceIntent, question)
    );
    if (reply) return reply;
  }

  if (unlistedServiceAreaPattern.test(question)) {
    return {
      intent: "unlisted-service-area",
      answer:
        "That location is not listed in Gleam Pro's published service areas. I don't want to assume route coverage, but the team can confirm whether service is available at your address.",
      actions: [
        { label: "View service areas", href: "/service-areas", kind: "link" },
        walkthroughAction,
      ],
      answered: false,
      context: understoodContext(currentContext, currentContext.serviceIntent, question),
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

  if (unlistedFacilityPattern.test(question)) {
    return {
      intent: "unlisted-facility",
      answer:
        "That facility type is not specifically listed among Gleam Pro's published services. The team can review the space, operating hours, floors, washrooms, and any specialty areas, then confirm whether the right scope can be provided.",
      actions: [walkthroughAction],
      answered: false,
      context: {
        ...understoodContext(currentContext, undefined, question),
        market: "commercial",
      },
    };
  }

  if (humanHandoffPattern.test(question)) {
    const reply = replyFromEntry(
      "contact",
      understoodContext(currentContext, currentContext.serviceIntent, question)
    );
    if (reply) return reply;
  }

  if (satisfactionGuaranteePattern.test(question)) {
    const reply = replyFromEntry(
      "satisfaction-policy",
      understoodContext(currentContext, currentContext.serviceIntent, question)
    );
    if (reply) return reply;
  }

  if (
    confirmationPatterns.some((pattern) => pattern.test(question)) ||
    (standaloneSchedulePattern.test(question) &&
      Boolean(currentContext.serviceIntent || currentContext.market))
  ) {
    return {
      intent: "guardrail-availability",
      answer:
        "I can help you ask the team, but I can't see the live schedule or guarantee a start date. Leave your details here and they'll confirm route availability and timing directly with you.",
      actions: [walkthroughAction],
      answered: false,
      context: understoodContext(
        currentContext,
        currentContext.serviceIntent,
        question
      ),
    };
  }

  if (companyLocationPattern.test(question)) {
    const reply = replyFromEntry(
      "company-location",
      understoodContext(currentContext)
    );
    if (reply) return reply;
  }

  if (worksafePattern.test(question)) {
    const reply = replyFromEntry(
      "worksafe-credential",
      understoodContext(currentContext, currentContext.serviceIntent, question)
    );
    if (reply) return reply;
  }

  if (isShortPricingInquiry(question)) {
    const context = understoodContext(
      currentContext,
      currentContext.serviceIntent,
      question
    );
    const pricingIntent = context.market
      ? context.market === "residential"
        ? "residential-pricing"
        : "commercial-pricing"
      : "quote-request";
    const reply = replyFromEntry(pricingIntent, context);
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

  if (question === "help") {
    return {
      intent: "help",
      answer:
        "Of course. I can help with cleaning services, pricing, service areas, scheduling basics, or a walk-through request. What would you like help with?",
      actions: topicQuickReplies,
      answered: true,
      context: understoodContext(currentContext),
    };
  }

  const oneWordIntent = strongOneWordIntents[question];
  if (oneWordIntent) {
    const reply = replyFromEntry(
      oneWordIntent,
      understoodContext(currentContext, undefined, question)
    );
    if (reply) return reply;
  }

  if (isShortServiceInquiry(question)) {
    return {
      intent: "clarify-service",
      answer:
        "Of course! Is this for a restaurant, office, clinic, brewery or taproom, managed property, school or community facility, or home?",
      actions: facilityQuickReplies,
      answered: false,
      context: understoodContext(currentContext),
    };
  }

  const detectedServiceIntent = findServiceIntent(question);
  const isAddOnService =
    detectedServiceIntent === "carpet-upholstery" &&
    currentContext.serviceIntent === "move-cleaning" &&
    /\b(also|add|too|as well)\b/.test(question);
  const contextServiceIntent = isAddOnService
    ? currentContext.serviceIntent
    : detectedServiceIntent;
  const serviceIntent = contextServiceIntent ?? currentContext.serviceIntent;
  const nextContext = understoodContext(
    currentContext,
    contextServiceIntent,
    question
  );

  if (residentialExtraPattern.test(question)) {
    return {
      intent: "residential-extra-scope",
      answer:
        "That item is not confirmed as a standard inclusion on Gleam Pro's residential pages. Please add it to your request so the team can review the surface or area and confirm whether it can be included or quoted separately.",
      actions: [walkthroughAction],
      answered: false,
      context: { ...nextContext, market: "residential" },
    };
  }

  if (restaurantSpecialtyPattern.test(question)) {
    const reply = replyFromEntry("restaurant-specialty", nextContext);
    if (reply) return reply;
  }

  if (appliancePattern.test(question)) {
    const applianceIntent =
      nextContext.serviceIntent === "move-cleaning"
        ? "move-cleaning-details"
        : "appliance-cleaning";
    const reply = replyFromEntry(applianceIntent, nextContext);
    if (reply) return reply;
  }

  if (
    nextContext.unitCount !== undefined &&
    nextContext.unitCount > 1 &&
    nextContext.unitCount !== currentContext.unitCount &&
    currentContext.serviceIntent === "move-cleaning"
  ) {
    return {
      intent: "multi-unit-clarification",
      answer:
        "I've noted the multi-unit request. Is this a property-management turnover account or residential cleaning for one unit at a time? The team will scope access, timing, and pricing differently for a multi-unit program.",
      actions: [
        {
          label: "Managed property",
          value: "property management cleaning",
          kind: "question",
        },
        {
          label: "Residential turnover",
          value: "residential move out cleaning",
          kind: "question",
        },
      ],
      answered: false,
      context: nextContext,
    };
  }

  if (pricingPattern.test(question) && (serviceIntent || nextContext.market)) {
    const pricingIntent = nextContext.market === "residential"
      ? "residential-pricing"
      : "commercial-pricing";
    const reply = replyFromEntry(pricingIntent, nextContext);
    if (reply) return reply;
  }

  if (
    frequencyPattern.test(question) &&
    (currentContext.serviceIntent || currentContext.market) &&
    !detectedServiceIntent
  ) {
    const reply = replyFromEntry("frequency", nextContext);
    if (reply) return reply;
  }

  if (scopeFollowUpPattern.test(question) && currentContext.serviceIntent) {
    const reply = replyFromEntry(currentContext.serviceIntent, nextContext);
    if (reply) return reply;
  }

  const qualificationUpdates = [
    nextContext.city !== currentContext.city && nextContext.city
      ? nextContext.city
      : undefined,
    nextContext.squareFeet !== currentContext.squareFeet && nextContext.squareFeet
      ? nextContext.squareFeet
      : undefined,
    nextContext.bedrooms !== currentContext.bedrooms &&
    nextContext.bedrooms !== undefined
      ? `${nextContext.bedrooms} bedrooms`
      : undefined,
    nextContext.bathrooms !== currentContext.bathrooms &&
    nextContext.bathrooms !== undefined
      ? `${nextContext.bathrooms} bathrooms`
      : undefined,
    nextContext.siteCount !== currentContext.siteCount &&
    nextContext.siteCount !== undefined
      ? `${nextContext.siteCount} locations`
      : undefined,
    nextContext.unitCount !== currentContext.unitCount &&
    nextContext.unitCount !== undefined
      ? `${nextContext.unitCount} units`
      : undefined,
  ].filter((detail): detail is string => Boolean(detail));

  if (
    qualificationUpdates.length > 0 &&
    Boolean(currentContext.serviceIntent || currentContext.market) &&
    !/^(are|can|do|does|how|is|what|when|where|which|who|why)\b/.test(question)
  ) {
    return {
      intent: "context-update",
      answer: `Got it. I've noted ${qualificationUpdates.join(
        ", "
      )}. Would you like service details, pricing information, or help requesting a quote?`,
      actions: topicQuickReplies,
      answered: true,
      context: nextContext,
    };
  }

  if (
    detectedServiceIntent &&
    !currentContext.serviceIntent &&
    !/^(are|can|do|does|how|is|what|when|where|which|who|why)\b/.test(question)
  ) {
    const reply = replyFromEntry(detectedServiceIntent, nextContext);
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

  const rememberedDetails = [
    nextContext.city !== currentContext.city && nextContext.city
      ? nextContext.city
      : undefined,
    nextContext.frequency !== currentContext.frequency && nextContext.frequency
      ? `${nextContext.frequency} service`
      : undefined,
    nextContext.serviceWindow !== currentContext.serviceWindow &&
    nextContext.serviceWindow
      ? `${nextContext.serviceWindow} timing`
      : undefined,
    nextContext.squareFeet !== currentContext.squareFeet && nextContext.squareFeet
      ? nextContext.squareFeet
      : undefined,
    nextContext.bedrooms !== currentContext.bedrooms &&
    nextContext.bedrooms !== undefined
      ? `${nextContext.bedrooms} bedrooms`
      : undefined,
    nextContext.bathrooms !== currentContext.bathrooms &&
    nextContext.bathrooms !== undefined
      ? `${nextContext.bathrooms} bathrooms`
      : undefined,
    nextContext.siteCount !== currentContext.siteCount &&
    nextContext.siteCount !== undefined
      ? `${nextContext.siteCount} locations`
      : undefined,
    nextContext.unitCount !== currentContext.unitCount &&
    nextContext.unitCount !== undefined
      ? `${nextContext.unitCount} units`
      : undefined,
    nextContext.requestedTiming !== currentContext.requestedTiming &&
    nextContext.requestedTiming
      ? `${nextContext.requestedTiming} requested timing`
      : undefined,
  ].filter((detail): detail is string => Boolean(detail));

  if (rememberedDetails.length > 0) {
    return {
      intent: "context-update",
      answer: `Got it. I've noted ${rememberedDetails.join(
        ", "
      )}. Would you like service details, pricing information, or help requesting a quote?`,
      actions: topicQuickReplies,
      answered: true,
      context: nextContext,
    };
  }

  if (!bestMatch || bestMatch.score < 4) {
    if (ambiguousCleaningPattern.test(question)) {
      return {
        intent: "clarify-service",
        answer:
          "Sure! What kind of space do you need cleaned: a restaurant, office, clinic, brewery or taproom, managed property, school or community facility, or home?",
        actions: facilityQuickReplies,
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
        actions: topicQuickReplies,
        answered: false,
        context: { ...nextContext, unknownCount },
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
      context: { ...nextContext, unknownCount },
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
