<template>
  <div class="site-settings">
    <a-control
      label="Site Settings"
      :class="['toggle', { active: showControls }]"
      :icon="showControls ? 'humbleicons:times' : 'ic:outline-settings'"
      iconSize="32"
      @click="toggle"
    />
    <ul ref="controls">
      <li><a-theme-toggle /></li>
      <li><a-text-to-speech /></li>
      <li><a-back-to-top /></li>
    </ul>
  </div>
</template>

<script>
import { animate, spring } from "motion";

export default {
  data() {
    return { showControls: false };
  },
  watch: {
    showControls(value) {
      animate(
        this.$refs.controls,
        { scale: value ? 1 : 0 },
        { easing: spring({ stiffness: 300, damping: 20 }) }
      );
    },
  },
  mounted() {
    this.showControls = this.$route.path !== "/";
  },
  methods: {
    toggle() {
      this.showControls = !this.showControls;
    },
  },
};
</script>

<style lang="stylus" scoped>
size = 64px;
iconSize = 32px;

.site-settings {
  position: fixed;
  right: 0;
  bottom: 0;
  width: size;
  height: size;
}

.toggle {
  width: 100%;
  height: 100%;
  padding: 20% 54% 54% 20%;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: $accentColor;
  transition: transform 0.2s;
  color: #fff;

  .site-settings:hover &, &.active {
    transform: scale(1.2);
  }

  :deep(iconify-icon) {
    margin-top: -(iconSize / 2);
    margin-left: (iconSize / 4);
  }
}

ul {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  z-index: -1;
  transform: scale(0);

  li {
    position: absolute;

    &:first-child {
      transform: translateX(-150%);
    }

    &:nth-child(2) {
      transform: translate(-100%, -100%);
    }

    &:last-child {
      transform: translateY(-150%);
    }
  }
}
</style>
