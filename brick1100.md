---
layout: page
sidebar: false
title: Brick 1100 - Brickify your smartphone
description: Transform your smartphone into a brick phone. Experience the retro vibes of the early days.
image: /assets/brick1100-og.png
pageClass: brick1100
head:
  - - link
    - rel: preload
      href: /assets/fonts/brick.ttf
      as: font
      type: font/ttf
      crossorigin: anonymous
  - - link
    - rel: preload
      href: /assets/fonts/brick-condensed.ttf
      as: font
      type: font/ttf
      crossorigin: anonymous
---

<script setup lang="ts">
import IndexPage from '@components/misc/brick1100/index/IndexPage.vue';
</script>

<IndexPage />

<style>
.brick1100 .VPLocalNav,
.brick1100 .VPSkipLink {
  display: none;
}
</style>
