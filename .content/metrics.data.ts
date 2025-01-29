import { App } from "@/.vitepress/theme/utils/types";
import { readFileSync } from "fs";
import { join } from "path";
import { defineLoader } from "vitepress";

interface Data {
  revenueCards: {
    id: string;
    title: string;
    subtitle: string;
  }[];
  stats: {
    win7SimuReleases: number;
    brick1100Releases: number;
  };
}

declare const data: Data;

export { data };

function getReleaseCount(app: App) {
  const content = readFileSync(join(process.cwd(), app, "changelog.md"));
  const releases = content.toString().match(/###\s*\d+\.\d+\.\d+/g) || [];
  return releases.length;
}

export default defineLoader({
  load() {
    const data: Data = {
      revenueCards: [
        {
          id: "cost",
          title: "Cost",
          subtitle: "Average monthly cost",
        },
        {
          id: "mrr",
          title: "MRR",
          subtitle: "Monthly Recurring Revenue",
        },
        {
          id: "arr",
          title: "ARR",
          subtitle: "Annual Recurring Revenue",
        },
        {
          id: "total",
          title: "Total",
          subtitle: "Total revenue from beginning",
        },
      ],
      stats: {
        win7SimuReleases: getReleaseCount("win7simu"),
        brick1100Releases: getReleaseCount("brick1100"),
      },
    };

    return data;
  },
});
