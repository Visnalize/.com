import { animate } from "motion-v";
import { onBeforeUnmount, Ref, watch } from "vue";

const SELECTOR = ".VPNav";

/**
 * Toggle navbar's visibility based on the watcher value.
 *
 * @param watcher True to hide the navbar, false to show it.
 */
export const useNavbarVisibility = (watcher: Ref<boolean>) => {
  const isNavbarAvailable = () => document.querySelector(SELECTOR) !== null;
  const showNavbar = () => animate(SELECTOR, { opacity: 1, y: 0 });
  const hideNavbar = () => animate(SELECTOR, { opacity: 0, y: "-100%" });

  watch(watcher, (value) => {
    if (isNavbarAvailable()) value ? hideNavbar() : showNavbar();
  });

  onBeforeUnmount(() => {
    if (isNavbarAvailable()) showNavbar();
  });
};
