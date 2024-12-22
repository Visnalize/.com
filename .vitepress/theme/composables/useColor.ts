import { useCssVar } from "@vueuse/core";
import { parseToRgb, rgba } from "polished";
import { RgbaColor } from "polished/lib/types/color";

export const useNormalizedColor = (colorCssVar: string) => {
  const color = useCssVar(colorCssVar);
  const parsedColor = parseToRgb(color.value) as RgbaColor;
  parsedColor.alpha = parsedColor.alpha ?? 1;
  return rgba(parsedColor);
};
