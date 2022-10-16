<template>
  <div class="blog-meta">
    <a-created />
    <a-social />
  </div>
</template>

<script>
import ACreated from "./ACreated.vue";
import ASocial from "./ASocial.vue";

export default {
  components: { ACreated, ASocial },
};
</script>

<style lang="stylus" scoped>
.blog-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
