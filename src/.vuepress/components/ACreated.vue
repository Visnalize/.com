<template>
  <div class="first-created" title="Created date" v-if="createdDate">
    <a-icon icon="mdi:clock-outline" />
    <span>{{ createdDate }}</span>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
  },
  computed: {
    createdDate() {
      return this.date || this.$page.firstCreated;
    },
  },
};
</script>

<style lang="stylus" scoped>
.first-created {
  display: flex;
  align-items: center;

  svg {
    width: 1rem;
    margin-right: 0.5rem;
  }
}
</style>