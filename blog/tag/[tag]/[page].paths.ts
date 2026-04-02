import { getBlogFiles } from "../../../.content/misc.data";

const POSTS_PER_PAGE = 12;

export default {
  paths() {
    const blogFiles = getBlogFiles();
    const tagCounts = new Map<string, number>();

    for (const file of blogFiles) {
      for (const tag of file.tags) {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      }
    }

    const result: { params: { tag: string; page: string } }[] = [];

    for (const [tag, count] of tagCounts) {
      const totalPages = Math.ceil(count / POSTS_PER_PAGE);
      for (let page = 2; page <= totalPages; page++) {
        result.push({ params: { tag, page: String(page) } });
      }
    }

    return result;
  },
};
