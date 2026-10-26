import { BrickPals, Brick1100, Win7Simu } from "@/.vitepress/config/sitelinks";
import { useData, useRoute } from "vitepress";
import { computed, ref } from "vue";
import { APP_NAMES } from "../constants";
import { App } from "../utils/types";

export interface AppPick {
  app: App;
  title: string;
  /** One line on what the app is, for a reader who has never seen it. */
  hook: string;
  link: string;
  cta: string;
}

const picks: AppPick[] = [
  {
    app: "win7simu",
    title: APP_NAMES.win7simu,
    hook: "Windows 7 in your browser or on your phone, with working apps, games and themes.",
    link: Win7Simu.Index.link,
    cta: "Try it free",
  },
  {
    app: "brick1100",
    title: APP_NAMES.brick1100,
    hook: "Turn your smartphone into a classic Nokia, with the keypad, the monochrome screen and Snake.",
    link: Brick1100.Index.link,
    cta: "Try it free",
  },
  {
    app: "brickpals",
    title: APP_NAMES.brickpals,
    hook: "A tiny 1-bit pal for your home screen. Feed it, play with it, and watch it grow.",
    link: BrickPals.Overview.link,
    cta: "See what's coming",
  },
];

interface Options {
  /** How many picks to return. */
  count?: number;
  /**
   * Offsets the rotation, so two slots on one page show different picks.
   * A string (such as a component id) is hashed into a stable number.
   */
  offset?: number | string;
  /** Prefer picks no other slot on the page has claimed. */
  avoidClaimed?: boolean;
}

/**
 * Picks already shown on the current page. Claims are made after mount, so this
 * never affects the server render and cannot leak between requests.
 */
const claimedPath = ref("");
const claimedApps = ref<App[]>([]);

export const claimPicks = (path: string, apps: App[]) => {
  if (claimedPath.value !== path) {
    claimedPath.value = path;
    claimedApps.value = [];
  }
  claimedApps.value = [...new Set([...claimedApps.value, ...apps])];
};

/** Recommending an app to a reader who is already reading about it is a wasted slot. */
const APP_PATHS: [RegExp, App][] = [
  [/^\/win7simu/, "win7simu"],
  [/^\/brick1100/, "brick1100"],
  [/^\/brickpals/, "brickpals"],
];

const APP_TAGS: Record<string, App> = {
  "win7-simu": "win7simu",
  "brick-1100": "brick1100",
};

/**
 * Derive the rotation from stable strings, so a given page and slot always show
 * the same app. Random rotation would differ between server and client.
 */
const hash = (value: string) => {
  let result = 0;
  for (let i = 0; i < value.length; i++) {
    result = (result * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(result);
};

const toOffset = (offset: Options["offset"]) =>
  typeof offset === "string" ? hash(offset) : (offset ?? 0);

const useAppPicks = (options: Options = {}) => {
  const route = useRoute();
  const { frontmatter } = useData();

  const pageApps = computed(() => {
    const apps = new Set<App>();
    APP_PATHS.forEach(([pattern, app]) => {
      if (pattern.test(route.path)) apps.add(app);
    });
    const tags: string[] = frontmatter.value.tags ?? [];
    tags.forEach((tag) => APP_TAGS[tag] && apps.add(APP_TAGS[tag]));
    return apps;
  });

  return computed<AppPick[]>(() => {
    const others = picks.filter((pick) => !pageApps.value.has(pick.app));

    const claimed =
      options.avoidClaimed && claimedPath.value === route.path
        ? claimedApps.value
        : [];
    const unclaimed = others.filter((pick) => !claimed.includes(pick.app));
    const ordered = [...new Set([...unclaimed, ...others])];
    if (ordered.length === 0) return [];

    // Rotate inside the unclaimed picks, so a repeat only shows once they run out.
    const span = unclaimed.length || ordered.length;
    const start = (hash(route.path) + toOffset(options.offset)) % span;
    const count = Math.min(options.count ?? 1, ordered.length);
    return Array.from(
      { length: count },
      (_, i) => ordered[(start + i) % ordered.length],
    );
  });
};

export default useAppPicks;
