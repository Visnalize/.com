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
          href="https://www.gamezop.com/?id=4032"
          target="_blank"
          style="display: flex; align-items: center; color: #fff; text-align: center;"
        >
          <img
            src="/assets/gz-icon.gif"
            alt="Gamezop"
            width="48"
            style="margin-right: 8px"
          />
          <span>
            Bored? Check out some fun games!
            <i style="margin-top: 4px; display: block; font-size: 0.8em; color: #aaa">
              (From our partner <span style="color: #fff">Gamezop</span>)
            </i>
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
