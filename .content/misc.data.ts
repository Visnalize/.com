import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { cwd } from "process";
import { PostData } from "./blog-posts.data";

export function getLatestVersion(app: string) {
  const content = readFileSync(`${cwd()}/${app}/changelog.md`);
  const [, version] = content.toString().match(/###\s*(\d+\.\d+\.\d+)/) || [];
  return version;
}

export function getBlogFiles(): PostData[] {
  return readdirSync("blog")
    .filter((file) => file.endsWith(".md"))
    .map((filePath) => {
      const path = `blog/${filePath}`;
      const { data, content } = matter.read(path);
      const [, title] = content.match(/# (.*)/) || [];

      return {
        ...(data as PostData),
        url: "/" + path,
        title,
      };
    });
}
