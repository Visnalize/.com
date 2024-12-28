import { createContentLoader } from "vitepress";
import { TagData } from "./blog-tags.data";

export interface PostData {
  url: string;
  title: string;
  image: string;
  createdAt: number;
  description: string;
  tags: TagData[];
  badge?: "latest" | "popular";
}

declare const data: PostData[];

export { data };

export default createContentLoader("blog/*.md", {
  includeSrc: true,
  transform(rawData) {
    return rawData
      .sort((a, b) => b.frontmatter.createdAt - a.frontmatter.createdAt)
      .map((page) => {
        const [, title] = page.src.match(/# (.*)/) || [];
        const [, image] = page.src.match(/!\[.*\]\((.*)\)/) || [];
        const { tags, ...otherData } = page.frontmatter as PostData;

        const postData: PostData = {
          url: page.url,
          title,
          image,
          tags: page.frontmatter.tags.map((tag: string) => ({ name: tag })),
          ...otherData,
        };

        return postData;
      });
  },
});
