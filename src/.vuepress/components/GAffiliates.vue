<template></template>

<script>
import { createToastInterface, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default {
  data() {
    return {
      mounted: false,
      toast: createToastInterface({
        container: document.querySelector("#app"),
        timeout: false,
        position: POSITION.BOTTOM_LEFT,
        showCloseButtonOnHover: true,
      }),
    };
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler(route) {
        if (route.path === "/" || this.mounted) return;
        const Content = (
          <a
            href="https://shipfa.st/?via=visnalize"
            target="_blank"
            style="display: block; color: #fff; margin-top: 8px"
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
        this.toast(Content);
        this.mounted = true;
      },
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
