<template>
  <ul>
    <li v-for="(video, i) in videos" :key="i">
      <a :href="video.url" target="_blank" :title="video.title">
        <img :src="video.thumbnail" :alt="video.title" />
        <span>{{ video.title }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import { YOUTUBE_API_KEY } from "../../../.env.json";

const api = "https://www.googleapis.com/youtube/v3/playlistItems";
const params = new URLSearchParams({
  key: YOUTUBE_API_KEY,
  playlistId: "UUUq46NBY_oz46QLmyuCPxGQ",
  part: "snippet",
  maxResults: 9,
});

export default {
  data() {
    return {
      videos: [],
    };
  },
  async mounted() {
    const result = await fetch(api + "?" + params).then((res) => res.json());
    this.videos = result.items.map((item) => ({
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      url: `https://youtu.be/${item.snippet.resourceId.videoId}`,
    }));
  },
};
</script>

<style lang="stylus" scoped>
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  margin-bottom: 16px;
  padding: 0;
}

li {
  margin: 12px;
}

a, img {
  display: block;
  position: relative;
}

span {
  background: #000;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 4px 8px;
  box-sizing: border-box;
  color: #fff;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media (max-width: 719px) {
  ul {
    display: initial;
  }
}

@media (max-width: 959px) {
  ul {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>