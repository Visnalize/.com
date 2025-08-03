interface Link {
  text: string;
  link: string;
}

const ThemeStudio: Link = {
  text: "Theme Studio",
  link: "/win7simu/themestudio",
};
const Win7SimuAbout: Link = {
  text: "Win7 Simu",
  link: "/win7simu/about",
};
const Brick1100About: Link = {
  text: "Brick 1100",
  link: "/brick1100/about",
};

export const Win7Simu = {
  Index: Win7SimuAbout,
  About: {
    ...Win7SimuAbout,
    text: "About",
  },
  Changelog: {
    text: "Changelog",
    link: "/win7simu/changelog",
  },
  Faq: {
    text: "FAQs",
    link: "/win7simu/faq",
  },
  Credits: {
    text: "Credits",
    link: "/win7simu/credits",
  },
  Privacy: {
    text: "Privacy Policy",
    link: "/win7simu/privacy",
  },
  Shortcuts: {
    text: "Keyboard shortcuts",
    link: "/win7simu/keyboard-shortcuts",
  },
  Simulated: {
    text: "Simulated apps",
    link: "/win7simu/simulated",
  },
  Themes: {
    text: "Themes",
    link: "/win7simu/themes",
  },
  ThemeStudio,
  ThemeStudioIntro: { ...ThemeStudio, text: "Introduction" },
} satisfies Record<string, Link>;

const Builders: Link = {
  text: "Builders",
  link: "/brick1100/builders",
};

export const Brick1100 = {
  Index: Brick1100About,
  About: {
    ...Brick1100About,
    text: "About",
  },
  Changelog: {
    text: "Changelog",
    link: "/brick1100/changelog",
  },
  Privacy: {
    text: "Privacy Policy",
    link: "/brick1100/privacy",
  },
  FeatureRequests: {
    text: "Feature requests",
    link: "https://visnalize.com/brick1100/feedback",
  },
  Apps: {
    text: "Apps",
    link: "/brick1100/apps",
  },
  Games: {
    text: "Games",
    link: "/brick1100/games",
  },
  DeepLinks: {
    text: "Deep Links",
    link: "/brick1100/deep-links",
  },
  Builders,
  BuildersIntro: { ...Builders, text: "Introduction" },
} satisfies Record<string, Link>;

export const Resources = {
  Index: {
    text: "Resources",
    link: "/resources",
  },
  Tools: {
    text: "Open-source tools",
    link: "/resources/tools",
  },
  WebDesktops: {
    text: "Web desktops",
    link: "/resources/web-desktops",
  },
} satisfies Record<string, Link>;

export const Blog: Link = {
  text: "Blog",
  link: "/blog",
};
export const About: Link = {
  text: "About",
  link: "/about",
};
export const Services: Link = {
  text: "Services",
  link: "/services",
};
export const Metrics: Link = {
  text: "Open metrics",
  link: "/metrics",
};
export const AboutVisnalize: Link = {
  ...About,
  text: "About Visnalize",
};
export const Testimonials: Link = {
  text: "Wall of love",
  link: "/testimonials",
};
