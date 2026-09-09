/**
 * Scaffolds a Win7 Simu release page from a GitHub release body.
 *
 * Everything here is deterministic: split the release body into platform
 * sections, write the page, and add the entry to the changelog. The two pieces
 * that need judgement, the summary and the in-text links, are left as
 * placeholders for the Claude step in .github/workflows/release-page.yml.
 *
 * Usage:
 *   RELEASE_VERSION=4.7.0 \
 *   RELEASE_PUBLISHED_AT=2026-11-02T16:31:22Z \
 *   RELEASE_BODY="$(gh api repos/$APP_REPO/releases/tags/4.7.0 --jq .body)" \
 *   node scripts/release-page.js
 */

import { appendFileSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { cwd, env, exit } from "process";

const CHANGELOG = "win7simu/changelog.md";
const PAGE_DIR = "win7simu/changelog";
const APPS_DATA = ".content/simulated-apps.data.ts";
const LINK_TARGETS = "/tmp/release-link-targets.md";

/** Section headings the app repo uses, in the order they should appear. */
const PLATFORMS = ["core", "android", "web"];

/**
 * Releases are published from UTC+7, so the UTC timestamp GitHub reports is
 * often the previous day. The changelog dates are local dates, not UTC ones.
 */
const TIMEZONE = env.RELEASE_TIMEZONE || "Asia/Ho_Chi_Minh";

const YOUTUBE_PLAYLIST =
  env.YOUTUBE_PLAYLIST_ID || "UUUq46NBY_oz46QLmyuCPxGQ";

const version = requireEnv("RELEASE_VERSION").trim().replace(/^v/, "");
const publishedAt = requireEnv("RELEASE_PUBLISHED_AT");

/**
 * The body arrives in a file from CI. Passing release notes through a shell
 * variable invites quoting and heredoc-delimiter trouble, and the text comes
 * from outside this repo.
 */
const body = env.RELEASE_BODY_FILE
  ? readFileSync(env.RELEASE_BODY_FILE, "utf-8")
  : requireEnv("RELEASE_BODY");

function requireEnv(name) {
  const value = env[name];
  if (!value) fail(`${name} is not set`);
  return value;
}

function fail(message) {
  console.error(`error: ${message}`);
  exit(1);
}

/** Skip without failing, so a patch release does not turn the run red. */
function skip(message) {
  console.log(`skipped: ${message}`);
  setOutput("skipped", "true");
  setOutput("reason", message);
  exit(0);
}

function setOutput(name, value) {
  console.log(`${name}=${value}`);
  if (env.GITHUB_OUTPUT) {
    appendFileSync(env.GITHUB_OUTPUT, `${name}=${value}\n`);
  }
}

// --- release body -----------------------------------------------------------

/**
 * Splits the release body on its `### <Platform>` headings. Everything the
 * generator adds around the notes (the config comment, the "What's Changed"
 * heading, the compare link) is dropped by only keeping known sections.
 */
function parseSections(text) {
  const lines = text.replace(/<!--[\s\S]*?-->/g, "").split(/\r?\n/);
  const sections = new Map();
  let current;

  for (const line of lines) {
    const heading = line.match(/^#{2,3}\s+(.+?)\s*$/);
    if (heading) {
      const key = heading[1].toLowerCase().trim();
      current = PLATFORMS.includes(key) ? key : undefined;
      if (current && !sections.has(current)) sections.set(current, []);
      continue;
    }
    if (!current) continue;
    if (/^\*\*Full Changelog\*\*/.test(line)) {
      current = undefined;
      continue;
    }
    sections.get(current).push(line);
  }

  const result = [];
  for (const key of PLATFORMS) {
    const content = (sections.get(key) || []).join("\n").trim();
    if (content) result.push({ platform: key, content });
  }
  return result;
}

// --- dates ------------------------------------------------------------------

function localParts(iso) {
  if (env.RELEASE_DATE) {
    const [year, month, day] = env.RELEASE_DATE.split("-");
    return { year, month, day };
  }
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [{ value: year }, , { value: month }, , { value: day }] =
    formatter.formatToParts(new Date(iso));
  return { year, month, day };
}

/**
 * `2026-09-06`, the format the release page frontmatter expects.
 *
 * RELEASE_DATE overrides this. The GitHub release is cut before the store
 * rollout finishes, so the date users see the update is sometimes a day later
 * than the tag.
 */
function isoDate(iso) {
  if (env.RELEASE_DATE) return env.RELEASE_DATE;
  const { year, month, day } = localParts(iso);
  return `${year}-${month}-${day}`;
}

/** `Sep 6, 2026`, the format the changelog headings use. */
function changelogDate(iso) {
  const source = env.RELEASE_DATE ? `${env.RELEASE_DATE}T12:00:00Z` : iso;
  return new Intl.DateTimeFormat("en-US", {
    timeZone: env.RELEASE_DATE ? "UTC" : TIMEZONE,
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(source));
}

// --- youtube ----------------------------------------------------------------

/**
 * Looks for an upload whose title carries this version. The video is usually
 * published days after the release, so not finding one is the normal case.
 */
async function findVideo(release) {
  const apiKey = env.YOUTUBE_API_KEY;
  if (!apiKey) {
    console.log("no YOUTUBE_API_KEY, skipping video lookup");
    return "";
  }

  const params = new URLSearchParams({
    key: apiKey,
    playlistId: YOUTUBE_PLAYLIST,
    part: "snippet",
    maxResults: "25",
  });

  let items;
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?${params}`,
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    ({ items } = await response.json());
  } catch (e) {
    console.log(`video lookup failed, continuing without one: ${e.message}`);
    return "";
  }

  // Bare `includes` would let 4.7.0 match inside 14.7.01.
  const pattern = new RegExp(
    `(?<![\\d.])${release.replace(/\./g, "\\.")}(?![\\d.])`,
  );
  const match = items?.find((item) => pattern.test(item.snippet?.title ?? ""));
  return match?.snippet?.resourceId?.videoId ?? "";
}

// --- link targets -----------------------------------------------------------

/**
 * A cheat sheet of every page a release note could link to, written to /tmp for
 * the Claude step so it does not have to read the whole data file.
 */
function writeLinkTargets() {
  const data = readFileSync(join(cwd(), APPS_DATA), "utf-8");
  const apps = [...data.matchAll(/slug:\s*"([^"]+)",\s*\n\s*title:\s*"([^"]+)"/g)];

  const lines = [
    "# Link targets for a release page",
    "",
    "Paths are relative to win7simu/changelog/<version>.md.",
    "",
    "## Simulated apps",
    "",
    ...apps.map(([, slug, title]) => `- ${title} -> ../simulated/${slug}.md`),
    "",
    "## Other pages",
    "",
    "- Theme Studio -> ../themestudio.md",
    "- Theme Studio selectors, v2 changes -> ../themestudio/selectors.md#changes-in-v2",
    "- Keyboard shortcuts -> ../keyboard-shortcuts.md",
    "- Themes -> ../themes.md",
    "- FAQs -> ../faq.md",
    "",
  ];

  writeFileSync(LINK_TARGETS, lines.join("\n"));
  console.log(`wrote ${apps.length} app link targets to ${LINK_TARGETS}`);
}

// --- output files -----------------------------------------------------------

function buildPage(sections, video) {
  const platforms = sections.map((s) => s.platform);
  const frontmatter = [
    "---",
    `title: Win7 Simu ${version} release notes`,
    "description: {{DESCRIPTION}}",
    "comments: false",
    "image: /assets/ogmain/win7simu-changelog.png",
    "aside: false",
    "app: win7simu",
    `release: ${version}`,
    `releaseDate: "${isoDate(publishedAt)}"`,
    `platforms: [${platforms.join(", ")}]`,
    "summary: {{SUMMARY}}",
    `video: ${video}`,
    "prev:",
    "  text: Changelog",
    "  link: /win7simu/changelog",
    "next: false",
    "---",
  ].join("\n");

  const blocks = sections.map(
    ({ platform, content }) =>
      `<ReleaseSection platform="${platform}">\n\n${content}\n\n</ReleaseSection>`,
  );

  return [frontmatter, "<ReleaseNotes />", "<SponsorAd />", ...blocks].join(
    "\n\n",
  ) + "\n";
}

/**
 * Adds the entry at the top of this year's group, creating the group when the
 * release is the first one of a new year.
 */
function insertChangelogEntry(dateLabel, year) {
  const path = join(cwd(), CHANGELOG);
  const text = readFileSync(path, "utf-8");

  if (text.includes(`### \`${version}\``)) {
    skip(`${CHANGELOG} already has an entry for ${version}`);
  }

  const entry = [
    `### \`${version}\` (${dateLabel})`,
    "",
    "{{SUMMARY}}",
    "",
    `[Read the full release notes &rarr;](./changelog/${version}.md)`,
    "",
  ].join("\n");

  const yearHeading = `## ${year}`;
  let updated;

  if (text.includes(`\n${yearHeading}\n`)) {
    updated = text.replace(`${yearHeading}\n\n`, `${yearHeading}\n\n${entry}\n`);
  } else {
    // First release of a new year: open a new group above the previous one.
    updated = text.replace(
      /^(## \d{4}\n)/m,
      `${yearHeading}\n\n${entry}\n$1`,
    );
  }

  if (updated === text) fail(`could not find an insertion point in ${CHANGELOG}`);
  writeFileSync(path, updated);
}

// --- main -------------------------------------------------------------------

if (!/^\d+\.\d+\.0$/.test(version)) {
  skip(`${version} is a patch release, it belongs inline in ${CHANGELOG}`);
}

const sections = parseSections(body);
if (!sections.length) {
  fail(
    `no ${PLATFORMS.join("/")} sections found in the release body for ${version}`,
  );
}

const pagePath = `${PAGE_DIR}/${version}.md`;
const video = await findVideo(version);
const { year } = localParts(publishedAt);

writeFileSync(join(cwd(), pagePath), buildPage(sections, video));
insertChangelogEntry(changelogDate(publishedAt), year);
writeLinkTargets();

setOutput("skipped", "false");
setOutput("version", version);
setOutput("page", pagePath);
setOutput("video", video);
setOutput("platforms", sections.map((s) => s.platform).join(","));
