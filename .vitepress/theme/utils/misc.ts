export const isExternal = (url: string) => {
  return /^(https?:|mailto:|tel:)/.test(url);
};

export const fixCommentId = (url: string) => {
  return url.replace("themestudio.html", "themestudio/");
};
