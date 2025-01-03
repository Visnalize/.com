import { ORIGIN } from "../constants";
import { isDevMode, isExternal } from "./misc";

interface TransformOptions {
  anim?: boolean;
  background?: string;
  blur?: number;
  brightness?: number;
  contrast?: number;
  fit?: "scale-down" | "contain" | "cover" | "crop" | "pad";
  gamma?: number;
  gravity?: "auto" | "left" | "right" | "top" | "bottom";
  height?: number;
  quality?: number;
  rotate?: number;
  sharpen?: number;
  trim?: number;
  width?: number;
}

export const transformImage = (imgpath: string, options: TransformOptions) => {
  if (!imgpath || !options) {
    throw new Error("imgpath and options are required");
  }

  if (isDevMode()) {
    return imgpath;
  }

  const optionsString = Object.entries(options)
    .map(([key, value]) => (value === undefined ? "" : `${key}=${value}`))
    .filter(Boolean)
    .join(",");
  const imageUrl = encodeURIComponent(
    isExternal(imgpath) ? imgpath : `${ORIGIN}${imgpath}`
  );
  return `${ORIGIN}/cdn-cgi/image/${optionsString}/${imageUrl}`;
};

export function getAppImage(slug: string) {
  return `/assets/features/${slug}.png`;
}
