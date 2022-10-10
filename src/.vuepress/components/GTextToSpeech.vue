<template>
  <a-control
    :class="{ active: isSpeaking && !isPaused }"
    :icon="isSupported ? 'volume-2' : 'volume-x'"
    label="Text to speech"
    @click="toggle"
  />
</template>

<script>
import AControl from "./AControl.vue";

export default {
  components: { AControl },
  data() {
    return {
      isSupported: true,
      isSpeaking: false,
      isPaused: false,
    };
  },
  watch: {
    $route(to, from) {
      if (to.path === from.path) return;
      // on route change
      speechSynthesis.cancel();
      this.isSpeaking = false;
      this.isPaused = false;
    },
  },
  mounted() {
    this.isSupported = "speechSynthesis" in window;
  },
  methods: {
    toggle() {
      if (!this.isSupported) return;

      if (this.isSpeaking && !this.isPaused) {
        speechSynthesis.pause();
        return;
      }

      if (!this.isSpeaking && this.isPaused) {
        speechSynthesis.resume();
        return;
      }

      const selectors = [".content__default h1", "h2", "h3", "p", "li"];
      const contentSelectors = selectors.join(",.content__default ");
      const contentElems = this.$root.$el.querySelectorAll(contentSelectors);
      const texts = Array.from(contentElems).map((p) => p.textContent);
      const utterance = new SpeechSynthesisUtterance(texts.join(". "));
      utterance.onstart = () => (this.isSpeaking = true);
      utterance.onend = () => (this.isSpeaking = false);
      utterance.onpause = () => {
        this.isPaused = true;
        this.isSpeaking = false;
      };
      utterance.onresume = () => {
        this.isPaused = false;
        this.isSpeaking = true;
      };
      speechSynthesis.cancel(); // https://stackoverflow.com/a/58775876/3916702
      speechSynthesis.speak(utterance);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
