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

        const postData: PostData = {
          url: page.url,
          title,
          image,
          createdAt: page.frontmatter.createdAt,
          description: page.frontmatter.description,
          tags: page.frontmatter.tags.map((tag: string) => ({ name: tag })),
        };

        return postData;
      });
  },
});
