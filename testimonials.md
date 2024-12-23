---
title: Wall of love - Testimonials for Win7 Simu, Brick 1100
description: See what users have to say about Win7 Simu and Brick 1100. Share your love for retro apps too!
aside: false
comments: false
lastUpdated: false
pageClass: testimonials
---

<script setup lang="ts">
import UserQuote from '@components/misc/UserQuote.vue';
import { data as quotes } from './.content/quotes.data';
</script>

<h1 :class="$style.title">Wall of love</h1>
<p :class="$style.caption">See what users have to say about Win7 Simu and Brick 1100.</p>

<div :class="$style.quotes">
    <UserQuote v-for="quote in quotes" :quote="quote" />
</div>

<style module>
.title {
    text-align: center;
    margin-bottom: 1rem;
}

p.caption {
    text-align: center;
    margin: 0 0 3rem;
}

.quotes {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}
</style>

<style>
.testimonials .VPDoc:not(.has-sidebar) .content {
    max-width: unset;
}
</style>
