import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { cwd } from "process";
import { getThumURL } from "thum.io";
import { loadEnv } from "vitepress";

const { VITE_THUM_AUTH_KEY: authKey } = loadEnv("", cwd());

const getOgImage = async (pagePath: string) => {
  const publicDir = join(cwd(), "public", "assets", "ogimage");
  const fileName = (pagePath ? pagePath.replace(/\//g, "-") : "home") + ".png";
  const filePath = join(publicDir, fileName);
  const publicPath = `/assets/ogimage/${fileName}`;

  if (existsSync(filePath)) {
    return publicPath;
  }

  const thumUrl = getThumURL({
    url: "noanimate/https://visnalize.com/" + pagePath,
    auth: authKey,
    ogImage: true,
  });
  const response = await fetch("https:" + thumUrl);
  const arrayBuffer = await response.arrayBuffer();

  mkdirSync(publicDir, { recursive: true });

  writeFileSync(filePath, Buffer.from(arrayBuffer));

  return publicPath;
};

export default getOgImage;
