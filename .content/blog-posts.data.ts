import { createContentLoader } from "vitepress";
import { TagData } from "./blog-tags.data";

/**
 * A post's frontmatter, exactly as it is written in the file, where a tag is
 * still the plain name the author typed.
 */
export interface PostFrontmatter {
  title?: string;
  createdAt: number;
  description: string;
  tags: string[];
  badge?: "latest" | "popular";
}

/** A post as the blog components read it, with its tags resolved to objects. */
export interface PostData extends Omit<PostFrontmatter, "tags" | "title"> {
  url: string;
  title: string;
  image: string;
  tags: TagData[];
}

declare const data: PostData[];

export { data };

export default createContentLoader("blog/*.md", {
  includeSrc: true,
  transform(rawData) {
    return rawData
      .sort((a, b) => b.frontmatter.createdAt - a.frontmatter.createdAt)
      .map((page) => {
        const [, title] = page.src?.match(/# (.*)/) || [];
        const [, image] = page.src?.match(/!\[.*\]\((.*)\)/) || [];
        const { tags, ...otherData } = page.frontmatter as PostFrontmatter;

        const postData: PostData = {
          url: page.url,
          title,
          image,
          tags: tags.map((name) => ({ name })),
          ...otherData,
        };

        return postData;
      });
  },
});
