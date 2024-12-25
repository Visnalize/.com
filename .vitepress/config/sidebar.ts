import { DefaultTheme } from "vitepress";
import { getBlogFiles } from "../../.content/misc.data";
import { apps } from "../../.content/simulated-apps.data";

const sidebar: DefaultTheme.Sidebar = {
  "/win7simu/": [
    {
      text: "Win7 Simu",
      link: "/win7simu/about",
      items: [
        { text: "Changelog", link: "/win7simu/changelog" },
        { text: "FAQs", link: "/win7simu/faq" },
        { text: "Privacy Policy", link: "/win7simu/privacy" },
      ],
    },
    {
      items: [
        { text: "Keyboard shortcuts", link: "/win7simu/keyboard-shortcuts" },
        {
          text: "Simulated apps",
          link: "/win7simu/simulated",
          collapsed: true,
          items: apps.map((app) => ({
            text: app.title,
            link: `/win7simu/simulated/${app.slug}`,
          })),
        },
      ],
    },
    {
      text: "Theme Studio",
      collapsed: false,
      items: [
        { text: "Introduction", link: "/win7simu/themestudio" },
        { text: "Getting started", link: "/win7simu/themestudio/quick-guide" },
        {
          text: "In-depth guide",
          link: "/win7simu/themestudio/in-depth-guide",
        },
        { text: "Changelog", link: "/win7simu/themestudio/changelog" },
      ],
    },
  ],
  "/brick1100/": [
    {
      text: "Brick 1100",
      link: "/brick1100/about",
      items: [
        { text: "Changelog", link: "/brick1100/changelog" },
        { text: "Privacy Policy", link: "/brick1100/privacy" },
        {
          text: "Feature requests",
          link: "https://feedback.userreport.com/f5469bcf-5bce-464f-a88e-6f177c8fa8b7/#ideas/popular",
        },
      ],
    },
    {
      items: [
        { text: "Games", link: "/brick1100/games" },
        { text: "Deep Links", link: "/brick1100/deep-links" },
        { text: "Builders", link: "/brick1100/builders" },
      ],
    },
  ],
  "/blog/": getBlogFiles()
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((file) => ({ text: file.title, link: file.url })),
  "/resources/": [
    {
      text: "Resources",
      items: [
        { text: "Open-source tools", link: "/resources/tools" },
        { text: "Web desktops", link: "/resources/web-desktops" },
      ],
    },
  ],
};

export default sidebar;
