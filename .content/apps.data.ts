import { App } from "@/.vitepress/theme/utils/types";
import { readFileSync } from "fs";
import { app, IAppItemFullDetail } from "google-play-scraper";
import { join } from "path";
import { defineLoader } from "vitepress";
import cache from "./utils/cache";
import { ALL_RELEASE_VERSIONS } from "./utils/regex";

const cacheFile = cache.init("apps");

function getReleaseCount(app: App) {
  const content = readFileSync(join(process.cwd(), app, "changelog.md"));
  const releases = content.toString().match(ALL_RELEASE_VERSIONS) || [];
  return releases.length;
}

type AppData = Record<App, IAppItemFullDetail & { releaseCount: number }>;

declare const data: AppData;

export { data };

export default defineLoader({
  async load() {
    const cachedContent = cache.read(cacheFile);
    if (cachedContent) return cachedContent;

    const appIds: App[] = ["win7simu", "brick1100"];
    const [win7simu, brick1100] = await Promise.all(
      appIds.map(async (appId) => {
        const stats = await app({ appId: "com.visnalize." + appId });
        const releaseCount = getReleaseCount(appId);
        return { ...stats, releaseCount };
      }),
    );

    const data: AppData = { win7simu, brick1100 };

    cache.write(cacheFile, data);

    return data;
  },
});
