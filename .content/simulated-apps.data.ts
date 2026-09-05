import { defineLoader } from "vitepress";

export interface App {
  slug: string;
  title: string;
  description: string;
  version: string;
  features: string[];
  videos?: string[];
}

declare const data: App[];

export { data };

export const apps: App[] = [
  {
    slug: "bios",
    title: "BIOS Setup Utility",
    description:
      "Allows you to view system information and configure supported boot settings for your Win7 Simu",
    version: "2.16.0",
    features: [
      "View system information",
      "Change the boot animation and logon screen theme",
      "Enable instant boot to skip the boot screen",
      "Enable or disable the dummy Windows installer",
      "Save, discard, or restore the default settings",
    ],
    videos: ["rSTpru9kxfA"],
  },
  {
    slug: "bsod",
    title: "BSOD Customizer",
    description:
      "Allows you to create and customize your own Blue Screen of Death (BSOD) error messages in Win7 Simu",
    version: "3.6.0",
    features: [
      "Create custom BSOD error messages",
      "Pick the BSOD style of different Windows versions",
      "Edit every text on the screen, including the error code",
      "Customize text color and font size",
      "Preview the result in fullscreen",
      "Export as image",
    ],
    videos: [],
  },
  {
    slug: "calculator",
    title: "Calculator",
    description:
      "Allows you to perform arithmetic calculations and more advanced mathematical operations similar to the Windows 7 Calculator",
    version: "1.0.0",
    features: [
      "Standard mode with basic arithmetic operations",
      "Scientific mode with advanced mathematical functions",
      "Programmer mode with number bases and bit toggling",
      "Statistics mode with a dataset of up to 2000 entries",
      "Unit conversion and date calculation layouts",
      "Worksheets for mortgage, vehicle lease, and fuel economy",
      "Calculation history and digit grouping",
      "Memory functions",
    ],
    videos: ["QaMVOF3bvgA"],
  },
  {
    slug: "camera",
    title: "Camera",
    description:
      "Allows you take photos and record videos using your device's camera in Win7 Simu",
    version: "2.14.0",
    features: [
      "Take photos and save as jpg",
      "Switch between front and back camera",
      "Choose the capture resolution and image quality",
      "Record videos (soon)",
    ],
    videos: [],
  },
  {
    slug: "chess",
    title: "Chess Titans",
    description:
      "Brings back the classic Chess Titans game, where you can play against the computer or a friend. Do you have what it takes to checkmate your opponent?",
    version: "3.18.0",
    features: [
      "Play against the computer with 10 difficulty levels",
      "Play against a human opponent on the same device",
      "Support 3D and 2D (top-down view) modes",
      "Adjust game graphics and settings",
      "Customizable board and pieces",
      "In-game tips and statistics",
    ],
    videos: ["jTzBgkYh61I"],
  },
  {
    slug: "chrome",
    title: "Chrome",
    description:
      "Allows you to browse the web with the Google Chrome browser interface in Win7 Simu",
    version: "2.8.0",
    features: [
      "Browse the web in multiple tabs",
      "Search with Google, Bing, Yahoo, Baidu, Yandex, or DuckDuckGo",
      "Open incognito windows",
      "Manage bookmarks and browsing history",
      "Customize themes, home button, and startup pages",
      "Open PDF files",
    ],
    videos: ["KFX3kw8z_v4"],
  },
  {
    slug: "cmd",
    title: "Command Prompt",
    description:
      "Allows you to perform various tasks, such as running programs, executing commands, and managing files and directories in Win7 Simu",
    version: "1.1.0",
    features: [
      "Manage files and directories with dir, cd, md, rd, del, ren, copy, move, and tree",
      "Run and manage programs with start, tasklist, taskkill, and where",
      "View system information with systeminfo, ver, winver, hostname, ipconfig, and vol",
      "Filter and page output with find, sort, and more",
      "Customize the console with cls, color, and title",
      "Control the session with shutdown, logoff, and exit",
      "Trigger a Blue Screen of Death with the bsod command",
    ],
    videos: [
      "7BEDzHgpMdo",
      "c9f8GDfi-Qw",
      "7HDklRkwNFM",
      "qpm_yTfAeFo",
      "lraZzWzPVvc",
      "C4-npiwPNbQ",
    ],
  },
  {
    slug: "cpanel",
    title: "Control Panel",
    description:
      "Allows you to view and change system settings, install and uninstall programs, manage user accounts, and more in Win7 Simu",
    version: "1.1.0",
    features: [
      "Browse settings by the eight Windows 7 categories",
      "Manage user accounts and account pictures",
      "Install and uninstall programs from Programs and Features",
      "Review system messages and notifications in Action Center",
      "Customize the notification area icons",
      "Back up your files as an archive and restore them later",
      "Change the display language from Region and Language",
      "Open the matching device settings on your device",
    ],
    videos: [
      "EZytvtBOwqY",
      "mmASPwCBHHU",
      "HQvhpQK8LM4",
      "bFVJqP7UtCE",
      "WjHbxsPHPyI",
    ],
  },
  {
    slug: "fileexplorer",
    title: "File Explorer",
    description:
      "Allows you to manage files and folders in a simulated Windows 7 environment, including creating, deleting, and moving files and folders",
    version: "3.0.0",
    features: [
      "Browse an accurate System (C:) drive hierarchy",
      "Create, rename, copy, move, and delete files and folders",
      "Search for items in the current folder",
      "Switch between view modes and use the navigation pane",
      "Upload files from your device and download them back",
      "View or extract ZIP archives and open PDF files",
      "Restore or permanently remove items from the Recycle Bin",
      "Access your device storage through the Android (A:) drive",
      "View file properties",
    ],
    videos: ["AzXjUkhkYt0"],
  },
  {
    slug: "ie",
    title: "Internet Explorer",
    description:
      "Allows you to browse the web, search for information with Bing as the default search engine",
    version: "1.0.0",
    features: ["Browse the web", "Search with Bing", "Add and open favorites"],
  },
  {
    slug: "magnifier",
    title: "Magnifier",
    description:
      "Allows you to control the magnification level of the screen for better viewing",
    version: "2.24.0",
    features: [
      "Magnify the screen from 100% up to 1600%",
      "Zoom in and out in steps from the floating toolbar",
      "Follow the pointer while the screen is magnified",
      "Works with mouse and touch devices",
    ],
  },
  {
    slug: "mouse",
    title: "Mouse",
    description:
      "Allows you to customize the mouse settings in Win7 Simu, such as changing the cursor scheme, enabling pointer shadow, and more",
    version: "2.5.0",
    features: [
      "Change the cursor scheme, including MacOS and Ubuntu cursor sets",
      "Enable or disable pointer shadow",
      "Show or hide the pointer trails",
      "Show, hide, or highlight the pointer",
      "Set where the pointer location indicator appears",
      "Enable touchpad control with optional virtual buttons (Android only)",
    ],
    videos: ["kXuxeiK1_M8"],
  },
  {
    slug: "minesweeper",
    title: "Minesweeper",
    description:
      "Lets you play the classic Minesweeper game, where you have to clear a minefield without detonating any mines. Can you beat your best time?",
    version: "1.2.0",
    features: [
      "Classic original gameplay",
      "Beginner, Intermediate, and Advanced difficulty levels",
      "Track your time and your best times",
      "View games played, games won, and win percentage",
    ],
  },
  {
    slug: "notepad",
    title: "Notepad",
    description:
      "Allows you to perform basic text editing tasks, such as creating, viewing, and editing text files in a simple and efficient manner",
    version: "1.0.0",
    features: [
      "Create new text files",
      "Open and edit existing text files",
      "Change text font and size",
      "Toggle word wrap and the status bar",
      "Insert the current date and time",
      "Save text files, including as HTML documents",
    ],
    videos: ["-NeEvZsFTM8"],
  },
  {
    slug: "paint",
    title: "Paint",
    description:
      "Allows you to create and edit images using various tools, such as brushes, shapes, text, colors, and more in Win7 Simu",
    version: "2.2.0",
    features: [
      "Draw with various tools (brushes, shapes, text, etc.)",
      "Draw shapes with adjustable outline, fill, and size",
      "Select, crop, resize, rotate, and flip images",
      "Pick and mix your own colors with Edit Colours",
      "Quick access toolbar with Undo, Redo, New, Open, and Save",
      "Zoom in and out, and toggle rulers, gridlines, and full screen",
      "Open and edit existing images",
      "Save images in different formats (jpg, png, bmp, etc.)",
    ],
  },
  {
    slug: "personalize",
    title: "Personalize",
    description:
      "Allows you to customize the appearance of your Win7 Simu, including the desktop background, window colors, sounds, screen saver, or altogether as a theme",
    version: "1.0.0",
    features: [
      "Change desktop background, including live and animated backgrounds",
      "Change window colors",
      "Change screen saver",
      "Change theme",
      "Create your own theme with Theme Studio",
    ],
    videos: ["GcPdlyfiqbs", "mM1qkwYVVvY", "elmUdvnyFcY"],
  },
  {
    slug: "installer",
    title: "Program Installer",
    description:
      "Allows you to install any web app on the desktop with provided URL, name, and icon in Win7 Simu",
    version: "3.6.0",
    features: [
      "Install web apps on the desktop",
      "Customize app name and icon",
      "Optionally create a desktop icon",
      "Walk through a familiar Windows setup wizard",
    ],
    videos: ["7vgx2c8Amrs"],
  },
  {
    slug: "programs",
    title: "Programs and Features",
    description:
      "Lets you manage the programs and features supported by Win7 Simu or install new ones",
    version: "2.27.0",
    features: [
      "View installed programs",
      "Uninstall or change programs",
      "Install new programs",
      "Turn Windows features on or off",
    ],
  },
  {
    slug: "purbleplace",
    title: "Purble Place",
    description:
      "Brings back the classic Purble Place game suite, which includes three mini-games, Purble Pairs, Comfy Cakes, and Purble Shop. Do you have what it takes to master all three games?",
    version: "1.2.0",
    features: [
      "Three mini-games: Purble Pairs, Comfy Cakes, and Purble Shop",
      "Beginner, Intermediate, and Advanced difficulty for every game",
      "In-game tips that guide you through each game",
      "Statistics and high scores kept per game",
      "Save a game and continue it later",
      "Original music and sound effects",
    ],
  },
  {
    slug: "purblepairs",
    title: "Purble Pairs",
    description:
      "Lets you play the memory matching mini-game of Purble Place, where you flip tiles to find every matching pair before the time runs out",
    version: "1.2.0",
    features: [
      "Beginner (5x5), Intermediate (6x6), and Advanced (8x8) boards",
      "Up to four stages per game on the higher difficulties",
      "Sneak Peek tokens that briefly reveal the board",
      "Optional timer on Intermediate and Advanced",
      "Time and flip bonuses added to your final score",
      "Ranks from Junior Detective up to Purble Master",
      "Save a game and continue it later",
    ],
  },
  {
    slug: "comfycakes",
    title: "Comfy Cakes",
    description:
      "Lets you play the cake baking mini-game of Purble Place, where you build each cake to match the order shown on the conveyor belt",
    version: "2.28.0",
    features: [
      "Beginner, Intermediate, and Advanced difficulty levels",
      "Option to work on one cake at a time",
      "Bake five to six correct cakes before the wrong ones run out",
      "Efficiency bonus added to your final score",
      "Ranks from Kitchen Trainee up to Master Chef",
      "Playable offline, no internet connection needed",
      "Save a game and continue it later",
    ],
  },
  {
    slug: "purbleshop",
    title: "Purble Shop",
    description:
      "Lets you play the guessing mini-game of Purble Place, where you dress up a Purble by working out its hidden combination of features",
    version: "2.4.0",
    features: [
      "Beginner, Intermediate, and Advanced difficulty levels",
      "Work out the hidden combination from the clues after each guess",
      "Score based on how few guesses you need",
      "Titles from Senior Detective up to Purble Master",
      "High scores kept in your statistics",
      "Requires an internet connection to play",
    ],
  },
  {
    slug: "run",
    title: "Run",
    description:
      "Allows you to quickly open programs, files, folders, and other items in the simulator",
    version: "2.18.0",
    features: [
      "Open programs by name or executable name",
      "Open Control Panel items such as main.cpl and desk.cpl",
      "Open files",
      "Open folders",
      "Open URLs",
    ],
  },
  {
    slug: "snipping",
    title: "Snipping Tool",
    description:
      "Allows you to quickly capture screenshots of your desktop, a window, or a specific region of your screen, and save it as an image file",
    version: "1.0.0",
    features: [
      "Capture fullscreen screenshots",
      "Capture window screenshots",
      "Capture rectangular screenshots",
      "Capture free-form screenshots",
      "Save as image files",
    ],
    videos: ["NjolqP8XPfk"],
  },
  {
    slug: "solitaire",
    title: "Solitaire",
    description:
      "Brings back the classic card game with a nostalgic look and feel of the Windows 7 version",
    version: "2.12.0",
    features: [
      "Classic original gameplay",
      "Draw one and draw three game modes",
      "Undo your last move",
      "Change the card back appearance",
      "Track score, time, and statistics",
      "The original win animation when you clear the board",
    ],
    videos: ["kfbd3NVkmbs"],
  },
  {
    slug: "spidersolitaire",
    title: "Spider Solitaire",
    description:
      "Brings back the classic Spider Solitaire game, where you build runs of cards in the same suit and send all eight of them home",
    version: "4.6.0",
    features: [
      "Beginner (one suit), Intermediate (two suits), and Advanced (four suits)",
      "Ten columns with five more rows to deal from the stock",
      "Undo your last move",
      "Change the card back appearance, shared with Solitaire",
      "Track score, moves, and statistics",
      "The original win animation when you clear the board",
    ],
  },
  {
    slug: "recorder",
    title: "Sound Recorder",
    description:
      "Lets you record sound from your microphone and save it as audio files in Win7 Simu",
    version: "2.15.0",
    features: [
      "Record sound from your microphone",
      "Watch the recording level while you record",
      "Save recordings as wav files",
    ],
  },
  {
    slug: "sticky",
    title: "Sticky Notes",
    description:
      "Allows you to create and manage colorful sticky notes on your desktop in Win7 Simu",
    version: "2.14.0",
    features: [
      "Create new sticky notes",
      "Stick notes to desktop",
      "Edit notes",
      "Drag and resize notes anywhere on the desktop",
      "Change note color (blue, green, pink, purple, white, yellow)",
    ],
    videos: ["mY1f-84FxEg"],
  },
  {
    slug: "taskmgr",
    title: "Task Manager",
    description:
      "Monitors and manages the applications, processes, and services running in Win7 Simu",
    version: "2.18.0",
    features: [
      "View running applications",
      "View running processes",
      "View running services (dummy)",
      "Start or end tasks, processes, and services",
    ],
  },
  {
    slug: "tetris",
    title: "Classic Tetris",
    description:
      "Brings the classic block-stacking arcade game to the Win7 Simu desktop, complete with levels, sound effects, and high scores",
    version: "2.8.0",
    features: [
      "Classic block-stacking gameplay with rising levels",
      "Rotate, move, and drop pieces with the mouse or your finger",
      "Pause and resume, or start a new game at any time",
      "High scores by level, score, and lines",
      "Track games played, games completed, and completion rate",
      "Original sound effects and background music",
    ],
  },
  {
    slug: "gadgets",
    title: "Windows Gadgets",
    description:
      "Brings you various gadgets that you can use to enhance your desktop experience in Win7 Simu, such as the Clock, Calendar, Weather, and more",
    version: "2.6.0",
    features: [
      "Clock gadget with several clock faces",
      "Calendar gadget",
      "Weather gadget",
      "Currency gadget (USD and EUR)",
      "Battery gadget",
      "Place gadgets anywhere on the desktop",
    ],
    videos: ["-DZ28VjV3kQ"],
  },
  {
    slug: "dummy-installer",
    title: "Windows Installer",
    description:
      "Mimics the installation process of the Windows operating system, it is a dummy installer and does not install any software",
    version: "2.21.0",
    features: [
      "Display a dummy Windows installer after boot",
      "Simulate installation progress",
    ],
    videos: ["C4-npiwPNbQ"],
  },
  {
    slug: "wmc",
    title: "Windows Media Center",
    description:
      "Allows you to play music, videos, photos, and more, with stunning visuals and animations",
    version: "3.9.0",
    features: [
      "Play various media (music, videos, and photos)",
      "Browse music by artists, songs, albums, composers, genres, and years",
      "Play media slideshows, with pause and stop",
      "Manage playlists",
      "Favorite and rate media",
      "View media library and details",
      "Choose the folders to search for media, or upload files directly",
      "Media Only mode that opens in full screen",
    ],
    videos: ["3pOc_3x4CQA", "76iih_qmNwA"],
  },
  {
    slug: "media-player",
    title: "Windows Media Player",
    description:
      "Allows you to play music, videos, and photos in various formats supported by Win7 Simu, in a simple and efficient manner",
    version: "1.0.0",
    features: [
      "Play music",
      "Play videos",
      "View photos",
      "Organize the library and manage library folders",
      "Build and play a playlist",
    ],
  },
  {
    slug: "photo-viewer",
    title: "Windows Photo Viewer",
    description:
      "Allows you to view and manage your photos in a quick and simple way, with support for various image formats and basic editing features",
    version: "2.7.0",
    features: [
      "Display all photos in the same folder as a slideshow",
      "Navigate between photos in the same folder",
      "View photos in their actual sizes or fit to the window",
      "View photos with different zoom levels",
      "Rotate photos 90-degree clockwise or counter-clockwise (and auto save)",
    ],
  },
  {
    slug: "wordpad",
    title: "WordPad",
    description:
      "Allows you to perform more advanced text editing tasks, such as creating, viewing, and editing rich text files with formatting options and more",
    version: "2.17.0",
    features: [
      "Create new rich text files",
      "Open and edit existing rich text files",
      "Change text font, size, and color",
      "Add formatting options (bold, italic, underline, strikethrough, highlight)",
      "Set paragraph alignment, indentation, and lists",
      "Insert pictures, and the current date and time",
      "Save rich text files",
    ],
  },
];

export default defineLoader({
  load() {
    return apps.sort((a, b) =>
      b.version.localeCompare(a.version, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    );
  },
});
