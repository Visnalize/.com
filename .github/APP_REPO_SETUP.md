# Setting up the release trigger in the app repo

The release page workflow in this repo (`.github/workflows/release-page.yml`)
waits for a `repository_dispatch` event of type `win7simu-release`. This is the
one-time setup in the Win7 Simu app repo that sends it.

Nothing here needs to change when a release goes out. It runs on every published
release, and this repo decides what to do with it.

## 1. Create the token

The app repo is private and this repo is public, so the dispatch needs a token
that can write to `Visnalize/.com`.

Create a **fine-grained personal access token** at
<https://github.com/settings/personal-access-tokens/new>:

| Field | Value |
| --- | --- |
| Token name | `site release dispatch` |
| Resource owner | `Visnalize` |
| Repository access | Only select repositories -> `Visnalize/.com` |
| Repository permissions | **Contents: Read and write** |
| Expiration | Your choice. Set a calendar reminder, the workflow fails silently when it expires |

`Contents: write` is what the `POST /repos/{owner}/{repo}/dispatches` endpoint
requires. No other permission is needed.

Then add it to the **app repo** (not this one), under Settings -> Secrets and
variables -> Actions -> New repository secret:

- Name: `SITE_DISPATCH_TOKEN`
- Value: the token you just created

## 2. Add the workflow

Create `.github/workflows/notify-site.yml` in the app repo:

```yaml
name: Notify site of release

on:
  release:
    types: [published]

jobs:
  notify:
    # Prereleases and drafts never reach the site.
    if: github.event.release.prerelease == false
    runs-on: ubuntu-latest
    steps:
      - name: Dispatch to the site repo
        env:
          GH_TOKEN: ${{ secrets.SITE_DISPATCH_TOKEN }}
          VERSION: ${{ github.event.release.tag_name }}
          PUBLISHED_AT: ${{ github.event.release.published_at }}
          BODY: ${{ github.event.release.body }}
        run: |
          set -euo pipefail
          jq -n \
            --arg version "$VERSION" \
            --arg published_at "$PUBLISHED_AT" \
            --arg body "$BODY" \
            '{
              event_type: "win7simu-release",
              client_payload: {
                version: $version,
                published_at: $published_at,
                body: $body
              }
            }' \
          | gh api repos/Visnalize/.com/dispatches --input -
```

The release body goes through an environment variable and `jq`, never through
string interpolation into the shell. Release notes are free text and can contain
quotes, backticks and `$`.

## 3. Test it

Publish a throwaway prerelease first. It should be skipped by the `if`, proving
the trigger fires without creating a pull request.

Then either publish a real release, or trigger the site workflow by hand:

1. Go to `Visnalize/.com` -> Actions -> **Win7 Simu release page** -> Run workflow.
2. Enter a version that already exists, for example `4.6.0`.

A manual run reads the release from the private app repo, so it needs the
`APP_REPO_TOKEN` secret described below.

## Secrets checklist

In the app repo:

| Secret | Why |
| --- | --- |
| `SITE_DISPATCH_TOKEN` | Fine-grained PAT, `Contents: write` on `Visnalize/.com` |

In `Visnalize/.com`:

| Secret | Why |
| --- | --- |
| `ANTHROPIC_API_KEY` | Claude writes the summary and the links. Create one at <https://console.anthropic.com> |
| `YOUTUBE_API_KEY` | Optional. Lets the scaffolder find a release video that is already on the channel. Same key the site build uses for `VITE_YOUTUBE_API_KEY` |
| `APP_REPO` | Optional. The app repo as `owner/name`. A secret rather than a variable so it stays out of this repo's public Actions logs. Needed only for manual runs |
| `APP_REPO_TOKEN` | Optional. Fine-grained PAT with `Contents: read` on the app repo, needed only for manual runs and backfills |

## What happens next

1. A release is published in the app repo.
2. The dispatch lands here and `scripts/release-page.js` runs.
   - A patch release such as `4.6.1` is skipped: it belongs inline in
     `win7simu/changelog.md`, and the run ends green with a notice.
   - A `x.y.0` release gets a page and a changelog entry, both with `{{SUMMARY}}`
     placeholders.
3. Claude fills the placeholders and adds the links, following
   `.claude/skills/release-page/SKILL.md`.
4. `scripts/check-release-page.js` verifies the result.
5. A pull request opens against the default branch with a review checklist.

The video ID and the exact release date are the two things left for a human. Both
are called out in the pull request body.
