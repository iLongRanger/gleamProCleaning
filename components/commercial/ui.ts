// Shared editorial design tokens for service, location, and insight pages.

export const brand = {
  ink: "#0B192C",
  navy: "#0B192C",
  midnight: "#071321",
  emerald: "#055F4B",
  emeraldDeep: "#044B3C",
  teal: "#014A5E",
  gold: "#B59961",
  bone: "#F5F1E8",
};

export const commercial = {
  shell: "gpc-interior min-h-screen bg-[#F5F1E8] text-[#0B192C] antialiased",
  page:
    "relative z-10 mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-20 lg:py-24",
  glow: "gpc-interior-glow absolute inset-0 pointer-events-none z-0 overflow-hidden",

  eyebrow:
    "gpc-interior-eyebrow text-[10px] font-semibold uppercase tracking-[0.24em] text-[#055F4B]",
  h1:
    "gpc-interior-heading font-display mt-5 max-w-5xl text-[44px] font-medium leading-[1.02] text-[#0B192C] sm:text-6xl md:text-7xl lg:text-[82px]",
  lead: "mt-6 max-w-2xl text-[16px] leading-[1.75] text-[#4B5968] sm:text-[17px]",
  h2: "gpc-interior-heading font-display text-2xl leading-tight text-[#0B192C] sm:text-3xl",
  h2Large:
    "gpc-interior-heading font-display text-3xl leading-[1.08] text-[#0B192C] sm:text-4xl md:text-5xl",
  h3: "gpc-interior-heading font-display text-xl leading-tight text-[#0B192C] sm:text-2xl",
  accent: "gpc-interior-accent text-[#055F4B]",
  italic: "italic text-[#4B5968]",
  muted: "text-[#4B5968]",
  body: "mt-3 leading-relaxed text-[#4B5968]",

  section:
    "gpc-interior-surface mt-12 rounded-[10px] border border-[#D8CEB9] bg-[#FFFDF8] p-6 shadow-[0_18px_60px_rgba(11,25,44,0.06)] sm:mt-16 sm:p-10",
  sectionAlt:
    "gpc-interior-surface mt-12 rounded-[10px] border border-[#D8CEB9] bg-[#E7EFEC] p-6 sm:mt-16 sm:p-10",
  sectionDark:
    "gpc-interior-surface gpc-interior-teal mt-12 rounded-[10px] border border-[#B59961]/60 bg-[#014A5E] p-6 text-white shadow-[0_18px_60px_rgba(11,25,44,0.12)] sm:mt-16 sm:p-10",

  card:
    "gpc-interior-card rounded-[8px] border border-[#D8CEB9] bg-[#FFFDF8] p-6 transition duration-200 hover:-translate-y-0.5 hover:border-[#B59961] hover:shadow-[0_16px_38px_rgba(11,25,44,0.08)] sm:p-7",
  cardSoft:
    "gpc-interior-card rounded-[8px] border border-[#D8CEB9] bg-white p-6 transition duration-200 hover:border-[#B59961] hover:shadow-[0_16px_38px_rgba(11,25,44,0.08)] sm:p-7",
  linkCard:
    "gpc-interior-card group rounded-[8px] border border-[#D8CEB9] bg-[#FFFDF8] p-6 transition duration-200 hover:-translate-y-0.5 hover:border-[#B59961] hover:shadow-[0_16px_38px_rgba(11,25,44,0.08)]",

  pill:
    "gpc-interior-pill inline-flex min-h-8 items-center gap-2 rounded-full border border-[#D8C7A7] bg-[#F2EBDD] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#055F4B]",
  listItem:
    "gpc-interior-list flex items-start gap-3 rounded-[6px] border border-[#D8CEB9] bg-[#FFFDF8] px-4 py-3 text-sm text-[#334354]",

  cta:
    "gpc-interior-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-[#055F4B] px-6 py-3.5 text-[13px] font-semibold tracking-wide text-white shadow-[0_14px_35px_rgba(5,95,75,0.2)] transition hover:bg-[#044B3C] focus:outline-none focus:ring-2 focus:ring-[#014A5E] focus:ring-offset-3 focus:ring-offset-[#F5F1E8]",
  secondary:
    "gpc-interior-secondary inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-[#B59961] bg-transparent px-6 py-3.5 text-[13px] font-semibold tracking-wide text-[#014A5E] transition hover:bg-[#F2EBDD]",
  ctaLight:
    "gpc-interior-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-[#055F4B] px-6 py-3.5 text-[13px] font-semibold tracking-wide text-white shadow-[0_14px_35px_rgba(5,95,75,0.2)] transition hover:bg-[#044B3C]",

  notice:
    "gpc-interior-notice mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[8px] border border-[#D8C7A7] bg-[#F2EBDD] p-5",
  noticeText: "text-sm font-medium text-[#055F4B]",
  hairline: "h-px w-full bg-gradient-to-r from-transparent via-[#B59961] to-transparent",
  numeral: "font-display tabular text-5xl leading-none text-[#B59961]/70 sm:text-6xl",
  divider: "inline-block h-px w-8 bg-[#B59961] align-middle",
};
