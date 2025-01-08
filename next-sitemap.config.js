/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://festivalsenicetakgrafis.id", // Replace with your website URL
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  changefreq: "daily", // Frequency of changes
  priority: 0.7, // Priority of pages
  sitemapSize: 5000, // Limit of URLs per sitemap file
  generateIndexSitemap: true, // Whether to generate a sitemap index file
  exclude: ["/admin/*", "/drafts/*"], // Exclude specific paths
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "BadBot", disallow: "/" },
    ],
  },
};
