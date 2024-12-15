import { readFileSync } from "fs";
import markdownItBlockEmbed from "markdown-it-block-embed";
import markdownItTasklists from "markdown-it-task-lists";
import { cwd } from "process";
import { fileURLToPath } from "url";
import { defineConfig } from "vitepress";
import { getLatestVersion } from "../.content/misc.data";
import { apps } from "../.content/simulated-apps.data";
import head from "./config/head";
import navItems from "./config/nav";
import sidebar from "./config/sidebar";
import socialLinks from "./config/social";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Visnalize",

  description:
    "Author of Win7 Simu and Brick 1100. On a mission to relive the good old days with simulation apps.",

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
    },
  },

  transformPageData(data) {
    if (data.params?.tag) {
      const { tag } = data.params;
      data.title = `Posts with tag "${tag}"`;
      data.description = `Here you can find all posts with the tag "${tag}". Discover helpful insights, sharing, tips and tricks on various topics from Visnalize.`;
    }

    if (data.params?.app) {
      const { app: slug } = data.params;
      const app = apps.find((a) => a.slug === slug);
      data.title = app?.title || "";
      data.frontmatter = { ...app };
    }

    if (data.relativePath.match(/(win7simu|brick1100)\/about/)) {
      const [app] = data.relativePath.split("/");
      data.frontmatter.appVersion = getLatestVersion(app);
    }
  },
});
