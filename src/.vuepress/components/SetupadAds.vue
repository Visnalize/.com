<template>
  <div class="adwrapper">
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
     * * 5206: `in_article_responsive` (default)
     * * 5209: `in_page_responsive_1`
     * * 5210: `in_page_responsive_2`
     * * 5211: `anchor`
     */
    tagId: {
      type: String,
      default: "5206",
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
  margin: 2rem 0;
  text-align: center;
}

.pagetop-ads {
  padding-top: 4rem;
}
</style>