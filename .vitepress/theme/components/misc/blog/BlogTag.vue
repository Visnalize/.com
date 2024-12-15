<template>
    <a class="blog-tag" :class="{ active }" :href="'/blog/tag/' + tag">
        {{ tag }}
    </a>
</template>

<script setup lang="ts">
defineProps<{ tag: string, active?: boolean }>()
</script>

<style scoped>
.blog-tag {
    display: inline-block;
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
</style>