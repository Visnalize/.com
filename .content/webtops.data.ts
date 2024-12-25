import { Octokit } from "@octokit/rest";
import { defineLoader } from "vitepress";
import cache from "./utils/cache";

const cacheFile = cache.init("webtops");
const client = new Octokit();

interface Webtop {
  name: string;
  url: string;
  source: string;
}

declare const data: Webtop[];

export { data };

export default defineLoader({
  async load() {
    const cachedContent = cache.read(cacheFile);
    if (cachedContent) return cachedContent;

    const { data } = await client.repos.getContent({
      repo: "syxanash.github.io",
      owner: "syxanash",
      path: "src/resources/remote-desktops.json",
    });
    const repoData = data as { content: string; encoding: "base64" };
    const rawContent = Buffer.from(repoData.content, repoData.encoding);
    const content = JSON.parse(rawContent.toString());

    cache.write(cacheFile, content);

    return content;
  },
});
