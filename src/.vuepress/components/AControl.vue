<template>
  <button :aria-label="label" :title="label" @click="$emit('click')">
    <v-icon :name="icon" />
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    icon: String,
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
