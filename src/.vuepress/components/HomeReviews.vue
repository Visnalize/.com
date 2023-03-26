<template>
  <div
    id="home-reviews"
    class="sk-ww-google-play-reviews"
    data-embed-id="94504"
  />
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
#home-reviews {
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
    // AButton's style
    background: #545e66;
    border: 0;
    border-radius: 0.2rem;
    box-shadow: 0 4px $textColor;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.6rem 1.8rem;
    transition: transform 0.2s, box-shadow 0.2s;

    &:active {
      transform: translateY(4px);
      box-shadow: none;
    }
  }

  .google-play-reviews-item {
    pointer-events: none;
  }
}
</style>