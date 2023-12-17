<template></template>

<script>
import { createToastInterface, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default {
  data() {
    return {
      /** @type {ReturnType<createToastInterface>} */
      toast: null,
    };
  },
  mounted() {
    this.toast = createToastInterface({
      container: this.$root.$el,
      timeout: false,
      position: POSITION.BOTTOM_LEFT,
    });
    this.toast(this.getContent());
  },
  methods: {
    getContent() {
      return (
        <a
          href="https://shipfa.st/?via=visnalize"
          target="_blank"
          style="display: block; color: #fff; margin-top: 8px; text-align: center;"
        >
          Build and launch your web app in days
          <span style="display: flex; align-items: center; justify-content: center">
            <span style="margin-right: 8px">Check out</span>
            <img
              src="https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoAndName_transparent.9c74ebc0.png&w=128&q=100"
              alt="ShipFast"
            />
          </span>
        </a>
      );
    },
  },
};
</script>

<style lang="stylus">
.Vue-Toastification{
  &__toast {
    &--default {
      background: $bgColorDark;
      box-shadow: none;
      color: $textColorDark;
    }
  }

  &__close-button {
    color: $textColorDark;
  }

  &__icon {
    display: none;
  }
}
</style>
