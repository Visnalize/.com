<template>
    <section ref="container" class="home-section">
        <slot name="header" />
        <div v-if="!$slots.header" class="title">
            <HomeSectionTitle :animate="inView">
                <slot name="title" />
            </HomeSectionTitle>
            <HomeSectionCaption :animate="inView">
                <slot name="caption" />
            </HomeSectionCaption>
        </div>
        <slot />
    </section>
</template>

<script setup lang="ts">
import { useSectionInView } from '@composables/useMotion';
import { ref } from 'vue';
import HomeSectionCaption from './HomeSectionCaption.vue';
import HomeSectionTitle from './HomeSectionTitle.vue';

const container = ref<HTMLElement | null>(null);
const inView = useSectionInView(container)
</script>

<style scoped>
.home-section {
    padding: 1.5rem;
    max-width: 960px;
    margin: 0 auto 10rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    overflow: hidden;
}
</style>
