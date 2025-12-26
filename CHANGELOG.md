# Changelog — Gleam Pro Cleaning Website

This changelog tracks notable changes to the website so development can be resumed from any chat/session by referencing:

- this file, and
- GitHub commit history (in order).

## [Unreleased]

### Added

- Added /api/walkthrough endpoint to deliver walk-through submissions via email using Resend.
- Added RFQ-style walk-through form submission with TO + CC email delivery.
- Added honeypot field to reduce spam submissions.
- Added .env.example to document lead delivery configuration.

### Changed

- Updated header primary CTA to “Request a Free Walk-Through”
- Repositioned homepage hero headline for commercial cleaning
- Adjusted homepage CTA language to prioritize walk-through over instant quote
- Aligned homepage form CTA with “Request a Free Walk-Through”
- Updated RESUME.md to reflect current form state and next planned submission delivery commit.
- Documented Resend domain verification requirement for sending to business inbox recipients.
- Updated RESUME.md to document Resend domain verification requirement for lead delivery.
- Enabled production lead delivery after Resend domain verification.
- Updated RESUME.md to reflect live email submission flow.

### Fixed

- Upgraded Next.js/React to address CVE-2025-66478 (React2Shell) and restore Vercel deployments.
- Upgraded Next.js and eslint-config-next to latest patched versions to resolve CVE-2025-66478 and unblock Vercel deployments.

## [2025-12-26] Baseline

- Established phased plan, commit conventions, and changelog workflow.
