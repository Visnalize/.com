<template>
  <section>
    <h2 id="comments">Comments</h2>
    <disqus :identifier="path" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      path: this.$route.path,
      interval: null,
    };
  },
  mounted() {
    this.interval = setInterval(this.hideAds, 2000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    hideAds() {
      const disqus = this.$el.querySelector("#disqus_thread");
      const ads = disqus.querySelector("iframe:first-child");
      ads.style.setProperty("display", "none", "important");
    },
  },
};
</script>
