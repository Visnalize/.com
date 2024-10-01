<template>
  <div>
    <a-icon v-if="showIcon" icon="mdi:tag-outline" width="16" />
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
  gap: 0.5rem;
  padding: 1rem 1.5rem 1.5rem;
  font-size: 0.85rem;

  a {
    background: $bgColor;
    border-radius: 0.4rem;
    color: currentColor;
    font-weight: normal;
    padding: 0.3rem 0.4rem;

    &:hover {
      text-decoration: underline;
    }

    .is-dark & {
      background: $bgColorDark;
    }
  }
}
</style>
