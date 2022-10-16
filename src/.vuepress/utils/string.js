/**
 * @param {string} text
 * @param {string} separator
 */
export function pascalize(text, separator = "-") {
  return text
    .split(separator)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
