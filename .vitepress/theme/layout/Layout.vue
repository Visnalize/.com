<template>
    <NotFound v-if="page.isNotFound" />
    <DefaultTheme.Layout v-else>
        <template #aside-top>
            <AsideTop />
        </template>
        <template #doc-after>
            <DocAfter />
        </template>
        <template #doc-footer-before>
            <DocFooterBefore />
        </template>
        <template #doc-before>
            <DocBefore />
        </template>
        <template #layout-bottom>
            <LayoutFooter />
        </template>
    </DefaultTheme.Layout>
</template>

<script setup lang="ts">
import mediumZoom, { ZoomSelector } from 'medium-zoom';
import { useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { nextTick, onMounted, watch } from 'vue';
import AsideTop from './AsideTop.vue';
import DocAfter from './DocAfter.vue';
import DocBefore from './DocBefore.vue';
import DocFooterBefore from './DocFooterBefore.vue';
import LayoutFooter from './LayoutFooter.vue';
import NotFound from './NotFound.vue';

const route = useRoute()
const { page } = useData()

const attachZoom = () => {
    let selector: ZoomSelector = null;
    const isBlogPost = route.path.startsWith('/blog/') && !route.path.includes('/tag');
    const isResource = route.path.startsWith('/resources/');
    const isThemeStudio = /^\/win7simu\/themestudio\/?/.test(route.path);
    const isBuilders = /^\/brick1100\/builders\/?/.test(route.path);

    if (isBlogPost || isResource || isThemeStudio || isBuilders) {
        selector = '.main img';
    } else {
        selector = '[data-zoomable]';
    }

    mediumZoom(selector, { margin: 16, background: 'var(--vp-c-bg-soft)' })
}

onMounted(attachZoom);

watch(() => route.path, () => nextTick(attachZoom))
</script>
