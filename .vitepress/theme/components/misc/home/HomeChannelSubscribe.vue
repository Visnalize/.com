<template>
    <Motion :variants="variants" :animate="animate">
        <a class="subscribe" target="_blank" :href="href + '?sub_confirmation=1'">Subscribe</a>
    </Motion>
</template>

<script setup lang="ts">
import { Variants } from '@composables/useMotion';
import { Motion } from 'motion-v';

defineProps<{
    href: string;
    animate?: string;
    variants?: Variants;
}>();
</script>

<style scoped>
.subscribe {
    display: block;
    background: var(--vp-c-text-1);
    color: var(--vp-c-bg);
    padding: 0.5rem 1.5rem;
    text-align: center;
    border-radius: 2rem;
    font-weight: 600;
    transition: 0.2s;
}

.subscribe:hover {
    opacity: 0.8;
}
</style>
