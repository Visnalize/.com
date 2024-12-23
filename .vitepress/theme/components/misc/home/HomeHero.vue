<template>
    <section ref="container" class="home-hero-container">
        <Motion class="home-hero" :style="xl ? heroStyle : undefined">
            <HomeHeroIcon class="icon-absolute" @click="reveal" />

            <div class="hero-section section-left">
                <HomeHeroIcon class="icon-relative" @click="reveal" />
                <Motion as="h1" initial="initial" animate="visible" :transition="titleTransition">
                    <Motion as="span" :variants="titleAnimation">
                        Recreating Nostalgia
                    </Motion>
                    <Motion as="span" :variants="titleAnimation">
                        for Entertainment
                    </Motion>
                </Motion>
                <Motion as="p" :initial="{ opacity: 0 }" :animate="{ opacity: 1 }"
                    :transition="{ duration: 0.6, delay: 0.8 }">
                    Visnalize brings retro products back to life with creative ideas and modern technology.
                    Miss the operating systems that you grew up with? Want to experience the old-school brick
                    phone again? They are at your fingertips, literally.
                </Motion>
            </div>

            <Motion class="hero-section section-right" initial="initial" animate="visible"
                :transition="buttonTransition">
                <Motion :variants="buttonAnimation">
                    <button @click="() => reveal('win7simu')">
                        <img src="./assets/win7simu.png" alt="Win7 Simu logo" width="64" height="64" />
                        <span>Win7 Simu</span>
                    </button>
                </Motion>
                <Motion :variants="buttonAnimation">
                    <button @click="() => reveal('brick1100')">
                        <img src="./assets/brick1100.png" alt="Brick 1100 logo" width="64" height="64" />
                        <span>Brick 1100</span>
                    </button>
                </Motion>
            </Motion>
        </Motion>
    </section>
</template>

<script setup lang="ts">
import { useScrollProgress } from '@composables/useMotion';
import { useBreakpoints } from '@composables/useVueUse';
import { AnimateOptions, Motion, Options, transform } from 'motion-v';
import { inBrowser } from 'vitepress';
import { computed, ref } from 'vue';
import HomeHeroIcon from './HomeHeroIcon.vue';

const container = ref<HTMLElement | null>(null)
const { xl } = useBreakpoints()
const { scrollProgressRef } = useScrollProgress({ element: container, endOffset: 1 })
const heroStyle = computed(() => ({
    opacity: transform(scrollProgressRef.value, [0.5, 1], [1, 0]),
    filter: `blur(${transform(scrollProgressRef.value, [0.5, 0.8], [0, 6])}px)`,
    display: transform(scrollProgressRef.value, [0.9, 1], ['', 'none'])
}))

const titleTransition: AnimateOptions = {
    staggerChildren: 0.2,
    delayChildren: 0.2,
    duration: 0.5,
}

const buttonTransition: AnimateOptions = {
    staggerChildren: 0.1,
    delayChildren: 1.2,
}

const titleAnimation: Options['variants'] = {
    initial: { opacity: 0, y: 10, filter: 'blur(4px)', scaleX: 1.1 },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', scaleX: 1 }
}

const buttonAnimation: Options['variants'] = {
    initial: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
}

const reveal = (sectionId: 'win7simu' | 'brick1100' = 'win7simu') => {
    inBrowser && document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.home-hero {
    display: flex;
    flex-direction: column;
}

.hero-section {
    padding: 4rem 2rem;
}

.section-left {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-left h1 {
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 2rem;
    color: var(--vp-c-text-1);
    display: flex;
    flex-direction: column;
}

.section-left p {
    color: var(--vp-c-text-2);
    max-width: 550px;
    text-align: justify;
}

.icon-relative {
    --size: 5rem;
    display: flex;
    position: relative;
    margin-bottom: 2rem;
}

.icon-absolute {
    --size: 9rem;
    display: none;
    position: absolute;
    top: calc(50% - var(--size) / 2);
    left: calc(50% - var(--size) / 2);
}

.section-right {
    display: flex;
    flex-direction: column;
    gap: 5vh;
    height: 75vh;
    position: relative;
}

.section-right>div {
    flex: 1;
}

.section-right button {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75em;
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    transition: 0.2s;
}

.section-right button>img {
    width: 1.5em;
    filter: grayscale(1);
    border-radius: 0.5rem;
}

.section-right button:focus,
.section-right button:hover {
    background: var(--vp-c-brand-2);
    color: var(--vp-c-white);
    transform: translateY(-0.5rem);
    outline: none;
}

.section-right button:focus>img,
.section-right button:hover>img {
    filter: grayscale(0);
}

@media (min-width: 480px) {
    .section-right button {
        font-size: 2rem;
    }
}

@media (min-width: 640px) {
    .hero-section {
        padding: 6rem 4rem;
    }

    .section-left h1 {
        font-size: 2.5rem;
    }

    .section-right {
        height: 90vh;
    }

    .section-right button {
        font-size: 2.5rem;
    }
}

@media (min-width: 768px) {
    .hero-section>div {
        margin: 0 3rem;
    }
}

@media (min-width: 1200px) {
    .home-hero-container {
        height: 150vh;
        min-height: 1000px;
    }

    .home-hero {
        position: fixed;
        inset: 0;
        flex-direction: row;
    }

    .hero-section {
        flex: 1;
        height: 100%;
    }

    .section-left {
        text-align: right;
        align-items: flex-end;
        justify-content: space-between;
    }

    .section-left p {
        text-align: right;
    }

    .section-right {
        background: var(--vp-c-text-1);
    }

    .section-right button {
        color: var(--vp-c-bg);
    }

    .icon-relative {
        display: none;
    }

    .icon-absolute {
        display: flex;
    }
}

@media (min-width: 1440px) {

    .section-left h1 {
        font-size: 3.5rem;
    }

    .section-right button {
        font-size: 3rem;
    }
}

@media (min-width: 1920px) {
    .section-right button {
        font-size: 4rem;
    }
}
</style>
