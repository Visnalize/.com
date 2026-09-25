<template>
    <nav v-if="crumbs.length" class="breadcrumbs" aria-label="Breadcrumb">
        <ol>
            <li v-for="(crumb, index) in crumbs" :key="crumb.text + index">
                <iconify-icon v-if="index > 0" class="separator" icon="fluent:chevron-right-16-regular"
                    aria-hidden="true" />
                <a v-if="crumb.link && index === 0" :href="crumb.link" class="home" aria-label="Home">
                    <iconify-icon icon="fluent:home-24-regular" />
                </a>
                <a v-else-if="crumb.link" :href="crumb.link">{{ crumb.text }}</a>
                <span v-else class="current" aria-current="page" :title="crumb.text">{{ crumb.text }}</span>
            </li>
        </ol>

        <!-- Small screens share the row with the share button, so only the way up is kept. -->
        <a v-if="parent" :href="parent.link" class="parent">
            <iconify-icon icon="fluent:chevron-left-16-regular" aria-hidden="true" />
            <span>{{ parent.text }}</span>
        </a>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Crumb } from '../../utils/breadcrumbs';

const props = defineProps<{ crumbs: Crumb[] }>()

/** The current page is last and has no link, so its parent is the one before it. */
const parent = computed(() => props.crumbs.at(-2))
</script>

<style scoped>
.breadcrumbs {
    min-width: 0;
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
}

ol {
    display: none;
    align-items: center;
    gap: 0.25rem;
}

li {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;
    white-space: nowrap;
}

/* Only the current page shrinks, so long post titles never push the links away. */
li:last-child {
    flex-shrink: 1;
    min-width: 0;
}

a {
    display: flex;
    align-items: center;
    transition: color 0.2s;
}

a:hover {
    color: var(--vp-c-brand-1);
}

.home iconify-icon {
    font-size: 1.125rem;
}

.separator {
    color: var(--vp-c-text-3);
}

.current {
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    color: var(--vp-c-text-1);
}

.parent {
    gap: 0.25rem;
    min-width: 0;
}

.parent span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

@media (min-width: 640px) {
    ol {
        display: flex;
    }

    .parent {
        display: none;
    }
}
</style>
