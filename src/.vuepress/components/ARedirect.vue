<template></template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  beforeMount() {
    document.location.replace(this.to);
  },
};
</script>
