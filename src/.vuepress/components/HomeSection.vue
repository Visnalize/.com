<template>
  <section :class="layout">
    <slot />
  </section>
</template>

<script>
export default {
  props: { layout: String },
};
</script>

<style lang="stylus" scoped>
@require "../styles/common.styl"
size = 180px;

section {
  padding: 8% 15%;

  > img {
    width: size;
    height: auto;
    float: left;
  }

  > .preview {
    width: size;
    height: 200px;
    float: left;
    overflow: hidden;
    border-radius: 50%;

    > iframe {
      border: 0;
      width: size;
      height: 300px;
    }
  }

  > article {
    margin-left: size + 15%;

    > h1 {
      margin-top: 0;
    }

    > p {
      text-align: justify;
    }

    > div {
      text-align: right;

      > a {
        buttonStyle();
        display: inline-block;
        font-size: 1rem;
        padding: 0.4rem 1.5rem;

        &:not(:first-child) {
          margin-left: 8%;
        }
      }
    }
  }

  &.right {
    > img {
      float: right;
    }

    > .preview {
      float: right;
    }

    > article {
      margin-left: 0;
      margin-right: size + 15%;

      > div {
        text-align: left;

        > a:not(:first-child) {
          margin-right: 8%;
        }
      }
    }
  }

  &.grid {
  }

  &:nth-child(2n) {
    background: rgba(0, 0, 0, 0.05);
  }
}

@media (max-width: 640px) {
  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    &.right > article, > article {
      margin: 0;
      margin-top: 10%;
      text-align: center;

      > div {
        text-align: center;
      }
    }
  }
}
</style>