// components/commercial/ui.ts

export const brand = {
  navy: "#0B2545",
  midnight: "#081A31",
  emerald: "#0FA36B",
  gold: "#C9A227",
};

export const commercial = {
  /**
   * Full-page shell (match homepage)
   * Use as the OUTERMOST wrapper on commercial hub + sub-pages
   */
  shell: "min-h-screen bg-[#0B2545] text-white",

  /**
   * Inner container spacing (match homepage max width + padding)
   */
  page: "mx-auto max-w-6xl px-4 py-12 sm:py-16",

  /**
   * Homepage-style glow for hero/top area
   */
  glow:
    "absolute inset-0 opacity-10 pointer-events-none z-0 " +
    "[background:radial-gradient(400px_200px_at_20%_20%,#C9A227,transparent),radial-gradient(400px_200px_at_80%_10%,#0FA36B,transparent)]",

  /* Typography */
  eyebrow: "text-sm uppercase tracking-wider text-white/70",
  h1: "mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl",
  lead: "mt-4 text-base leading-7 text-white/80",

  h2: "text-xl font-bold text-white",
  h2Large: "text-2xl font-bold text-white",
  h3: "text-base font-semibold text-white",

  accent: "text-[#C9A227]",
  muted: "text-white/70",
  body: "text-white/80",

  /* Sections / Surfaces */
  section: "mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm",
  sectionAlt:
    "mt-10 rounded-3xl border border-white/10 bg-[#081A31] p-8 shadow-sm",
  sectionDark:
    "mt-10 rounded-3xl border border-white/10 bg-[#081A31] p-8 text-white shadow-sm",

  /* Cards */
  card: "rounded-3xl border border-white/10 bg-white/5 p-6",
  cardSoft: "rounded-3xl border border-white/10 bg-[#081A31] p-6",
  linkCard:
    "rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10",

  /* Pills / list items */
  pill: "rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80",
  listItem:
    "rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80",

  /* Buttons */
  cta: "inline-flex items-center justify-center rounded-full bg-[#0FA36B] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0C8A5B] focus:outline-none focus:ring-2 focus:ring-[#0FA36B] focus:ring-offset-2 focus:ring-offset-[#0B2545]",
  secondary:
    "inline-flex items-center justify-center rounded-full border border-[#C9A227] px-6 py-3 text-sm font-semibold text-[#C9A227] transition hover:bg-white/10",
  ctaLight:
    "inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B2545] transition hover:bg-slate-200",

  /* Notice strip (emerald emphasis, dark-theme friendly) */
  notice:
    "mt-7 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-900/25 p-5",
  noticeText: "text-sm font-medium text-emerald-100",
};
