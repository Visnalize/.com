import { DefaultTheme } from "vitepress";
import {
  AboutVisnalize,
  Brick1100,
  Metrics,
  Resources,
  Services,
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
      Win7Simu.Credits,
      Win7Simu.Privacy,
      Win7Simu.Alternatives,
      {
        text: "Guides",
        items: [
          Win7Simu.Shortcuts,
          Win7Simu.Simulated,
          Win7Simu.Themes,
          Win7Simu.ThemeStudio,
        ],
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
      Brick1100.Alternatives,
      {
        text: "Guides",
        items: [Brick1100.Games, Brick1100.Apps, Brick1100.Builders],
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
      Services,
      Metrics,
      Testimonials,
      { text: "Notes", link: "/notes" },
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
