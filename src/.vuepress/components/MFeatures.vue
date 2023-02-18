<template>
  <ul>
    <li v-for="feature in features" :key="feature.title">
      <h2>{{ feature.title }}</h2>
      <p>{{ feature.text }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    features: () => [
      {
        title: "Learn & Play",
        text: "A simple code playground for you to learn CSS",
      },
      {
        title: "Publish & Share",
        text: "Take pride in your creativity and share with others",
      },
      {
        title: "Admire & Enjoy",
        text: "Enjoy the creative crafts made by others",
      },
    ],
  },
};
</script>

<style lang="stylus" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
  text-align: center;
  margin: 12px 4px;
  padding: 0 16px;
  width: 100%;
}

h2 {
  border: 0;
  margin-bottom: 0;
  padding: 0;
}

@media (min-width: 720px) {
  ul {
    display: flex;
  }
}
</style>
