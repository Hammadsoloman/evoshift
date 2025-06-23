// next-sitemap.config.js

module.exports = {
  siteUrl: "https://www.evoshift.net",

  generateRobotsTxt: true,

  sitemapSize: 5000,

  generateRobotsTxt: true,

  exclude: [
    "/sitemap-posts.xml",
    "/sitemap-services.xml",
    "/sitemap-portfolio.xml",
  ], // <= exclude here

  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.evoshift.net/sitemap-posts.xml", // <==== Add here
      "https://www.evoshift.net/sitemap-services.xml",
      "https://www.evoshift.net/sitemap-portfolio.xml",
    ],
  },

  transform: async (config, path) => {
    return {
      loc: path,

      lastmod: new Date().toISOString(),

      changefreq: "weekly",

      priority: 0.7,
    };
  },
};
