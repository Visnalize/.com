<template>
    <div class="index-hero">
        <Motion v-bind="animateHeadline()">
            <AppIcon app="brickpals" class="logo" />
        </Motion>
        <Motion as="h1" v-bind="animateHeadline()">
            A tiny pixel pal for your phone
        </Motion>
        <Motion as="p" v-bind="animateHeadline()">
            Brick Pals puts a 1-bit pal on your home screen.
            Feed it, play with it, and watch it grow.
        </Motion>
        <Motion v-bind="animateHeadline()">
            <ComingSoon />
        </Motion>
    </div>
    <Motion class="index-showcase" v-bind="animateShell">
        <PalShell />
        <p class="hint">Try it! Tap <strong>Feed</strong> or <strong>Play</strong>.</p>
    </Motion>
</template>

<script setup lang="ts">
import AppIcon from '@components/misc/AppIcon.vue';
import { useHeadlineVariants } from '@composables/useMotion';
import { Motion } from 'motion-v';
import ComingSoon from '../ComingSoon.vue';
import PalShell from '../PalShell.vue';

let index = 0;

const animateHeadline = () => useHeadlineVariants({ delay: index++ * 0.15 + 0.2 })

const animateShell = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.9 },
}
</script>

<style scoped>
.index-hero {
    padding: 3rem 1.5rem 1rem;
    margin: auto;
    max-width: 600px;
    position: relative;
    /* required to stay on top of the follow-up sections */
    z-index: 1;
}

.index-hero .logo {
    margin: 0 auto 1rem;
}

.index-hero h1 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 1rem;
    text-align: center;
}

.index-hero p {
    text-align: center;
}

.index-showcase {
    position: relative;
    z-index: 1;
    padding: 0 1.5rem;
    margin: 0 auto 6rem;
    max-width: 420px;
}

.hint {
    margin-top: 1.5rem;
    text-align: center;
    color: var(--vp-c-text-2);
}

@media (min-width: 768px) {
    .index-hero {
        padding: 6rem 0 2rem;
        max-width: 800px;
    }

    .index-hero h1 {
        font-size: 3rem;
    }

    .index-hero p {
        font-size: 1.5rem;
        line-height: 1.5;
    }
}
</style>
