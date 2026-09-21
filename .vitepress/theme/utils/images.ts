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

/** Width a cover is served at where it only ever renders as a thumbnail. */
const THUMBNAIL_WIDTH = 240;

/**
 * A post cover shrunk to thumbnail size.
 *
 * Same-origin covers go through the image CDN, which is the only source it
 * accepts: asking it for a remote one answers 403. A remote cover instead has
 * its own width parameter lowered, and only when that parameter already holds
 * a number, since a host that reads `w` as something else, such as iStock's
 * `w=is`, would be handed nonsense. Any height goes with it so the image keeps
 * its proportions, and the thumbnail is cropped in CSS.
 */
export const getThumbnail = (src: string) => {
  if (!isExternal(src)) {
    return transformImage(src, {
      width: THUMBNAIL_WIDTH,
      quality: 85,
      format: "auto",
    });
  }

  const url = new URL(src);
  const width = Number(url.searchParams.get("w"));
  if (!Number.isInteger(width) || width <= THUMBNAIL_WIDTH) {
    return src;
  }

  url.searchParams.set("w", String(THUMBNAIL_WIDTH));
  url.searchParams.delete("h");
  return url.toString();
};

export function getAppImage(slug: string) {
  return `/assets/features/${slug}.png`;
}

export function getThemeImage(id: string) {
  return `/assets/themes/${id}.webp`;
}
