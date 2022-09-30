module.exports = {
  title: "Visnalize",

  head: [
    ["link", { rel: "icon", href: "/assets/favicon.png" }],
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
          { text: "FAQ", link: "/win7simu/faq" },
          { text: "Privacy Policy", link: "/win7simu/privacy" },
        ],
      },
      {
        text: "📵 Brick 1100",
        items: [{ text: "About", link: "/brick1100/about" }],
      },
      { text: "📝 Blogs", link: "/blog/" },
      { text: "🙋‍♂️ About", link: "/about" },
    ],
    sidebar: {
      "/win7simu/": "auto",
      "/brick1100/": "auto",
      "/blog/": [
        "",
        "windows-resources",
        "building-visnalize-com",
        "about-the-ads",
      ],
    },
    smoothScroll: true,
    lastUpdated: true,
  },

  plugins: [
    [
      "autometa",
      {
        canonical_base: "https://visnalize.com",
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
    ["@vuepress/medium-zoom", { options: { margin: 24 } }],
  ],

  globalUIComponents: ["ThemeToggle"],
};
