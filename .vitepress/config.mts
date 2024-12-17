import { readFileSync } from "fs";
import markdownItBlockEmbed from "markdown-it-block-embed";
import markdownItTasklists from "markdown-it-task-lists";
import { cwd } from "process";
import { fileURLToPath } from "url";
import { defineConfig } from "vitepress";
import head from "./config/head";
import navItems from "./config/nav";
import sidebar from "./config/sidebar";
import socialLinks from "./config/social";
import { transformPageData } from "./config/transformers";
import markdownItImage from "./plugins/md-image";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Visnalize",

  description:
    "Author of Win7 Simu and Brick 1100. On a mission to relive the good old days with simulation apps.",

  sitemap: {
    hostname: "https://visnalize.com",
  },

  head,

  lastUpdated: true,

  ignoreDeadLinks: (() => {
    const file = readFileSync(cwd() + "/public/_redirects");
    const links = file.toString().split("\n");
    return links.filter(Boolean).map((link) => link.split(" ")[0]);
  })(),

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "/favicon.png",

    nav: navItems,

    search: {
      provider: "local",
    },

    sidebar,

    aside: "left",

    outline: [2, 3],

    socialLinks: socialLinks.slice(0, 4),
  },

  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../", import.meta.url)),
        "@utils": fileURLToPath(new URL("./theme/utils", import.meta.url)),
        "@components": fileURLToPath(
          new URL("./theme/components", import.meta.url)
        ),
      },
    },
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) =>
          ["iconify-icon", "lite-youtube"].includes(tag.toLowerCase()),
      },
    },
  },

  markdown: {
    config: (md) => {
      md.use(markdownItBlockEmbed);
      md.use(markdownItTasklists);
      md.use(markdownItImage({ publicDir: cwd() + "/public" }));
    },
  },

  transformPageData,
});
