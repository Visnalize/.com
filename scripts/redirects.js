const { join } = require("path");
const { writeFileSync } = require("fs");

const redirects = [
  {
    path: "/patreon",
    to: "https://www.patreon.com/visnalize",
  },
  {
    path: "/playstore",
    to: "https://play.google.com/store/apps/dev?id=7119371547095400132",
  },
  {
    path: "/youtube",
    to: "https://www.youtube.com/@visnalize",
  },
  {
    path: "/win7simu/dyk",
    to: "https://www.youtube.com/playlist?list=PLztkJSxlj5P76jbbySzGMBZ4reCYbSA5y",
  },
];

const html = (redirectUrl) =>
  `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;URL='${redirectUrl}'"></head></html>`;

(function makeRedirects() {
  const dist = join(process.cwd(), "src/.vuepress/dist");
  redirects.forEach(({ path, to }) =>
    writeFileSync(join(dist, `${path}.html`), html(to))
  );
})();
