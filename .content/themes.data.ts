import { defineLoader } from "vitepress";

interface ThemeData {
  /** ID for the cover image */
  id: string;
  slug: string;
  title: string;
  features?: string[];
  bundle?: string;
  premium?: "pay" | "ad";
  isOriginal?: boolean;
}

declare const data: ThemeData[];

export { data };

export const themes: ThemeData[] = [
  {
    id: "aero-1",
    slug: "win7",
    title: "Windows 7",
  },
  {
    id: "aero-2",
    slug: "win7-architecture",
    title: "Architecture",
  },
  {
    id: "aero-3",
    slug: "win7-landscape",
    title: "Landscape",
  },
  {
    id: "aero-4",
    slug: "win7-nature",
    title: "Nature",
  },
  {
    id: "basic-1",
    slug: "win7-basic",
    title: "Windows 7 Basic",
  },
  {
    id: "basic-2",
    slug: "win7-classic",
    title: "Windows 7 Classic",
  },
  {
    id: "basic-3",
    slug: "win7-contrast-black",
    title: "High Contrast Black",
  },
  {
    id: "basic-4",
    slug: "win7-contrast-white",
    title: "High Contrast White",
  },
  {
    id: "win31",
    slug: "win3-1",
    title: "Windows 3.1",
    features: ["Start menu replaced by Windows 3.1 Program Manager"],
  },
  {
    id: "win95",
    slug: "win95",
    title: "Windows 95",
  },
  {
    id: "win98",
    slug: "win98",
    title: "Windows 98",
  },
  {
    id: "win2k",
    slug: "win2000",
    title: "Windows 2000",
  },
  {
    id: "winxp",
    slug: "winxp",
    title: "Windows XP",
  },
  {
    id: "winxpE",
    slug: "winxp-embedded",
    title: "Windows XP (Embedded)",
    bundle: "Windows XP variants",
    premium: "pay",
  },
  {
    id: "winxpG",
    slug: "winxp-olive-green",
    title: "Windows XP (Olive Green)",
    bundle: "Windows XP variants",
    premium: "pay",
  },
  {
    id: "winxpN",
    slug: "winxp-royale-noir",
    title: "Windows XP (Royale Noir)",
    bundle: "Windows XP variants",
    premium: "pay",
  },
  {
    id: "winxpR",
    slug: "winxp-royale",
    title: "Windows XP (Royale)",
    bundle: "Windows XP variants",
    premium: "pay",
  },
  {
    id: "winxpS",
    slug: "winxp-silver",
    title: "Windows XP (Silver)",
    bundle: "Windows XP variants",
    premium: "pay",
  },
  {
    id: "winxpZ",
    slug: "winxp-zune",
    title: "Windows XP (Zune)",
    bundle: "Windows XP variants",
    premium: "pay",
  },
  {
    id: "winvista",
    slug: "winvista",
    title: "Windows Vista",
  },
  {
    id: "win8",
    slug: "win8",
    title: "Windows 8",
    features: ["Start menu replaced by Windows 8 Start Screen"],
  },
  {
    id: "win81",
    slug: "win8-1",
    title: "Windows 8.1",
  },
  {
    id: "win10",
    slug: "win10",
    title: "Windows 10",
  },
  {
    id: "win11",
    slug: "win11",
    title: "Windows 11 (Light)",
  },
  {
    id: "win11dark",
    slug: "win11-dark",
    title: "Windows 11 (Dark)",
  },
  {
    id: "macos",
    slug: "macos",
    title: "MacOS",
    features: [
      "Taskbar replaced by MacOS Dock",
      "Start menu replaced by MacOS Launchpad",
    ],
  },
  {
    id: "chromeos",
    slug: "chromeos",
    title: "ChromeOS",
  },
  {
    id: "ubuntu",
    slug: "ubuntu",
    title: "Ubuntu",
    premium: "pay",
    features: [
      "Taskbar replaced by Ubuntu Dock",
      "Start menu replaced by Ubuntu Activities Overview",
    ],
  },
  {
    id: "kubuntu",
    slug: "kubuntu-breeze",
    title: "Kubuntu (Breeze)",
  },
  {
    id: "winLS",
    slug: "win-longhorn-slate",
    title: "Windows Longhorn (Slate)",
  },
  {
    id: "winLP",
    slug: "win-longhorn-plex",
    title: "Windows Longhorn (Plex)",
  },
  {
    id: "aeronoir",
    slug: "aeronoir",
    title: "Aero Noir",
    premium: "pay",
    isOriginal: true,
  },
  {
    id: "oxygen",
    slug: "oxygen",
    title: "Oxygen",
    premium: "pay",
    isOriginal: true,
  },
  {
    id: "winW",
    slug: "winwhistler",
    title: "Windows Whistler",
  },
];

export default defineLoader({
  async load() {
    return themes;
  },
});
