# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- Implemented query parameter-based lane selection for request-walkthrough form
- Added `?type=commercial` and `?type=residential` query parameters to pre-select form mode
- Updated all CTA links across commercial and residential pages to include appropriate type parameter
- Applied uniform styling to request-walkthrough page using commercial design system
- Added commercial/residential segmented toggle on request-walkthrough page (same design as homepage)
- Form now dynamically shows fields based on selected lane type
- Commercial: business name, facility type, sqft, pain points
- Residential: full name
- Generated robots.txt and sitemap assets via next-sitemap

- Added residential UI styling system in `components/residential/ui.ts`
- Updated `prestige-home-care` page with estimate-first approach
- Added comprehensive residential cleaning hub at `/residential-cleaning`
- Added recurring cleaning page at `/residential-cleaning/recurring`
- Added deep cleaning page at `/residential-cleaning/deep-cleaning`
- Added move-in/out service page at `/residential-cleaning/move-in-out`
- Added carpet & upholstery care page at `/residential-cleaning/carpet-upholstery`
- Updated Header navigation to include residential dropdown menu
- Updated Footer navigation to include residential services

### Changed

- Converted residential pages from pricing-first to estimate-first approach
- Aligned residential styling with commercial design system
- Replaced modal-based booking with request-walkthrough flow
- Updated homepage residential lane to route to new hub
- Refreshed README/RESUME to reflect current residential pages and dev instructions
- Updated footer quick links to include the residential hub and Prestige Home Care

### Fixed

- Fixed footer navigation links to match current application structure
- Updated footer Quick Links to use proper Next.js Link components
- Removed outdated anchor links (#services, #process, etc.) that don't exist

### Added

- Added Commercial Cleaning hub page at `/commercial-cleaning`.
- Added commercial niche sub-pages:
  - Restaurants
  - Offices
  - Community Facilities
- Added walk-through request email delivery via Resend.
- Added honeypot spam protection for walk-through form.
- Added homepage dual-lane hero toggle (Commercial / Residential) with lead form.
- Added mobile navigation with collapsible menu (Commercial sub-links included).
- Added “Call Us” button in header (desktop + mobile) using tel: link.
- Added contextual cross-links between commercial service pages to improve internal navigation and conversion flow.

### Changed

- Redesigned homepage hero into a full-screen, background-swapping layout for Commercial/Residential.
- Upgraded the Commercial/Residential toggle to a larger, premium segmented control with gold glow styling.
- Improved hero background rendering across breakpoints (mobile/tablet/desktop) using responsive scaling + object positioning.
- Homepage hero uses a frosted-glass lead card, maintaining “lead generator only” (no pricing tables).
- Improved header dropdown usability and accessibility (click + hover support on desktop).
- Aligned the Restaurants commercial page to the same sales-page layout system as Offices and Community Facilities (scope, checklist preview, how-it-works, FAQ, and conversion-focused final CTA).
- Cleaned up README content (removed placeholder sections; documented current routes, lead flow, and local dev commands).

---

## Previous

- Homepage repositioned for commercial cleaning.
- Walk-through RFQ form implemented.
- Security patches applied (Next.js / React).

