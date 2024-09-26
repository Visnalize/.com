<template>
  <div class="first-created" title="Created date" v-if="createdDate">
    <a-icon icon="mdi:clock-outline" width="16" height="16" />
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
  gap: 4px;
}
</style>