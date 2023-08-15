<template>
  <parent-layout>
    <template v-if="!noSideAds" #sidebar-bottom>
      <div class="googleads"><google-ads /></div>
    </template>
    <template v-if="!noComments" #page-bottom>
      <google-ads />
      <comment-section />
    </template>
  </parent-layout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import CommentSection from "../../components/CommentSection.vue";
import GoogleAds from "../../components/GoogleAds.vue";

export default {
  props: {
    noSideAds: Boolean,
    noComments: Boolean,
  },
  components: {
    ParentLayout,
    CommentSection,
    GoogleAds,
  },
};
</script>

<style lang="stylus"></style>
