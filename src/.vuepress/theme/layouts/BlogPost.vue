<template>
  <visnalize />
</template>

<script>
import Visnalize from "./Visnalize.vue";

export default {
  components: { Visnalize },
};
</script>

<style lang="stylus" scoped>
:deep(.page-edit) {
  display: none;
}
</style>
