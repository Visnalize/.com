<template>
  <router-link v-if="href && !isExternal" :to="href" class="a-button">
    <slot />
  </router-link>
  <a
    v-else-if="href && isExternal"
    :href="href"
    target="_blank"
    class="a-button"
  >
    <slot />
  </a>
  <button v-else @click="$emit('click')" class="a-button">
    <slot />
  </button>
</template>

<script>
export default {
  props: { href: String },
  computed: {
    isExternal() {
      return this.href.startsWith("http");
    },
  },
};
</script>

<style lang="stylus" scoped>
.a-button {
  background: #545e66;
  border: 0;
  border-radius: 0.2rem;
  box-shadow: 0 4px $textColor;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  padding: 0.6rem 1.8rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:active {
    transform: translateY(4px);
    box-shadow: none;
  }

  &:hover {
    text-decoration: none !important;
  }
}
</style>