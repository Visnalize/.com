<template>
    <IndexSection :animate-header="shouldAnimate">
        <template #title>Your pal is waiting</template>
        <template #caption>Free on iOS and Android, with Pro for extra perks. No ads, no account, and it works offline.</template>

        <div class="cta" ref="trigger">
            <AccessLinks app="brickpals" />
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
import AccessLinks from '@components/global/AccessLinks.vue';
import IndexSection from './IndexSection.vue';

const trigger = ref<HTMLElement | null>(null)
const inView = useInView(trigger, { once: true })
const shouldAnimate = computed(() => inView.value ? 'animate' : 'initial')
</script>

<style scoped>
.cta {
    padding: 0 1.5rem 4rem;
}

.cta :deep(.access) {
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
