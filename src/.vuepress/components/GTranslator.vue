<template>
  <a-control icon="globe" label="Change language" @click="toggleDropdown" />
</template>

<script>
import AControl from "./AControl.vue";

export default {
  components: { AControl },
  data() {
    return {
      showDropdown: false,
    };
  },
  mounted() {},
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
