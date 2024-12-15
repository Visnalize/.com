import { createContentLoader } from "vitepress";

declare const data: string[];

export { data };

export default createContentLoader("blog/*.md", {
  transform(rawData) {
    const uniqueTags = new Set<string[]>(
      rawData.flatMap((page) => page.frontmatter.tags)
    );
    return Array.from(uniqueTags);
  },
});
