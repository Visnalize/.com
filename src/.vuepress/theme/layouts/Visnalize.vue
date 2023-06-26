<template>
  <parent-layout>
    <template v-if="!noSideAds" #sidebar-bottom>
      <setupad-ads class="sidebar-ads" format="siderail" tag-id="5205" />
    </template>
    <template #page-top>
      <slot name="page-top" />
    </template>
    <template v-if="!noComments" #page-bottom>
      <setupad-ads />
      <setupad-ads format="anchor" tag-id="5211" />
      <comment-section />
    </template>
  </parent-layout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import CommentSection from "../../components/CommentSection.vue";
import SetupadAds from "../../components/SetupadAds.vue";

export default {
  props: {
    noSideAds: Boolean,
    noComments: Boolean,
  },
  components: {
    ParentLayout,
    CommentSection,
    SetupadAds,
  },
};
</script>

<style lang="stylus"></style>
