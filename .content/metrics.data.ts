import { App } from "@/.vitepress/theme/utils/types";
import { readFileSync } from "fs";
import { join } from "path";
import { defineLoader } from "vitepress";

declare const data: {
  win7SimuReleases: number;
  brick1100Releases: number;
};

export { data };

function getReleaseCount(app: App) {
  const content = readFileSync(join(process.cwd(), app, "changelog.md"));
  const releases = content.toString().match(/###\s*\d+\.\d+\.\d+/g) || [];
  return releases.length;
}

export default defineLoader({
  load() {
    return {
      win7SimuReleases: getReleaseCount("win7simu"),
      brick1100Releases: getReleaseCount("brick1100"),
    };
  },
});
