<template>
  <text-to-speech
    #default="{ toggle }"
    @statechange="handleStateChange"
    @supported="setSupported"
  >
    <a-control
      :class="{ active }"
      :icon="isSupported ? 'volume-2' : 'volume-x'"
      label="Text to speech"
      @click="toggle"
    />
  </text-to-speech>
</template>

<script>
export default {
  data() {
    return {
      state: "",
      isSupported: true,
    };
  },
  computed: {
    active() {
      return this.state === "playing" || this.state === "resumed";
    },
  },
  methods: {
    handleStateChange(value) {
      this.state = value;
    },
    setSupported(value) {
      this.isSupported = value;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
