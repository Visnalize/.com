<template>
  <div :class="['adwrapper', `adwrapper-${format}`]">
    <ins
      class="stpdwrapper"
      style="display: inline-block"
      :id="format === 'siderail' ? 'siderail' : null"
      :data-tag-id="tagId"
      :data-lazyload="format === 'responsive'"
      :data-lazyloadMargin="format === 'responsive' ? '200px' : null"
    />
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Tag IDs matching the respective formats:
     * * 5205: `siderail`
     * * 5207: `in_article_responsive_2` (default)
     * * 5209: `in_page_responsive_1`
     * * 5210: `in_page_responsive_2`
     * * 5211: `anchor`
     */
    tagId: {
      type: String,
      default: "5207",
    },
    format: {
      type: String,
      default: "responsive",
      validator: (value) => {
        return ["siderail", "anchor", "responsive"].indexOf(value) > -1;
      },
    },
  },
  mounted() {
    (window.stpdwrapper = window.stpdwrapper || []).push({});
  },
};
</script>

<style lang="stylus" scoped>
.adwrapper {
  text-align: center;

  &-responsive {
    margin: 2rem 0;
  }

  &-anchor {
    ins {
      display: unset !important;
    }
  }
}
</style>