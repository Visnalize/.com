const links = require("./links");

const navbar = [
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
            text: "Simulated apps",
            link: "/win7simu/simulated/",
          },
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
          {
            text: "Builders",
            link: "/brick1100/builders",
          }
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
];

module.exports = navbar;
