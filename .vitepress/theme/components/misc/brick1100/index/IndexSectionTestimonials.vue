<template>
    <HomeSection class="section-testimonials">
        <template #title>Wall of love</template>
        <template #caption>Thousands of users love Brick 1100, hear what they have to say</template>

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
import { Variants } from '@composables/useMotion';
import { Motion, useInView } from 'motion-v';
import { ref } from 'vue';
import HomeLink from '../../home/HomeLink.vue';
import HomeSection from '../../home/HomeSection.vue';
import UserQuote from '../../UserQuote.vue';

const featuredQuotes = quotes.filter((quote) => quote.app === 'brick1100').slice(0, 6);
const quoteContainer = ref<HTMLElement | null>(null);
const inView = useInView(quoteContainer, { amount: 0.2, once: true })
const variants = (index: number): Variants => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8, delay: index * 0.1 } },
})
</script>

<style scoped>
.section-testimonials {
    padding: 6rem 1.5rem;
}

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
