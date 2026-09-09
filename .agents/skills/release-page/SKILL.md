---
name: release-page
description: Finish a scaffolded Win7 Simu release page under /win7simu/changelog/<version>.md - fill in the summary and description, and turn plain product names in the release notes into links. Use when a release page has {{SUMMARY}} or {{DESCRIPTION}} placeholders left in it, when the release-page GitHub workflow runs, or when the user asks to write or fix a release page by hand.
model: sonnet
---

# Finishing a Win7 Simu release page

`scripts/release-page.js` has already done the mechanical work: it split the
GitHub release body into `<ReleaseSection>` blocks, wrote the frontmatter, and
added the entry to `win7simu/changelog.md`. Two things are left, and both need
judgement.

Never rewrite the release notes themselves. The bullets come from the app repo
and are the developer's own wording. You only add links inside them.

## Step 1 - Fill the placeholders

Three placeholders, two distinct texts:

| Placeholder | Where | What to write |
| --- | --- | --- |
| `{{SUMMARY}}` | `win7simu/changelog/<version>.md` frontmatter, and the entry in `win7simu/changelog.md` | One sentence, the same text in both places |
| `{{DESCRIPTION}}` | `win7simu/changelog/<version>.md` frontmatter only | One sentence for search results and social cards |

The summary answers "what is this release about" for someone who has not read
the bullets. Name the two or three areas that got the most work, in the order
they appear in the page. Look at what is actually there, not at the version
number.

- Good: `A big update for the built-in games, the taskbar and start menu, File Explorer, and full read-write support on the Android drive.`
- Bad: `This release includes various improvements and bug fixes.`

Rules for both texts:

- Plain English for a reader whose first language is not English.
- No marketing words. No "exciting", "powerful", "seamless", "revolutionary".
- Do not say "this release" or "this version" in the summary. Start with the substance.
- The description may repeat the summary's content but should open with the app
  and version so it reads correctly out of context, for example
  `Everything that changed in Win7 Simu 4.7.0 - ...`.
- Keep the summary under 200 characters, the description under 160.

Write the same summary sentence in all the places it appears. `scripts/check-release-page.js`
fails if any `{{...}}` is left behind.

## Step 2 - Add the links

Read `/tmp/release-link-targets.md`. The scaffolder writes it on every run and it
lists every simulated app with its slug, plus the fixed pages. If it is missing,
get the slugs from `.content/simulated-apps.data.ts` instead.

Link the **first mention only** of a name that has its own page:

```md
- Added new game: [Spider Solitaire](../simulated/spidersolitaire.md)
- Fixed the weather [gadget](../simulated/gadgets.md) not working
```

| Link | Do not link |
| --- | --- |
| A simulated app or game with a page: Calculator, Paint, Control Panel, Command Prompt, File Explorer, Spider Solitaire | The same name a second time in the same section |
| Theme Studio, and the v2 selector changes | Generic nouns: taskbar, start menu, notification system, desktop, Android drive |
| A page that exists in the target list | A name that has no page. Leave it as plain text |

Paths are relative to `win7simu/changelog/<version>.md`, so they start with
`../`, not `./`. This trips people up because `win7simu/changelog.md` uses `./`.

Two link targets that are not obvious:

- "Theme Studio" -> `../themestudio.md`
- "the v2 changes" -> `../themestudio/selectors.md#changes-in-v2`

If a release note mentions an app you cannot find a slug for, leave it as plain
text and say so in your final message. A wrong slug is worse than no link:
simulated app pages come from a dynamic route, so a bad slug builds fine and
404s in production.

## Step 3 - Check your work

```bash
node scripts/check-release-page.js <version>
```

It verifies that no placeholder is left, that the frontmatter is filled in, that
the changelog entry is present, and that every link resolves to a real page or a
known slug. Fix what it reports and run it again.

Do not run `vitepress build` to check this. The data loaders scrape the Play
Store and App Store on a cold cache and will fail for reasons that have nothing
to do with the page.

## What you do not touch

- The bullet text, beyond wrapping names in links.
- `video` in the frontmatter. It is filled by the scaffolder when a matching
  video already exists on the channel, and by hand later when it does not.
- `releaseDate`. If it looks wrong, say so, do not change it. The GitHub release
  is sometimes cut a day before the store rollout.
- Any file other than `win7simu/changelog/<version>.md` and `win7simu/changelog.md`.

## Report at the end

- The summary sentence you wrote.
- Every link you added, as `name -> path`.
- Any name you left unlinked because it has no page.
- Whether `video` is empty, so the reviewer knows to paste the ID in later.
