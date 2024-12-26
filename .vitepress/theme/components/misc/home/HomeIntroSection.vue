<template>
    <div ref="container" class="intro-section">
        <Motion :variants="variants(0)" :animate="animate">
            <AppIcon class="logo" :app="app" />
        </Motion>
        <Motion as="h2" :variants="variants(1)" :animate="animate">{{ title }}</Motion>
        <Motion as="p" :variants="variants(2)" :animate="animate">
            <slot />
            <HomeLink :href="`/${app}/about`">More about {{ title }}</HomeLink>
        </Motion>
        <Motion :variants="variants(3)" :animate="animate">
            <AccessLinks :app="app" />
        </Motion>
    </div>
</template>

<script setup lang="ts">
import { useSectionInView, Variants } from '@composables/useMotion';
import { useBreakpoints } from '@composables/useVueUse';
import { App } from '@utils/types';
import { Motion } from 'motion-v';
import { computed, ref } from 'vue';
import AccessLinks from '../../global/AccessLinks.vue';
import AppIcon from '../AppIcon.vue';
import HomeLink from './HomeLink.vue';

interface Props {
    app: App;
    title: string;
}

defineProps<Props>();

const { xl } = useBreakpoints()
const container = ref<HTMLElement | null>(null);
const inView = useSectionInView(container);
const animate = computed(() => {
    if (xl.value) return 'animate';
    return inView.value ? 'animate' : 'initial'
})
const variants = (index: number): Variants => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.5, delay: index * 0.1 } },
})
</script>

<style scoped>
.intro-section {
    font-size: 1rem;
    line-height: 1.5;
    padding: 2rem;
    text-align: center;
}

.intro-section h2 {
    font-size: 2em;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 0.5rem;
}

.intro-section p {
    color: var(--vp-c-text-2);
    margin: auto;
    margin-bottom: 2rem;
    max-width: 30em;
}

.intro-section .access {
    margin: 0;
}

.intro-section .access :deep(img) {
    height: 64px;
}

.logo {
    width: 4em;
    height: auto;
    margin: 0 auto 1rem;
    border-radius: 0.5rem;
}
</style>
