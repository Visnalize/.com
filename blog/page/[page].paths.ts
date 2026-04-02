import { getBlogFiles } from "../../.content/misc.data";

const FIRST_PAGE_SIZE = 11;
const POSTS_PER_PAGE = 12;

export default {
  paths() {
    const total = getBlogFiles().length;
    const totalPages = 1 + Math.ceil((total - FIRST_PAGE_SIZE) / POSTS_PER_PAGE);

    return Array.from({ length: totalPages - 1 }, (_, i) => ({
      params: { page: String(i + 2) },
    }));
  },
};
