const links = require("./links");

module.exports = {
  title: "Visnalize",

  head: [
    ["link", { rel: "icon", href: "/assets/favicon.png" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    [
      "script",
      {
        async: true,
        "data-ad-client": "ca-pub-5904323684803247",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-TRC2SF4L67",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-TRC2SF4L67');",
    ],
  ],

  themeConfig: {
    logo: "/assets/favicon.png",
    nav: [
      {
        text: "💻 Win7 Simu",
        items: [
          { text: "About", link: "/win7simu/about" },
          { text: "Changelog", link: "/win7simu/changelog" },
          { text: "FAQs", link: "/win7simu/faq" },
          { text: "Privacy Policy", link: "/win7simu/privacy" },
          {
            text: "Guides",
            items: [
              {
                text: "Theme Studio",
                link: "/win7simu/themestudio/",
              },
            ],
          },
        ],
      },
      {
        text: "📵 Brick 1100",
        items: [
          { text: "About", link: "/brick1100/about" },
          { text: "Changelog", link: "/brick1100/changelog" },
          { text: "Privacy Policy", link: "/brick1100/privacy" },
          {
            text: "Guides",
            items: [
              {
                text: "Games",
                link: "/brick1100/games",
              },
              {
                text: "Deep Links",
                link: "/brick1100/deep-links",
              },
            ],
          },
        ],
      },
      { text: "📝 Blog", link: "/blog/" },
      { text: "🙋‍♂️ About", link: "/about" },
      {
        text: "🌏 Social",
        items: Object.values(links).map((link) => ({
          text: link.alt,
          link: link.href,
        })),
      },
    ],
    sidebar: {
      "/win7simu/themestudio/": [
        ["", "Introduction"],
        "quick-guide",
        "in-depth-guide",
        ["changelog", "Changelog"],
      ],
      "/brick1100/": "auto",
      "/blog/": false,
    },
    smoothScroll: true,
    lastUpdated: true,
  },

  plugins: [
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
  ],

  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-video"));
      md.use(require("markdown-it-task-lists"));
    },
  },

  globalUIComponents: ["GSiteSettings"],
};
