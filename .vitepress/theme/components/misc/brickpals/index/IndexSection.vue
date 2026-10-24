<template>
    <section class="index-section">
        <div :class="['section-container', { 'flex': horizontal }]">
            <div class="section-header">
                <Motion as="h2" :variants="textVariants(0)" :animate="animateHeader">
                    <slot name="title" />
                </Motion>
                <Motion as="p" :variants="textVariants(1)" :animate="animateHeader">
                    <slot name="caption" />
                </Motion>
                <slot name="header" />
            </div>

            <slot />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useHeadlineVariants } from '@composables/useMotion';
import { Motion } from 'motion-v';

interface Props {
    animateHeader?: string
    horizontal?: boolean
}

defineProps<Props>()

const textVariants = (i: number) => useHeadlineVariants({ delay: 0.1 * i })
</script>

<style scoped>
.index-section {
    position: relative;
    padding: 6rem 0;
    overflow: hidden;
}

.section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-header {
    margin-bottom: 4rem;
    padding: 0 2rem;
    text-align: center;
    max-width: 600px;
}

.section-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 1rem;
}

.section-header :deep(p) {
    font-size: 1.125rem;
    line-height: 1.6;
}

@media (min-width: 992px) {
    .flex {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4rem;
    }

    .flex .section-header {
        text-align: left;
        margin-bottom: 0;
    }
}
</style>
