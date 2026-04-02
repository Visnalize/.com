<template>
    <nav class="blog-pagination" v-if="totalPages > 1">
        <a class="page-link page-nav" :class="{ disabled: currentPage === 1 }"
            :href="currentPage > 1 ? pageHref(currentPage - 1) : undefined">
            &laquo; Prev
        </a>
        <template v-for="page in pages" :key="page">
            <span v-if="page === '...'" class="page-ellipsis">...</span>
            <a v-else class="page-link" :class="{ active: page === currentPage }"
                :href="page === currentPage ? undefined : pageHref(page as number)">
                {{ page }}
            </a>
        </template>
        <a class="page-link page-nav" :class="{ disabled: currentPage === totalPages }"
            :href="currentPage < totalPages ? pageHref(currentPage + 1) : undefined">
            Next &raquo;
        </a>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    currentPage: number;
    totalPages: number;
    tag?: string;
}>();

function pageHref(page: number) {
    if (props.tag) {
        return page === 1 ? `/blog/tag/${props.tag}` : `/blog/tag/${props.tag}/${page}`;
    }
    return page === 1 ? '/blog' : `/blog/page/${page}`;
}

const pages = computed(() => {
    const total = props.totalPages;
    const current = props.currentPage;

    if (total <= 7) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }

    const items: (number | string)[] = [1];

    if (current > 3) items.push('...');

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i++) items.push(i);

    if (current < total - 2) items.push('...');

    items.push(total);
    return items;
});
</script>

<style scoped>
.blog-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2rem;
}

.page-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 2.25rem;
    height: 2.25rem;
    padding: 0.5rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background: var(--vp-c-default-soft);
    color: var(--vp-c-text-1);
    text-decoration: none;
    font-size: 0.875rem;
    transition: 0.2s;
}

.page-link:hover:not(.active):not(.disabled) {
    background: var(--vp-c-bg);
    color: var(--vp-c-brand-1);
}

.page-link.active {
    background: var(--vp-c-brand-1);
    color: var(--vp-c-white);
    border-color: var(--vp-c-brand-1);
}

.page-link.disabled {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;
}

.page-nav {
    padding: 0.5rem 1rem;
}

.page-ellipsis {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 2.25rem;
    height: 2.25rem;
    color: var(--vp-c-text-3);
    font-size: 0.875rem;
}
</style>
