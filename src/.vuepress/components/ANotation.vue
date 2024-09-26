<template>
  <span v-if="list">
    <a-icon :icon="data.icon" width="20" height="20" />
    <span>{{ data.name }}</span>
  </span>
  <span v-else v-tooltip="{ content: data.name, offset: 4 }">
    <a-icon :icon="data.icon" width="20" height="20" />
  </span>
</template>

<script>
export default {
  props: {
    icon: String,
    list: Boolean,
  },
  computed: {
    data() {
      if (this.icon === "android")
        return { name: "Android", icon: "logos:google-play-icon" };
      if (this.icon === "ios")
        return { name: "iOS", icon: "logos:apple-app-store" };
      if (this.icon === "diamond")
        return { name: "Premium feature", icon: "noto:gem-stone" };
    },
  },
};
</script>

<style lang="stylus" scoped>
span {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  margin-left: 0.25rem;
}
</style>
