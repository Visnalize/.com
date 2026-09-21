import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import { cwd } from "process";
import { PostFrontmatter } from "./blog-posts.data";
import { RELEASE_VERSION } from "./utils/regex";

export function getLatestVersion(app: string) {
  const content = readFileSync(join(cwd(), app, "changelog.md"));
  const [, version] = content.toString().match(RELEASE_VERSION) || [];
  return version;
}

/** A post read off disk: its frontmatter, plus the url and title derived. */
export interface PostFile extends PostFrontmatter {
  url: string;
  title: string;
}

export function getBlogFiles(): PostFile[] {
  return readdirSync("blog")
    .filter((file) => file.endsWith(".md"))
    .map((filePath) => {
      const path = `blog/${filePath}`;
      const { data, content } = matter.read(path);
      const [, title] = content.match(/# (.*)/) || [];

      return {
        ...(data as PostFrontmatter),
        url: "/" + path,
        title,
      };
    });
}
