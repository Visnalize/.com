<template>
    <a class="blog-tag" :class="{ active }" :href="'/blog/tag/' + tag.name">
        <span>{{ tag.name }}</span>
        <span v-if="tag.count" class="count">{{ tag.count }}</span>
    </a>
</template>

<script setup lang="ts">
import { TagData } from '@/.content/blog-tags.data';

defineProps<{
    tag: TagData,
    active?: boolean
}>()
</script>

<style scoped>
.blog-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.125rem 0.5rem;
    margin: 0 0.5rem 0.5rem 0;
    border-radius: 1rem;
    background: var(--vp-c-default-soft);
    color: var(--vp-c-text-1);
    text-decoration: none;
    font-size: 0.75rem;
    position: relative;
    z-index: 1;
    transition: 0.2s;
}

.blog-tag.active,
.blog-tag:hover {
    background: var(--vp-c-bg);
    color: var(--vp-c-brand-1);
}

.blog-tag .count {
    background: var(--vp-c-default-1);
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
}

.blog-tag:hover .count {
    background: var(--vp-c-default-soft);
}
</style>