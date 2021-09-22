<template>
  <parent-layout>
    <template #sidebar-bottom>
      <div class="googleads"><google-ads /></div>
    </template>
  </parent-layout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import GoogleAds from "../../components/GoogleAds.vue";

export default {
  components: {
    ParentLayout,
    GoogleAds,
  },
};
</script>

<style lang="stylus" scoped>
.googleads {
  padding: 0 1.5rem;
}
</style>
