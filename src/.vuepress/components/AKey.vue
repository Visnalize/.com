<template>
  <img :src="src" :alt="'key ' + s" height="20" width="auto" />
</template>

<script>
export default {
  props: {
    s: String,
  },
  computed: {
    src() {
      return "/assets/keys/" + this.s + ".png";
    },
  },
};
</script>

<style>
</style>