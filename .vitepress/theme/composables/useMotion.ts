import { useResizeObserver } from "@vueuse/core";
import {
  transform,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  Variant,
} from "motion-v";
import { computed, ref, Ref } from "vue";

interface ScrollProgressOptions {
  /** Reference to the element that will be used to calculate the scroll progress. */
  element: Ref<HTMLElement>;
  /** Value between 0 and 1 that determines the start offset from the top. This is relative size of the viewport. Useful for triggering the end of the animation before the element leaves viewport. */
  startOffset?: number;
  /** Value between 0 and 1 that determines the ending offset from the bottom. This is relative size of the viewport. Useful for triggering the end of the animation before the element leaves viewport. */
  endOffset?: number;
}

export const useScrollProgress = ({
  element,
  startOffset = 0,
  endOffset = 0,
}: ScrollProgressOptions) => {
  const scrollProgress = useMotionValue(0);
  const scrollProgressRef = ref(0);
  const { scrollY } = useScroll();

  const computeBounds = () => {
    const { height } = element.value.getBoundingClientRect();
    const top = element.value.offsetTop;
    const vh = window.innerHeight;
    const start = top - vh * startOffset;
    const end = top + height - vh * endOffset;
    return { start, end };
  };

  const setProgress = (value: number) => {
    scrollProgress.set(value);
    scrollProgressRef.value = value;
  };

  useMotionValueEvent(scrollY, "change", (value) => {
    const { start, end } = computeBounds();
    setProgress(transform(value, [start, end], [0, 1]));
  });

  useResizeObserver(element, () => {
    const { start, end } = computeBounds();
    const currentScroll = scrollY.get();
    const inView = currentScroll >= start && currentScroll <= end;
    if (inView) {
      setProgress(transform(currentScroll, [start, end], [0, 1]));
    } else {
      setProgress(currentScroll < start ? 0 : 1);
    }
  });

  return { scrollProgress, scrollProgressRef };
};

export const useSectionInView = (element: Ref<HTMLElement>) => {
  const { scrollProgressRef } = useScrollProgress({
    element,
    startOffset: 0.5,
  });
  return computed(() => scrollProgressRef.value > 0);
};

export type Variants = Record<string, Variant>;
