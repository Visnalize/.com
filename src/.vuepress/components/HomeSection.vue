<template>
  <section :class="layout">
    <div>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: { layout: String },
};
</script>

<style lang="stylus" scoped>
section {
  padding: 8rem 4rem;

  > div {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: auto;
    max-width: 1024px;
  }

  article {
    > h2 {
      border: 0;
      margin-top: 0;
      font-size: 2.5rem;
    }

    > p {
      text-align: justify;
    }

    > footer {
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
    > div > *:first-child {
      order: 1;
    }

    article {
      > footer {
        text-align: left;

        > a:not(:first-child) {
          margin-right: 8%;
        }
      }
    }
  }

  &.center {
    h2, footer {
      text-align: center;
    }
  }

  &.dark {
    background: rgba(0, 0, 0, 0.05);
  }
}

@media (max-width: 640px) {
  section {
    padding: 6rem 3rem;

    > div {
      flex-direction: column;

      article, article > footer {
        text-align: center !important;
      }
    }

    &.right > div *:first-child {
      order: unset;
    }
  }
}
</style>