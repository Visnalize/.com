<template>
    <div v-if="score" class="app-rating">
        <span class="stars" :aria-label="`Rated ${score.toFixed(2)} out of 5`">
            <iconify-icon v-for="n in 5" :key="n" :icon="starIcon(n)" />
        </span>
        <span class="score">{{ score.toFixed(2) }} &middot;</span>
        <a :href="`/testimonials/${app}`" class="count">{{ shortenNumber(ratings) }} ratings on app stores</a>
    </div>
</template>

<script setup lang="ts">
import { data as appData } from '@/.content/apps.data';
import { shortenNumber } from '@utils/misc';

interface Props {
    app: 'win7simu' | 'brick1100';
}

const { app } = defineProps<Props>();

const stats = appData[app];
const score = stats.universal?.score ?? 0;
const ratings = stats.universal?.ratings ?? 0;

function starIcon(position: number) {
    if (score >= position) return 'mdi:star';
    if (score >= position - 0.5) return 'mdi:star-half-full';
    return 'mdi:star-outline';
}
</script>

<style scoped>
.app-rating {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    justify-content: center;
    margin: 0.5rem 0 1.5rem;
    color: var(--vp-c-text-2);
    font-size: 0.9rem;
    flex-wrap: wrap;
}

.stars {
    color: #f5a623;
    display: inline-flex;
    font-size: 1.1rem;
}

.score {
    font-weight: 600;
    color: var(--vp-c-text-1);
}
</style>
