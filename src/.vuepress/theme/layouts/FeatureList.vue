<template>
  <parent-layout>
    <template #page-top>
      <div class="theme-default-content content__default">
        <h1>Win7 Simu simulated apps</h1>
        <ul>
          <li v-for="feature in features" :key="feature.path">
            <router-link :to="feature.path">{{ feature.title }}</router-link>
          </li>
        </ul>
      </div>
    </template>
    <template #page-bottom>
      <google-ads />
    </template>
  </parent-layout>
</template>

<script>
import GoogleAds from "../../components/GoogleAds.vue";
import ParentLayout from "@parent-theme/layouts/Layout.vue";

export default {
  components: { ParentLayout, GoogleAds },
  computed: {
    features() {
      return this.$site.pages.filter(({ path }) =>
        path.includes(this.$page.path)
      );
    },
  },
};
</script>

<style lang="stylus" scoped></style>
