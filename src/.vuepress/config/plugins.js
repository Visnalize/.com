const plugins = [
  [
    "@vuepress/blog",
    {
      sitemap: {
        hostname: "https://visnalize.com",
      },
      feed: {
        canonical_base: "https://visnalize.com",
      },
      frontmatters: [
        {
          id: "tag",
          keys: ["tag", "tags"],
          path: "/blog/tag/",
          layout: "BlogList",
          scopeLayout: "BlogList",
        },
      ],
    },
  ],
  [
    "autometa",
    {
      canonical_base:
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://visnalize.com",
      author: { name: "Visnalize" },
    },
  ],
  [
    "canonical",
    {
      baseURL: "https://visnalize.com",
    },
  ],
  [
    "social-share",
    {
      noGlobalSocialShare: true,
      isPlain: true,
      twitterUser: "visnalize",
      networks: ["twitter", "facebook", "reddit", "telegram"],
    },
  ],
  ["disqus", { shortname: "visnalize" }],
  ["text-to-speech"],
  ["first-created"],
];

module.exports = plugins;
