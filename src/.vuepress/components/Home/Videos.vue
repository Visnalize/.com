<template>
  <ul>
    <li v-for="(video, i) in videos" :key="i">
      <a :href="video.url" target="_blank" :title="video.title">
        <span class="thumbnail">
          <img :src="video.thumbnail" :alt="video.title" />
        </span>
        <span>{{ video.title }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
const api = "https://www.googleapis.com/youtube/v3/playlistItems";
const params = new URLSearchParams({
  key: "AIzaSyDdLD0KGCsVWEu0cx6NrxllWT2qkFhfNg8",
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
  gap: 2rem;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
}

li {
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:hover img {
    transform: scale(1.4);
  }

  .is-dark & {
    background: $bgColorDark;
  }
}

span {
  display: block;
  overflow: hidden;

  &:last-child {
    color: $textColor;
    padding: 0.5rem 1rem;
    text-align: center;

    .is-dark & {
      color: $textColorDark;
    }
  }
}

img {
  display: block;
  transform: scale(1.35);
  transition: transform 0.3s ease-out;
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
