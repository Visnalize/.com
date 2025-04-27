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
    <Toaster position="bottom-right" :theme="isDark ? 'dark' : 'light'" :toast-options="{
        actionButtonStyle: {
            background: 'var(--vp-c-brand-3)', color: 'var(--vp-c-white)'
        }
    }" />
</template>

<script setup lang="ts">
import { toastBlogSponsor } from '@composables/useToast';
import mediumZoom, { ZoomSelector } from 'medium-zoom';
import { useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { nextTick, onMounted, ref, watch } from 'vue';
import { Toaster } from 'vue-sonner';
import AsideTop from './AsideTop.vue';
import DocAfter from './DocAfter.vue';
import DocBefore from './DocBefore.vue';
import DocFooterBefore from './DocFooterBefore.vue';
import LayoutFooter from './LayoutFooter.vue';
import NotFound from './NotFound.vue';

const route = useRoute()
const { page, isDark } = useData()
const toasted = ref(false)

const attachZoom = () => {
    let selector: ZoomSelector = null;
    const isBlogPost = route.path.startsWith('/blog/') && !route.path.includes('/tag');
    const isNotePost = route.path.startsWith('/notes');
    const isResource = route.path.startsWith('/resources/');
    const isThemeStudio = /^\/win7simu\/themestudio\/?/.test(route.path);
    const isBuilders = /^\/brick1100\/builders\/?/.test(route.path);

    if (isBlogPost || isNotePost || isResource || isThemeStudio || isBuilders) {
        selector = '.main img:not([data-no-zoom])';
    } else {
        selector = '[data-zoomable]';
    }

    mediumZoom(selector, { margin: 16, background: 'var(--vp-c-bg-soft)' })
}

onMounted(attachZoom);

watch(() => route.path, () => {
    nextTick(attachZoom)

    if (route.path.includes('/blog')) {
        if (toasted.value) return;
        toasted.value = true;
        setTimeout(toastBlogSponsor, 2000)
    }
})
</script>
