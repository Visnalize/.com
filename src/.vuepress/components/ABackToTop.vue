<template>
  <a-control
    :class="{ active: isScrolling }"
    icon="ic:round-arrow-upward"
    label="Back to top"
    @click="scrollTop"
  />
</template>

<script>
export default {
  data() {
    return { isScrolling: false };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      this.isScrolling = window.scrollY > 0;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
