// next-sitemap.config.js

module.exports = {
  siteUrl: "https://www.evoshift.net",

  generateRobotsTxt: true,

  sitemapSize: 5000,

  generateRobotsTxt: true,

  transform: async (config, path) => {
    return {
      loc: path,

      lastmod: new Date().toISOString(),

      changefreq: "weekly",

      priority: 0.7,
    };
  },
};
