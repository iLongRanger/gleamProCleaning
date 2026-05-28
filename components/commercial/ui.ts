// components/commercial/ui.ts
// Design tokens shared across the commercial section.
// Updated to match the editorial homepage system: Fraunces display + grain + ink palette.

export const brand = {
  ink: "#050E1F",
  navy: "#0B2545",
  midnight: "#081A31",
  emerald: "#0FA36B",
  emeraldDeep: "#0B7F54",
  gold: "#C9A227",
  bone: "#F4EFE6",
};

export const commercial = {
  /* Outer shell */
  shell: "min-h-screen bg-[#050E1F] text-white antialiased",

  /* Inner container */
  page: "relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 py-16 sm:py-24",

  /* Atmospheric glow for hero/top areas — pair with a relative parent and bg-grain overlay */
  glow:
    "absolute inset-0 pointer-events-none z-0 " +
    "[background:radial-gradient(900px_480px_at_12%_8%,rgba(15,163,107,0.18),transparent_60%),radial-gradient(800px_500px_at_92%_12%,rgba(201,162,39,0.14),transparent_65%)] " +
    "before:content-[''] before:absolute before:inset-0 before:bg-grain before:opacity-[0.30] before:mix-blend-overlay before:pointer-events-none",

  /* Typography */
  eyebrow:
    "text-[11px] font-medium uppercase tracking-[0.28em] text-[#C9A227]/90",
  h1:
    "font-display mt-5 text-[40px] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[80px] lg:leading-[0.98] font-light text-white",
  lead:
    "mt-6 max-w-2xl text-[16px] sm:text-[17px] leading-[1.65] text-white/70",

  h2: "font-display text-2xl sm:text-3xl leading-tight text-white",
  h2Large:
    "font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-white",
  h3: "font-display text-lg sm:text-xl leading-tight text-white",

  accent: "text-[#C9A227]",
  italic: "italic text-white/70",
  muted: "text-white/65",
  body: "text-white/75 leading-relaxed",

  /* Sections / Surfaces */
  section:
    "mt-14 sm:mt-20 rounded-3xl border border-white/10 bg-[#0B2545]/35 p-8 sm:p-10 backdrop-blur-[2px]",
  sectionAlt:
    "mt-14 sm:mt-20 rounded-3xl border border-white/10 bg-[#081A31] p-8 sm:p-10",
  sectionDark:
    "mt-14 sm:mt-20 rounded-3xl border border-white/10 bg-[#050E1F] p-8 sm:p-10 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]",

  /* Cards */
  card:
    "rounded-3xl border border-white/10 bg-[#0B2545]/40 p-7 transition hover:border-white/25 hover:bg-[#0B2545]/55",
  cardSoft:
    "rounded-3xl border border-white/10 bg-[#081A31] p-7 transition hover:border-white/25",
  linkCard:
    "group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-white/30 hover:bg-white/[0.05]",

  /* Pills / list items */
  pill:
    "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs uppercase tracking-[0.18em] text-white/75",
  listItem:
    "flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white/80",

  /* Buttons */
  cta:
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#0FA36B] px-6 py-3.5 text-[14px] font-medium tracking-wide text-white shadow-[0_18px_50px_-18px_rgba(15,163,107,0.7)] transition hover:bg-[#0B7F54] focus:outline-none focus:ring-2 focus:ring-[#0FA36B]/60 focus:ring-offset-2 focus:ring-offset-[#050E1F]",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3.5 text-[14px] font-medium tracking-wide text-white transition hover:border-white/45 hover:bg-white/[0.05]",
  ctaLight:
    "inline-flex items-center justify-center gap-2 rounded-full bg-[#F4EFE6] px-6 py-3.5 text-[14px] font-medium tracking-wide text-[#0B2545] shadow-[0_18px_50px_-18px_rgba(244,239,230,0.55)] transition hover:bg-white",

  /* Notice strip */
  notice:
    "mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-900/20 p-5",
  noticeText: "text-sm font-medium text-emerald-100/95",

  /* New helpers */
  hairline: "h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent",
  numeral:
    "font-display tabular text-5xl sm:text-6xl text-[#C9A227]/30 leading-none",
  divider: "inline-block h-px w-8 bg-[#C9A227]/60 align-middle",
};
