import { HeadConfig } from "vitepress";
import { ADSENSE_ID } from "../theme/constants";
import { organizationSchema } from "./schema";

const head: HeadConfig[] = [
  // Organization structured data (site-wide) --------------------------------
  [
    "script",
    { type: "application/ld+json" },
    JSON.stringify(organizationSchema),
  ],
  // Favicon ----------------------------------------------------------------
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-96x96.png",
      sizes: "96x96",
    },
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
  ],
  [
    "link",
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
  ],
  [
    "link",
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
  [
    "link",
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],

  // Font preloading --------------------------------------------------------
  [
    "link",
    {
      rel: "preload",
      href: "/assets/fonts/fsp-demo-semi.woff2",
      as: "font",
      type: "font/woff2",
      crossorigin: "anonymous",
    },
  ],

  // Google Tag Manager -----------------------------------------------------
  [
    "script",
    {
      async: "true",
      src: "https://www.googletagmanager.com/gtag/js?id=G-TRC2SF4L67",
    },
  ],
  [
    "script",
    {},
    "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-TRC2SF4L67');",
  ],

  // Adsense ----------------------------------------------------------------
  [
    "script",
    {
      async: "true",
      "data-ad-client": "ca-pub-" + ADSENSE_ID,
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    },
  ],
];

export default head;
