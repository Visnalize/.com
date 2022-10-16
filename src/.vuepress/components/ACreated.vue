<template>
  <div class="first-created" title="Created date" v-if="$page.firstCreated">
    <v-icon name="clock" />
    <i>{{ $page.firstCreated }}</i>
  </div>
</template>

<script>
export default {};
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