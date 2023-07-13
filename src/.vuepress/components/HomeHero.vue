<template>
  <section>
    <button @click="scroll">
      <span>
        <img src="/assets/logo.png" />
      </span>
      <span>Visnalize</span>
    </button>
    <h1>Recreating <b>Nostalgia</b> for <b>Entertainment</b></h1>
    <button
      ref="indicator"
      class="indicator"
      aria-label="scroll down"
      @click="scroll"
    />
  </section>
</template>

<script>
import { animate, inView } from "motion";

export default {
  mounted() {
    const navbar = this.$root.$el.querySelector(".navbar");
    const navbarHeight = navbar.scrollHeight;
    inView(this.$refs.indicator, () => {
      animate(navbar, { y: -navbarHeight, opacity: 0 });
      return () => {
        animate(navbar, { y: 0, opacity: 1 });
      };
    });
  },
  methods: {
    scroll() {
      window.scrollTo({ top: this.$el.scrollHeight });
    },
  },
};
</script>

<style lang="stylus" scoped>
section {
  background-image: url('/assets/home-bg.jpg');
  background-color: #1596f2;
  background-size: cover;
  background-attachment: fixed;
  transition: background 0.3s;
  height: 100vh;
  max-height: 900px;
  min-height: 500px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

h1 {
  font-weight: normal;
}

button {
  background: none;
  border: 0;
  display: block;
  cursor: pointer;
  position: relative;

  span {
    &:first-child {
      width: 150px;
      height: 150px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    display: block;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    text-shadow: 0 1px 2px #000;
  }
}

h1 {
  padding: 1rem 2rem;
  margin: 0;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px #000;
  max-width: 600px;
  font-size: 3.5rem;
}

.indicator {
  border: 2px solid #fff;
  border-radius: 24px;
  width: 24px;
  height: 36px;
  position: absolute;
  bottom: 12px;

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 6px;
    background: #fff;
    border-radius: 2px;
    top: 10%;
    left: calc(50% - 2px);
    animation: scroll-down infinite 1.5s;
  }
}

@keyframes scroll-down {
  0% {
    opacity: 0.2;
    transform: translateY(0);
  }

  100% {
    opacity: 1;
    transform: translateY(8px);
  }
}

@media (max-width: 640px) {
  h1 {
    font-size: 2rem;
  }
}
</style>