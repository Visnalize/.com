<template>
  <div class="sk-ww-google-play-reviews" data-embed-id="94504" />
</template>

<script>
export default {
  mounted() {
    const src = "https://widgets.sociablekit.com/google-play-reviews/widget.js";
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  },
};
</script>

<style lang="stylus">
@require '../styles/common.styl';

.sk-ww-google-play-reviews {
  font-family: inherit !important;
}

.sk_fb_page_reviews_grid-content {
  box-shadow: none !important;
  height: 290px !important;
}

.sk-reviewer-name-action > :nth-child(2) {
  display: none;
}

.sk_fb_stars {
  margin: 6px 0;
}

.sk_fb_page_reviews_grid-item {
  cursor: auto !important;
  padding: 0.75rem !important;
}

.sk-ww-google-play-load-more-posts {
  buttonStyle();
}

.google-play-reviews-item {
  pointer-events: none;
}
</style>