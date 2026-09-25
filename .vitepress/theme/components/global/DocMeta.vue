<template>
    <div v-if="visible" class="doc-meta">
        <div v-if="createdDate" v-tooltip="'Created date'">
            <iconify-icon icon="fluent:calendar-clock-24-regular" />
            <span>{{ createdDate }}</span>
        </div>

        <div v-if="frontmatter.version" class="meta-note" v-tooltip="'Since Win7 Simu version'">
            <iconify-icon icon="fluent:rocket-24-regular" />
            <span>v{{ frontmatter.version }}</span>
        </div>

        <div v-if="frontmatter.premium" class="meta-note" v-tooltip="'Unlock with in-app purchase'">
            <iconify-icon icon="fluent:premium-24-regular" />
            <span>Premium</span>
        </div>

        <div v-if="frontmatter.appVersion" class="meta-note" v-tooltip="'Latest version'">
            <iconify-icon icon="fluent:text-bullet-list-square-sparkle-24-regular" />
            <span>v{{ frontmatter.appVersion }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';
import useCustomData from '../../composables/useCustomData';

const { frontmatter } = useData()
const { createdDate, enableSocial } = useCustomData()

/** Custom layouts like the home page render the Markdown without a doc header. */
const visible = computed(() => {
    const { layout, version, premium, appVersion } = frontmatter.value
    const isDoc = !layout || layout === 'doc'
    const hasMeta = createdDate.value || version || premium || appVersion
    return isDoc && enableSocial.value && hasMeta
})
</script>

<style scoped>
.doc-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem 0.75rem;
    margin-bottom: 2rem;
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
}

.doc-meta>div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.doc-meta>div:not(:first-child)::before {
    content: '·';
    margin-right: 0.5rem;
    color: var(--vp-c-text-3);
}

.doc-meta iconify-icon {
    font-size: 1.125rem;
}

.meta-note {
    font-weight: 500;
}

@media (min-width: 768px) {
    .doc-meta {
        margin-bottom: 3rem;
    }
}
</style>
