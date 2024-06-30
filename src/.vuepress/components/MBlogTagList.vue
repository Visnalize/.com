<template>
  <div>
    <v-icon name="tag" v-if="showIcon" />
    <ul>
      <li v-for="tag in _tags" :key="tag">
        <router-link :to="`/blog/tag/${tag}/`">
          {{ pascalize(tag) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { pascalize } from "../utils/string";

export default {
  props: {
    tags: [String, Array],
    showIcon: Boolean,
  },
  computed: {
    _tags() {
      return Array.isArray(this.tags) ? this.tags : [this.tags];
    },
  },
  methods: {
    pascalize,
  },
};
</script>

<style lang="stylus" scoped>
div {
  display: flex;
  align-items: center;

  svg {
    width: 1rem;
    height: 1rem;
  }
}

ul {
  list-style: none;
  display: flex;
  padding: 1rem;
  font-size: 0.85rem;

  a {
    background: $bgColor;
    border-radius: 0.4rem;
    color: currentColor;
    font-weight: normal;
    padding: 0.3rem 0.4rem;
    margin: 0 0.2rem;

    &:hover {
      text-decoration: underline;
    }

    .is-dark & {
      background: $bgColorDark;
    }
  }
}
</style>
