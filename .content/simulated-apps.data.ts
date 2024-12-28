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
      "Change boot theme",
      "Enable or disable boot logo",
      "Enable or disable dummy installer",
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
      "Support various Windows versions",
      "Customize text, color, and font size",
      "Export as image",
    ],
    videos: [],
  },
  {
    slug: "calculator",
    title: "Calculator",
    description:
      "Allows you to perform basic arithmetic calculations, such as addition, subtraction, multiplication, and division",
    version: "1.0.0",
    features: [
      'Basic arithmetic operations: "+", "-", "*", "/"',
      'Advanced operations: "sqrt", "pow", "log"',
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
      "Record videos (soon)",
      "Switch between front and back camera",
    ],
    videos: [],
  },
  {
    slug: "chrome",
    title: "Chrome",
    description:
      "Allows you to browse the web with the Google Chrome browser interface in Win7 Simu",
    version: "2.8.0",
    features: ["Browse the web", "Open multiple tabs", "Search with Google"],
    videos: ["KFX3kw8z_v4"],
  },
  {
    slug: "cmd",
    title: "Command Prompt",
    description:
      "Allows you to perform various tasks, such as running programs, executing commands, and managing files and directories in Win7 Simu",
    version: "1.1.0",
    features: [
      "Run programs",
      "Execute commands",
      "Manage files and directories",
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
      "View and modify system settings",
      "Install and uninstall programs",
      "Manage user accounts",
      "Change system language",
    ],
    videos: ["EZytvtBOwqY", "mmASPwCBHHU", "HQvhpQK8LM4", "bFVJqP7UtCE"],
  },
  {
    slug: "fileexplorer",
    title: "File Explorer",
    description:
      "Allows you to manage files and folders in a simulated Windows 7 environment, including creating, deleting, and moving files and folders",
    version: "3.0.0",
    features: [
      "View files and folders",
      "Create new files and folders",
      "Delete files and folders",
      "Move files and folders",
      "Copy files and folders",
      "Search for files and folders",
      "View file properties",
    ],
  },
  {
    slug: "ie",
    title: "Internet Explorer",
    description:
      "Allows you to browse the web, search for information with Bing as the default search engine",
    version: "1.0.0",
    features: ["Browse the web", "Search with Bing"],
  },
  {
    slug: "magnifier",
    title: "Magnifier",
    description:
      "Allows you to control the magnification level of the screen for better viewing",
    version: "2.24.0",
    features: [
      "Magnify the screen",
      "Control the magnification level",
      "Change the view mode",
    ],
  },
  {
    slug: "mouse",
    title: "Mouse",
    description:
      "Allows you to customize the mouse settings in Win7 Simu, such as changing the cursor scheme, enabling pointer shadow, and more",
    version: "2.5.0",
    features: [
      "Change the cursor scheme",
      "Enable or disable pointer shadow",
      "Show or hide the pointer trails",
      "Show, hide, or highlight the pointer",
    ],
    videos: ["kXuxeiK1_M8"],
  },
  {
    slug: "minesweeper",
    title: "Minesweeper",
    description:
      "Lets you play the classic Minesweeper game, where you have to clear a minefield without detonating any mines. Can you beat your best time?",
    version: "1.2.0",
    features: ["Classic original gameplay", "Multiple difficulty levels"],
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
      "Save text files",
    ],
  },
  {
    slug: "paint",
    title: "Paint",
    description:
      "Allows you to create and edit images using various tools, such as brushes, shapes, text, colors, and more in Win7 Simu",
    version: "2.2.0",
    features: [
      "Draw with various tools",
      "Draw shapes",
      "Fill shapes with color",
      "Change line thickness and color",
    ],
  },
  {
    slug: "personalize",
    title: "Personalize",
    description:
      "Allows you to customize the appearance of your Win7 Simu, including the desktop background, window colors, sounds, screen saver, or altogether as a theme",
    version: "1.0.0",
    features: [
      "Change desktop background",
      "Change window colors",
      "Change screen saver",
      "Change theme",
    ],
    videos: ["GcPdlyfiqbs", "mM1qkwYVVvY"],
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
      "Uninstall programs",
      "Install new programs",
    ],
  },
  {
    slug: "purbleplace",
    title: "Purble Place",
    description:
      "Brings back the classic Purble Place game suite, which includes three mini-games, Purble Pairs, Comfy Cakes, and Purble Shop. Do you have what it takes to master all three games?",
    version: "1.2.0",
    features: [
      "Purble Pairs",
      "Comfy Cakes",
      "Purble Shop",
      "Multiple difficulty levels",
    ],
  },
  {
    slug: "run",
    title: "Run",
    description:
      "Allows you to quickly open programs, files, folders, and other items in the simulator",
    version: "2.18.0",
    features: ["Open programs", "Open files", "Open folders", "Open URLs"],
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
      "Capture region screenshots",
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
    features: ["Classic original gameplay", "Multiple game modes"],
    videos: ["kfbd3NVkmbs"],
  },
  {
    slug: "recorder",
    title: "Sound Recorder",
    description:
      "Lets you record sound from your microphone and save it as audio files in Win7 Simu",
    version: "2.15.0",
    features: ["Record sound", "Save audio files"],
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
      "Change note color",
    ],
    videos: ["mY1f-84FxEg"],
  },
  {
    slug: "taskmgr",
    title: "Task Manager",
    description:
      "Monitors and manages the applications, processes, and services running in Win7 Simu",
    version: "2.17.0",
    features: [
      "View running applications",
      "View running processes",
      "View running services (dummy)",
      "Start or end tasks, processes, and services",
    ],
  },
  {
    slug: "gadgets",
    title: "Windows Gadgets",
    description:
      "Brings you various gadgets that you can use to enhance your desktop experience in Win7 Simu, such as the Clock, Calendar, Weather, and more",
    version: "2.6.0",
    features: [
      "Clock gadget",
      "Calendar gadget",
      "Weather gadget",
      "Currency gadget",
      "Battery gadget",
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
      "Play media slideshows",
      "Manage playlists",
      "Favorite media",
      "View media library and details",
    ],
    videos: ["3pOc_3x4CQA"],
  },
  {
    slug: "media-player",
    title: "Windows Media Player",
    description:
      "Allows you to play music, videos, and photos in various formats supported by Win7 Simu, in a simple and efficient manner",
    version: "1.0.0",
    features: ["Play music", "Play videos", "View photos"],
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
      "Add formatting options (bold, italic, underline)",
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
      })
    );
  },
});
