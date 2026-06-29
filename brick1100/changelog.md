---
title: Brick 1100 Changelog
description: Changes throughout the versions of the Brick 1100 app. Check the log at this page.
comments: false
image: /assets/ogmain/brick1100-changelog.png
pageClass: changelog
---

# Changelog

<script setup lang="ts">
import Notation from '@components/misc/brick1100/Notation.vue';
</script>

<SponsorAd />

Annotation: <Notation icon="android" list />, <Notation icon="ios" list />, <Notation icon="premium" list />

## 2026

### `1.4.0` (Jun 29, 2026)

- Added animated menu icons
- Optimized [Space Impact +](./games.md#space-impact)
- Several bug fixes and improvements behind the scenes

### `1.3.1` (Apr 22, 2026)

- Fixed audio issues
- Fixed Chrome Dino not opening

### `1.3.0` (Apr 13, 2026)

- Added 5110 phone model (Menu > Settings > Phone settings > Model) <Notation icon="premium" />
- Added new built-in game: [Wordee](./games.md#wordee) (Menu > Games > Wordee)
- Added Screensavers (Menu > Extras > Screensavers)
- Optimized popup ads for better experience
- Trial can only be used once per day, but has duration extended to 30 mins

### `1.2.0` (Jan 31, 2026)

- Added new built-in game: [Space Impact +](./games.md#space-impact) (Menu > Games > Space Impact +)
- Added new built-in game: [Rapid Roll](./games.md#rapid-roll) (Menu > Games > Rapid Roll)
- Added new built-in game: [Tappy Duck](./games.md#tappy-duck) (Menu > Games > Tappy Duck)
- Game splash screens can now be skipped by pressing any key
- Fixed an issue with [Snake](./games.md#snake) game not working on some devices <Notation icon="android" />
- Fixed an issue with phone keys not working properly

## 2025

### `1.1.1` (Jul 5, 2025)

- Fixed issue downloading files in [Minicloud](./apps#minicloud) <Notation icon="ios" /><Notation icon="android" />

### `1.1.0` (Jun 27, 2025)

Starting with this version, Brick 1100 is now available on web! You can access it at [https://brick1100.visnalize.com](https://brick1100.visnalize.com). This version is not released on <Notation icon="ios" list /> due to technical issues, we are working on resolving them.

**UPDATE (Jun 30, 2025)**: This version is now also available on <Notation icon="ios" list /> 🥳

- Added Security settings (Menu > Security settings)
- Added option to change carrier name (Menu > Settings > Phone settings > Carrier name)
  - Default PIN code: 1234
  - Default security code: 12345
- Added some secret codes
- Added [Minicloud](./apps#minicloud) (Menu > Extras > Minicloud): minimal file storage and transfer solution
- Added [Snake](./games.md#snake) Campaign Mode

### `1.0.0` (Apr 11, 2025)

Welcome to the first stable release of Brick 1100! This version includes a plethora of new features, enhancements, and bug fixes to improve your experience. You can learn more about the new features in details from this [blog post](../blog/brick-1100-v1.md). Below is a list of the major changes:

- Added sample tones for Composer
- Added free mode for Composer
- Added message saving capability (draft messages)
- Added "Night" profile (Menu > Profile > Night) <Notation icon="premium" />
- Added option to backup/restore data with account (Menu > Settings > Account settings > Manage data)
- Added One-tap mode for Flashlight <Notation icon="premium" />
- Added 3310 phone model (Menu > Settings > Phone settings > Model) <Notation icon="premium" />
- Added custom app icons based on selected phone model
- Added Trial with ad option (Menu > Subscription settings > Trial)
- Added new levels and major enhancements for Brick Breaker
- Added new levels, start booster, and other enhancements for Monogram
- Enhanced audio quality and stability
- Enhanced phone screen for a more realistic experience
- Fixed an issue with the editor not scrolling properly
- Reset Chrome Dino leaderboard to fix score display issue <Notation icon="ios" />

While the app is now considered stable, there might still be minor issues that we will address in future updates. If you encounter any issues or have suggestions, please reach out via our [Discord server](https://discord.gg/6AQDnZa4Xm) or

## Beta versions

### `0.0.14` (Mar 6, 2025)

- Added [Builders](./builders.md) program info (Menu > Online > Builders)
- Added Online Games (Menu > Online > Online Games)
- Added Composer (Menu > Extras > Composer)
- Fixed an issue with saved tones not appearing in Files <Notation icon="ios" />

### `0.0.13` (Sep 24, 2024)

- Fixed audio issues
- Fixed call/dialer not opening <Notation icon="ios" />
- Fixed deep links not working <Notation icon="ios" />
- Added [Shortcut maker](./apps#shortcut-maker) (Menu > Extras > Utilities > Shortcut maker) <Notation icon="android" /><Notation icon="premium" />

### `0.0.12` (Sep 22, 2024)

_Minor bug fixes._

### `0.0.11` (Aug 17, 2024)

- Fixed [Monogram](./games.md#monogram) game showing up blank

### `0.0.10` (Aug 10, 2024)

- Added Time settings (Menu > Settings > Time)
- Added [Calendar](./apps.md#calendar) (Menu > Extras > Calendar)
- Added Apple login (Menu > Settings > Account settings)
- Added achievements for Snake & Chrome Dino games
- Close app on Switch Off

### `0.0.9` (Jun 24, 2024)

- Added leaderboards/score ranking for [games](./games.md)
- Added in-app achievements - you can now unlock Google Play Games achievements while exploring the app (Menu > Extras > Achievements)
- Added new online app: BMI Calculator (Menu > Online > Online apps > BMI Calculator)
- Added in-app purchases (Menu > Settings > Subscription settings)

### `0.0.8` (Dec 2, 2023)

_Minor bug fixes._

### `0.0.7` (Nov 4, 2023)

- Added new built-in game: [Monogram](./games.md#monogram) (Menu > Games > Monogram)
- Added user account (pretty much useless for now)
- Added ability to access the app using [deep links](./deep-links.md)
- You can now suggest, vote for feature ideas or report bugs via the [feedback forum](https://visnalize.com/brick1100/feedback)

### `0.0.6` (Oct 16, 2023)

_Minor bug fixes._

### `0.0.5` (Sep 30, 2023)

- Added new built-in game: [Chrome Dino](./games.md#chrome-dino) (Menu > Games > Chrome Dino)
- Fixed game audio issues

### `0.0.4` (Sep 27, 2023)

_Minor bug fixes._

### `0.0.3` (Sep 26, 2023)

_Minor bug fixes._

### `0.0.2` (Sep 26, 2023)

_Minor bug fixes._

### `0.0.1` (Sep 26, 2023)

The first beta release of the app with the core interface and functionalities implemented.

- A pixelated interface (fonts and icons) with a functional keypad.
- Contacts management (add, delete, edit contacts)
- Tones management (play and save tones, adjust keypad volume)
- Settings (change phone color)
- Reminders (add, delete, edit reminders)
- Built-in Games ([Snake](./games.md#snake), [Brick Breaker](./games.md#brick-breaker))
- Built-in Extras/Apps (Calculator, Stopwatch, Countdown Timer, Flashlight)
- An Online Apps section with curated apps for the Brick 1100
