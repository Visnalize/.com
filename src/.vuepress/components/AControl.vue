<template>
  <button
    :title="label"
    @click="$emit('click')"
    v-tooltip="{ content: label, offset: 8 }"
  >
    <a-icon :icon="icon" :width="size" :height="size" />
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    icon: String,
    iconSize: String,
  },
  computed: {
    size() {
      return this.iconSize || "24";
    },
  },
};
</script>

<style lang="stylus" scoped>
button {
  width: 24px;
  height: 24px;
  padding: 12px;
  box-sizing: unset;
  background: $bgColor;
  border: none;
  border-radius: 50%;
  color: $textColor;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.15);
  }

  &.active {
    transform: scale(1.15);
    background: $accentColor;
    color: #fff;
  }

  .is-dark &:not(.active) {
    background: $bgColorDark;
    color: #aaa;
  }
}
</style>
