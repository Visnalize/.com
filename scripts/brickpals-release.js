/**
 * Adds a Brick Pals release to brickpals/changelog.md.
 *
 * The release body is the "show" output of release_notes.py in the app repo:
 * bullet lines that may end with tags such as (android), (ios), (pro) or
 * (ios, pro). Tags become <Notation> icons. Nothing here needs judgement, so
 * no AI step runs after it.
 *
 * Usage:
 *   RELEASE_VERSION=v1.1.0 \
 *   RELEASE_PUBLISHED_AT=2026-11-20T09:00:00Z \
 *   RELEASE_BODY_FILE=notes.md \
 *   node scripts/brickpals-release.js
 */

import { appendFileSync, readFileSync, writeFileSync } from "fs";
import { argv, env, exit } from "process";
import { pathToFileURL } from "url";

const CHANGELOG = "brickpals/changelog.md";

/** Releases are published from UTC+7, so a UTC date is often the previous day. */
const TIMEZONE = env.RELEASE_TIMEZONE || "Asia/Ho_Chi_Minh";

const TAGS = /\s*\(((?:android|ios|pro)(?:,\s*(?:android|ios|pro))*)\)\s*$/;

/** One release-note line with its trailing tags turned into icons. */
export function noteLine(line) {
  const found = line.match(TAGS);
  if (!found) return line;
  const icons = found[1]
    .split(",")
    .map((tag) => ` <Notation icon="${tag.trim()}" />`)
    .join("");
  return line.replace(TAGS, "") + icons;
}

/** "Nov 20, 2026" for an ISO date, or an exact YYYY-MM-DD, in the release time zone. */
export function displayDate(isoOrDay, timeZone = TIMEZONE) {
  const exactDay = /^\d{4}-\d{2}-\d{2}$/.test(isoOrDay);
  const date = new Date(exactDay ? `${isoOrDay}T12:00:00Z` : isoOrDay);
  if (Number.isNaN(date.getTime())) throw new Error(`not a date: ${isoOrDay}`);
  const options = { month: "short", day: "numeric", year: "numeric" };
  return date.toLocaleDateString("en-US", { ...options, timeZone: exactDay ? "UTC" : timeZone });
}

/**
 * The changelog with the release added at the top of its year, or null when
 * the version is already there.
 */
export function addRelease(changelog, { version, date, body }) {
  if (changelog.includes(`### \`${version}\``)) return null;
  const lines = body
    .split("\n")
    .map((line) => line.trimEnd())
    .filter((line) => line.trim());
  if (!lines.length) throw new Error("the release body has no notes");

  const entry = `### \`${version}\` (${date})\n\n${lines.map(noteLine).join("\n")}\n\n`;
  const year = date.slice(-4);
  const yearHeading = `## ${year}\n\n`;
  if (changelog.includes(yearHeading)) {
    return changelog.replace(yearHeading, yearHeading + entry);
  }
  // Years run newest first, so a new year goes above the first one.
  const firstYear = changelog.search(/^## \d{4}$/m);
  if (firstYear === -1) return changelog.trimEnd() + `\n\n${yearHeading}${entry}`;
  return changelog.slice(0, firstYear) + yearHeading + entry + changelog.slice(firstYear);
}

function setOutput(name, value) {
  console.log(`${name}=${value}`);
  if (env.GITHUB_OUTPUT) appendFileSync(env.GITHUB_OUTPUT, `${name}=${value}\n`);
}

function main() {
  const version = (env.RELEASE_VERSION || "").trim().replace(/^v/, "");
  const when = env.RELEASE_DATE || env.RELEASE_PUBLISHED_AT;
  const body = env.RELEASE_BODY_FILE ? readFileSync(env.RELEASE_BODY_FILE, "utf-8") : env.RELEASE_BODY;
  if (!version || !when || !body) {
    console.error("error: set RELEASE_VERSION, RELEASE_PUBLISHED_AT (or RELEASE_DATE) and RELEASE_BODY_FILE");
    exit(1);
  }

  const result = addRelease(readFileSync(CHANGELOG, "utf-8"), { version, date: displayDate(when), body });
  setOutput("version", version);
  if (result === null) {
    setOutput("skipped", "true");
    console.log(`skipped: ${version} is already in ${CHANGELOG}`);
    return;
  }
  writeFileSync(CHANGELOG, result);
  setOutput("skipped", "false");
}

if (argv[1] && import.meta.url === pathToFileURL(argv[1]).href) main();
