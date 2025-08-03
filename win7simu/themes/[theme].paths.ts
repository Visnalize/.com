import { themes } from "../../.content/themes.data";

export default {
  paths() {
    return themes.map((theme) => ({
      params: { theme: theme.slug },
    }));
  },
};
