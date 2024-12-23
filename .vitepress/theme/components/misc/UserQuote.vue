<template>
    <div class="quote">
        <div class="author">
            <img :src="quote.image" alt="User avatar" width="48" height="48" />
            <span>{{ quote.author }}</span>
        </div>
        <p>{{ quote.content }}</p>
        <div class="metadata">
            <a :href="`/${quote.app}/about`">
                <AppIcon :app="quote.app" class="app" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Quote } from '@/.content/quotes.data';
import AppIcon from './AppIcon.vue';

defineProps<{
    quote: Quote
}>()
</script>

<style scoped>
.quote {
    cursor: default;
    color: var(--vp-c-text-2);
    border: 1px solid var(--vp-c-default-3);
    border-radius: 1rem;
    padding: 1.5rem;
    padding-top: 2rem;
    position: relative;
    transition: 0.2s;
}

.quote:hover {
    color: var(--vp-c-text-1);
    border-color: var(--vp-c-border);
}

.quote:hover .metadata {
    opacity: 1;
}

.author {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.author img {
    border-radius: 0.5rem;
}

.metadata {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    opacity: 0.2;
    position: absolute;
    top: 1rem;
    right: 1rem;
    transition: 0.2s;
}

.app {
    width: 32px;
    border-radius: 0.25rem;
}
</style>
