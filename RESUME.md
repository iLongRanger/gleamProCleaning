# Project Resume — Gleam Pro Cleaning Website

This file allows this project to be resumed at any time without prior chat context.

---

## Repository

- Repo: https://github.com/iLongRanger/gleamProCleaning
- Branch: `main`

---

## Project Objective

Transform the Gleam Pro website into a **commercial-first B2B lead system**
focused on **Request a Free Walk-Through** as the primary conversion action.

### Target Commercial Clients

- Restaurants & pubs
- Offices
- Community facilities / schools

---

## Development Rules (IMPORTANT)

- Use conventional commits (`feat:`, `chore:`, `docs:`, `fix:`)
- Track meaningful changes in `CHANGELOG.md`
- Keep commits small, incremental, and reversible
- Test locally before committing
- Do not skip documented steps
- Prefer clarity over cleverness

---

## Current State (SOURCE OF TRUTH)

- Homepage repositioned for **commercial cleaning**
- Primary CTA everywhere: **Request a Free Walk-Through**
- `/request-walkthrough` route exists and is live
- Header CTA routes correctly
- Walk-through request form implemented:
  - Captures business name, facility type, address
  - Captures **phone number and email**
  - Includes RFQ-style fields
  - Shows client-side confirmation state
- Form submits to `/api/walkthrough` and emails submissions via Resend
- **Resend requires verified domain to send to business inbox recipients**

---

## Incomplete / Pending Work

- Send walk-through submissions to email or backend
- Decide on submission method (API route vs external service)
- Commercial service hub page not created
- Restaurant / Office / Facility sub-pages not created
- Analytics / conversion tracking not implemented

---

## Next Required Commit (DO NOT SKIP)

feat(form): deliver walk-through submissions (email or API)

### This commit must:

- Send form data somewhere reliable
- Not break existing UX
- Update `CHANGELOG.md`
- Be testable locally

---

## How to Resume This Project in a New Chat

Paste the following prompt verbatim:

> I am continuing a website rebuild project.  
> Repo: https://github.com/iLongRanger/gleamProCleaning  
> Branch: main
>
> Please read `RESUME.md`, `CHANGELOG.md`, and the latest commits.
>
> Current state:
>
> - Commercial-first site
> - Primary CTA is “Request a Free Walk-Through”
> - `/request-walkthrough` exists with a working RFQ form
> - Form captures phone + email but does NOT send submissions yet
>
> Continue with the next required commit:  
> `feat(form): deliver walk-through submissions (email or API)`
>
> Constraints:
>
> - Small commits only
> - Update changelog
> - Give exact file paths, code, and git commands
> - Tell me what to test locally before committing

---

End of file.
