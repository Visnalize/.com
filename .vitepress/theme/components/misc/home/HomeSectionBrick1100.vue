<template>
    <section id="brick1100" ref="container" class="home-section">
        <Motion class="brick-demo" :style="demoStyle">
            <iframe src="https://brick1100.visnalize.com?demo=1" frameborder="0"></iframe>
            <img class="frame" src="./assets/phone-v.webp" alt="Phone frame" />
        </Motion>
        <HomeIntroSection app="brick1100" title="Brick 1100" description="Transform your smartphone into a Nokia 1100.
        Experience the monochrome visual style, classic keypad, and the legendary Snake game.">
            <img src="./assets/brick1100.png" alt="Brick 1100 logo" width="128" height="128" />
        </HomeIntroSection>
    </section>
</template>

<script setup lang="ts">
import { useScrollProgress } from '@composables/useMotion';
import { Motion, transform } from 'motion-v';
import { computed, ref } from 'vue';
import HomeIntroSection from './HomeIntroSection.vue';

const container = ref<HTMLElement | null>(null);
const { scrollProgress } = useScrollProgress({ element: container, endOffset: 0.5 })

const demoStyle = computed(() => ({ y: transform(scrollProgress.value, [0, 1], [160, -50]) }));
</script>

<style scoped>
.home-section {
    padding: 6rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
}

.brick-demo {
    position: relative;
    max-width: 260px;
}

iframe {
    position: absolute;
    inset: 0;
    width: 82%;
    height: 93%;
    margin: auto;
}

.frame {
    position: relative;
    z-index: 1;
    pointer-events: none;
}

.intro-section img {
    width: 4em;
    height: auto;
    margin: 0 auto 1rem;
    border-radius: 0.5rem;
}

@media (min-width: 960px) {
    .home-section {
        padding: 10rem 0;
        flex-direction: row;
    }

    .brick-demo {
        max-width: 320px;
    }
}
</style>
