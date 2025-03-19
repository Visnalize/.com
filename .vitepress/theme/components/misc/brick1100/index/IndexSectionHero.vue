<template>
    <div class="index-hero">
        <Motion v-bind="animateHeadline()">
            <AppIcon app="brick1100" class="logo" />
        </Motion>
        <Motion as="h1" v-bind="animateHeadline()">
            Nostalgia at your fingertips
        </Motion>
        <Motion as="p" v-bind="animateHeadline()">
            Brick 1100 transforms your smartphone into a brick phone.
            Experience the retro vibes of the early days.
        </Motion>
        <Motion v-bind="animateHeadline()">
            <AccessLinks app="brick1100" />
        </Motion>
    </div>
    <div class="index-showcase">
        <div class="showcase-wrapper">
            <Motion class="relative" v-bind="animateImg('front')">
                <img src="../assets/hero-boot.png" alt="Brick 1100 Boot Screen" />
            </Motion>
            <Motion class="absolute" v-bind="animateImg('left')">
                <img src="../assets/hero-reminder.png" alt="Brick 1100 Reminder" />
            </Motion>
            <Motion class="absolute" v-bind="animateImg('right')">
                <img src="../assets/hero-snake.png" alt="Brick 1100 Snake" />
            </Motion>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useHeadlineVariants } from '@composables/useMotion';
import { Motion } from 'motion-v';
import AccessLinks from '../../../global/AccessLinks.vue';
import AppIcon from '../../AppIcon.vue';

let index = 0;

const animateHeadline = () => useHeadlineVariants({ delay: index++ * 0.15 + 0.2 })

const animateImg = (position: 'left' | 'right' | 'front') => ({
    initial: {
        opacity: 0,
        y: position === 'front' ? 30 : 0,
    },
    animate: {
        opacity: 1,
        rotate: position === 'left' ? -10 : position === 'right' ? 10 : 0,
        x: position === 'left' ? '-90%' : position === 'right' ? '90%' : 0,
        y: 0,
    },
    transition: {
        duration: 0.4,
        delay: (position === 'front' ? index++ : index) * 0.3,
    },
})
</script>

<style scoped>
.index-hero {
    padding: 3rem 1.5rem;
    margin: auto;
    max-width: 600px;
}

.index-hero .logo {
    margin: 0 auto 1rem;
    border-radius: 0.5rem;
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

.index-hero :deep(.access img) {
    height: 40px;
}

.index-showcase {
    overflow: hidden;
    text-align: center;
    margin-bottom: 6rem;
}

.showcase-wrapper {
    position: relative;
    display: inline-block;

}

.index-showcase .relative {
    position: relative;
    z-index: 1;
}

.index-showcase .relative img {
    height: 340px;
}

.index-showcase .absolute {
    position: absolute;
    bottom: 0;
}

.index-showcase .absolute:last-child {
    right: 0;
}

.index-showcase .absolute img {
    height: 300px;
}

@media (min-width: 768px) {
    .index-hero {
        padding: 6rem 0;
        max-width: 700px;
    }

    .index-hero h1 {
        font-size: 3rem;
    }

    .index-hero p {
        font-size: 1.5rem;
        line-height: 1.5;
    }

    .index-showcase .relative img {
        height: 560px;
    }

    .index-showcase .absolute img {
        height: 500px;
    }

    .index-hero :deep(.access img) {
        height: 64px;
    }
}
</style>
