import { createContentLoader } from "vitepress";

interface PartData {
  name: string;
  part: number;
  url: string;
}

export interface SeriesData {
  name: string;
  parts: PartData[];
}

type SeriesMap = Record<string, SeriesData>;

export interface PageSeries {
  id: string;
  part: number;
  name?: string;
}

declare const data: SeriesMap;

export { data };

export default createContentLoader("blog/*.md", {
  includeSrc: true,
  transform(rawData) {
    const pages = rawData.map((page) => {
      const series: PageSeries = page.frontmatter.series;
      const title = page.frontmatter.title || page.src?.match(/# (.*)/)?.[1];

      if (!series) return null;

      return {
        id: series.id,
        name: series.name || title,
        part: series.part,
        url: page.url,
      };
    });

    return pages.filter(Boolean).reduce((result, page) => {
      if (!page) return result;

      const { id } = page;
      result[id] = result[id] || ({} as SeriesData);
      result[id].name = page.part === 1 ? page.name : result[id].name;
      result[id].parts = result[id].parts || [];
      result[id].parts.push({
        url: page.url,
        name: page.name,
        part: page.part,
      });

      return result;
    }, {} as SeriesMap);
  },
});
