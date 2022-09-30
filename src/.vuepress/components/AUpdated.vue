<template>
  <div class="page-edit">
    <div class="last-updated">
      <span class="prefix">Last Updated:</span>
      <span class="time">{{ $page.lastUpdated }}</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.page-edit {
  padding: 0;
}

p {
  text-align: right;
}

b {
  font-weight: 500;
}
</style>