import { readdirSync } from "fs";
import matter from "gray-matter";

export default {
  paths() {
    const tags = readdirSync("blog")
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const { data } = matter.read(`blog/${file}`);
        return data.tags;
      })
      .flat();

    return Array.from(new Set(tags)).map((tag) => ({
      params: { tag },
    }));
  },
};
