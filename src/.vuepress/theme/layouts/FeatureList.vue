<template>
  <parent-layout>
    <template #page-top>
      <div class="theme-default-content content__default">
        <h1>Win7 Simu simulated apps</h1>
        <google-ads format="horizontal" />
        <ul class="feature-links">
          <li v-for="feature in features" :key="feature.path">
            <router-link :to="feature.path">
              <img :src="feature.frontmatter.image" :alt="feature.title" />
              <span>{{ feature.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
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
      const pages = this.$site.pages.filter(
        ({ path }) => path.includes(this.$page.path) && path !== this.$page.path
      );
      pages.sort((a, b) => {
        const aVersion = a.frontmatter.version || "0.0.0";
        const bVersion = b.frontmatter.version || "0.0.0";
        return bVersion.localeCompare(aVersion, undefined, {
          numeric: true,
          sensitivity: "base",
        });
      });
      return pages;
    },
  },
};
</script>


<style lang="stylus" scoped>
.content__default {
  max-width: 900px;
}

>>>.page-edit {
  display: none;
}

ins {
  margin: 2rem 0;
}

.feature-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2.5rem 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    flex: 1 1 200px;

    a {
      color: currentColor;
      display: block;
      text-align: center;
      transition: color 0.3s;

      img {
        width: 100%;
        box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
        border-radius: 4px;
      }

      span {
        display: block;
        margin-top: 5px;
        font-size: 1.2em;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        text-align: center;
        text-transform: capitalize;
      }

      &:hover {
        color: $accentColor;
        text-decoration: none;
      }
    }
  }
}
</style>
