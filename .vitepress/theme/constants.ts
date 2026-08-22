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

export const APP_NAMES: Record<App, string> = {
  win7simu: "Win7 Simu",
  brick1100: "Brick 1100",
};
