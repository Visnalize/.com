const { ORIGIN } = require("./const");

const plugins = [
  [
    "@vuepress/blog",
    {
      sitemap: {
        hostname: ORIGIN,
      },
      feed: {
        canonical_base: ORIGIN,
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
          : ORIGIN,
      author: { name: "Visnalize" },
    },
  ],
  [
    "canonical",
    {
      baseURL: ORIGIN,
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
