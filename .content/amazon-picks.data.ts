import { defineLoader } from "vitepress";
import { AMAZON_HOST, AMAZON_TAG } from "../.vitepress/theme/constants";
import { App } from "../.vitepress/theme/utils/types";

/**
 * A topic a pick can be matched against. Page paths and blog tags are mapped to
 * these in `useAmazonPicks`, so a pick never has to know about routes.
 */
export type PickTopic =
  | "retro-phone"
  | "retro-pc"
  | "retro-gaming"
  | "digital-detox"
  | "dev-gear"
  | "indie-business"
  | "ai";

interface PickSource {
  /** Stable slug, used to reference a pick explicitly from markdown. */
  id: string;
  /** Short product or category name. */
  title: string;
  /** One line on why this reader in particular would want it. */
  hook: string;
  /** Iconify icon name, shown instead of a product photo. */
  icon: string;
  /** CTA label override. */
  cta?: string;
  /** Link to a single product page. */
  asin?: string;
  /** Link to a keyword search, for a category rather than one product. */
  search?: string;
  /** Any other absolute Amazon URL, such as a storefront or an idea list. */
  url?: string;
  /** Topics this pick fits. */
  topics: PickTopic[];
  /** Apps this pick fits, matched from the page path. */
  apps?: App[];
  /** Preferred on pages whose topics match nothing. */
  featured?: boolean;
}

export interface AmazonPick extends Omit<PickSource, "asin" | "search"> {
  /** The finished affiliate link. */
  link: string;
}

/**
 * Curated picks. Prices are deliberately absent: the Associates Operating
 * Agreement requires displayed prices to come from the Product Advertising API
 * and be refreshed within 24 hours, which a static catalogue cannot promise.
 *
 * Search links need no ASIN, so a pick can describe a whole category without
 * pinning one specific product that may go out of stock. Set `url` instead to
 * point at an Amazon storefront or idea list, if one ever exists.
 */
const picks: PickSource[] = [
  {
    id: "nokia-keypad-phone",
    title: "A real Nokia-style keypad phone",
    hook: "Brick 1100 simulates the keypad. This is the physical one, buttons, month-long battery and all.",
    icon: "fluent:phone-vibrate-24-regular",
    search: "nokia unlocked keypad phone",
    topics: ["retro-phone", "digital-detox"],
    apps: ["brick1100"],
  },
  {
    id: "dumbphone",
    title: "Minimalist dumbphone",
    hook: "For the days when simulating a simpler phone is not enough and the smartphone has to go in a drawer.",
    icon: "fluent:phone-lock-24-regular",
    search: "minimalist dumbphone unlocked no internet",
    topics: ["digital-detox", "retro-phone"],
    apps: ["brick1100"],
    featured: true,
  },
  {
    id: "retro-handheld",
    title: "Retro handheld console",
    hook: "Snake and Space Impact were only the beginning. These pocket handhelds carry thousands of classics.",
    icon: "fluent:xbox-controller-24-regular",
    search: "retro handheld game console emulator",
    topics: ["retro-gaming"],
    apps: ["brick1100", "win7simu"],
    featured: true,
  },
  {
    id: "game-stick",
    title: "Plug-and-play retro game stick",
    hook: "The console-on-a-stick, straight into the TV. No setup, no launcher, just the old games.",
    icon: "fluent:usb-stick-24-regular",
    search: "retro game stick 4k hdmi console",
    topics: ["retro-gaming"],
    featured: true,
  },
  {
    id: "retro-keyboard",
    title: "Retro-style mechanical keyboard",
    hook: "Beige keycaps, chunky profile, and the typing sound the Windows 7 era actually had.",
    icon: "fluent:keyboard-24-regular",
    search: "retro beige mechanical keyboard",
    topics: ["retro-pc", "dev-gear"],
    apps: ["win7simu"],
  },
  {
    id: "phone-desktop-dock",
    title: "Phone-to-desktop dock",
    hook: "Win7 Simu already turns a phone into a desktop. A hub adds the monitor, keyboard and mouse.",
    icon: "fluent:usb-plug-24-regular",
    search: "usb c hub hdmi phone desktop dock",
    topics: ["retro-pc", "dev-gear"],
    apps: ["win7simu"],
  },
  {
    id: "indie-books",
    title: "Books for indie builders",
    hook: "The side-hustle and bootstrapping reading that keeps coming up in these posts.",
    icon: "fluent:book-open-24-regular",
    search: "bootstrapping indie business side hustle book",
    topics: ["indie-business"],
  },
  {
    id: "ai-books",
    title: "Practical AI reading",
    hook: "Beyond the hype: books on actually putting AI to work in day-to-day building.",
    icon: "fluent:sparkle-24-regular",
    search: "practical artificial intelligence for developers book",
    topics: ["ai", "dev-gear"],
  },
  {
    id: "portable-monitor",
    title: "Portable monitor",
    hook: "The second screen that folds into a laptop bag, for building on the move.",
    icon: "fluent:desktop-24-regular",
    search: "portable monitor usb c 15 inch",
    topics: ["dev-gear", "retro-pc"],
    apps: ["win7simu"],
  },
  {
    id: "usb-microphone",
    title: "USB microphone",
    hook: "Demo videos and devlogs live or die on audio long before they do on video.",
    icon: "fluent:mic-24-regular",
    search: "usb condenser microphone streaming",
    topics: ["dev-gear", "indie-business"],
  },
  {
    id: "phone-stand",
    title: "Adjustable phone stand",
    hook: "Useful when the phone spends its evenings pretending to be a desktop.",
    icon: "fluent:phone-desktop-24-regular",
    search: "adjustable aluminum phone stand desk",
    topics: ["dev-gear", "retro-pc"],
    apps: ["win7simu"],
  },
  {
    id: "retro-tech-book",
    title: "Retro computing books",
    hook: "The hardware and software of the 90s and 2000s, written up properly.",
    icon: "fluent:book-star-24-regular",
    search: "retro computing history book",
    topics: ["retro-pc", "retro-phone", "indie-business"],
  },
];

const buildLink = ({ asin, search, url }: PickSource) => {
  if (url) return url;
  if (asin) return `${AMAZON_HOST}/dp/${asin}?tag=${AMAZON_TAG}&linkCode=ll1`;
  if (search)
    return `${AMAZON_HOST}/s?k=${encodeURIComponent(search)}&tag=${AMAZON_TAG}&linkCode=ll2`;
  throw new Error(`Amazon pick has no link source`);
};

declare const data: AmazonPick[];

export { data };

export default defineLoader({
  load(): AmazonPick[] {
    return picks.map(({ asin, search, ...pick }) => ({
      ...pick,
      link: buildLink({ asin, search, ...pick }),
    }));
  },
});
