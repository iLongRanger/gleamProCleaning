# Gleam Pro Cleaning — Commercial Cleaning Website

This repository contains the Next.js website for **Gleam Pro Cleaning**, a commercial-first cleaning business serving **Metro Vancouver**.

The site is designed as a B2B lead generator with a single primary call-to-action:
**Request a Free Walk-Through**.

---

## Focus

- Commercial cleaning (B2B)
- Primary niche: Restaurants & pubs
- Secondary niches: Offices, community facilities
- Residential cleaning supported as a secondary, estimate-first lane

---

## Key Features

- **Commercial cleaning hub** at `/commercial-cleaning`
- Commercial niche pages:
  - `/commercial-cleaning/restaurants`
  - `/commercial-cleaning/offices`
  - `/commercial-cleaning/community-facilities`
- **Residential cleaning hub** at `/residential-cleaning`
- Residential service pages:
  - `/residential-cleaning/recurring`
  - `/residential-cleaning/deep-cleaning`
  - `/residential-cleaning/move-in-out`
  - `/residential-cleaning/carpet-upholstery`
- Residential overview page at `/prestige-home-care`
- Shared commercial page styling via `components/commercial/ui.ts` (consistent layout + tokens)
- Residential styling system via `components/residential/ui.ts`
- Primary conversion flow:
  - CTA routes to `/request-walkthrough` (supports `?type=commercial` or `?type=residential`)
  - Form submits to `POST /api/walkthrough`
- **Lead delivery via Resend**
  - Production email delivery requires a verified sending domain in Resend

---

## Lead Delivery (How it works)

1. The walk-through form submits to:
   - `POST /api/walkthrough`
2. The API sends the submission via **Resend**
3. Spam reduction:
   - Honeypot field is used to block obvious bot submissions

Notes:

- You must configure required environment variables for email delivery.
- See `RESUME.md` for the current system behavior and status.

---

## Local Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Open:

`http://localhost:3000`

Build:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

Project Structure (high-level)

- app/
  - commercial-cleaning/ (hub + niche pages)
  - residential-cleaning/ (hub + service pages)
  - request-walkthrough/ (lead form page)
  - prestige-home-care/ (residential overview)
  - api/walkthrough/ (lead submission endpoint)
- components/
  - commercial/ui.ts (shared tokens / classes used across commercial pages)
  - residential/ui.ts

Notes for Contributors

Use small, scoped conventional commits (e.g., feat:, fix:, docs:)

Update CHANGELOG.md every commit

RESUME.md is the source of truth for current progress + next steps

Next Steps

See RESUME.md.
