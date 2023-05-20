<template>
  <ul class="blog-links">
    <li v-for="blog in blogs" :key="blog.key">
      <router-link :to="blog.path">
        <span class="blog-image">
          <img :src="getImage(blog)" :alt="blog.title" />
        </span>
        <h2>{{ blog.title }}</h2>
        <a-created :date="blog.firstCreated" />
        <p>{{ blog.frontmatter.description }}</p>
      </router-link>
      <m-blog-tag-list :tags="blog.frontmatter.tag" />
    </li>
  </ul>
</template>

<script>
import ACreated from "./ACreated.vue";
import MBlogTagList from "./MBlogTagList.vue";

export default {
  components: { ACreated, MBlogTagList },
  props: {
    blogs: Array,
  },
  methods: {
    getImage(blog) {
      return blog.frontmatter.meta.find((m) => m.itemprop === "image")?.content;
    },
  },
};
</script>

<style lang="stylus" scoped>
.blog-links {
  display: grid;
  gap: 3rem 2rem;
  list-style: none;
  padding: 0;

  > li {
    border-radius: 1rem;
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    .is-dark & {
      background: darken($bgColorDark, 4);
    }
  }

  a {
    display: flex;
    flex-direction: column;
    color: currentColor;
    font-weight: unset;

    > :not(.blog-image) {
      padding: 0 1rem;
    }

    .blog-image {
      height: 250px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-out;
      }
    }

    .first-created {
      font-size: 0.9rem;
    }

    h2 {
      border-bottom: none;
      transition: color 0.3s;
    }

    &:hover {
      text-decoration: none;

      img {
        transform: scale(1.06);
      }

      h2 {
        color: $accentColor;
      }
    }
  }
}

@media (min-width: 720px) {
  .blog-links {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
