<template>
  <parent-layout>
    <template v-if="!noSideAds" #sidebar-bottom>
      <a-sponsor-ad />
    </template>
    <template v-if="!noComments" #page-bottom>
      <div class="ad-wrapper">
        <a-google-ad />
      </div>
      <m-comments />
    </template>
  </parent-layout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";

export default {
  components: { ParentLayout },
  props: {
    noSideAds: Boolean,
    noComments: Boolean,
  },
};
</script>

<style lang="stylus">
.ad-wrapper {
  max-width: 740px;
  margin: 0 auto;
}
</style>
