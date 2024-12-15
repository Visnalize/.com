import { apps } from "../../.content/simulated-apps.data";

export default {
  paths() {
    return apps.map((app) => ({
      params: { app: app.slug },
    }));
  },
};
