import assert from "node:assert/strict";
import { test } from "node:test";

import { addRelease, displayDate, noteLine } from "./brickpals-release.js";

const PAGE = `# Changelog

Annotation: icons

## 2026

### \`1.0\` (Oct 23, 2026)

- First release on Google Play.
`;

test("tags become icons", () => {
  assert.equal(noteLine("- iPad support (ios)"), '- iPad support <Notation icon="ios" />');
  assert.equal(
    noteLine("  - Clock look (android, pro)"),
    '  - Clock look <Notation icon="android" /> <Notation icon="pro" />',
  );
  assert.equal(noteLine("- Fixed a crash (sometimes)"), "- Fixed a crash (sometimes)");
});

test("dates use the release time zone", () => {
  assert.equal(displayDate("2026-11-20T18:30:00Z"), "Nov 21, 2026");
  assert.equal(displayDate("2026-11-20"), "Nov 20, 2026");
});

test("a release goes on top of its year", () => {
  const page = addRelease(PAGE, { version: "1.1.0", date: "Nov 20, 2026", body: "- Games (pro)\n\n- Fix\n" });
  assert.match(
    page,
    /## 2026\n\n### `1.1.0` \(Nov 20, 2026\)\n\n- Games <Notation icon="pro" \/>\n- Fix\n\n### `1.0`/,
  );
});

test("a new year goes above the older ones", () => {
  const page = addRelease(PAGE, { version: "1.2.0", date: "Jan 5, 2027", body: "- New" });
  assert.match(page, /Annotation: icons\n\n## 2027\n\n### `1.2.0` \(Jan 5, 2027\)\n\n- New\n\n## 2026/);
});

test("a known version is skipped", () => {
  assert.equal(addRelease(PAGE, { version: "1.0", date: "Oct 23, 2026", body: "- x" }), null);
});

test("an empty body fails", () => {
  assert.throws(() => addRelease(PAGE, { version: "1.1.0", date: "Nov 20, 2026", body: "\n \n" }));
});
