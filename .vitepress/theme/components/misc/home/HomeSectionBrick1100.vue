<template>
    <section id="brick1100" ref="container" class="home-section">
        <div class="demo-wrapper">
            <Motion class="brick-demo" :initial="xl ? { opacity: 0, x: -50, scale: 1.1 } : undefined"
                :style="xl ? { opacity, x, scale, visibility } : undefined">
                <!-- <iframe src="https://brick1100.visnalize.com?demo=1" frameborder="0"></iframe> -->
                <HomeDemoVideo>
                    <source src="./assets/brick1100-demo.mp4" type="video/mp4" />
                </HomeDemoVideo>
                <img class="frame" src="./assets/phone-v.webp" alt="Phone frame" />
            </Motion>
            <HomeIntroSection app="brick1100" title="Brick 1100" description="Transform your smartphone into a Nokia 1100.
        Experience the monochrome visual style, classic keypad, and the legendary Snake game." />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useScrollProgress } from '@composables/useMotion';
import { useBreakpoints } from '@composables/useVueUse';
import { Motion, useSpring, useTransform } from 'motion-v';
import { ref } from 'vue';
import HomeDemoVideo from './HomeDemoVideo.vue';
import HomeIntroSection from './HomeIntroSection.vue';

const container = ref<HTMLElement | null>(null)
const { xl } = useBreakpoints()
const { scrollProgress } = useScrollProgress({ element: container, endOffset: 1 })
const x = useSpring(useTransform(scrollProgress, [0, 0.6], [-50, 0]), { bounce: 0 })
const scale = useSpring(useTransform(scrollProgress, [0, 0.6], [1.1, 1]), { bounce: 0 })
const opacity = useTransform(scrollProgress, [0, 0.6], [0, 1])
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
        height: 140vh;
    }

    .demo-wrapper {
        position: sticky;
        top: calc((100% - 620px) / 2);
    }

    .brick-demo {
        visibility: hidden;
    }
}
</style>
