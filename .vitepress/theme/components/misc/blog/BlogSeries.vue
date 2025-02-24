<template>
    <div v-if="seriesData" class="blog-series">
        <div class="series-title">{{ seriesData.name }} ({{ seriesData.parts.length }} part series)</div>
        <ul>
            <li v-for="page in seriesData.parts.sort((p1, p2) => p1.part - p2.part)">
                <a :href="page.url" :class="{ active: currentPage.part === page.part }">
                    <span class="part-number">{{ page.part }}</span>
                    <span class="part-name">{{ page.name }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { data as blogSeriesData, PageSeries, SeriesData } from '@/.content/blog-series.data';
import { useData } from 'vitepress';
import { ref, watchEffect } from 'vue';

const { frontmatter } = useData()
const seriesData = ref<SeriesData>(null)
const currentPage = ref<PageSeries>(null)

watchEffect(() => {
    currentPage.value = frontmatter.value.series;
    seriesData.value = blogSeriesData[currentPage.value?.id]
})
</script>

<style scoped>
.blog-series {
    background: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-default-2);
    border-radius: 0.5rem;
    font-size: 0.875rem;
    margin: 4rem auto;
    max-width: 500px;
    padding: 1.5rem;
}

.series-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
}

li .part-number {
    display: inline-block;
    font-family: monospace;
    font-weight: 600;
    text-align: center;
    width: 24px;
    height: 24px;
    background: var(--vp-c-default-soft);
    border-radius: 50%;
}

li a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    padding: 0.5rem 0;
}

li a .part-name {
    transition: 0.2s;
}

li a:hover .part-name {
    color: var(--vp-c-brand-2);
}

li .active .part-number {
    background: var(--vp-c-brand-1);
    color: var(--vp-c-white);
}

li .active {
    color: var(--vp-c-brand-1);
}
</style>
