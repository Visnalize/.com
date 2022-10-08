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
      isSupported: "speechSynthesis" in window,
      isSpeaking: false,
      isPaused: false,
    };
  },
  watch: {
    $route() {
      // on route change
      speechSynthesis.cancel();
      this.isSpeaking = false;
      this.isPaused = false;
    },
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

      const contentSelectors = ".content__default p, .content__default ul";
      const contentElems = this.$root.$el.querySelectorAll(contentSelectors);
      const texts = Array.from(contentElems).map((p) => p.textContent);
      const utterance = new SpeechSynthesisUtterance(texts.join("."));
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
      utterance.on;
      speechSynthesis.speak(utterance);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
