import { HeadConfig } from "vitepress";
import { ADSENSE_ID } from "../theme/constants";

const head: HeadConfig[] = [
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

  // Monetumo ----------------------------------------------------------------
  [
    "link",
    {
      rel: "stylesheet",
      href: "https://b-cdn.monetumo.com/cls-css/visnalize-com.css",
    },
  ],
  [
    "script",
    {
      src: "https://b-cdn.monetumo.com/cmp/visnalize-com.js",
      "data-cfasync": "false",
    },
  ],
  [
    "script",
    {
      async: "true",
      src: "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
    },
  ],
  [
    "script",
    {
      defer: "true",
      src: "https://b-cdn.monetumo.com/bundles/visnalize-com.js",
      "data-cfasync": "false",
    },
  ],
];

export default head;
