<template>
    <section id="win7simu" class="home-section">
        <div ref="container" class="demo-wrapper">
            <Motion class="demo-bg" :style="xl ? undefined : { background }">
                <div class="win7-demo" :style="{ 'top': `calc(50vh - ${offsetTop}px)` }">
                    <div ref="content">
                        <Motion as="video" autoplay loop muted playsinline :style="videoStyle">
                            <source src="./assets/win7simu-demo.mp4" type="video/mp4" />
                        </Motion>
                        <img class="frame" src="./assets/phone-h.webp" alt="Phone frame" />
                    </div>
                </div>
            </Motion>
        </div>
        <HomeIntroSection app="win7simu" title="Win7 Simu" description="A recreation of Windows 7, once the best operating system Microsoft has ever made. Experience it right
            from your web browser or mobile device.">
            <img class="logo" src="./assets/win7simu.png" alt="Win7 Simu logo" width="128" height="128" />
        </HomeIntroSection>
    </section>
</template>

<script setup lang="ts">
import { useNormalizedColor } from '@composables/useColor';
import { useScrollProgress } from '@composables/useMotion';
import { useBreakpoints } from '@composables/useVueUse';
import { useElementSize } from '@vueuse/core';
import { Motion, transform } from 'motion-v';
import { computed, ref } from 'vue';
import HomeIntroSection from './HomeIntroSection.vue';

const container = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)

const textColor = useNormalizedColor('--vp-c-text-1');
const bgColor = useNormalizedColor('--vp-c-bg');

const { xl } = useBreakpoints()
const { width } = useElementSize(content)
const { scrollProgress } = useScrollProgress({ element: container, endOffset: 1 })

const background = computed(() => transform(scrollProgress.value, [0.2, 1], [textColor, bgColor]))
const videoStyle = computed(() => ({ scale: transform(scrollProgress.value, [0, 1], [1, 0.79]) }))
const offsetTop = computed(() => (width.value * 9 / 16) / 2)
</script>

<style scoped>
.demo-wrapper {
    height: 140vh;
}

.demo-bg {
    height: 100%;
}

.win7-demo {
    position: sticky;
}

.win7-demo>div {
    max-width: 700px;
    margin: auto;
    position: relative;
}

.win7-demo video {
    will-change: transform;
}

.frame {
    position: absolute;
    /* fix alignment between video and frame */
    top: 3px;
    z-index: -1;
}

.logo {
    width: 4em;
    height: auto;
    margin: 0 auto 1rem;
    border-radius: 0.5rem;
}

@media (min-width: 1200px) {
    .demo-wrapper {
        margin-top: -50vh;
    }
}
</style>
