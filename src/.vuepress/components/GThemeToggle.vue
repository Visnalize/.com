<template>
  <a-control
    :icon="isDark ? 'moon' : 'sun'"
    label="Toggle theme"
    @click="toggle"
  />
</template>

<script>
import AControl from "./AControl.vue";

export default {
  components: { AControl },
  data() {
    return { isDark: false, label: "Toggle theme" };
  },
  mounted() {
    this.isDark = localStorage.getItem("darkMode") === "true";
    this.isDark && this.$root.$el.classList.add("is-dark");
  },
  methods: {
    toggle() {
      this.$root.$el.classList.toggle("is-dark");
      this.isDark = !this.isDark;
      localStorage.setItem("darkMode", this.isDark);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
