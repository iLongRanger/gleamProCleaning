export type LisaAction =
  | { label: string; href: string; kind: "link" }
  | { label: string; kind: "lead" };

export type LisaReply = {
  intent: string;
  answer: string;
  actions?: LisaAction[];
  answered: boolean;
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
    intent: "commercial-pricing",
    phrases: ["how much", "what does it cost", "commercial cleaning price", "cleaning rates", "get a quote"],
    keywords: ["price", "pricing", "cost", "quote", "estimate", "rate"],
    answer:
      "Commercial pricing depends on square footage, traffic, washrooms, floor types, service frequency, and the agreed scope. Gleam Pro provides a fixed monthly proposal after a free on-site walk-through. I can't calculate or promise a price in chat, but I'd be happy to help you request a walk-through.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "residential-pricing",
    phrases: ["house cleaning cost", "home cleaning cost", "residential cleaning price", "price for my home"],
    keywords: ["house", "home", "residential", "pricing", "cost", "estimate"],
    answer:
      "Residential pricing depends on the home's size, condition, bathrooms, service type, and frequency. The team provides a tailored estimate after reviewing your needs. I can't calculate or promise a price in chat, but I'd be happy to help you request an estimate.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "commercial-services",
    phrases: ["commercial services", "commercial spaces", "what do you clean", "what is included", "clean my business"],
    keywords: ["commercial", "business", "facility", "services", "included", "scope"],
    answer:
      "Commercial scopes commonly include waste and recycling, washrooms, high-touch surfaces, floors, breakrooms or approved kitchen areas, and spot glass. Every checklist is confirmed by area and frequency during the walk-through.",
    actions: [
      { label: "Commercial services", href: "/commercial-cleaning", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "restaurants",
    phrases: ["restaurant cleaning", "pub cleaning", "cafe cleaning", "kitchen cleaning", "back of house"],
    keywords: ["restaurant", "restaurants", "pub", "cafe", "dining", "kitchen", "washroom", "taproom"],
    answer:
      "Gleam Pro cleans restaurants, pubs, and cafes after hours, including agreed front-of-house areas, washrooms, floors, touchpoints, and scoped back-of-house support. Food-contact sanitation, hood and duct work, grease traps, and other specialty work are only included when specifically confirmed.",
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
      "Gleam Pro provides after-hours brewery and taproom cleaning, with scopes built around taproom floors, washrooms, patios, and approved back-of-house areas so the venue is ready before opening.",
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
      "Gleam Pro provides recurring cleaning for clinics and medical offices. The exact hygiene, disinfection, access, and product requirements are documented during the walk-through. I won't guess about a clinical protocol or compliance standard, but the team will be happy to review your requirements.",
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
      "Office cleaning can include work areas, washrooms, kitchens or breakrooms, waste, touchpoints, floors, and spot glass. The final checklist and frequency are tailored to your layout and operating hours.",
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
      "Gleam Pro supports property managers with recurring cleaning for agreed common areas such as entrances, lobbies, corridors, elevators, shared washrooms, amenity spaces, and service areas.",
    actions: [
      { label: "Property management", href: "/commercial-cleaning/property-management", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "community-facilities",
    phrases: ["community centre cleaning", "community facility cleaning", "event space cleaning"],
    keywords: ["community", "facility", "facilities", "event", "hall", "recreation"],
    answer:
      "Community facility scopes can cover entrances, activity rooms, washrooms, shared kitchens, touchpoints, waste, and floors. Frequency is based on room use, traffic, and event schedules.",
    actions: [
      { label: "Community facilities", href: "/commercial-cleaning/community-facilities", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "residential-services",
    phrases: ["residential cleaning", "house cleaning", "home cleaning", "clean my home"],
    keywords: ["residential", "house", "home", "bedroom", "bathroom", "family"],
    answer:
      "Residential services include recurring home cleaning, deep cleaning, move-in or move-out cleaning, and carpet or upholstery care. The team confirms the rooms, priorities, products, and schedule before service.",
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
      "Deep cleaning is a one-time, detail-focused service for buildup-prone and harder-to-reach areas beyond routine maintenance. The exact inclusions are confirmed from the home's condition and priorities.",
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
      "Move-in and move-out cleaning is available for homes, apartments, and rental turnovers. Scope and access are confirmed in advance, including any add-ons or areas that need special attention.",
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
      "Carpet and upholstery cleaning is available for suitable materials. The team needs to review the material, condition, stains, and access before confirming the method or expected result.",
    actions: [
      { label: "Carpet and upholstery", href: "/residential-cleaning/carpet-upholstery", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "service-areas",
    phrases: ["where do you serve", "which cities", "service area", "areas do you cover", "do you serve"],
    keywords: ["vancouver", "burnaby", "westminster", "surrey", "richmond", "coquitlam", "delta", "city", "cities", "location", "area"],
    answer:
      "Gleam Pro serves Vancouver, Burnaby, New Westminster, Surrey, Richmond, Coquitlam, North Vancouver, West Vancouver, and Delta. Route availability for a specific address must be confirmed by the team.",
    actions: [
      { label: "View service areas", href: "/service-areas", kind: "link" },
      walkthroughAction,
    ],
    answered: true,
  },
  {
    intent: "frequency",
    phrases: ["how often", "cleaning frequency", "every day", "weekly cleaning", "bi-weekly cleaning", "monthly cleaning"],
    keywords: ["daily", "nightly", "weekly", "biweekly", "monthly", "frequency", "schedule"],
    answer:
      "Commercial schedules can be daily, five times per week, weekly, bi-weekly, or custom depending on traffic and operating needs. Residential maintenance is commonly weekly, bi-weekly, or monthly.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "after-hours",
    phrases: ["after hours", "overnight cleaning", "night cleaning", "weekend cleaning", "before we open"],
    keywords: ["night", "nightly", "overnight", "weekend", "closed", "opening"],
    answer:
      "Yes. After-hours and weekend service is common for Gleam Pro's commercial clients. Access, alarm, lock-up, and the approved service window are documented before the first visit.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "supplies",
    phrases: ["bring supplies", "provide equipment", "cleaning products", "eco friendly products", "fragrance free"],
    keywords: ["supplies", "equipment", "products", "chemicals", "consumables", "soap", "liners", "paper"],
    answer:
      "Gleam Pro can provide cleaning tools and products. Client-supplied consumables such as paper products, liners, and soap are finalized during onboarding. Product preferences or surface restrictions should be documented before service.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "insurance",
    phrases: ["are you insured", "liability insurance", "insurance certificate"],
    keywords: ["insured", "insurance", "liability", "certificate", "coverage"],
    answer:
      "Gleam Pro Cleaning carries $1 million in commercial general liability insurance. A certificate of insurance is available on request before service starts.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "quality",
    phrases: ["quality control", "same cleaner", "same crew", "missed something", "service issue"],
    keywords: ["quality", "consistent", "consistency", "crew", "checklist", "inspection", "issue", "complaint"],
    answer:
      "Gleam Pro uses documented scopes, recurring checklists, periodic inspections, and direct issue follow-up. The goal is a consistent crew that learns the site, subject to scheduling and operational needs.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "trial",
    phrases: ["long term contract", "30 day trial", "no lock in", "cancel anytime", "contract length"],
    keywords: ["trial", "contract", "commitment", "lock", "cancel"],
    answer:
      "Gleam Pro offers a 30-day trial with no long-term lock-in. Final service terms, cancellation requirements, and scope are documented in your proposal or service agreement.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "walkthrough",
    phrases: ["how does it work", "book a walkthrough", "request a walkthrough", "request a walk through", "start service", "get started"],
    keywords: ["walkthrough", "walk-through", "onboarding", "start", "proposal", "process"],
    answer:
      "Start with a free 15-minute commercial walk-through or a residential estimate. The team reviews the space and priorities, then provides a written proposal; commercial proposals are normally sent within 24 hours after the visit.",
    actions: [walkthroughAction],
    answered: true,
  },
  {
    intent: "contact",
    phrases: ["phone number", "email address", "contact you", "talk to someone", "speak to a person"],
    keywords: ["phone", "call", "email", "contact", "person", "human", "team"],
    answer:
      "You're welcome to call Gleam Pro at 778 223 0719 or email services@gleampro.ca. You can also leave your details here, and the team will follow up within one business day.",
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
      "Office hours are Monday to Friday from 8:00 to 18:00, Saturday from 9:00 to 16:00, and Sunday by appointment. Cleaning service windows are confirmed separately.",
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

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9$@+\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreEntry(question: string, entry: KnowledgeEntry): number {
  const words = new Set(question.split(" ").filter((word) => word.length > 2));
  let score = 0;

  for (const phrase of entry.phrases) {
    const normalizedPhrase = normalize(phrase);
    if (question.includes(normalizedPhrase)) {
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
      if (question.includes(normalizedKeyword)) score += 4;
    } else if (words.has(normalizedKeyword)) {
      score += 2;
    }
  }

  return score;
}

export function answerLisaQuestion(rawQuestion: string): LisaReply {
  const question = normalize(rawQuestion.slice(0, 300));

  if (!question) {
    return {
      intent: "empty",
      answer: "Please send me a question about Gleam Pro's cleaning services, and I'll be happy to help.",
      answered: false,
    };
  }

  if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(question)) {
    return {
      intent: "greeting",
      answer:
        "Hi, I'm Lisa, Gleam Pro's virtual assistant! I'd be happy to help with services, service areas, scheduling basics, and walk-through requests.",
      answered: true,
    };
  }

  if (manipulationPatterns.some((pattern) => pattern.test(question))) {
    return {
      intent: "guardrail-manipulation",
      answer:
        "I'm here to help with approved information about Gleam Pro's cleaning services. I can't change or reveal my operating rules, but you're welcome to ask me about our services or request a walk-through.",
      answered: false,
    };
  }

  if (specialistPatterns.some((pattern) => pattern.test(question))) {
    return {
      intent: "guardrail-specialist",
      answer:
        "I can't confirm hazardous or specialist remediation work, and I don't want to give you the wrong answer. Please contact the team so they can assess the request and let you know whether a qualified provider is required.",
      actions: [
        { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
      ],
      answered: false,
    };
  }

  if (confirmationPatterns.some((pattern) => pattern.test(question))) {
    return {
      intent: "guardrail-availability",
      answer:
        "I'd be happy to help you check. I can't see the live schedule or guarantee a start date, but you can leave your details and the Gleam Pro team will confirm route availability and timing directly.",
      actions: [walkthroughAction],
      answered: false,
    };
  }

  const bestMatch = knowledgeBase
    .map((entry) => ({ entry, score: scoreEntry(question, entry) }))
    .sort((a, b) => b.score - a.score)[0];

  if (!bestMatch || bestMatch.score < 4) {
    return {
      intent: "unknown",
      answer:
        "I don't have a confirmed answer for that yet, and I don't want to guess. I'd be happy to help you contact the Gleam Pro team for an accurate answer.",
      actions: [
        { label: "Call 778 223 0719", href: "tel:+17782230719", kind: "link" },
        walkthroughAction,
      ],
      answered: false,
    };
  }

  const { phrases: _phrases, keywords: _keywords, ...reply } = bestMatch.entry;
  return reply;
}
