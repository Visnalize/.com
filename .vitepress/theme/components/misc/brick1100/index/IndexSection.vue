<template>
    <section :class="['index-section', bgEase]" ref="container">
        <Motion class="section-bg" :style="{ background: bgEase ? background : undefined }" />

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
import { useHeadlineVariants, useScrollProgress } from '@composables/useMotion';
import { Motion, useTransform } from 'motion-v';
import { ref } from 'vue';

interface Props {
    bgEase?: 'ease-in' | 'ease-out'
    animateHeader?: string
    horizontal?: boolean
}

const { bgEase } = defineProps<Props>()

const container = ref<HTMLElement | null>(null)
const { scrollProgress } = useScrollProgress({ element: container, endOffset: 1 })
const textVariants = (i: number) => useHeadlineVariants({ delay: 0.1 * i })

const bgGreenish = 'rgba(144, 166, 126, 1)'
const bgTransparent = 'rgba(0, 0, 0, 0)'
const inputRange = bgEase === 'ease-in' ? [0, 0.2] : [0.8, 1]
const outputRange = bgEase === 'ease-in' ? [bgTransparent, bgGreenish] : [bgGreenish, bgTransparent]

const background = useTransform(scrollProgress, inputRange, outputRange)
</script>

<style scoped>
.index-section {
    position: relative;
    padding: 8rem 0;
    overflow: hidden;
    color: var(--c-blackish);
}

.section-bg {
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: var(--c-greenish);
}

.ease-in {
    padding-top: 120vh;
    margin-top: -100vh;
}

.ease-out {
    padding-bottom: 100vh;
    margin-bottom: -80vh;
}

.section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-header {
    color: var(--c-blackish);
    margin-bottom: 5rem;
    padding: 0 2rem;
    text-align: center;
    max-width: 600px;
}

.section-header h2 {
    font-family: primary, monospace;
    font-size: 3rem;
    line-height: 1.25;
    margin-bottom: 0.5rem;
}

.section-header :deep(p) {
    font-family: condensed, monospace;
    font-size: 0.75rem;
    line-height: 3;
}

@media (min-width: 992px) {
    .flex {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }

    .flex .section-header {
        text-align: left;
    }
}
</style>
