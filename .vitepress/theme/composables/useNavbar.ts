import { animate } from "motion-v";
import { onBeforeUnmount, Ref, watch } from "vue";

const SELECTOR_NAV = ".VPNav";
const SELECTOR_NAVBAR = ".VPNavBar";

const isNavbarAvailable = () =>
  window?.document?.querySelector(SELECTOR_NAV) !== null;

/**
 * Toggle navbar's visibility based on the watcher value.
 *
 * @param watcher True to hide the navbar, false to show it.
 */
export const useNavbarVisibility = (watcher: Ref<boolean>[]) => {
  const showNavbar = () =>
    animate(
      SELECTOR_NAV,
      { opacity: 1, y: 0, display: "block" },
      { type: "tween" }
    );
  const hideNavbar = () => animate(SELECTOR_NAV, { opacity: 0, y: "-100%" });

  watch(watcher, (value) => {
    if (isNavbarAvailable()) value.some((v) => v) ? hideNavbar() : showNavbar();
  });

  onBeforeUnmount(() => {
    if (isNavbarAvailable()) setTimeout(showNavbar, 500); // delay showing navbar to reduce performance impact
  });
};

export const useNavbar = () => {
  if (!isNavbarAvailable()) return;

  const navbar = document.querySelector(SELECTOR_NAVBAR);
  const { height } = window.getComputedStyle(navbar);
  return { height: parseInt(height) };
};
