---
name: sponsored-post
description: Review a client article against the Visnalize sponsored-post content policy, and publish it to the blog if it passes. Use when the user attaches, pastes, or points to an article (usually Markdown) and asks to review it, check it against the policy, or publish it as a sponsored or guest post. Covers the policy check, the rejection note sent back to the client, writing the post file, cover image attribution, the sponsor-N branch, the PR, and the published URL.
model: sonnet
---

# Sponsored post review and publishing

Two jobs, always in this order:

1. Review the client article against the content policy.
2. Only if it passes, turn it into a blog post, publish it through a `sponsor-<N>` branch and PR, and report the live URL.

Never publish an article that fails step 1, and never start step 3 before the user has approved the checkpoint in step 5.

Read `services/sponsored-posts.md` at the start of every run. That file is the source of truth for the policy and the pricing tiers, and it changes. The lists below are only how to check it, not a copy of it.

## Step 1 - Review against the policy

If the article was pasted rather than attached as a file, save it to the scratchpad first so the counts below can run.

| Rule | How to check |
| --- | --- |
| English, minimum 800 words | `awk 'NR==1&&/^---/{f=1;next} f&&/^---/{f=0;next} !f' FILE \| wc -w`. Pros and cons tables, lists, and captions all count toward the total. Only the frontmatter is excluded. |
| No more than 5 external links | `grep -vE '^!\[\|^_Cover image' FILE \| grep -oE '\]\(https?://[^)]+\)' \| grep -v visnalize.com \| sort -u`. The cover image and its credit link do not count toward the 5. |
| Links relevant and not spammy | Fetch every domain you do not recognise. Reject link farms, expired-domain PBNs, and pages unrelated to the article topic. |
| No NSFW, gambling, or grey niche | See the list below. |
| Original, not raw AI output | See the signals below. |
| At least one royalty-free cover image | Step 4. A missing cover is not a rejection, you supply one. A stolen or untraceable image is handled in step 4. |
| Not a duplicate | `ls blog/` and check no existing post covers the same topic. |

Grey niche and banned topics: adult content, casino, betting, lottery, crypto trading signals and investment schemes, payday and short-term loans, essay writing and exam services, vape, tobacco, CBD, prescription pharmacy, spy and stalkerware apps, follower or review buying, hookup dating. VPN, proxy, and privacy tools are fine, the blog already covers them, as long as the linked product is a real one.

Raw AI output signals, weigh them together, not one by one: no concrete facts, numbers, names, or dates anywhere; every section the same length and shape; stock openers such as "in today's fast-paced world"; claims and statistics with no source that turn out to be wrong when checked; the same idea restated in three different ways.

Judgement rule: reject only on the policy. Weak intro, long paragraphs, mixed US and UK spelling, and clumsy headings are yours to fix in step 3, not reasons to reject.

## Step 2 - If it fails

Produce a short note the user can forward to the client as is:

- 2 to 5 bullets. Each bullet names the rule, the one detail that broke it, and the fix.
- Then one line: whether it can be revised and resubmitted, or whether the topic itself is not publishable.

The client wrote the article. They know what is in it, what they linked to, and how long it is. Do not describe their own content back to them, do not quote passages they wrote, and do not explain why the rule exists. Give them only what they cannot already see: which rule, the specific trigger, what to change. Two lines per bullet at most.

Write plain English for a reader whose first language is not English. No apology, no preamble, no praise sandwich. Then stop. Do not create a branch or a file.

Example shape:

```
- Word count: 640 words, the minimum is 800.
- External links: 7 links, the limit is 5.
- Link quality: the example.com link is unrelated to the topic. Replace or remove it.

This can be revised and resubmitted.
```

## Step 3 - Write the post

One new file, `blog/<slug>.md`.

Slug: kebab-case, 3 to 6 words, most important keyword first, no year, no client brand name unless the post is genuinely about that product. Confirm it is free with `ls blog/<slug>.md`.

Frontmatter, `title` is optional:

```
---
title: <only when the H1 is over about 60 characters or reads badly as a page title>
createdAt: <milliseconds>
description: <one sentence, roughly 120-160 characters, what the reader gets>
tags:
  - <tag>
  - <tag>
---
```

- `createdAt` comes from `node -e "console.log(Date.now())"`. It sorts the blog index. Never copy one from another post.
- Pick 2 or 3 tags that already exist. List them with:
  `for f in blog/*.md; do awk 'NR==1&&/^---/{f=1;next} f&&/^---/{exit} f' "$f"; done | awk '/^ *- /{print $2}' | sort -u`
  Do not invent a tag.
- Do not add the `sponsor` tag by default. Add it only when the user says the client paid the tier that keeps it, see Pricing in `services/sponsored-posts.md`.

Body, exactly this order. The blog index takes the card title from the first `# ` line and the card thumbnail from the first `![...](...)`, so nothing may come before them:

```
# Title in Title Case

![Cover image](<direct image url>)

_Cover image by <Author> via [<Source>](<photo page url>)_

Opening paragraph.

## Section heading
```

Editing rules:

- Keep the client's voice, argument, and structure. This is editing, not rewriting.
- Keep every client link where it is, with the same anchor text and target. That is what they paid for. Never add `nofollow`, never add tracking parameters, never add your own links.
- Fix grammar, run-on sentences, and heading levels: `##` for sections, `###` below them, only one `#` in the file.
- Remove conversion junk: stray backslashes before punctuation such as `iOS 7\.`, non-breaking spaces, doubled spaces, empty emphasis, HTML that Markdown already covers.
- Cut promotional filler that carries no information.
- 800 words is a floor, not a target. Do not pad. If the piece is short after editing, it should have failed step 1.
- Do not add a Visnalize product plug unless the article naturally calls for it.
- Both `**bold**` and `__bold__` appear in the blog. Keep whichever the article uses.

## Step 4 - Cover image and attribution

Every post needs a cover as its first image, with the credit line directly under it:

```
_Cover image by <Author> via [<Source>](<photo page url>)_
```

Variants already used in the blog: `_Cover image designed on <Author>'s original photo from [Unsplash](...)_`, `_Cover image from [<Channel>'s video thumbnail](...)_`.

Case A, the article has a cover and a credit. Open the photo page to confirm the author name and that the link resolves, then rewrite the line into the format above.

Case B, the article has a cover but no credit.

- Pexels direct URL `https://images.pexels.com/photos/<ID>/...` maps to the page `https://www.pexels.com/photo/<ID>`. Fetch it for the photographer name.
- An Unsplash or Pexels page URL: fetch it for both the author and the direct image URL.
- An Unsplash direct URL only, `photo-<hash>`: the photo page cannot be derived from the hash. Try a web search for the hash. If that fails, replace the image using case C rather than publishing a guessed credit.
- Any image you cannot trace to a royalty-free source and a named author: replace it.

Case C, no cover, or a replacement is needed.

1. Fetch `https://unsplash.com/s/photos/<topic>` and pick a candidate that matches the article, not just the keyword.
2. Open its photo page for the author name and the page URL.
3. Build the direct URL in house format: `https://images.unsplash.com/photo-<id>?auto=format&fit=crop&w=1280&q=80`. Pexels house format is `?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`.
4. Prefer a real photo over an illustration. Avoid legible brand logos, an identifiable person as the subject, and images that look AI generated.

Always verify the final URL returns 200:

```bash
curl -sI -o /dev/null -w "%{http_code}\n" "<image url>"
```

Extra images inside the article follow the same attribution rules. Local image files go in `blog/img/<slug>/`.

## Step 5 - Checkpoint, do not skip

Before touching git, show the user:

- Verdict, word count, external link count.
- File path, slug, and the URL the post will get.
- H1, description, tags.
- Cover image source and author, and whether you replaced the client's image.
- Anything you changed beyond copy-editing.

Wait for approval. If the user asks for changes, apply them and show the summary again.

## Step 6 - Publish

```bash
git fetch origin
N=$(( $( { git branch -a --list '*sponsor-*'; git log --oneline --all | grep -oiE 'sponsored post [0-9]+'; } | grep -oE '[0-9]+' | sort -n | tail -1 ) + 1 ))
git checkout -b "sponsor-$N" origin/v2
git add "blog/<slug>.md"
git status --short          # nothing else may be staged
git commit -m "Add sponsored post $N"
git push -u origin "sponsor-$N"
gh pr create --base v2 --head "sponsor-$N" --title "Add sponsored post $N" --body ""
gh pr merge --merge
```

- Branch off `origin/v2`, not off whichever branch happens to be checked out.
- Only the new post file, and its images if any, go into the commit.
- `--merge` keeps the merge-commit history the earlier sponsor PRs use. Do not squash. Do not delete the branch, the `sponsor-*` branches are kept.
- These commit messages deliberately do not use conventional-commit prefixes. That is the convention for this series, keep it.

## Step 7 - Report back

Give the user, in this order:

- Published URL: `https://visnalize.com/blog/<slug>`, no `.md`, `cleanUrls` is on.
- PR link and branch name.
- The cover image credit line, so they can tell the client which image was used.
- A reminder that payment is due within 5 working days of publishing.

The site is rebuilt on Cloudflare after the merge, so say the URL goes live in a few minutes rather than instantly.
