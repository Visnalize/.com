<template>
  <parent-layout>
    <template #page-top>
      <div class="theme-default-content content__default">
        <h1>{{ data.title }}</h1>
        <m-social-links />
        <p>
          <a :href="data.image" target="_blank" rel="noopener noreferrer">
            <img :src="transform(data.image)" :alt="data.title" />
          </a>
        </p>
        <p>
          <b>{{ data.title }}</b> is a simulated application in
          <router-link to="/win7simu/about">Win7 Simu</router-link> that
          {{ lowerFirst(data.description) }}.
        </p>
        <p>
          It was introduced in version
          <a-changelog :v="data.version" />.
        </p>
        <h2>Check it out in action</h2>
        <p>
          Explore {{ data.title }} and other cool features of Win7 Simu on your
          preferred platform. Simply click a button below to download the
          Android app or access directly from your web browser.
        </p>
        <m-access-links app="win7simu" />
      </div>
    </template>
    <template #page-bottom>
      <div class="ad-wrapper">
        <a-google-ad />
      </div>
      <m-comments />
    </template>
  </parent-layout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import { lowerFirst } from "../../utils/string";
import { transform } from "../../utils/images";

export default {
  components: { ParentLayout },
  computed: {
    data() {
      return { ...this.$page, ...this.$frontmatter };
    },
  },
  methods: {
    lowerFirst,
    transform(imageUrl) {
      return transform(imageUrl, { width: 740, quality: 100 });
    },
  },
};
</script>

<style lang="stylus" scoped>
.content__default {
  margin-bottom: -2.5rem;
}

.ad-wrapper {
  max-width: 740px;
  margin: 0 auto;
}
</style>
