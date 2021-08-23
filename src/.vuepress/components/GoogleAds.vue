<template>
  <ins
    class="adsbygoogle"
    style="display: block"
    :data-ad-slot="adType"
    data-ad-client="ca-pub-5904323684803247"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
</template>

<script>
const TYPE_HORIZONTAL = "3336580675";
const TYPE_SQUARE = "7084253999";

export default {
  props: { type: String },
  computed: {
    adType() {
      if (this.type === "square") return TYPE_SQUARE;
      else return TYPE_HORIZONTAL;
    }
  },
  mounted() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
};
</script>
