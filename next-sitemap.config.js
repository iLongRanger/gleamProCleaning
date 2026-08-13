/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://gleampro.ca",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  transform: async (config, path) => {
    // High-priority money pages
    if (path === "/") {
      return { loc: path, changefreq: "weekly", priority: 1.0, lastmod: new Date().toISOString() };
    }
    if (path === "/commercial-cleaning" || path === "/residential-cleaning") {
      return { loc: path, changefreq: "weekly", priority: 0.95, lastmod: new Date().toISOString() };
    }
    if (path.startsWith("/service-areas/") && path.split("/").length === 3) {
      // City pages
      return { loc: path, changefreq: "monthly", priority: 0.9, lastmod: new Date().toISOString() };
    }
    if (path.startsWith("/service-areas/") && path.split("/").length === 4) {
      // City × service combos
      return { loc: path, changefreq: "monthly", priority: 0.85, lastmod: new Date().toISOString() };
    }
    if (path.startsWith("/commercial-cleaning/") || path.startsWith("/residential-cleaning/")) {
      return { loc: path, changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString() };
    }
    if (path === "/insights") {
      return { loc: path, changefreq: "monthly", priority: 0.75, lastmod: new Date().toISOString() };
    }
    if (path.startsWith("/insights/")) {
      return { loc: path, changefreq: "monthly", priority: 0.7, lastmod: new Date().toISOString() };
    }
    if (path === "/privacy" || path === "/terms") {
      return { loc: path, changefreq: "yearly", priority: 0.2, lastmod: new Date().toISOString() };
    }
    return { loc: path, changefreq: config.changefreq, priority: config.priority, lastmod: new Date().toISOString() };
  },
};
