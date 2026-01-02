# Project Resume — Gleam Pro Cleaning Website

This file explains how to resume work on this project without prior context.

---

## Repository

- Repo: https://github.com/iLongRanger/gleamProCleaning
- Branch: `main`

---

## Project Goal

Rebuild the Gleam Pro website as a **commercial-first cleaning business**
with a clear B2B conversion flow focused on **Request a Free Walk-Through**.

Primary niche:

- Restaurants & pubs

Secondary niches:

- Offices
- Community facilities / schools

---

## Development Workflow (STRICT)

- Use conventional commits (`feat:`, `fix:`, `docs:`, `chore:`)
- Keep commits small and scoped
- Update `CHANGELOG.md` every commit
- Test locally before pushing
- This file is the **source of truth** when resuming work

---

## Current State (SOURCE OF TRUTH)

### Core positioning

- Website repositioned as **commercial cleaning**
- Residential is supported as a secondary lane (not a pricing-first offering)
- Primary conversion action: **Lead capture** (walk-through / estimate form)

### Homepage (dual-lane hero)

- Homepage is a **full-screen hero** that switches between:
  - **Commercial** lane (default on load)
  - **Residential** lane (second lane)
- Background image swaps per lane:
  - Commercial hero: `/images/home/commercial-hero.png`
  - Residential hero: `/images/home/residential-hero.png`
- Hero background is optimized per breakpoint using responsive `scale[...]` and `object-[x_y]` to avoid awkward cropping on tablet/mobile.
- Premium segmented toggle (Commercial/Residential) is larger and includes a gold glow treatment.
- Right side uses a frosted-glass lead form:
  - Commercial collects: business name + facility type + shared fields
  - Residential collects: shared fields only
- Both lanes submit to the same endpoint:
  - POST `/api/walkthrough`
  - Includes `leadType: "commercial" | "residential"`

### Commercial styling (standardized)

- Standardized commercial page styling via shared class system:
  - `components/commercial/ui.ts`
- Commercial hub cross-links section added (“Industries we serve”).
- Commercial hub + sub-pages aligned to the homepage prestige design (dark navy base with emerald/gold accents).

### Commercial pages (aligned sales-page layout)

All three commercial niche pages are aligned to the same conversion-focused structure:

- `/commercial-cleaning/restaurants`
- `/commercial-cleaning/offices`
- `/commercial-cleaning/community-facilities`

Shared structure includes:

- Hero + fit/proof card
- Problems / outcomes
- Scope (cards) + optional add-ons
- Checklist preview (per-visit + weekly/rotating)
- How it works (3-step)
- FAQ
- Final CTA

### Contextual cross-links (commercial internal navigation)

- Contextual cross-links were added between commercial pages to improve flow between niches:
  - Restaurants ↔ Offices
  - Offices ↔ Community Facilities
  - Community Facilities ↔ Restaurants
- Links are placed in conversion sections (final CTAs) to keep navigation relevant.

### Lead system (LIVE)

- Walk-through RFQ form exists at `/request-walkthrough`
- Honeypot spam protection implemented
- Submissions POST to `/api/walkthrough`
- Leads are emailed via **Resend**
- Production email delivery confirmed working
- Vercel deployment is green

### Documentation

- `README.md` has been cleaned up to remove placeholders and document:
  - routes, lead flow, and local dev commands
  - high-level structure and workflow expectations

---

## What Is NOT Done Yet

- Finish Residential pages (copy + structure + visuals)
- SEO infra (robots/sitemap) — intentionally deferred until commercial + residential structure is final

---

## Next Planned Commit

1. Verify commercial navigation entries are consistent (desktop + mobile) for:

- `/commercial-cleaning`
- `/commercial-cleaning/restaurants`
- `/commercial-cleaning/offices`
- `/commercial-cleaning/community-facilities`

Then proceed with a small fix commit only if links are missing or inconsistent.

---

End of file.
