/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://gleampro.ca",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // Omit lastmod until there is a reliable per-page content modification date.
  // A new build is not evidence that every page's content changed.
  autoLastmod: false,
  exclude: [
    "/api/*",
    "/service-areas/*/*",
    "/opengraph-image*",
    "/twitter-image*",
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
  },
  transform: async (_config, path) => ({ loc: path }),
};
