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
      draggable: false,
      timeout: false,
      position: POSITION.BOTTOM_LEFT,
    });
    this.toast(this.getContent());
  },
  methods: {
    getContent() {
      return (
        <a
          href="https://youtu.be/KM_10_riX7w"
          target="_blank"
          style="display: flex; align-items: center; color: #fff; text-align: center; max-width: 420px"
        >
          {/* <img
            src="/assets/gz-icon.gif"
            alt="Gamezop"
            width="48"
            style="margin-right: 8px"
          /> */}
          <span>
            🔥 Enjoy Win7 Simu (web version) ad-free for a whole year with this
            Black Friday 40% discount code: BF2024
          </span>
        </a>
      );
    },
  },
};
</script>

<style lang="stylus">
.Vue-Toastification {
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
