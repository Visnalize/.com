// https://vitepress.dev/guide/custom-theme
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";
import "iconify-icon";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import AccessLinks from "./components/global/AccessLinks.vue";
import SponsorAd from "./components/global/SponsorAd.vue";
import { DISQUS } from "./constants";
import "./custom-elements/indie-boosting";
import Layout from "./layout/Layout.vue";
import "./style.custom.css";
import "./style.palette.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(FloatingVue);
    app.component("SponsorAd", SponsorAd);
    app.component("AccessLinks", AccessLinks);
    app.provide(DISQUS, "visnalize");
  },
} satisfies Theme;
