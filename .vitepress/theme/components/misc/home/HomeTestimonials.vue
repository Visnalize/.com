<template>
    <HomeSection id="testimonials">
        <template #title>Wall of love</template>
        <template #caption>Users from around the world share their love for retro apps</template>

        <div class="quotes">
            <UserQuote v-for="quote in featuredQuotes" :quote="quote" />
        </div>

        <div class="link-footer">
            <HomeLink href="/testimonials">View all testimonials</HomeLink>
        </div>
    </HomeSection>
</template>

<script setup lang="ts">
import { data as quotes } from '@/.content/quotes.data';
import UserQuote from '../UserQuote.vue';
import HomeLink from './HomeLink.vue';
import HomeSection from './HomeSection.vue';

const featuredQuotes = quotes.filter((quote) => quote.featured);
</script>

<style scoped>
.quotes {
    display: grid;
    gap: 2rem;
}

.link-footer {
    text-align: center;
}

@media (min-width: 480px) {
    .quotes {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
}
</style>
