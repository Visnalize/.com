import { DefaultTheme } from "vitepress";
import { getBlogFiles } from "../../.content/misc.data";
import { apps } from "../../.content/simulated-apps.data";
import { themes } from "../../.content/themes.data";
import { Brick1100, Resources, Win7Simu } from "./sitelinks";

const sidebar: DefaultTheme.Config["sidebar"] = {
  "/win7simu/": [
    {
      ...Win7Simu.Index,
      items: [
        Win7Simu.Changelog,
        Win7Simu.Faq,
        Win7Simu.Credits,
        Win7Simu.Privacy,
        Win7Simu.Alternatives,
      ],
    },
    {
      items: [
        Win7Simu.Shortcuts,
        {
          ...Win7Simu.Simulated,
          collapsed: true,
          items: apps.map((app) => ({
            text: app.title,
            link: `/win7simu/simulated/${app.slug}`,
          })),
        },
        {
          ...Win7Simu.Themes,
          collapsed: true,
          items: themes.map((theme) => ({
            text: theme.title,
            link: `/win7simu/themes/${theme.slug}`,
          })),
        },
      ],
    },
    {
      text: "Theme Studio",
      collapsed: false,
      items: [
        Win7Simu.ThemeStudioIntro,
        { text: "Getting started", link: "/win7simu/themestudio/quick-guide" },
        {
          text: "In-depth guide",
          link: "/win7simu/themestudio/in-depth-guide",
        },
        { text: "Selectors", link: "/win7simu/themestudio/selectors" },
        { text: "Changelog", link: "/win7simu/themestudio/changelog" },
      ],
    },
  ],
  "/brick1100/": [
    {
      ...Brick1100.Index,
      items: [
        Brick1100.Changelog,
        Brick1100.Privacy,
        Brick1100.FeatureRequests,
        Brick1100.Alternatives,
      ],
    },
    {
      items: [
        Brick1100.Games,
        Brick1100.Apps,
        Brick1100.DeepLinks,
        {
          text: "Key mapping",
          link: "/brick1100/key-mapping",
        },
      ],
    },
    {
      text: "Builders",
      collapsed: false,
      items: [
        Brick1100.BuildersIntro,
        {
          text: "Building an app",
          link: "/brick1100/builders/building-app",
        },
        {
          text: "Building a game",
          link: "/brick1100/builders/building-game",
        },
        {
          text: "Using the Previewer",
          link: "/brick1100/builders/using-previewer",
        },
        {
          text: "Best practices",
          link: "/brick1100/builders/best-practices",
        },
      ],
    },
  ],
  "/blog/": getBlogFiles()
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((file) => ({ text: file.title, link: file.url })),
  "/resources": [
    {
      ...Resources.Index,
      items: [
        Resources.Tools,
        Resources.WebDesktops,
        {
          text: "Free stock image sites",
          link: "/resources/stock-image-sites",
        },
        {
          text: "Free online image tools",
          link: "/resources/online-image-tools",
        },
        {
          text: "Free screenshot and mockup tools",
          link: "/resources/screenshot-mockup-tools",
        },
      ],
    },
  ],
};

export default sidebar;
