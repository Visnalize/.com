<template>
    <section ref="container" class="home-hero-container">
        <Motion class="home-hero" :style="xl ? heroVisibility : undefined">
            <button class="hero-button" @click="() => reveal()">
                <span class="text">
                    <span>Explore</span>
                    <span>projects</span>
                </span>
                <span class="logo">
                    <svg width="247" height="360" viewBox="0 0 247 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M247 -2.38419e-05V168.5C247 213.5 236.667 252.667 216 286C195.333 319 164.667 343.667 124 360C83.6667 344 53 319.833 32 287.5C11 255.167 0.500002 217 0.500002 173V-2.38419e-05H48.5V167C48.5 200.333 54 228.333 65 251C76 273.667 95.8333 292.833 124.5 308.5C152.5 292.5 172 273.167 183 250.5C194.333 227.833 200 200 200 167V-2.38419e-05H247Z"
                            fill="white" />
                    </svg>
                </span>
            </button>
            <div class="hero-section section-left">
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

const container = ref<HTMLElement | null>(null)
const { xl } = useBreakpoints()
const { scrollProgress } = useScrollProgress({ element: container, endOffset: 1 })
const heroVisibility = computed(() => ({
    opacity: transform(scrollProgress.value, [0.5, 1], [1, 0]),
    filter: `blur(${transform(scrollProgress.value, [0.5, 1], [0, 4])}px)`,
    display: transform(scrollProgress.value, [0.9, 1], ['', 'none'])
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

.hero-button {
    --size: 10rem;
    position: absolute;
    top: calc(50% - var(--size) / 2);
    left: calc(50% - var(--size) / 2);
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;
    background: var(--vp-c-brand-2);
    color: var(--vp-button-brand-text);
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.5;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    transition: 0.3s;
}

.hero-button:not(:hover) {
    animation: pulse 4s ease 2s infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(27, 184, 155, 0.5);
    }

    20% {
        box-shadow: 0 0 0 2rem rgba(0, 0, 0, 0);
    }
}

.hero-button>.text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.2s;
}

.hero-button>.logo {
    position: absolute;
    transition: 0.2s;
    margin-top: 0.5rem;
}

.hero-button>.logo>svg {
    width: 6rem;
    height: 6rem;
}

.hero-button::after {
    content: "";
    border-radius: 50%;
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.hero-button::after {
    border: 2px solid var(--vp-c-brand-2);
}

.hero-button:focus,
.hero-button:hover {
    outline: none;
    transform: scale(1.1);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
    background: var(--vp-button-brand-bg);
}

.hero-button:focus>.text,
.hero-button:hover>.text {
    opacity: 1;
}

.hero-button:focus>.logo,
.hero-button:hover>.logo {
    opacity: 0.2;
    filter: blur(4px);
}

.hero-button:focus::after,
.hero-button:hover::after {
    transform: scale(1.4);
    opacity: 0;
    transition: 0.6s;
}

.section-left {
    background: var(--vp-c-bg);
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

.section-right {
    background: var(--vp-c-text-1);
    display: flex;
    flex-direction: column;
    gap: 5vh;
    height: 75vh;
    position: relative;
}

.section-right::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    background: var(--vp-c-text-1);
    z-index: -1;
}

.section-right>div {
    flex: 1;
}

.section-right button {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    color: var(--vp-c-bg);
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

    .hero-button {
        display: flex;
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
