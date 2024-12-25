<template>
    <div class="quote">
        <div class="metadata">
            <a :href="`/${quote.app}/about`">
                <AppIcon :app="quote.app" class="app" />
            </a>
        </div>
        <div>
            <div class="author">
                <img :src="quote.image" alt="User avatar" width="48" height="48" />
                <span>{{ quote.author }}</span>
            </div>
            <p>{{ quote.content }}</p>
        </div>
        <div v-if="showDate" class="footer">
            <span class="date">{{ quote.date }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Quote } from '@/.content/quotes.data';
import AppIcon from './AppIcon.vue';

defineProps<{
    quote: Quote,
    showDate?: boolean
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.quote:hover {
    color: var(--vp-c-text-1);
    border-color: var(--vp-c-border);
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
    position: absolute;
    top: 1rem;
    right: 1rem;
}

.metadata a {
    opacity: 0.2;
    transition: 0.2s;
}

.metadata a:focus,
.quote:hover .metadata a {
    opacity: 1;
}

.app {
    width: 32px;
    border-radius: 0.25rem;
}

.footer {
    text-align: right;
}

.date {
    font-size: 0.875rem;
}
</style>
