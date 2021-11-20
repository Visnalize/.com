<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" :data-social="alt">
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
linkStyle(bg, shade) {
  background: bg;
  box-shadow: 0 6px shade;
  border-bottom: 2px solid shade;
}

a {
  display: block;
  width: 100px;
  height: 70px;
  padding: 15px;
  margin: 6px;
  border-radius: 8px;
  text-align: center;
  box-sizing: border-box;
  transition-property: transform, box-shadow;
  transition-duration: 0.2s;
  linkStyle(#eee, #d0d0d0);

  &[data-social='Twitter'] {
    linkStyle(#1da1f2, #2f81be);
  }

  &[data-social='Github'] {
    linkStyle(#333, #000);
  }

  &[data-social='Youtube'] {
    linkStyle(#f00, #900);
  }

  &:hover {
    transform: translateY(6px);
    box-shadow: none !important;
  }
}

img {
  width: auto;
  height: 100%;
}

@media (max-width: 419px) {
  a {
    width: 80px;
    height: 60px;
    padding: 12px;
  }
}
</style>