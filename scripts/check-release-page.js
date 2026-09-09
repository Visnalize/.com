/**
 * Checks a scaffolded release page before it goes into a pull request.
 *
 * A full `vitepress build` would catch these too, but it cannot run in CI: the
 * data loaders scrape the Play Store and the App Store on a cold cache, and the
 * caches are gitignored. These are the failures that actually matter for a
 * generated page, so they are checked directly.
 *
 * Usage: node scripts/check-release-page.js 4.7.0
 */

import { existsSync, readFileSync } from "fs";
import { dirname, join, resolve } from "path";
import { argv, cwd, exit } from "process";

const version = argv[2];
if (!version) {
  console.error("usage: node scripts/check-release-page.js <version>");
  exit(1);
}

const pagePath = `win7simu/changelog/${version}.md`;
const changelogPath = "win7simu/changelog.md";
const problems = [];

if (!existsSync(join(cwd(), pagePath))) {
  console.error(`error: ${pagePath} does not exist`);
  exit(1);
}

const page = readFileSync(join(cwd(), pagePath), "utf-8");
const changelog = readFileSync(join(cwd(), changelogPath), "utf-8");

// --- placeholders -----------------------------------------------------------

for (const [file, content] of [
  [pagePath, page],
  [changelogPath, changelog],
]) {
  const left = content.match(/\{\{[A-Z_]+\}\}/g);
  if (left) {
    problems.push(`${file}: unfilled placeholder ${[...new Set(left)].join(", ")}`);
  }
}

// --- frontmatter ------------------------------------------------------------

const frontmatter = page.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";

for (const key of ["release", "releaseDate", "platforms", "summary", "description"]) {
  const value = frontmatter.match(new RegExp(`^${key}:\\s*(.*)$`, "m"))?.[1]?.trim();
  if (!value) problems.push(`${pagePath}: frontmatter ${key} is empty`);
}

const declared = frontmatter.match(/^release:\s*(.*)$/m)?.[1]?.trim();
if (declared && declared !== version) {
  problems.push(`${pagePath}: frontmatter release is ${declared}, expected ${version}`);
}

// --- links ------------------------------------------------------------------

/**
 * Simulated app and theme pages come from the `[app].md` and `[theme].md`
 * dynamic routes, so `../simulated/cmd.md` is a valid link with no file behind
 * it. Those two directories are checked against the slugs in the data files
 * instead, everything else against the filesystem.
 */
function slugsIn(dataFile) {
  const source = readFileSync(join(cwd(), dataFile), "utf-8");
  return new Set([...source.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map(([, s]) => s));
}

const dynamicRoutes = {
  simulated: slugsIn(".content/simulated-apps.data.ts"),
  themes: slugsIn(".content/themes.data.ts"),
};

/**
 * Every relative link has to resolve to a real page. This is the check that
 * earns its keep: the Claude step adds these links, and a wrong slug would
 * otherwise only surface as a dead link at deploy time.
 */
const pageDir = dirname(resolve(cwd(), pagePath));
for (const [, label, target] of page.matchAll(/\[([^\]]+)\]\((\.[^)]+)\)/g)) {
  const file = target.split("#")[0];
  const dynamic = file.match(/^\.\.\/(simulated|themes)\/([^/]+)\.md$/);

  if (dynamic) {
    const [, route, slug] = dynamic;
    if (!dynamicRoutes[route].has(slug)) {
      problems.push(
        `${pagePath}: link "${label}" points at ${file}, but "${slug}" is not a known ${route} slug`,
      );
    }
    continue;
  }

  if (!existsSync(resolve(pageDir, file))) {
    problems.push(`${pagePath}: link "${label}" points at ${file}, which does not exist`);
  }
}

// --- changelog entry --------------------------------------------------------

if (!changelog.includes(`### \`${version}\``)) {
  problems.push(`${changelogPath}: no heading for ${version}`);
}
if (!changelog.includes(`](./changelog/${version}.md)`)) {
  problems.push(`${changelogPath}: no link to the ${version} release page`);
}

// --- report -----------------------------------------------------------------

if (problems.length) {
  console.error(`${problems.length} problem(s) with the ${version} release page:`);
  for (const problem of problems) console.error(`  - ${problem}`);
  exit(1);
}

console.log(`${pagePath} and the ${changelogPath} entry look good`);
