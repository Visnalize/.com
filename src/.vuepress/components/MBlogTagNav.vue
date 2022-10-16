<template>
  <nav>
    <router-link v-for="tag in tags" :key="tag.path" :to="tag.path">
      {{ tag.name }}
    </router-link>
  </nav>
</template>

<script>
export default {
  props: {
    current: String,
    tags: Array,
  },
};
</script>

<style lang="stylus" scoped>
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;

  a {
    background: $bgColor;
    border-radius: 1rem;
    color: currentColor;
    margin: 0.3rem;
    padding: 0.6rem;
    min-width: 4rem;
    text-align: center;

    &.router-link-exact-active {
      color: #fff;
      background: $accentColor;
    }

    &:hover {
      text-decoration: none !important;
    }

    .is-dark &:not(.router-link-exact-active) {
      background: $bgColorDark;
    }
  }
}

@media (min-width: 420px) {
  nav a {
    margin: 0.5rem;
    padding: 1rem;
  }
}
</style>
