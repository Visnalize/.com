import { App } from "./utils/types";

// provide keys
export const DISQUS = Symbol("disqus");

export const DOMAIN = "visnalize.com";
export const ORIGIN = `https://${DOMAIN}`;
export const ADSENSE_ID = "5904323684803247";

/** Amazon Associates tracking tag, appended to every affiliate link. */
export const AMAZON_TAG = "visnalize-20";
export const AMAZON_HOST = "https://www.amazon.com";
/**
 * How long to wait for AdSense to report a fill status before treating the slot
 * as empty. A blocked script never sets the status at all, so only a timeout
 * can tell us apart from a slow-loading ad.
 */
export const AD_FILL_TIMEOUT = 2500;

/**
 * Audience figures quoted across the services pages. Every one is readable off
 * the live analytics dashboard, so the pages stay checkable against it. Update
 * this block when the dashboard moves and every page follows.
 */
export const AUDIENCE = {
  /** Unique visitors per month, across the whole site. */
  visitors: 100_000,
  /** Page views per month, across the whole site. */
  pageViews: 170_000,
  /** Page views per month the blog draws on its own, once a post is no longer
   * on the homepage. */
  blogPageViews: 9_000,
} as const;

const en = (value: number, notation: Intl.NumberFormatOptions["notation"]) =>
  new Intl.NumberFormat("en-US", { notation }).format(value);

/** The same figures as text, so pages quote them without restating the number. */
export const AUDIENCE_TEXT = {
  visitors: en(AUDIENCE.visitors, "standard"),
  pageViews: en(AUDIENCE.pageViews, "standard"),
  pageViewsShort: en(AUDIENCE.pageViews, "compact"),
  blogPageViews: en(AUDIENCE.blogPageViews, "standard"),
} as const;

/** Cost per 1000 page views at a given monthly ad price, rounded to a dollar. */
export const adCostPerMille = (monthlyPrice: number) =>
  Math.round(monthlyPrice / (AUDIENCE.pageViews / 1000));

export const APP_NAMES: Record<App, string> = {
  win7simu: "Win7 Simu",
  brick1100: "Brick 1100",
};

/**
 * Platforms a release can ship to, matching the groups used in the changelog.
 * The key is what a release page passes to `<ReleaseSection platform="..." />`.
 */
export const RELEASE_PLATFORMS = {
  core: { label: "Core", icon: "fluent:desktop-24-filled" },
  android: { label: "Android", icon: "fluent:phone-24-filled" },
  web: { label: "Web", icon: "fluent:globe-24-filled" },
} satisfies Record<string, { label: string; icon: string }>;

export type ReleasePlatform = keyof typeof RELEASE_PLATFORMS;
