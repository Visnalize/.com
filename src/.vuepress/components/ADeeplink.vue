<template>
  <a :href="link">
    <code>{{ link }}</code>
  </a>
</template>

<script>
export default {
  props: {
    path: String,
  },
  computed: {
    link() {
      return `https://brick1100.visnalize.com/#${this.path}`;
    },
  },
};
</script>

<style>
</style>