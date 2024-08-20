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
  {
    path: "/brick1100/feedback",
    to: "https://feedback.userreport.com/f5469bcf-5bce-464f-a88e-6f177c8fa8b7/#ideas/popular",
  },
  {
    path: "/brick1100/chat",
    to: "https://discord.gg/6AQDnZa4Xm",
  },
  {
    path: "/brick1100/eula",
    to: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
  },
  {
    path: "/brick1100/android",
    to: "https://play.google.com/store/apps/details?id=com.visnalize.brick1100",
  },
  {
    path: "/brick1100/ios",
    to: "/brick1100/about",
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
