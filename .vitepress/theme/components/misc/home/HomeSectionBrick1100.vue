<template>
    <section id="brick1100" ref="container" class="home-section">
        <div class="demo-wrapper">
            <Motion class="brick-demo" :initial="{ opacity: 0, x: -50, scale: 1.1 }"
                :style="{ opacity, x, scale, visibility }">
                <HomeDemoVideo>
                    <source src="./assets/brick1100-demo.mp4" type="video/mp4" />
                </HomeDemoVideo>
                <img class="frame" src="./assets/phone-v.webp" alt="Phone frame" />
            </Motion>
            <HomeIntroSection app="brick1100" title="Brick 1100">
                Transform your smartphone into a Nokia 1100.
                Experience the monochrome visual style, classic keypad, and the legendary Snake game.
            </HomeIntroSection>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useScrollProgress } from '@composables/useMotion';
import { Motion, useSpring, useTransform } from 'motion-v';
import { ref } from 'vue';
import HomeDemoVideo from './HomeDemoVideo.vue';
import HomeIntroSection from './HomeIntroSection.vue';

const container = ref<HTMLElement | null>(null)
const { scrollProgress } = useScrollProgress({ element: container, endOffset: 1 })

const x = useTransform(useSpring(scrollProgress, { bounce: 0 }), [0, 0.8], [-50, 0])
const scale = useTransform(useSpring(scrollProgress, { bounce: 0 }), [0, 0.8], [1.1, 1])
const opacity = useTransform(useSpring(scrollProgress), [0, 0.8], [0, 1])
const visibility = useTransform(scrollProgress, [0, 0.1], ['hidden', 'visible'])
</script>

<style scoped>
.home-section {
    margin-bottom: 10rem;
}

.demo-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.brick-demo {
    position: relative;
    max-width: 200px;
}

video,
iframe {
    position: absolute;
    inset: 0;
    width: 82%;
    height: 94%;
    margin: auto;
}

.frame {
    position: relative;
    z-index: 1;
    pointer-events: none;
}

@media (min-width: 640px) {
    .brick-demo {
        max-width: 260px;
    }
}

@media (min-width: 960px) {
    .demo-wrapper {
        flex-direction: row;
    }

    .brick-demo {
        max-width: 320px;
    }
}

@media (min-width: 1200px) {
    .home-section {
        height: 150vh;
    }

    .demo-wrapper {
        position: sticky;
        top: calc((100% - 620px) / 2);
    }
}

/* Dirty hack to always show the demo on smaller screens */
@media (max-width: 1200px) {
    .brick-demo {
        opacity: 1 !important;
        scale: 1 !important;
        transform: translateX(0) !important;
        visibility: visible !important;
    }
}
</style>
