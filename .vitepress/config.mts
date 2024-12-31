import { readFileSync } from "fs";
import markdownItBlockEmbed from "markdown-it-block-embed";
import markdownItTasklists from "markdown-it-task-lists";
import { join } from "path";
import { fileURLToPath } from "url";
import { DefaultTheme, defineConfig, UserConfigFn } from "vitepress";
import { pagefindPlugin } from "vitepress-plugin-pagefind";
import head from "./config/head";
import navItems from "./config/nav";
import sidebar from "./config/sidebar";
import socialLinks from "./config/social";
import { transformPageData } from "./config/transformers";
import markdownItImage from "./plugins/md-image";

// https://vitepress.dev/reference/site-config
const configFunction: UserConfigFn<DefaultTheme.Config> = ({ mode }) => {
  const isDev = mode === "development"; // https://vite.dev/config/#conditional-config
  const redirectsFile = join(process.cwd(), "public", "_redirects");
  const redirectSources = readFileSync(redirectsFile, "utf-8")
    .toString()
    .split("\n")
    .map((redirect) => redirect.split(" ")[0]);
  const pagefindSearch = pagefindPlugin({ placeholder: "Search..." });

  return defineConfig({
    title: "Visnalize",

    description:
      "Author of Win7 Simu and Brick 1100. On a mission to relive the good old days with retro apps.",

    sitemap: {
      hostname: "https://visnalize.com",
    },

    head,

    lastUpdated: true,

    ignoreDeadLinks: redirectSources,

    assetsDir: "assets",

    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config

      logo: "/favicon.png",

      nav: navItems,

      search: !isDev ? undefined : { provider: "local" },

      sidebar,

      aside: "left",

      outline: { label: "Content", level: [2, 3] },

      socialLinks: socialLinks.slice(0, 4),
    },

    vite: {
      plugins: [isDev ? undefined : pagefindSearch],

      resolve: {
        alias: {
          "@": fileURLToPath(new URL("../", import.meta.url)),
          "@utils": fileURLToPath(new URL("./theme/utils", import.meta.url)),
          "@composables": fileURLToPath(
            new URL("./theme/composables", import.meta.url)
          ),
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
        md.use(markdownItImage({ publicDir: join(process.cwd(), "public") }));
      },
    },

    transformPageData,
  });
};

export default configFunction;
