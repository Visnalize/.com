<template>
  <label tabindex="0" :aria-label="label" :title="label" @keyup.enter="toggle">
    <input type="checkbox" @change="toggle" :checked="isDark" />
    <span />
  </label>
</template>

<script>
export default {
  data() {
    return { isDark: false };
  },
  computed: {
    label() {
      return this.isDark ? "Sunrise" : "Nightfall";
    },
  },
  mounted() {
    this.isDark = localStorage.getItem("darkMode") === "true";
    this.isDark && this.$root.$el.classList.add("is-dark");
  },
  methods: {
    toggle() {
      this.$root.$el.classList.toggle("is-dark");
      this.isDark = !this.isDark;
      localStorage.setItem("darkMode", this.isDark);
    },
  },
};
</script>

<style lang="stylus" scoped>
label {
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  width: 24px;
  height: 24px;
  padding: 12px;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.08);
  transition: background 0.2s;

  &:hover {
    background: #082032;
  }

  .is-dark & {
    background: rgba(255, 255, 255, 0.3);

    &:hover {
      background: #fff;
    }
  }
}

input {
  display: none;

  & + span {
    width: 100%;
    overflow: hidden;

    &::before, &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background: no-repeat center;
      background-size: 100%;
      transition: transform 0.2s;
    }

    &::before {
      background-image: url('/assets/moon.png');
    }

    &::after {
      background-image: url('/assets/sun.png');
    }
  }

  &:checked + span {
    &::before, &::after {
      transform: translateY(-100%);
    }
  }
}
</style>