<template>
    <Motion as="h2" :variants="variants" :animate="animate ? 'animate' : 'initial'">
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
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.4 } }
}
</script>

<style scoped>
h2 {
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    text-align: center;
}
</style>
