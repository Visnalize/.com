import {
  AmazonPick,
  PickTopic,
  data as picks,
} from "@/.content/amazon-picks.data";
import { useData, useRoute } from "vitepress";
import { computed, ref } from "vue";
import { App } from "../utils/types";

interface Options {
  /** Show these picks by id, in this order, ignoring the page context. */
  ids?: string[];
  /** Match these topics instead of the ones inferred from the page. */
  topics?: PickTopic[];
  /** How many picks to return. */
  count?: number;
  /**
   * Offsets the rotation, so two slots on one page show different picks.
   * A string (such as a component id) is hashed into a stable number.
   */
  offset?: number | string;
  /**
   * Prefer picks no other slot on the page has claimed. Ad-slot fallbacks set
   * this so they never repeat a pick an author placed in the content.
   */
  avoidClaimed?: boolean;
}

/**
 * Picks already shown on the current page. Claims are made after mount, so this
 * never affects the server render and cannot leak between requests.
 */
const claimedPath = ref("");
const claimedIds = ref<string[]>([]);

export const claimPicks = (path: string, ids: string[]) => {
  if (claimedPath.value !== path) {
    claimedPath.value = path;
    claimedIds.value = [];
  }
  claimedIds.value = [...new Set([...claimedIds.value, ...ids])];
};

/** Page path prefixes that imply a topic on their own. */
const PATH_TOPICS: [RegExp, PickTopic[]][] = [
  [/^\/brick1100/, ["retro-phone", "retro-gaming", "digital-detox",]],
  [/^\/win7simu/, ["retro-pc", "retro-gaming"]],
  [/^\/resources/, ["dev-gear"]],
  [/^\/notes/, ["indie-business"]],
];

const APP_PATHS: [RegExp, App][] = [
  [/^\/brick1100/, "brick1100"],
  [/^\/win7simu/, "win7simu"],
];

/** Blog frontmatter tags are broad, so they only ever add to the path topics. */
const TAG_TOPICS: Record<string, PickTopic[]> = {
  ai: ["ai", "dev-gear"],
  technical: ["dev-gear"],
  tips: ["indie-business", "dev-gear"],
  sharing: ["indie-business"],
  random: ["retro-gaming"],
  "guest-post": ["indie-business"],
  "win7-simu": ["retro-pc"],
  "brick-1100": ["retro-phone", "digital-detox"],
};

/**
 * Derive the rotation from stable strings, so a given page and slot always show
 * the same product. Random rotation would differ between server and client.
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

const useAmazonPicks = (options: Options = {}) => {
  const route = useRoute();
  const { frontmatter } = useData();

  const enabled = computed(() => frontmatter.value.amazon !== false);

  const pageTopics = computed(() => {
    const topics = new Set<PickTopic>();
    PATH_TOPICS.forEach(([pattern, pathTopics]) => {
      if (pattern.test(route.path)) pathTopics.forEach((t) => topics.add(t));
    });
    const tags: string[] = frontmatter.value.tags ?? [];
    tags.forEach((tag) => TAG_TOPICS[tag]?.forEach((t) => topics.add(t)));
    const extra: PickTopic[] = frontmatter.value.amazonTopics ?? [];
    extra.forEach((t) => topics.add(t));
    return topics;
  });

  const pageApp = computed(
    () => APP_PATHS.find(([pattern]) => pattern.test(route.path))?.[1],
  );

  /** Picks that fit the page, most relevant first. */
  const matched = computed<AmazonPick[]>(() => {
    const topics = options.topics ? new Set(options.topics) : pageTopics.value;
    return picks.filter(
      (pick) =>
        pick.topics.some((topic) => topics.has(topic)) ||
        (!options.topics &&
          !!pageApp.value &&
          pick.apps?.includes(pageApp.value)),
    );
  });

  const resolved = computed<AmazonPick[]>(() => {
    if (!enabled.value) return [];

    const { ids } = options;
    if (ids && ids.length > 0) {
      return ids
        .map((id) => picks.find((pick) => pick.id === id))
        .filter((pick): pick is AmazonPick => !!pick);
    }

    const claimed =
      options.avoidClaimed && claimedPath.value === route.path
        ? claimedIds.value
        : [];
    const unclaimed = (pick: AmazonPick) => !claimed.includes(pick.id);

    // Pages that match no topic fall back to the picks with the broadest appeal.
    const relevant =
      matched.value.length > 0
        ? matched.value
        : picks.filter((pick) => pick.featured);
    const others = picks.filter((pick) => !relevant.includes(pick));

    // Best to worst: on topic and unused, off topic and unused, then repeats.
    // A page only reaches the last two tiers when it has more slots than picks.
    const tiers = [
      relevant.filter(unclaimed),
      others.filter(unclaimed),
      relevant,
      others,
    ];
    const ordered = [...new Set(tiers.flat())];
    const span = tiers.find((tier) => tier.length > 0)?.length ?? 0;
    if (span === 0) return [];

    // Rotating inside the best tier keeps the first pick the most fitting one.
    const start = (hash(route.path) + toOffset(options.offset)) % span;
    const count = Math.min(options.count ?? 1, ordered.length);
    return Array.from(
      { length: count },
      (_, i) => ordered[(start + i) % ordered.length],
    );
  });

  return resolved;
};

export default useAmazonPicks;
