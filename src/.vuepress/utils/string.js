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

export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function lowerFirst(text) {
  return text.charAt(0).toLowerCase() + text.slice(1);
}
