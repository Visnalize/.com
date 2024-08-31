<template>
  <router-link :to="to">{{ v }}</router-link>
</template>

<script>
export default {
  props: {
    v: String,
    p: {
      type: String,
      default: "win7simu",
      validator(value) {
        return ["win7simu", "brick1100"].includes(value);
      },
    },
  },
  computed: {
    to() {
      let path = `/${this.p}/changelog.html`;
      const changelog = this.$site.pages.find((page) =>
        page.path.includes(path)
      );
      if (changelog) {
        const header = changelog.headers.find((header) =>
          header.title.includes(this.v)
        );
        if (header) {
          return { path, hash: "#" + header.slug };
        }
      }
      return path;
    },
  },
};
</script>
