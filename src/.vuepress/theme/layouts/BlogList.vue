<template>
  <parent-layout>
    <template #page-top>
      <div class="theme-default-content content__default">
        <h1>📝 Blog</h1>
        <m-blog-tag-nav :tags="tags" />
        <m-blog-links :blogs="blogs" />
        <setupad-ads />
      </div>
    </template>
  </parent-layout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import SetupadAds from "../../components/SetupadAds.vue";
import MBlogTagNav from "../../components/MBlogTagNav.vue";
import MBlogLinks from "../../components/MBlogLinks.vue";
import { pascalize } from "../../utils/string";

export default {
  components: { ParentLayout, SetupadAds, MBlogTagNav, MBlogLinks },
  computed: {
    tags() {
      const tags = this.$tag.list.map((tag) => ({
        path: tag.path,
        name: pascalize(tag.name),
      }));
      return [{ path: "/blog/", name: "All" }, ...tags];
    },
    blogs() {
      const allBlogs = ({ path }) =>
        /blog\/.+/.test(path) && !/blog\/tag/.test(path);
      const pages = this.$currentTag
        ? this.$currentTag.pages
        : this.$site.pages.filter(allBlogs);

      return pages.sort(
        (a, b) => b.firstCreatedTimestamp - a.firstCreatedTimestamp
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.content__default {
  max-width: 1200px;
}
</style>
