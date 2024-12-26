<template>
    <HomeSection id="testimonials">
        <template #title>Wall of love</template>
        <template #caption>Users from around the world share their love for retro apps</template>

        <div ref="quoteContainer" class="quotes">
            <Motion v-for="(quote, i) in featuredQuotes" :variants="variants(i)"
                :animate="inView ? 'animate' : 'initial'">
                <UserQuote :quote="quote" />
            </Motion>
        </div>

        <div class="link-footer">
            <HomeLink href="/testimonials">View all testimonials</HomeLink>
        </div>
    </HomeSection>
</template>

<script setup lang="ts">
import { data as quotes } from '@/.content/quotes.data';
import { useSectionInView, Variants } from '@composables/useMotion';
import { Motion } from 'motion-v';
import { ref } from 'vue';
import UserQuote from '../UserQuote.vue';
import HomeLink from './HomeLink.vue';
import HomeSection from './HomeSection.vue';

const featuredQuotes = quotes.filter((quote) => quote.featured);
const quoteContainer = ref<HTMLElement | null>(null);
const inView = useSectionInView(quoteContainer)
const variants = (index: number): Variants => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8, delay: index * 0.1 } },
})
</script>

<style scoped>
.quotes {
    display: grid;
    gap: 2rem;
}

.quotes>div {
    display: flex;
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
