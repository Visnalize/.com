module.exports = {
  title: "Visnalize",

  description: "With love crafting, for perfection striving",

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
        text: "Win7 Simu",
        items: [
          { text: "About", link: "/win7simu/about" },
          { text: "Changelog", link: "/win7simu/changelog" },
          { text: "FAQ", link: "/win7simu/faq" },
          { text: "Privacy Policy", link: "/win7simu/privacy" },
        ],
      },
      {
        text: "Brick 1100",
        items: [{ text: "About", link: "/brick1100/about" }],
      },
      { text: "Blogs", link: "/blog/" },
      { text: "About", link: "/about" },
    ],
    sidebar: {
      "/win7simu/": "auto",
      "/brick1100/": "auto",
      "/blog/": ["", "windows-resources"],
    },
    smoothScroll: true,
  },

  plugins: [
    [
      "autometa",
      {
        canonical_base: "https://visnalize.com",
        author: { name: "Visnalize" },
      },
    ],
  ],
};
