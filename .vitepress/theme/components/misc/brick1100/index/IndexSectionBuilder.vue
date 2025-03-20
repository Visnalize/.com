<template>
    <IndexSection horizontal bg-ease="ease-out" :animate-header="shouldAnimate">
        <template #title>Build your own creations</template>
        <template #header>
            <div class="content" ref="trigger">
                <Motion as="p" :variants="variants(0)" :animate="shouldAnimate">Coding changed my life. Knowing how
                    to code helped me build things I love, get a job and make a living. I want you to have the same
                    opportunity, and thus the Builders program was created.</Motion>
                <Motion as="p" :variants="variants(1)" :animate="shouldAnimate">Learn and practice coding by
                    building your games, apps and publish them to thousands of users through Brick 1100.</Motion>
                <Motion :variants="variants(2)" :animate="shouldAnimate">
                    <IndexLink href="/brick1100/builders" text="Get started" />
                </Motion>
                <IndexDecor class="deco-builder" name="builder" />
            </div>
        </template>

        <div class="promo">
            <img class="layer" src="../assets/builder-layer.png" alt="Online" />
            <Motion :variants="variants(3)" :animate="shouldAnimate">
                <img class="main" src="../assets/builder-promo.png" alt="Builders program" width="383" height="550" />
            </Motion>
        </div>
    </IndexSection>
</template>

<script setup lang="ts">
import { Variants } from '@composables/useMotion';
import { Motion, useInView } from 'motion-v';
import { computed, ref } from 'vue';
import IndexDecor from './IndexDecor.vue';
import IndexLink from './IndexLink.vue';
import IndexSection from './IndexSection.vue';

const trigger = ref<HTMLElement | null>(null)
const inView = useInView(trigger, { amount: 0.6, once: true })
const shouldAnimate = computed(() => inView.value ? 'animate' : 'initial')

const variants = (index: number): Variants => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 * index + 0.3 } }
})

defineExpose({ section: trigger })
</script>

<style scoped>
.content p {
    margin-bottom: 1rem;
}

.content a {
    display: inline-flex;
    margin-top: 2rem;
}

.deco-builder {
    height: 12rem;
    top: 5%;
    left: 10%;
}

.promo {
    position: relative;
}

.layer {
    position: absolute;
    opacity: 0.15;
    right: 30%;
    bottom: 60%;
    z-index: -1;
}

.main {
    height: 400px;
}

@media (min-width: 992px) {
    .main {
        height: 550px;
    }

    .layer {
        right: 60%;
        bottom: 10%;
    }
}
</style>
