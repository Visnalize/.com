<template>
  <a class="social-comment" href="#comments">
    <img
      src="https://c.disquscdn.com/next/ef5ca81/marketing/assets/img/brand/disqus-social-icon-dark.svg"
      alt="disqus"
    />
    <span class="disqus-comment-count" :data-disqus-identifier="id" />
  </a>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.path,
    };
  },
  mounted() {
    const script = document.createElement("script");
    script.id = "dsq-count-scr";
    script.src = "//visnalize.disqus.com/count.js";
    script.async = true;
    document.body.appendChild(script);
  },
};
</script>

<style lang="stylus" scoped>
a {
  display: flex;
  align-items: center;
  color: $textColor;
  transition: color 0.3s;
  margin-right: 10px;

  &:hover {
    color: $accentColor;
    text-decoration: none !important;
  }

  img {
    width: 32px;
    height: 32px;
  }
}
</style>
