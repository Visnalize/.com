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
    };
  },
};
</script>
