import matter from "gray-matter";
import { createContentLoader } from "vitepress";

export interface NoteData {
  url: string;
  title: string;
  content: string;
  timestamp: number;
}

declare const data: NoteData[];

export { data };

export default createContentLoader("notes/*.md", {
  includeSrc: true,
  transform(rawData) {
    return rawData
      .sort((a, b) => b.frontmatter.timestamp - a.frontmatter.timestamp)
      .map((page) => {
        const { content: parsedContent } = matter(page.src);
        const [, title] = parsedContent.match(/# (.*)/) || [];
        const content = parsedContent.replace(/# (.*)/, "").trim();
        const noteData: NoteData = {
          url: page.url,
          title,
          content,
          timestamp: page.frontmatter.timestamp,
        };

        return noteData;
      });
  },
});
