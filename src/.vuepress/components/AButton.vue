<template>
  <router-link v-if="!!href" :to="href" class="a-button">
    <slot />
  </router-link>
  <button v-else @click="$emit('click')" class="a-button"><slot /></button>
</template>

<script>
export default {
  props: { href: String },
};
</script>

<style lang="stylus" scoped>
.a-button {
  background: #545e66;
  border: 0;
  border-radius: 0.2rem;
  box-shadow: 0 4px $textColor;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:active {
    transform: translateY(4px);
    box-shadow: none;
  }

  &:hover {
    text-decoration: none !important;
  }
}
</style>