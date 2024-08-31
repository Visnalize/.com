<template>
  <div class="access">
    <a
      href="https://play.google.com/store/apps/details?id=com.visnalize.win7simu"
      target="_blank"
    >
      <img src="/assets/access-store.png" alt="Play Store" width="300" />
    </a>
    <a href="https://win7simu.visnalize.com" target="_blank">
      <img src="/assets/access-web.png" alt="Web App" width="300" />
    </a>
  </div>
</template>

<script>
export default {};
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
