<template>
    <IndexSection :animate-header="shouldAnimate">
        <template #title>Your pal is almost here</template>
        <template #caption>No ads, no account, and it works offline. Everything stays on your phone.</template>

        <div class="cta" ref="trigger">
            <ComingSoon />
            <p class="links">
                <a href="/brickpals/terms">Terms of Use</a>
                <span>·</span>
                <a href="/brickpals/privacy">Privacy Policy</a>
            </p>
        </div>
    </IndexSection>
</template>

<script setup lang="ts">
import { useInView } from 'motion-v';
import { computed, ref } from 'vue';
import ComingSoon from '../ComingSoon.vue';
import IndexSection from './IndexSection.vue';

const trigger = ref<HTMLElement | null>(null)
const inView = useInView(trigger, { once: true })
const shouldAnimate = computed(() => inView.value ? 'animate' : 'initial')
</script>

<style scoped>
.cta {
    padding: 0 1.5rem 4rem;
}

.cta :deep(.coming-soon) {
    margin-top: 0;
}

.links {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
}

.links a {
    color: inherit;
}

.links a:hover {
    color: var(--vp-c-brand-1);
}
</style>
