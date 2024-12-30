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
  ThemeStudio,
  ThemeStudioIntro: ThemeStudio,
} satisfies Record<string, Link>;

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
    link: "https://feedback.userreport.com/f5469bcf-5bce-464f-a88e-6f177c8fa8b7/#ideas/popular",
  },
  Games: {
    text: "Games",
    link: "/brick1100/games",
  },
  DeepLinks: {
    text: "Deep Links",
    link: "/brick1100/deep-links",
  },
  Builders: {
    text: "Builders",
    link: "/brick1100/builders",
  },
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
export const AboutVisnalize: Link = {
  ...About,
  text: "About Visnalize",
};
export const Testimonials: Link = {
  text: "Wall of love",
  link: "/testimonials",
};
