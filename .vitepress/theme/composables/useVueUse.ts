import {
  breakpointsBootstrapV5,
  useBreakpoints as useCoreBreakpoints,
  useScrollLock as useCoreScrollLock,
} from "@vueuse/core";
import { inBrowser } from "vitepress";

export const useBreakpoints = () => {
  const breakpoints = useCoreBreakpoints(breakpointsBootstrapV5);
  return breakpoints;
};

export const useWindowScrollLock = () => {
  return useCoreScrollLock(inBrowser ? window : null);
};
