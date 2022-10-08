<template>
  <a-control icon="arrow-up" label="Back to top" @click="scrollTop" />
</template>

<script>
import AControl from "./AControl.vue";

export default {
  components: { AControl },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="stylus" scoped></style>
