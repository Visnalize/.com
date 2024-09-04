<template>
  <div :class="format" :id="'127550-' + adUnitId">
    <component
      :is="'script'"
      :src="`//ads.themoneytizer.com/s/gen.js?type=${adUnitId}`"
    />
    <component
      :is="'script'"
      :src="`//ads.themoneytizer.com/s/requestform.js?siteId=127550&formatId=${adUnitId}`"
    />
  </div>
</template>

<script>
const AdUnitId = {
  banner: 1,
  square: 2,
};

export default {
  props: {
    format: { type: String, default: "square" },
  },
  computed: {
    adUnitId() {
      return AdUnitId[this.format];
    },
  },
};
</script>

<style lang="stylus" scoped>
.banner {
  margin: 2rem auto;
}
</style>
