<template>
    <div class="intro-section">
        <AppIcon class="logo" :app="app" />
        <h2>{{ title }}</h2>
        <p>{{ description }}
            <HomeLink :href="`/${app}/about`">Learn more</HomeLink>
        </p>
        <AccessLinks :app="app" />
    </div>
</template>

<script setup lang="ts">
import { App } from '@utils/types';
import AccessLinks from '../../global/AccessLinks.vue';
import AppIcon from '../AppIcon.vue';
import HomeLink from './HomeLink.vue';

interface Props {
    app: App;
    title: string;
    description: string;
}

defineProps<Props>();
</script>

<style scoped>
.intro-section {
    font-size: 1rem;
    line-height: 1.5;
    padding: 2rem;
    text-align: center;
}

.intro-section h2 {
    font-size: 2em;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 0.5rem;
}

.intro-section p {
    color: var(--vp-c-text-2);
    margin: auto;
    margin-bottom: 2rem;
    max-width: 30em;
}

.intro-section .access {
    margin: 0;
}

.intro-section .access :deep(img) {
    height: 64px;
}

.logo {
    width: 4em;
    height: auto;
    margin: 0 auto 1rem;
    border-radius: 0.5rem;
}
</style>
