import { DefaultTheme } from "vitepress";

const navItems: DefaultTheme.NavItem[] = [
  {
    text: "Win7 Simu",
    items: [
      { text: "About", link: "/win7simu/about" },
      { text: "Changelog", link: "/win7simu/changelog" },
      { text: "FAQs", link: "/win7simu/faq" },
      { text: "Privacy Policy", link: "/win7simu/privacy" },
      {
        text: "Guides",
        items: [
          { text: "Keyboard shortcuts", link: "/win7simu/keyboard-shortcuts" },
          { text: "Simulated apps", link: "/win7simu/simulated" },
          { text: "Theme Studio", link: "/win7simu/themestudio" },
        ],
      },
    ],
  },
  {
    text: "Brick 1100",
    items: [
      { text: "About", link: "/brick1100/about" },
      { text: "Changelog", link: "/brick1100/changelog" },
      { text: "Privacy Policy", link: "/brick1100/privacy" },
      {
        text: "Feature requests",
        link: "https://feedback.userreport.com/f5469bcf-5bce-464f-a88e-6f177c8fa8b7/#ideas/popular",
      },
      {
        text: "Guides",
        items: [
          { text: "Games", link: "/brick1100/games" },
          { text: "Deep Links", link: "/brick1100/deep-links" },
          { text: "Builders", link: "/brick1100/builders" },
        ],
      },
    ],
  },
  { text: "Blog", link: "/blog" },
  {
    text: "More",
    items: [
      { text: "About Visnalize", link: "/about" },
      { text: "Wall of love", link: "/testimonials" },
      {
        text: "Resources",
        items: [
          { text: "Open-source tools", link: "/resources/tools" },
          { text: "Web desktops", link: "/resources/web-desktops" },
        ],
      },
    ],
  },
];

export default navItems;
