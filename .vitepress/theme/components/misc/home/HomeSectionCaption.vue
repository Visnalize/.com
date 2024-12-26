<template>
    <Motion as="p" :variants="variants" :animate="animate ? 'animate' : 'initial'">
        <slot />
    </Motion>
</template>

<script setup lang="ts">
import { Variants } from '@composables/useMotion';
import { Motion } from 'motion-v';

defineProps<{
    animate?: boolean;
}>()

const variants: Variants = {
    initial: { opacity: 0, scale: 1.1, filter: 'blur(4px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.4, delay: 0.1 } }
}
</script>

<style scoped>
p {
    margin: auto;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5;
    color: var(--vp-c-text-2);
}
</style>
