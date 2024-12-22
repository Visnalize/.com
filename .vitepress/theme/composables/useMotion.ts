import { transform, useMotionValueEvent, useScroll } from "motion-v";
import { ref, Ref } from "vue";

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
  const scrollProgress = ref(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    const { height } = element.value.getBoundingClientRect();
    const top = element.value.offsetTop;
    const vh = window.innerHeight;
    const start = top - vh * startOffset;
    const end = top + height - vh * endOffset;
    scrollProgress.value = transform(value, [start, end], [0, 1]);
  });

  return { scrollProgress };
};
