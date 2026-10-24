<template>
    <IndexSection :animate-header="shouldAnimate">
        <template #title>Always with you</template>
        <template #caption>Your pal lives in your home screen widgets, the Dynamic Island and the Lock Screen. On
            Android, it can walk across your wallpaper too.</template>

        <div class="showcase" ref="phones">
            <div class="showcase-wrapper">
                <Motion class="relative" :variants="imgVariants('front')" :animate="shouldAnimate">
                    <img src="../assets/phone-island.webp" alt="Your pal in the Dynamic Island" width="460" height="1000" />
                </Motion>
                <Motion class="absolute" :variants="imgVariants('left')" :animate="shouldAnimate">
                    <img src="../assets/phone-home.webp" alt="Brick Pals widgets on the home screen" width="460"
                        height="1000" />
                </Motion>
                <Motion class="absolute" :variants="imgVariants('right')" :animate="shouldAnimate">
                    <img src="../assets/phone-wallpaper.webp" alt="Live wallpaper looks on Android" width="450"
                        height="1000" />
                </Motion>
            </div>
        </div>
    </IndexSection>
</template>

<script setup lang="ts">
import { Motion, useInView } from 'motion-v';
import { computed, ref } from 'vue';
import IndexSection from './IndexSection.vue';

const phones = ref<HTMLElement | null>(null)
const inView = useInView(phones, { amount: 0.3, once: true })

const shouldAnimate = computed(() => inView.value ? 'animate' : 'initial')

const imgVariants = (position: 'left' | 'right' | 'front') => ({
    initial: {
        opacity: 0,
        y: position === 'front' ? 30 : 0,
    },
    animate: {
        opacity: 1,
        rotate: position === 'left' ? -10 : position === 'right' ? 10 : 0,
        x: position === 'left' ? '-80%' : position === 'right' ? '80%' : 0,
        y: 0,
        transition: { duration: 0.4, delay: position === 'front' ? 0.2 : 0.6 },
    },
})
</script>

<style scoped>
.showcase {
    width: 100%;
    overflow: hidden;
    text-align: center;
    padding: 2rem 0;
}

.showcase-wrapper {
    position: relative;
    display: inline-block;
}

.relative {
    position: relative;
    z-index: 1;
}

.absolute {
    position: absolute;
    bottom: 0;
}

.absolute:last-child {
    right: 0;
}

img {
    width: auto;
    height: 340px;
    border: 6px solid #111;
    border-radius: 2rem;
}

.absolute img {
    height: 300px;
}

@media (min-width: 768px) {
    img {
        height: 560px;
        border-width: 8px;
        border-radius: 3rem;
    }

    .absolute img {
        height: 500px;
    }
}
</style>
