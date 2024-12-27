import { createContentLoader } from "vitepress";

export interface TagData {
  name: string;
  count?: number;
}

declare const data: TagData[];

export { data };

export default createContentLoader("blog/*.md", {
  transform(rawData) {
    const uniqueTags = new Set(
      rawData.flatMap((page) => page.frontmatter.tags as string[])
    );

    const tagData: TagData[] = Array.from(uniqueTags).map((tag) => {
      const pagesWithTag = rawData.filter((page) =>
        page.frontmatter.tags.includes(tag)
      );
      return { name: tag, count: pagesWithTag.length };
    });

    return tagData;
  },
});
