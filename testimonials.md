---
title: Wall of love - Testimonials for Win7 Simu, Brick 1100
description: See what users have to say about Win7 Simu and Brick 1100. Share your love for retro apps too!
aside: false
comments: false
lastUpdated: false
pageClass: testimonials
---

<script setup lang="ts">
import PageTitle from '@components/misc/PageTitle.vue';
import UserQuote from '@components/misc/UserQuote.vue';
import { data as quotes } from './.content/quotes.data';
</script>

<PageTitle title="Wall of love">
    See what users have to say about Win7 Simu and Brick 1100.
</PageTitle>

<div :class="$style.quotes">
    <UserQuote v-for="quote in quotes" :quote="quote" showDate />
</div>

<style module>
.quotes {
    display: grid;
    gap: 1.5rem;
}

@media (min-width: 480px) {
    .quotes {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
}
</style>

<style>
.testimonials .VPDoc:not(.has-sidebar) .content {
    max-width: unset;
}
</style>
