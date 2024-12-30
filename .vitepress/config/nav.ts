import { DefaultTheme } from "vitepress";
import {
  AboutVisnalize,
  Brick1100,
  Resources,
  Testimonials,
  Win7Simu,
} from "./sitelinks";

const navItems: DefaultTheme.Config["nav"] = [
  {
    text: "Win7 Simu",
    activeMatch: "^/win7simu/",
    items: [
      Win7Simu.About,
      Win7Simu.Changelog,
      Win7Simu.Faq,
      Win7Simu.Privacy,
      {
        text: "Guides",
        items: [Win7Simu.Shortcuts, Win7Simu.Simulated, Win7Simu.ThemeStudio],
      },
    ],
  },
  {
    text: "Brick 1100",
    activeMatch: "^/brick1100/",
    items: [
      Brick1100.About,
      Brick1100.Changelog,
      Brick1100.Privacy,
      Brick1100.FeatureRequests,
      {
        text: "Guides",
        items: [Brick1100.Games, Brick1100.DeepLinks, Brick1100.Builders],
      },
    ],
  },
  {
    text: "Blog",
    link: "/blog",
    activeMatch: "^/blog",
  },
  {
    text: "More",
    items: [
      AboutVisnalize,
      Testimonials,
      {
        text: "Resources",
        items: [
          Resources.Tools,
          Resources.WebDesktops,
          {
            ...Resources.Index,
            text: "More...",
          },
        ],
      },
    ],
  },
];

export default navItems;
