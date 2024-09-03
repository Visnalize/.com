<template>
  <div class="social">
    <a-comment-count v-if="!hideCommentCount" />
    <social-share v-if="!hideShareLinks" />
  </div>
</template>

<script>
export default {
  props: {
    hideCommentCount: Boolean,
    hideShareLinks: Boolean,
  },
};
</script>

<style lang="stylus" scoped>
.social {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  >>> &-share {
    &:hover .social-share-btn {
      color: $accentColor;
    }

    .social-share-btn {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.5rem;
    }
  }
}
</style>