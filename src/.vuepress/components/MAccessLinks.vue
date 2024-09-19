<template>
  <div class="access">
    <a v-for="link in links" :key="link" :href="link" target="_blank">
      <img v-bind="getImageProps(link)" />
    </a>
  </div>
</template>

<script>
const LinkMap = {
  win7simu: [
    "https://play.google.com/store/apps/details?id=com.visnalize.win7simu",
    "https://win7simu.visnalize.com",
  ],
  brick1100: [
    "https://play.google.com/store/apps/details?id=com.visnalize.brick1100",
    "https://apps.apple.com/us/app/brick-1100/id6554000754",
  ],
};

export default {
  props: {
    app: { type: String, required: true },
  },
  computed: {
    links() {
      return LinkMap[this.app];
    },
  },
  methods: {
    getImageProps(link) {
      const props = { height: 100 };
      if (link.includes("google.com")) {
        props.alt = "Play Store";
        props.src = "/assets/access-google.svg";
      } else if (link.includes("apple.com")) {
        props.alt = "App Store";
        props.src = "/assets/access-apple.svg";
      } else {
        props.alt = "Web App";
        props.src = "/assets/access-web.svg";
      }
      return props;
    },
  },
};
</script>

<style lang="stylus" scoped>
.access {
  margin: 2rem 0;
  text-align: center;

  a {
    display: inline-block;
    margin: 0.6rem;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
