<template>
  <a-control
    :icon="isDark ? 'ic:baseline-mode-night' : 'ic:baseline-wb-sunny'"
    label="Toggle theme"
    @click="toggle"
  />
</template>

<script>
import DarkMode from "../utils/darkmode";

export default {
  data() {
    return {
      isDark: DarkMode.isDarkMode(),
      label: "Toggle theme",
    };
  },
  methods: {
    toggle() {
      this.isDark = !this.isDark;
      DarkMode.toggle();
    },
  },
};
</script>

<style lang="stylus" scoped></style>
