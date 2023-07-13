<template>
  <div class="site-settings">
    <button
      aria-label="Site Settings"
      class="toggle"
      :class="{ active: showControls }"
      @click="toggle"
    >
      <v-icon :name="showControls ? 'x' : 'settings'" />
    </button>
    <ul ref="controls">
      <li><g-theme-toggle /></li>
      <li><g-text-to-speech /></li>
      <li><g-back-to-top /></li>
    </ul>
  </div>
</template>

<script>
import { animate, spring } from "motion";
import GThemeToggle from "./GThemeToggle.vue";
import GTextToSpeech from "./GTextToSpeech.vue";
import GBackToTop from "./GBackToTop.vue";

export default {
  components: { GThemeToggle, GBackToTop, GTextToSpeech },
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
$size = 96px;

.site-settings {
  position: fixed;
  right: -40px;
  bottom: -40px;
  width: $size;
  height: $size;
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

  svg {
    color: #fff;
  }

  .site-settings:hover &, &.active {
    transform: scale(1.2);
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
