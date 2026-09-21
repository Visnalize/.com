import { ORIGIN } from "../constants";
import { isDevMode, isExternal } from "./misc";

interface TransformOptions {
  anim?: boolean;
  background?: string;
  blur?: number;
  brightness?: number;
  contrast?: number;
  fit?: "scale-down" | "contain" | "cover" | "crop" | "pad";
  format?: "auto" | "avif" | "webp" | "json";
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

/**
 * A cover served at the width it is shown at. The image CDN takes same-origin
 * sources only, so a remote cover has its own width parameter lowered instead,
 * and only when that parameter already holds a number: iStock spends `w` on a
 * signature. Any height goes with it, so the image keeps its proportions.
 */
export const resizeCover = (src: string, width: number) => {
  if (!isExternal(src)) {
    return transformImage(src, { width, quality: 85, format: "auto" });
  }

  const url = new URL(src);
  const current = Number(url.searchParams.get("w"));
  if (!Number.isInteger(current) || current <= width) {
    return src;
  }

  url.searchParams.set("w", String(width));
  url.searchParams.delete("h");
  return url.toString();
};

export function getAppImage(slug: string) {
  return `/assets/features/${slug}.png`;
}

export function getThemeImage(id: string) {
  return `/assets/themes/${id}.webp`;
}
