<template>
    <DefaultTheme.Layout>
        <template #aside-bottom>
            <AsideBottom />
        </template>
        <template #doc-after>
            <DocAfter />
        </template>
        <template #doc-before>
            <DocBefore />
        </template>
        <template #layout-bottom>
            <LayoutBottom />
        </template>
    </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import mediumZoom, { ZoomSelector } from 'medium-zoom';
import { useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { nextTick, onMounted, watch } from 'vue';
import AsideBottom from './AsideBottom.vue';
import DocAfter from './DocAfter.vue';
import DocBefore from './DocBefore.vue';
import LayoutBottom from './LayoutBottom.vue';

const route = useRoute()
const zoom = mediumZoom({ margin: 16, background: 'var(--vp-c-bg-soft)' })

const attachZoom = () => {
    let selector: ZoomSelector = null;
    const isBlogPost = route.path.startsWith('/blog/') && !route.path.includes('/tag');
    const isThemeStudio = /^\/win7simu\/themestudio\/?/.test(route.path);

    if (isBlogPost || isThemeStudio) {
        selector = '.main img';
    } else {
        selector = '[data-zoomable]';
    }

    zoom.detach()
    zoom.attach(selector)
}

onMounted(attachZoom);

watch(() => route.path, () => nextTick(attachZoom))
</script>
