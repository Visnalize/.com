<template>
  <div v-if="isUrl">
    <iframe :title="title" :src="src" />
  </div>
  <img v-else :src="src" :alt="title" width="180" height="180" />
</template>

<script>
export default {
  props: {
    src: String,
    title: String,
  },
  computed: {
    isUrl() {
      return this.src.startsWith("https://");
    },
  },
};
</script>

<style lang="stylus" scoped>
size = 180px;

div {
  width: size;
  height: 200px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50%;

  > iframe {
    border: 0;
    width: size;
    height: 300px;
  }
}

img, div {
  margin-right: 2rem;
}

.right {
  img, div {
    margin-right: 0;
    margin-left: 2rem;
  }
}

@media (max-width: 640px) {
  img, div {
    margin: 0 !important;
  }
}
</style>