import { defineLoader, loadEnv } from "vitepress";
import cache from "./utils/cache";

interface Statistics {
  viewCount: number;
  subscriberCount: number;
  hiddenSubscriberCount: boolean;
  videoCount: number;
}

interface Snippet {
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: Record<
    "default" | "medium" | "high" | "maxres" | "standard",
    { url: string; width: number; height: number }
  >;
}

const cacheFile = cache.init("channel");

const { VITE_YOUTUBE_API_KEY: apiKey } = loadEnv("", process.cwd());

const apiUrl = "https://www.googleapis.com/youtube/v3";
const playlistId = "UUUq46NBY_oz46QLmyuCPxGQ";
const handle = "visnalize";

declare const data: {
  stats: Statistics & Snippet;
  videos: (Snippet & { resourceId: { videoId: string } })[];
};

export { data };

const fetchData = (endpoint: string, params: Record<string, string>) => {
  const searchParams = new URLSearchParams({ key: apiKey, ...params });
  return fetch(`${apiUrl}/${endpoint}?${searchParams}`, {
    referrer: "https://visnalize.com",
  });
};

export default defineLoader({
  async load() {
    const cachedContent = cache.read(cacheFile);
    if (cachedContent) return cachedContent;

    // https://developers.google.com/youtube/v3/docs/channels/list
    const fetchStats = fetchData("channels", {
      forHandle: handle,
      part: "snippet,statistics",
      maxResults: "1",
    });

    // https://developers.google.com/youtube/v3/docs/playlistItems/list
    const fetchVideos = fetchData("playlistItems", {
      playlistId,
      part: "snippet",
      maxResults: "6",
    });

    let stats: Statistics & Snippet;
    let videos: Snippet[];
    let statsResult: any;
    let videosResult: any;

    try {
      const [statsRes, videosRes] = await Promise.all([
        fetchStats,
        fetchVideos,
      ]);
      statsResult = await statsRes.json();
      videosResult = await videosRes.json();
    } catch (e) {
      console.error(e);
      return { stats: {}, videos: [] };
    }

    try {
      const { statistics, snippet: channelSnippet } = statsResult.items[0];
      const videosSnippets = videosResult.items.map(({ snippet }) => snippet);
      stats = { ...statistics, ...channelSnippet };
      videos = videosSnippets;
    } catch (e) {
      console.error(e);
      return { stats: {}, videos: [] };
    }

    cache.write(cacheFile, { stats, videos });

    console.info("Channel data fetched and cached");

    return { stats, videos };
  },
});
