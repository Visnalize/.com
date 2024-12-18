import { getBlogFiles } from "../../.content/misc.data";

export default {
  paths() {
    const blogFiles = getBlogFiles();
    const tags = blogFiles.map((file) => file.tags).flat();

    return Array.from(new Set(tags)).map((tag) => ({
      params: { tag },
    }));
  },
};
