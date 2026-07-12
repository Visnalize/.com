import { App } from "@/.vitepress/theme/utils/types";
import appleScraper from "app-store-scraper";
import { readFileSync } from "fs";
import googleScraper from "google-play-scraper";
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

export type Platform = "android" | "ios" | "universal";

export type AppFields = {
  appId: string;
  currency: string;
  description: string;
  genre: string;
  genres?: string[];
  maxInstalls?: number;
  primaryGenre?: string;
  ratings: number;
  releaseCount: number;
  score: number;
  title: string;
  url: string;
};

export type AppStats = Partial<Record<Platform, AppFields>>;

type AppData = Record<App, AppStats>;

declare const data: AppData;

export { data };

export default defineLoader({
  async load() {
    const cachedContent = cache.read(cacheFile);
    if (cachedContent) return cachedContent;

    const getAppId = (app: App) => "com.visnalize." + app;
    const apps: App[] = ["win7simu", "brick1100"];
    const [androidWin7simu, androidBrick1100] = await Promise.all(
      apps.map(async (app) => {
        const stats = await googleScraper.app({ appId: getAppId(app) });
        const releaseCount = getReleaseCount(app);
        return { ...stats, releaseCount };
      }),
    );
    const iosBrick1100 = await appleScraper.app({
      appId: getAppId("brick1100"),
      ratings: true,
    });

    const data: AppData = {
      win7simu: {
        android: androidWin7simu,
        universal: androidWin7simu,
      },
      brick1100: {
        ios: iosBrick1100,
        android: androidBrick1100,
        universal: {
          ...androidBrick1100,
          score: (androidBrick1100.score + iosBrick1100.score) / 2,
          ratings: androidBrick1100.ratings + iosBrick1100.ratings,
        },
      },
    };

    cache.write(cacheFile, data);

    return data;
  },
});
