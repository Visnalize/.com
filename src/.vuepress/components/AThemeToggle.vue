<template>
  <a-control
    :icon="isDark ? 'ic:baseline-mode-night' : 'ic:baseline-wb-sunny'"
    label="Toggle theme"
    @click="toggle"
  />
</template>

<script>
const KEY = "darkMode";

export default {
  data() {
    return {
      isDark: false,
      label: "Toggle theme",
    };
  },
  mounted() {
    this.isDark = localStorage.getItem(KEY) === "true";
  },
  methods: {
    toggle() {
      this.isDark = !this.isDark;
      localStorage.setItem(KEY, this.isDark);
      document.documentElement.classList.toggle("is-dark");
    },
  },
};
</script>

<style lang="stylus" scoped></style>
