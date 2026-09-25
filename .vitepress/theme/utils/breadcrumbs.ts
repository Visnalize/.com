import {
  Blog,
  Brick1100,
  Resources,
  Services,
  Testimonials,
  Win7Simu,
} from "../../config/sitelinks";
import { APP_NAMES } from "../constants";

export interface Crumb {
  text: string;
  link?: string;
}

/**
 * Pages that can be a parent in the trail, keyed by their URL path. `/win7simu`
 * has no page of its own and redirects to the about page, so it links there.
 * A path segment missing here, like `/blog/tag`, has no page and is skipped.
 */
const PARENTS: Record<string, Crumb> = {
  "/win7simu": Win7Simu.Index,
  "/brick1100": { text: APP_NAMES.brick1100, link: "/brick1100" },
  ...Object.fromEntries(
    [
      Win7Simu.Changelog,
      Win7Simu.Simulated,
      Win7Simu.Themes,
      Win7Simu.ThemeStudio,
      Brick1100.Changelog,
      Brick1100.Builders,
      Resources.Index,
      Blog,
      Services,
      Testimonials,
      { text: "Notes", link: "/notes" },
    ].map((link) => [link.link, link]),
  ),
};

/**
 * Listing pages have their own navigation, and notes already link back to
 * all notes, so a trail there only repeats what is on the page.
 */
const EXCLUDED = [/^\/blog\/(tag|page)\//, /^\/notes\//, /^\/testimonials\//];

/**
 * The full trail from Home to the current page, for any page but the home
 * page. The breadcrumb JSON-LD uses it as is, so search engines see the same
 * trail as readers.
 */
export const getTrail = (routePath: string, title: string): Crumb[] => {
  const path = normalize(routePath);
  const segments = path.split("/").filter(Boolean);
  if (!segments.length) return [];

  const crumbs: Crumb[] = [{ text: "Home", link: "/" }];
  for (let i = 1; i < segments.length; i++) {
    const parent = PARENTS["/" + segments.slice(0, i).join("/")];
    if (!parent) continue;
    // A section whose link is the current page, like Win7 Simu > About, ends
    // the trail there instead of linking the page to itself.
    if (parent.link === path) break;
    crumbs.push(parent);
  }

  const section = Object.values(PARENTS).find((p) => p.link === path);
  crumbs.push({ text: section?.text ?? title, link: path });
  return crumbs;
};

/**
 * The trail shown on the page. It is empty for excluded pages, and for
 * top-level pages where it would only say "Home > Page". The current page is
 * left without a link.
 */
export const getBreadcrumbs = (routePath: string, title: string): Crumb[] => {
  const path = normalize(routePath);
  if (EXCLUDED.some((pattern) => pattern.test(path))) return [];
  if (path.split("/").filter(Boolean).length < 2) return [];

  const crumbs = getTrail(path, title);
  const current = crumbs.pop()!;
  return [...crumbs, { text: current.text }];
};

const normalize = (path: string) =>
  path.replace(/(\.html)?\/?$/, "").replace(/^\/?/, "/");
