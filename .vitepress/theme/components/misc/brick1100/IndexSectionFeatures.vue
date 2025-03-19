<template>
    <section class="index-features" ref="container">
        <Motion class="features-bg" :style="{ background: lg ? background : undefined }" />
        <div class="features-container" ref="features">
            <div class="features-header">
                <Motion as="h2" :variants="textVariants(0)" :animate="shouldAnimate">Brick but feature-rich</Motion>
                <Motion as="p" :variants="textVariants(1)" :animate="shouldAnimate">
                    Brick 1100 brings you the simplicity at its best, packed with
                    tons of features to ease your life
                </Motion>
            </div>
            <ul>
                <Motion as="li" v-for="i in lg ? 9 : 6" :variants="imgVariants(i)" :animate="shouldAnimate">
                    <img :src="`/assets/brick1100/features/image-${i}.png`" alt="Feature" />
                </Motion>
            </ul>
            <a href="/brick1100/changelog">
                <span>All features through versions</span>
                <iconify-icon icon="pixelarticons:arrow-right" />
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useHeadlineVariants, useScrollProgress } from '@composables/useMotion';
import { useNavbarVisibility } from '@composables/useNavbar';
import { useBreakpoints } from '@composables/useVueUse';
import { Motion, useInView, useTransform } from 'motion-v';
import { computed, ref } from 'vue';

const container = ref<HTMLElement | null>(null)
const features = ref<HTMLElement | null>(null)
const { scrollProgress } = useScrollProgress({ element: container, endOffset: 1 })
const { lg } = useBreakpoints()
const featuresInView = useInView(features)
const featuresInViewOnce = useInView(features, { amount: 0.2, once: true })
const background = useTransform(scrollProgress, [0, 0.3], ['rgba(0, 0, 0, 0)', 'rgba(144, 166, 126, 1)'])

useNavbarVisibility(featuresInView)

const shouldAnimate = computed(() => featuresInViewOnce.value ? 'animate' : 'initial')
const textVariants = (i: number) => useHeadlineVariants({ delay: 0.1 * i })
const imgVariants = (i: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 * i + 0.3 } },
})
</script>

<style scoped>
@font-face {
    font-family: "primary";
    src: url('/assets/fonts/brick.ttf') format('truetype');
}

@font-face {
    font-family: "condensed";
    src: url('/assets/fonts/brick-condensed.ttf') format('truetype');
}

.index-features {
    --c-greenish: rgb(144, 166, 126);
    --c-blackish: rgb(0, 0, 0);
    position: relative;
    padding: 8rem 0;
}

.features-bg {
    position: absolute;
    inset: 0;
    z-index: -1;
    background-color: var(--c-greenish);
}

.features-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.features-header {
    color: var(--c-blackish);
    margin-bottom: 3rem;
    padding: 0 2rem;
    text-align: center;
    max-width: 600px;
}

.features-header h2 {
    font-family: primary, monospace;
    font-size: 3rem;
    line-height: 1.25;
    margin-bottom: 0.5rem;
}

.features-header p {
    font-family: condensed, monospace;
    font-size: 0.75rem;
    line-height: 2.5;
}

ul {
    display: grid;
    gap: 3rem;
    padding: 0.25rem;
    margin-bottom: 3rem;
}

li {
    width: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-family: primary, monospace;
    font-size: 1.25rem;
    padding: 0.25rem 0.5rem;
    color: var(--c-blackish);
}

a iconify-icon {
    font-size: 1.5em;
}

a:hover {
    background: rgba(0, 0, 0, 0.8);
    color: var(--c-greenish);
}

@media (min-width: 640px) {
    ul {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 992px) {
    .index-features {
        padding-top: 120vh;
        margin-top: -100vh;
    }

    ul {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 1200px) {
    li {
        width: 320px;
    }
}
</style>
