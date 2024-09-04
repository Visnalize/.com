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

  >>> .social-share {
    .is-dark & .social-share-btn {
      color: darken($textColorDark, 40%);
    }

    .social-share-btn:hover {
      color: $accentColor;
    }

    .social-share-btn {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.5rem;

      > span {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>