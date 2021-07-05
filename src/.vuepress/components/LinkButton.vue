<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <img :src="src" :alt="alt"
  /></a>
</template>

<script>
import data from "../links";

export default {
  props: { id: String },
  data() {
    return { ...data[this.id] };
  },
};
</script>

<style lang="stylus" scoped>
a {
  display: block;
  width: 100px;
  height: 70px;
  padding: 15px;
  margin: 0 8px;
  border-radius: 8px;
  text-align: center;
  box-sizing: border-box;
  transition-property: transform, box-shadow;
  transition-duration: 0.2s;

  &:hover {
    transform: translateY(6px);
    box-shadow: none !important;
  }
}

img {
  width: auto;
  height: 100%;
}

@media only screen and (max-width: 400px) {
  a {
    width: 70px;
    height: 50px;
    padding: 8px;
  }
}
</style>