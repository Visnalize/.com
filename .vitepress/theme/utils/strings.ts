const DEFAULT_LENGTH = 180;

export const isTextTooLong = (text: string, length = DEFAULT_LENGTH) =>
  text.length > length;

export const previewText = (text: string, length = DEFAULT_LENGTH) => {
  if (isTextTooLong(text, length)) {
    const truncatedText = text.slice(0, length);
    const lastSpaceIndex = truncatedText.lastIndexOf(" ");
    return (
      (lastSpaceIndex > 0
        ? truncatedText.slice(0, lastSpaceIndex)
        : truncatedText) + "..."
    );
  }
  return text;
};
