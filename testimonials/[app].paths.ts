import { App } from "@/.vitepress/theme/utils/types";

export default {
  paths() {
    const appIds: App[] = ["win7simu", "brick1100"];

    return appIds.map((app) => ({
      params: { app },
    }));
  },
};
