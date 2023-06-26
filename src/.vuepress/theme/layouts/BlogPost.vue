<template>
  <visnalize>
    <template #page-top>
      <setupad-ads class="pagetop-ads" />
    </template>
  </visnalize>
</template>

<script>
import Visnalize from "./Visnalize.vue";

export default {
  components: { Visnalize },
};
</script>

<style lang="stylus" scoped>
>>>.page-edit {
  display: none;
}

>>>.theme-default-content > h1 {
  padding-top: 0;
}
</style>
