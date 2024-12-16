// https://vitepress.dev/guide/custom-theme
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";
import "iconify-icon";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import AccessLinks from "./components/global/AccessLinks.vue";
import Redirect from "./components/global/Redirect.vue";
import SponsorAd from "./components/global/SponsorAd.vue";
import { DISQUS } from "./constants";
import AsideBottom from "./layout/AsideBottom.vue";
import DocAfter from "./layout/DocAfter.vue";
import DocBefore from "./layout/DocBefore.vue";
import LayoutBottom from "./layout/LayoutBottom.vue";
import "./style.custom.css";
import "./style.palette.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "aside-bottom": () => h(AsideBottom),
      "doc-after": () => h(DocAfter),
      "doc-before": () => h(DocBefore),
      "layout-bottom": () => h(LayoutBottom),
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.use(FloatingVue);
    app.component("Redirect", Redirect);
    app.component("SponsorAd", SponsorAd);
    app.component("AccessLinks", AccessLinks);
    app.provide(DISQUS, "visnalize");
  },
} satisfies Theme;
