import { ORIGIN } from "../config/const";
import { isExternal } from "./urls";

/**
 * Docs: https://developers.cloudflare.com/images/transform-images/transform-via-url/
 *
 * @param {string} imagePath
 * @param {TransformOptions} options
 * @returns
 */
export function transform(imagePath, options) {
  if (!imagePath || !options) {
    throw new Error("imageUrl and options are required");
  }
  const optionsString = Object.entries(options)
    .map(([key, value]) => (value === undefined ? "" : `${key}=${value}`))
    .filter(Boolean)
    .join(",");
  const imageUrl = encodeURIComponent(
    isExternal(imagePath) ? imagePath : `${ORIGIN}${imagePath}`
  );
  return `${ORIGIN}/cdn-cgi/image/${optionsString}/${imageUrl}`;
}

/**
 * @typedef {Object} TransformOptions
 * @property {boolean} [anim]
 * @property {string} [background]
 * @property {number} [blur]
 * @property {number} [brightness]
 * @property {number} [contrast]
 * @property {'scale-down' | 'contain' | 'cover' | 'crop' | 'pad'} [fit]
 * @property {number} [gamma]
 * @property {'auto' | 'left' | 'right' | 'top' | 'bottom'} [gravity]
 * @property {number} [height]
 * @property {number} [quality]
 * @property {number} [rotate]
 * @property {number} [sharpen]
 * @property {number} [trim]
 * @property {number} [width]
 */
