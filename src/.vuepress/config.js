const { defineConfig } = require("vuepress/config");

module.exports = defineConfig({
  title: "Visnalize",

  head: require("./config/head"),

  themeConfig: {
    logo: "/assets/favicon.png",
    nav: require("./config/navbar"),
    sidebar: {
      "/win7simu/themestudio/": [
        ["", "Introduction"],
        ["quick-guide", "Getting started"],
        ["in-depth-guide", "In-depth guide"],
        ["changelog", "Changelog"],
      ],
      "/brick1100/": "auto",
      "/blog/": false,
    },
    smoothScroll: true,
    lastUpdated: true,
  },

  plugins: require("./config/plugins"),

  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-video"));
      md.use(require("markdown-it-task-lists"));
    },
  },

  globalUIComponents: ["GSiteSettings", "GAffiliates"],
});
