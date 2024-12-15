---
title: Win7 Simu Changelog
description: Curious about the changes done through versions of the Win7 Simu app? Check the log at this page
comments: false
---

# Changelog

<a-google-ad />

## 2024

### 3.15.0 (Oct 31, 2024)

- [Windows Media Center](./simulated/wmc.md) slide shows can now be paused/stopped
- Updated Theme Studio [v1.3.0](./themestudio/changelog.md#_1-3-0-oct-31-2024)
- Bug fixes and improvements

### 3.14.0 (Oct 8, 2024)

- New features for [Windows Media Center](./simulated/wmc.md):
  - Songs, albums, pictures, and videos can now be deleted
  - Slideshows are now supported
  - Enhanced now playing list
  - Enhanced touch/swipe navigation on the Home Screen
- New features for [Notepad](../win7simu/simulated/notepad.md):
  - Status bar is now supported
  - Text files can now be saved as HTML documents
- Added [keyboard shortcuts](../win7simu/keyboard-shortcuts.md) for some common tasks and programs

### 3.13.1 (Sep 14, 2024)

__Core__

- Fixed an issue with social login not working properly
- You can now login/link with Apple account

__Android__

- Fixed an issue with app not working offline

### 3.13.0 (Sep 8, 2024)

- [Windows Media Center](./simulated/wmc.md) now supports music playlists
  - Create, edit, and delete playlists
  - Play all songs in a playlist
- Other bug fixes and improvements

### 3.12.1 (Aug 24, 2024)

- Fixed empty screen in [Windows Media Center](./simulated/wmc.md)'s Media Only mode

### 3.12.0 (Aug 13, 2024)

- [Windows Media Center](./simulated/wmc.md) new features:
  - Songs and pictures can now be rated
  - Play favourite songs/pictures is now functional
  - Added Media Only mode (WMC opens in full screen)
  - Other tweaks and enhancements
- Known issues: The simulator does not work on certain Android 10 devices. A fix is being attempted, but there will be delay due to technical difficulties. Sorry for the inconvenience.

### 3.11.2 (June 20, 2024)

- Fix Theme Studio Public Gallery showing empty
- Other bug fixes and improvements

### 3.11.1 (June 19, 2024)

- Bug fixes, attempt to address the black screen issue after boot on some devices

### 3.11.0 (June 18, 2024)

- PDF files are now supported (you can open them with Chrome)
- Fixed desktop zoom issue
- Known issues: The simulator does not work on certain Android 10 devices. A fix is being attempted, but there will be delay due to technical difficulties

### 3.10.0 (June 7, 2024)

- Fixed double tap issue with desktop icons
- Added premium theme: Aero Noir
- Added new themes: Windows Longhorn (Slate, Plex)
- Complete [Windows Media Center](./simulated/wmc.md)'s Music Library features:
  - Song details now accessible from album details
  - Option to clear the Now Playing list
  - Added artists, songs, composers, genres, years, and album artists views
  - Detail view is now fully functional
  - The "Play all" button should now work properly
- Known issues: The simulator does not work on certain Android 10 devices. A fix is being attempted, but there will be delay due to technical difficulties

### 3.9.0 (Apr 13, 2024)

- 💥 BREAKING CHANGE: enhance file read/write operations to support large files and avoid crash.
  - Computer now reads/writes files from/to a different location, you previous files can still be found at `Android/data/win7simu.visnalize.com/files` but will no longer be accessible from the app.
- You can now select multiple desktop items and drag to move
- Added [Windows Media Center](./simulated/wmc.md) (alpha). With this version, you can:
  - View a single photo or play slideshow of several photos
  - Play a full music album
  - Play videos
  - Several play modes: loop, repeat, shuffle
  - Personalize settings

### 3.8.1 (Jan 29, 2024)

- Fixed an issue with the boot themes in BIOS setup

### 3.8.0 (Jan 29, 2024)

__Core__

- Added new themes to Windows XP variants pack: Royale Noir, Embedded
- Added ZIP support. You can now view or extract .zip content
- Fixed an issue with desktop icons not aligned correctly
- Fixed an issue with Paint not opening file

__Web__

- You can now drag and drop files onto desktop/File Explorer to upload

### 3.7.0 (Jan 14, 2024)

__Core__

- You can now access files from device via "Upload files here" in context menu
- Added [File Explorer](./simulated/fileexplorer.md) view modes
- Added premium themes: Ubuntu, Windows XP variants (Olive Green, Royale, Silver, Zune)
- Major updates to Mouse settings and cursor
  - Added MacOS and Ubuntu cursor sets
  - Added pointer options tab
- Enhanced components' visual across multiple themes

__Web__

- Replaced Patreon with a new billing platform
- Display custom cursor matching mouse settings
- Enhanced Assistive control panel

## 2023

### 3.6.1 (Dec 28, 2023)

- Fixed an issue with the System (C:) drive

### 3.6.0 (Dec 24, 2023)

__Core__

- Improved visual accuracy across several themes
- Adjusted Calculator's visual across different themes
- Added Program Installer
- Added BSOD Customizer
- Added new theme: Windows 11 dark
- Added new theme: Kubuntu (KDE Plasma)

__Android__

- Fixed File Explorer not working on Android 11+, removed Android (A:) drive

__Web__

- Added "Download" option in item menu

### 3.5.0 (Nov 19, 2023)

__Core__

- Major visual enhancements to the taskbar and start menu across different themes
- Added ChromeOS boot + login screen
- Added language support for: Persian, Bengali, Indonesian
- Fixed shutdown screen for MacOS and ChromeOS themes

__Android__

- Added more display zoom options (at 70 and 85%)

### 3.4.0 (Oct 6, 2023)

__Core__

- Added new theme: ChromeOS
- Fixed win8/win10 start menu grid item alignment
- Fixed battery gadget text alignment

__Android__

- Add yearly subscription to remove ads
- Fix missing cursor in RTL mode

### 3.3.1 (Aug 4, 2023)

- Fixed [Chrome](./simulated/chrome.md) tab issue

### 3.3.0 (Aug 3, 2023)

- Improve performance of window animations
- Added language support for: Arabic
- Added Region and Language - you can now switch display language from the within the app
- Corrected social login auth redirect URL to the official domain (visnalize.com)
- Fixed "View other accounts" section

### 3.2.0 (Jul 25, 2023)

__Core__

- You can now login/link with social accounts (supported platforms: Google, Github)

__Android__

- Fixed restore purchase across devices not working

### 3.1.0 (Jul 10, 2023)

__Core__

- Updated Theme Studio [v1.2.0](./themestudio/changelog.md#_1-2-0-jul-10-2023)

__Android__

- Fixed app crash/black screen after the Starting Windows animation

__Web__

- Fixed Theme Studio's Properties window placement

<a-google-ad />

### 3.0.4 (Jun 24, 2023)

- Fixed shadow-enabled cursor showing an outer box
- Fixed Computer drives not opening on Android 10
- Several bug fixes for other older Android versions

### 3.0.3 (Jun 10, 2023)

- Fixed Themestudio desktop preview missing icons
- Fixed Android zoom issue
- Fixed Android status bar visibility issue on certain devices

### 3.0.2 (May 23, 2023)

- Fixed Android crash when opening large media files

### 3.0.1 (May 21, 2023)

- Fixed adding shortcuts to desktop not working
- Fixed Windows boot animation not visible on Safari

### 3.0.0 (May 20, 2023)

__Core__

- Fully functional [File Explorer](./simulated/fileexplorer.md) with basic features:
  - Folder management (create, delete, copy/paste)
  - File management (view, create, edit, rename, copy/paste)
  - Item's context menu (right click/hold your finger)
  - (Now you need to double-tap on an item to open)
- Fully functional Recycle Bin
- Improved file opening/saving mechanism across several simulator programs (Notepad, Paint, Wordpad, etc.)
- 💥 BREAKING CHANGE: desktop shortcuts are wiped out due to the structural changes of File Explorer (no Android/system files are harmed) - please take a screenshot of your desktop as a backup measure before updating.

__Web__

- Fixed the issue with Safari where right-click (hold finger on touch devices) was not working
- Fixed some other styling issues on Safari

### 2.28.0 (Apr 5, 2023)

__Core__

- Added [Comfy Cakes](./simulated/purbleplace.md)
- Minor bugfixes and improvements

__Web__

- Win7 Simu is now [installable](../blog/win7-simu-mobile-devices.md) from your browser

### 2.27.0 (Mar 13, 2023)

__Core__

- Added Winver
- Added [Programs and Features](./simulated/programs.md)
- Updated Theme Studio [v1.1.0](./themestudio/changelog.md#_1-1-0-mar-13-2023)
- Fixed the issue with account picture

__Android__

- Added device's push notification as system notification

### 2.26.2 (Feb 24, 2023)

- Fixed missing desktop background & icons

### 2.26.1 (Feb 23, 2023)

- Added Window mode for [Snipping Tool](./simulated/snipping.md)
- Fixed the Leaked_Taskbar BSOD issue for Windows 11 theme
- Fixed broken Windows 10 Start menu

### 2.26.0 (Feb 19, 2023)

- Added [Theme Studio](./themestudio.md)
- Fixed screensaver not working for user accounts
- Improved [Snipping Tool](./simulated/snipping.md)'s quality

## 2022

### 2.25.0 (Dec 29, 2022)

- Desktop shortcuts are now moveable (you now need to double tap on a shortcut to open)
- Added macOS boot + login screen
- Added shutdown button on Windows 7/Vista login screen
- Improved translation accuracy
- Fixed an issue with the Shutdown menu commands not working in Win2k and Win95 themes

### 2.24.0 (Nov 19, 2022)

__Core__

- Added [Magnifier](./simulated/magnifier.md)
- Improved visual accuracy of Windows elements (buttons, window controls, toolbar, context menu etc.)

__Android__

- Fixed an issue with some games not loading

### 2.23.1 (Sep 30, 2022)

__Core__

- Added MacOS launchpad animation

__Android__

- Revoked QUERY_ALL_PACKAGES permission to comply with Google Play policy. Note that this has an impact on the Start Menu as it won't show all the apps available on your device if you are using Android 12 or later.
- Improved user experience with ads (ask for a confirmation before showing ads)

__Web__

- Added Assistive Control to support some external interactions.
- Improved user experience with ads (removed the giant banner ad)
- Fixed button color on Safari

### 2.23.2 (Oct 15, 2022)

- Improved web browsers (IE, Chrome) behavior

### 2.23.0 (Sep 25, 2022)

__Core__

- Added MacOS theme
- Added some window animations (open, close, minimize)
- Added language support for: Chinese Simplified
- Improved taskbar tray icons

__Android__

- Fixed the watermark issue as it still appears when subscription has already been purchased
- Fixed an issue on Android 12+ not showing all packages/apps in Start Menu

__Web__

- Fixed right click (hold gesture) issue on Safari

<a-google-ad />

### 2.22.2 (Sep 10, 2022)

__Core__

- Improved Russian translations (huge thanks to [Stysan](https://crowdin.com/profile/stysan))

__Android__

- Fixed fullscreen issue when the keyboard is visible
- Fixed some other crash issues

### 2.22.1 (Aug 6, 2022)

__Android__

- Black screen hotfix.

### 2.22.0 (Aug 6, 2022)

__Core__

- Added language support for: Catalan

__Android__

- Added monthly subscription to remove ads

### 2.21.0 (Jun 10, 2022)

- You can now change theme color (Windows 7 aero themes only)
- Added dummy Windows Installer
- Improved translations for: Japanese, Polish, Portuguese and Russian. Huge thanks to the contributors
- Fixed account creation issue

### 2.20.0 (Jan 4, 2022)

- Major improvements for My Computer
- You can now browse location to save file
- You can download the file (web version only)
- You can now create folders and text documents on desktop
- Added language support for: Japanese
- Added several Online games

## 2021

### 2.19.0 (Nov 7, 2021)

- Added new theme: Windows 3.1
- Added language support for: French
- BSOD is now theme-compliant

### 2.18.0 (Oct 15, 2021)

- Added Run
- Added [Task Manager](./simulated/taskmgr.md)
- Added Taskbar properties

### 2.17.0 (Oct 3, 2021)

- Added [WordPad](./simulated/wordpad.md)
- Added language support for: Thai

### 2.16.0 (Sep 18, 2021)

- Added [BIOS setup](./simulated/bios.md)
- Boot animation, logon screen can now be changed via BIOS
- Shutdown screen is now associated with account's theme

### 2.15.0 (Sep 8, 2021)

- Added [Sound Recorder](./simulated/recorder.md)
- Added new theme: Windows 95
- Improved Windows 11 start menu

### 2.14.0 (Aug 28, 2021)

- Added [Sticky Notes](./simulated/sticky.md)
- Added Camera
- My Computer can now open audio and video files from Android.

### 2.13.0 (Aug 18, 2021)

- Added [Screensaver](./simulated/personalize.md)
- Added new [gadget](./simulated/gadgets.md): Battery
- Improved window's behavior (added active state, removed resizing frame, fixed several bugs)
- Fixed some issues with Windows Media Player

### 2.12.0 (Aug 7, 2021)

- You can now pin programs to taskbar
- Added new game: [Solitaire](./simulated/solitaire.md)
- Added new CMD commands: shutdown, start, color

### 2.11.1 (Jul 27, 2021)

- Home/launcher setting is disabled from the app due to instability.

### 2.11.0 (Jul 23, 2021)

- Added new theme: Windows 11
- You can now zoom the display for a better experience
- You can now switch the launcher directly from [Control Panel](./simulated/cpanel.md)

### 2.10.0 (Jul 4, 2021)

- You can now use the simulator as a home/launcher app (beta)
- Added new theme: Windows 2000
- Added right click menu for Start Menu programs
- Added easter egg: Chrome dino game
- Added easter egg: bring Control Panel to desktop

<a-google-ad />

### 2.9.0 (Jun 21, 2021)

- Added option to create desktop shortcuts
- Added new [gadget](./simulated/gadgets.md): Weather
- Added more BSOD triggers

### 2.8.0 (Jun 10, 2021)

- Added [Chrome](./simulated/chrome.md)
- Added new game: Classic Tetris
- Added new [gadget](./simulated/gadgets.md): Currency

### 2.7.0 (May 23, 2021)

- Added language support for: Spanish
- Desktop background is now customizable
- My Computer can now access files from Android (photos, text)
- Addressed the issue with IE unable to access the internet

### 2.6.0 (May 14, 2021)

- Added [Windows Gadgets](./simulated/gadgets.md): Clock, Calendar
- Improved Taskbar's Calendar
- Improved Desktop Menu interface
- Optimized app's launch time

### 2.5.0 (Apr 29, 2021)

- Added Mouse
- Fixed battery missing from taskbar

### 2.4.0 (Apr 15, 2021)

- Added [Purble Shop](./simulated/purbleplace.md)

## 2020

### 2.3.3 (Aug 18, 2020)

- Fixed issue with Windows Media Player

### 2.3.2 (Aug 16, 2020)

- Added new theme: Windows Vista
- Fixed display scaling issue on different screen sizes

### 2.3.1 (Jul 31, 2020)

- Added language support for: Turkish, Polish and Ukrainian
- Fixed theme not persisting on Guest account
- Fixed Comfy Cakes being displayed (the game is still in development)

### 2.3 (Jul 22, 2020)

- Added language support for: German, Portuguese, Russian, Vietnamese
  - The display language is automatically selected based on device's language.

### 2.2 (Jul 11, 2020)

- Added [Paint](./simulated/paint.md)
- Added an account creation option

### 2.1 (Jun 13, 2020)

- Screen orientation is locked to landscape to provide the best experience and reduce display issues on different screen sizes.
- Text files, screen captures can now be saved
- Notepad settings are sync with user account
- Added new theme: Windows XP
- Added Shutdown screen

### 2.0 (May 30, 2020)

- Added online user accounts
  - Create and log on/off with user account
  - Sync your settings, themes and more
  - Manage your account in Control Panel
- Added new themes
  - Windows 8 with the unique Start Screen
  - Windows 8.1, Windows 10 with the brand new looks

### 1.2.2 (May 9, 2020)

- Addressed the black screen issue on Android 6.0 and earlier

### 1.2.1 (May 3, 2020)

- Adjusted the size of UI elements
- Fixed and enhanced Internet Explorer
- Allow screen orientation (excluding Games which will remain locked for the best experience)

### 1.2 (Apr 16, 2020)

- Added [Minesweeper](./simulated/minesweeper.md)
- Added [Purble Place](./simulated/purbleplace.md) (Purble Pairs)
- Selected theme is now cached
- Screen orientation is locked to portrait to prevent unexpected behavior

### 1.1 (Feb 27, 2020)

- Added [Command Prompt](./simulated/cmd.md)
- Added [Control Panel](./simulated/cpanel.md)
- Added Shutdown + Restart options

### 1.0 (Feb 16, 2020)

First release with the basic Windows GUI and functionalities:

- Interactive desktop, windows, start menu, taskbar
- [Personalization](./simulated/personalize.md)
- [Calculator](./simulated/calculator.md)
- [Internet Explorer](./simulated/ie.md)
- [Notepad](./simulated/notepad.md)
- [Snipping Tool](./simulated/snipping.md)
- [Media Player](./simulated/media-player.md)

<a-google-ad />
