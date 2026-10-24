<template>
    <section id="brickpals" class="home-section">
        <div class="demo-wrapper">
            <HomeIntroSection app="brickpals" title="Brick Pals">
                A tiny 1-bit pal for your home screen. Feed it, play with it, and watch it grow.
            </HomeIntroSection>
            <div ref="demo" class="pals-demo">
                <Motion :initial="{ opacity: 0, x: 50, scale: 1.1 }"
                    :animate="inView ? { opacity: 1, x: 0, scale: 1 } : undefined" :transition="{ duration: 0.6 }">
                    <PalShell />
                </Motion>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Motion, useInView } from 'motion-v';
import { ref } from 'vue';
import PalShell from '../brickpals/PalShell.vue';
import HomeIntroSection from './HomeIntroSection.vue';

const demo = ref<HTMLElement | null>(null)
const inView = useInView(demo, { amount: 0.4, once: true })
</script>

<style scoped>
.home-section {
    margin-bottom: 10rem;
    padding: 10rem 0;
    /* Keeps the section clear of the navbar when the hero button scrolls to it. */
    scroll-margin-top: calc(var(--vp-nav-height) + 2rem);
}

.demo-wrapper {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
}

.pals-demo {
    width: 260px;
}

@media (min-width: 640px) {
    .pals-demo {
        width: 320px;
    }
}

@media (min-width: 960px) {
    .demo-wrapper {
        flex-direction: row;
        gap: 2rem;
    }

    .pals-demo {
        width: 380px;
    }
}
</style>
