<template>
  <parent-layout>
    <template #page-top>
      <div class="theme-default-content content__default">
        <h1>{{ data.title }}</h1>
      </div>
    </template>
    <template #page-bottom>
      <google-ads />
      <comment-section />
    </template>
  </parent-layout>
</template>

<script>
import CommentSection from "../../components/CommentSection.vue";
import GoogleAds from "../../components/GoogleAds.vue";
import ParentLayout from "@parent-theme/layouts/Layout.vue";

export default {
  components: { ParentLayout, CommentSection, GoogleAds },
  computed: {
    data() {
      return this.$frontmatter;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
