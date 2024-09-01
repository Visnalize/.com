<template>
  <footer>
    <ul class="link-buttons">
      <li v-for="(link, key) in links" :key="key">
        <a
          :href="link.href"
          :data-social="key"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="link.src" :alt="key" width="24" height="24" />
        </a>
      </li>
    </ul>
    <div>Copyright © 2021 - present. All Rights Reserved</div>
  </footer>
</template>

<script>
import links from "../links";

export default {
  data() {
    return {
      links,
    };
  },
};
</script>

<style lang="stylus" scoped>
linkStyle(bg, shade) {
  background: bg;
  box-shadow: 0 3px shade;
  border-bottom: 2px solid shade;

  &:hover {
    transform: translateY(3px);
    box-shadow: none !important;
  }
}

.link-buttons {
  margin: 0 auto 1.8rem;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;

  a {
    display: block;
    min-width: 64px;
    padding: 12px;
    margin: 0 4px;
    border-radius: 8px;
    box-sizing: border-box;
    transition-property: transform, box-shadow;
    transition-duration: 0.2s;
    linkStyle(#eee, #d0d0d0);

    img {
      display: block;
      margin: auto;
      width: auto;
    }

    &[data-social='twitter'] {
      linkStyle(#1da1f2, #2f81be);
    }

    &[data-social='github'] {
      linkStyle(#333, #000);
    }

    &[data-social='youtube'] {
      linkStyle(#f00, #900);
    }
  }
}

footer {
  border-top: 1px solid $borderColor;
  color: $textColor;
  padding: 2.5rem;
  text-align: center;

  .is-dark & {
    border-color: $borderColorDark;
    color: $textColorDark;
  }
}
</style>

<style lang="stylus">
.home .footer {
  padding: 0;
}
</style>