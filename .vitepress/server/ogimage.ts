import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { cwd } from "process";
import { getThumURL } from "thum.io";
import { loadEnv } from "vitepress";

const { VITE_THUM_AUTH_KEY: authKey } = loadEnv("", cwd());
const defaultOgImage = "/assets/visnalize-og.png";

const getOgImage = async (pagePath: string) => {
  if (!pagePath) return defaultOgImage;

  const publicDir = join(cwd(), "public", "assets", "ogimage");
  const fileName = pagePath.replace(/\//g, "-").replace(".html", "") + ".png";
  const filePath = join(publicDir, fileName);
  const publicPath = `/assets/ogimage/${fileName}`;

  if (existsSync(filePath)) {
    return publicPath;
  }

  const refreshCache = "?m=" + new Date().getMonth(); // add month to force refresh in case maxAge doesn't work
  const thumUrl = getThumURL({
    url: `noanimate/https://visnalize.com/${pagePath}${refreshCache}`,
    auth: authKey,
    ogImage: true,
    maxAge: 24 * 7, // 1 week in hours
  });

  try {
    const response = await fetch("https:" + thumUrl);
    const arrayBuffer = await response.arrayBuffer();

    mkdirSync(publicDir, { recursive: true });

    writeFileSync(filePath, Buffer.from(arrayBuffer));

    return publicPath;
  } catch (e) {
    console.error("Failed to fetch OG image for path: " + pagePath);
    return defaultOgImage;
  }
};

export default getOgImage;
