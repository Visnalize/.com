export const isExternal = (url: string) => {
  return /^(https?:|mailto:|tel:)/.test(url);
};

export const fixCommentId = (url: string) => {
  return url.replace("themestudio.html", "themestudio/");
};

export function shortenNumber(num: number, digits = 1) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find((item) => num >= item.value);
  return item
    ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol)
    : "0";
}

export function isDevMode() {
  return process.env.NODE_ENV === "development";
}
