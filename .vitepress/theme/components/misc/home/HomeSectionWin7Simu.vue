<template>
    <section id="win7simu" class="home-section">
        <div ref="container" class="demo-wrapper">
            <div class="win7-demo" :style="{ 'top': `calc(50vh - ${offsetTop}px)` }">
                <div ref="content" class="demo-content">
                    <Motion class="video" :style="xl ? { scale, borderRadius } : visible">
                        <HomeDemoVideo>
                            <source src="./assets/win7simu-demo.mp4" type="video/mp4" />
                        </HomeDemoVideo>
                    </Motion>
                    <img class="frame" src="./assets/phone-h.webp" alt="Phone frame" />
                </div>
            </div>
        </div>
        <HomeIntroSection app="win7simu" title="Win7 Simu">
            A recreation of Windows 7, once the best operating system Microsoft has ever made. Experience it right from
            your web browser or mobile device.
        </HomeIntroSection>
    </section>
</template>

<script setup lang="ts">
import { useScrollProgress } from '@composables/useMotion';
import { useBreakpoints } from '@composables/useVueUse';
import { useElementSize } from '@vueuse/core';
import { Motion, useSpring, useTransform } from 'motion-v';
import { computed, ref } from 'vue';
import HomeDemoVideo from './HomeDemoVideo.vue';
import HomeIntroSection from './HomeIntroSection.vue';

const container = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)

const { xl } = useBreakpoints()
const { width } = useElementSize(content)
const { scrollProgress } = useScrollProgress({ element: container, endOffset: 1 })

const visible = { scale: 0.79, borderRadius: '0rem' }
const borderRadius = useTransform(useSpring(scrollProgress), [0, 1], ['1.5rem', visible.borderRadius])
const scale = useTransform(useSpring(scrollProgress, { bounce: 0 }), [0, 1], [1, visible.scale])
const offsetTop = computed(() => (width.value * 9 / 16) / 2)
</script>

<style scoped>
.home-section {
    margin-bottom: 10rem;
}

.win7-demo {
    position: sticky;
}

.win7-demo>div {
    max-width: 700px;
    margin: auto;
    position: relative;
}

.win7-demo .video {
    transform: scale(0.79);
    overflow: hidden;
}

.demo-content {
    position: relative;
    overflow: hidden;
}

.frame {
    position: absolute;
    /* fix alignment between video and frame */
    top: 3px;
    z-index: -1;
}

@media (min-width: 1200px) {
    .demo-wrapper {
        height: 140vh;
        margin-top: -50vh;
    }

    .win7-demo .video {
        border-radius: 1.5rem;
    }
}
</style>
