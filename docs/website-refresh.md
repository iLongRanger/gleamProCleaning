# Website refresh — September 6–7, 2026

Every public page now uses a cream-and-forest editorial design with the existing
Newsreader typeface, logo, and service photographs. The shared system covers the
homepage, commercial and residential services, service areas, insights, About,
quote, privacy, and terms pages. The site remains focused on commercial cleaning,
with a residential estimate option in the enquiry form and footer.

## Customer experience

- The primary action is a free cleaning quote, explained as a free 15-minute
  commercial walkthrough. Click-to-call remains available in the header and
  conversion sections.
- Commercial enquiries require business name, facility type, email, and phone.
  Residential enquiries require name, email, and phone. Address, approximate size,
  frequency, and notes are optional. Existing `type` and `facility` links work.
- The homepage and enquiry page share `components/LeadForm.tsx`. Validation uses
  the existing backend contract and endpoint. Errors keep customer details in
  place, success explains the next step, and repeated submissions are guarded
  while a request is pending.
- GA4 receives `form_start` and `generate_lead` with the form source and service
  type. A lead event is recorded only after the endpoint confirms success.
  Customer contact information is not added to those analytics events.
- Lisa opens and loads its chat code when a visitor chooses it. Its answer logic
  and existing lead integration are preserved. The external analytics script loads after the
  initial page load; the existing inline event queue remains available.
- Responsive images use AVIF where supported and WebP as a fallback. The main
  photograph receives high loading priority, and an unused font was removed
  from the initial load.
- Analytics failures cannot interrupt an enquiry or hide a successful submission.
  Server validation errors open optional fields and move keyboard focus to the
  field that needs attention.
- The homepage renders on the server. Native FAQs work without JavaScript, and
  the form provides phone/email alternatives when JavaScript is disabled.
- Service and location pages now use the same spacing, typography, cards,
  buttons, and responsive behavior as the homepage. The About page retains its
  photo-led opening while its content sections use the shared light palette.

## Search improvements

- Fixed `/service-areas` inheriting the homepage canonical. All sitemap pages
  have their own canonical URL and a single main landmark and H1.
- Removed duplicated brand names caused by page titles and the root title
  template. Updated homepage and enquiry descriptions.
- Preserved existing public URLs and permanent redirects so the redesign does
  not create a site migration.
- Replaced the unsupported `CleaningService` type with `LocalBusiness` and a
  service catalogue. City pages now describe a `Service` with a shared business
  provider, instead of implying a business location at each city's coordinates.
- Removed generic city testimonials and case examples that could not be tied to
  published customer evidence. City pages now provide factual quote-planning
  guidance for commercial facilities and homes.
- Added a 1200×630 sharing image at `/opengraph-image`, generated at build time,
  and appropriate favicon sizes.
- Kept `/sitemap.xml` and `/sitemap-0.xml`. The sitemap contains canonical public
  pages and excludes API, redirected nested service-area routes, and image
  endpoints. It omits modification dates until reliable content dates exist.
  Google specifies that `lastmod` must reflect significant content changes,
  rather than every build: [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
- Existing Search Console verification is unaffected. Optional
  `GOOGLE_SITE_VERIFICATION` supports HTML verification when needed; it does not
  replace an existing DNS verification. No Search Console account settings were
  changed by this work.

Structured-data reference:
[Google local business documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business).
Accurate markup helps describe the business; it does not guarantee enhanced
search results or ranking improvements.

## Validation and release

`npm run lint`, `npm test`, `npm run test:e2e`, and `npm run build` are the local
checks. Browser coverage includes form success/failure, service selection,
validation, mobile navigation, layouts from 320px to 1440px, accessibility, HTML
without JavaScript, canonical URLs, and JSON-LD.

The local production crawl checked all 33 sitemap pages for HTTP 200, canonical
URLs, descriptions, indexability, and a single H1/main. Browser requests to the
lead endpoint are simulated; production inbox delivery was not exercised.
An additional mobile browser scan checked every sitemap page for horizontal
overflow and serious or critical WCAG 2 A/AA and 2.1 A/AA findings; all 33 pages
passed after the whole-site visual update.
Local screenshots, crawl output, and Lighthouse results are under the ignored
`artifacts/website-refresh/` directory. Local lab measurements are not field
Core Web Vitals or a measurement of the deployed website.

Final local validation: production build, lint, and TypeScript passed; 97 existing
unit tests and 13 browser tests passed. The last mobile Lighthouse run scored:

| Category | Score |
| --- | ---: |
| Performance | 89 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |

That run measured FCP at 1.1 seconds, LCP at 3.6 seconds, total blocking time at
120 milliseconds, and zero layout shift. Mobile LCP remains an optimization
opportunity; these results do not establish passing field Core Web Vitals.
Analytics code was allowed to load, while analytics collection endpoints were
blocked to avoid test traffic reaching the production reports.

These changes are local and have not been deployed. After release, inspect the
homepage and `/service-areas` in the existing Search Console property and check
that the sitemap is read successfully. Compare enquiry counts and relevant
query performance over time. Keep existing production email/analytics variables.

The dependency audit also reports advisories in the existing Next.js 16.1.1
baseline and email dependencies. This refresh does not upgrade the framework or
change email delivery. Review the saved dependency audit before a release and
schedule a tested dependency update.
