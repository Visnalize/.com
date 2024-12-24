import { readFileSync, writeFileSync } from "fs";
import { defineLoader, loadEnv } from "vitepress";

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

const cacheFile = process.cwd() + "/.cache/channel.data.json";

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
    if (cacheFile) {
      try {
        const content = readFileSync(cacheFile, "utf-8");
        const { stats, videos } = JSON.parse(content.toString());
        console.info("Loaded channel data from cache");
        return { stats, videos };
      } catch (e) {
        console.info("No cache found, fetching channel data");
      }
    }

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

    writeFileSync(cacheFile, JSON.stringify({ stats, videos }));

    console.info("Channel data fetched and cached");

    return { stats, videos };
  },
});
