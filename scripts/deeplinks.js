import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Resolve paths relative to this file (not process.cwd()) so the script can
// be run directly, e.g. `node .vitepress/server/deeplinks.js` from anywhere.
const ROUTER_DIR = join(".code", "brick-1100", "src", "router");
const DEEP_LINKS_MD = join("brick1100", "deep-links.md");

/**
 * `/messages/viewer/:type` is a dynamic route whose concrete values are only
 * enumerated at runtime, in `src/components/menu/messages/_routes.js`
 * (not in menu.js/index.js). It's mirrored here so the deep links table can
 * still document it.
 */
const DYNAMIC_ROUTE_OVERRIDES = {
  "/messages/viewer/:type": [
    { value: "inbox", title: "Inbox" },
    { value: "draft", title: "Drafts" },
    { value: "sent", title: "Sent items" },
  ],
};

// Root-level routes in index.js that aren't reachable from the in-app menu and
// only make sense as internal redirect targets (e.g. `/login?from=...`,
// `/subscribe?reason=...`). Everything else at the root is either the boot
// screen or one of these flow screens.
const INCLUDED_ROOT_PATHS = new Set(["/main", "/menu"]);

/**
 * `menu.js` and `index.js` are plain Vue Router config files (not JSON), so
 * the route array is extracted from the source text by matching balanced
 * brackets and evaluated as JS. Properties that reference imported bindings
 * we don't care about (`image`, `component: Boot`, the `...menu` spread)
 * are stripped first since they aren't needed to build the deep links table
 * and would otherwise throw (missing imports) when evaluated in isolation.
 */
function extractRoutesArray(source, varName) {
  const marker = `const ${varName} = [`;
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`Could not find "${marker}" in source`);

  const arrayStart = start + marker.length - 1;
  let depth = 0;
  let end = -1;
  for (let i = arrayStart; i < source.length; i++) {
    if (source[i] === "[") depth++;
    else if (source[i] === "]") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end === -1) throw new Error(`Could not find matching "]" for "${varName}"`);

  const literal = source
    .slice(arrayStart, end + 1)
    .replace(/^\s*image:.*,\s*$/gm, "")
    .replace(/\bcomponent:\s*Boot\b/g, "component: null")
    .replace(/^\s*\.\.\.menu,\s*$/gm, "");

  // eslint-disable-next-line no-new-func
  return new Function(`return ${literal};`)();
}

function collectDeepLinks(nodes, basePath, links) {
  for (const node of nodes) {
    if (!node.path || node.path.startsWith("http")) continue; // external links aren't deep links

    if (node.path.includes(":")) {
      const key = `${basePath}/${node.path}`.replace(/\/+/g, "/");
      const override = DYNAMIC_ROUTE_OVERRIDES[key];
      if (override) {
        for (const { value, title } of override) {
          links.push({ path: key.replace(/:\w+$/, value), title });
        }
      }
      continue; // can't build a fixed link for other dynamic segments
    }

    const fullPath = `${basePath}/${node.path}`.replace(/\/+/g, "/");
    let title = node.meta?.title;
    const hideFromMenu = node.meta?.hideFromMenu ?? false;

    // Sections often carry their title on a hidden `path: ""` child rather
    // than on the parent node itself (e.g. "/contacts").
    const indexChild = node.children?.find((child) => child.path === "");
    if (!title && indexChild?.meta?.title) title = indexChild.meta.title;

    if (title && !hideFromMenu) links.push({ path: fullPath, title });

    if (node.children) {
      const otherChildren = node.children.filter((child) => child.path !== "");
      collectDeepLinks(otherChildren, fullPath, links);
    }
  }
}

export const generateBrick1100Links = () => {
  const indexSource = readFileSync(join(ROUTER_DIR, "index.js"), "utf-8");
  const menuSource = readFileSync(join(ROUTER_DIR, "menu.js"), "utf-8");

  const rootRoutes = extractRoutesArray(indexSource, "routes").filter((route) =>
    INCLUDED_ROOT_PATHS.has(route.path)
  );
  const menuRoutes = extractRoutesArray(menuSource, "menu");

  const links = [];
  collectDeepLinks(rootRoutes, "", links);
  collectDeepLinks(menuRoutes, "", links);

  const table = [
    "| Deep link | Section |",
    "| --- | --- |",
    ...links.map(({ path, title }) => `| <DeepLink path="${path}" /> | ${title} |`),
  ].join("\n");

  const md = readFileSync(DEEP_LINKS_MD, "utf-8");
  const tableHeaderMarker = "| Deep link | Section |";
  const headerIndex = md.indexOf(tableHeaderMarker);
  if (headerIndex === -1) throw new Error(`Could not find "${tableHeaderMarker}" in ${DEEP_LINKS_MD}`);

  writeFileSync(DEEP_LINKS_MD, md.slice(0, headerIndex) + table + "\n");
};

// Allow running directly via `node deeplinks.js` in addition to being
// imported from the VitePress build (deeplinks.ts).
if (process.argv[1] && import.meta.url === `file://${process.argv[1]}`) {
  generateBrick1100Links();
  console.log(`Updated ${DEEP_LINKS_MD}`);
}
