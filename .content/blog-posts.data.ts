import { createContentLoader } from "vitepress";

export interface PostData {
  url: string;
  title: string;
  image: string;
  createdAt: number;
  description: string;
  tags: string[];
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

        return {
          url: page.url,
          title,
          image,
          ...page.frontmatter,
        };
      });
  },
});
