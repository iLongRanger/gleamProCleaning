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
- Residential is de-emphasized
- Primary CTA everywhere: **Request a Free Walk-Through**
- Restaurant cleaning page expanded into a full sales page with scope overview, checklist preview, and inspection readiness messaging.
- Office cleaning page expanded into a full sales page (scope, checklist preview, FAQs, CTA).
- Community facilities cleaning page expanded into a full sales page with scope, checklist preview, and conversion-focused CTA.

### Lead system (LIVE)

- Walk-through RFQ form exists at `/request-walkthrough`
- Form captures:
  - Business name
  - Facility type
  - Address
  - Frequency
  - Phone number
  - Email
- Honeypot spam protection implemented
- Submissions POST to `/api/walkthrough`
- Leads are emailed via **Resend**
  - TO: rortiz@gleamlift.ca
  - CC: rortiz.dev@gmail.com, velezchristinemarier@gmail.com
- Domain `gleampro.ca` verified in Resend
- Production email delivery confirmed working
- Vercel deployment is green

### Commercial structure

- Commercial Cleaning hub page added at:
  - `/commercial-cleaning`
- Sub-pages added:
  - `/commercial-cleaning/restaurants`
  - `/commercial-cleaning/offices`
  - `/commercial-cleaning/community-facilities`

### Navigation

- Header navigation updated:
  - “Commercial Cleaning” dropdown
    - Restaurants
    - Offices
    - Community Facilities
- Dropdown hover behavior stabilized (no flicker)

---

## What Is NOT Done Yet

---

## Next Planned Commit

chore(website): align commercial sub-pages styling + add cross-links

This will have:

consistency + internal linking for SEO + conversion.

Add cross-links section to /commercial-cleaning hub

Unify button styles + headings across all commercial pages

Add ‘Industries we serve’ block to homepage + link to commercial hub

---

End of file.
