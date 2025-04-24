import { App } from "./utils/types";

// provide keys
export const DISQUS = Symbol("disqus");

export const DOMAIN = "visnalize.com";
export const ORIGIN = `https://${DOMAIN}`;
export const ADSENSE_ID = "5904323684803247";

export const APP_NAMES: Record<App, string> = {
  win7simu: "Win7 Simu",
  brick1100: "Brick 1100",
};
