<template></template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  created() {
    document.location.replace(this.to);
  },
};
</script>
