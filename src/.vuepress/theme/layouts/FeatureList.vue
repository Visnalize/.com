<template>
  <parent-layout>
    <template #page-top>
      <div class="theme-default-content content__default">
        <h1>Win7 Simu simulated apps</h1>
        <a-sponsor-ad format="banner" />
        <ul class="feature-links">
          <li v-for="feature in features" :key="feature.path">
            <router-link :to="feature.path">
              <span class="image">
                <a-icon icon="ic:outline-image" width="48" height="48" />
                <img
                  :src="transform(feature.frontmatter.image)"
                  :alt="feature.title"
                />
              </span>
              <span>{{ feature.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </template>
    <template #page-bottom>
      <m-footer />
    </template>
  </parent-layout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import { transform } from "../../utils/images";

export default {
  components: { ParentLayout },
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
  methods: {
    transform(imageUrl) {
      return transform(imageUrl, { width: 450 });
    },
  },
};
</script>


<style lang="stylus" scoped>
.content__default {
  max-width: 900px;
}

:deep(.page-edit) {
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

      .image {
        color: $bgColor;
        height: 200px;
        overflow: hidden;
        border-radius: 6px;
        box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.1);
        position: relative;

        .is-dark & {
          color: $bgColorDark;
        }

        .iconify {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top left;
          transition: transform 0.3s ease-out;
          position: relative;
          z-index: 1;
        }
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

        img {
          transform: scale(1.06);
        }
      }
    }
  }
}
</style>
