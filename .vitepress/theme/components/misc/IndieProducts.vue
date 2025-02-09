<template>
    <div ref="container" id="indie-products" :class="{ widget }">
        <h2 v-if="widget" class="title">
            <span>Indie products</span>
            <a href="/indie-products" target="_blank" v-tooltip="'What\'s this?'">
                <iconify-icon icon="fluent:question-circle-24-regular" />
            </a>
        </h2>
        <indie-boosting v-if="inView" id="HUQBLZLWPR" no-title no-border no-shadow :max-products="widget ? 4 : 10"
            :max-columns="widget ? 2 : 1" @load="contentLoaded = true" />
        <div v-if="!contentLoaded" class="loader">
            <div v-for="i in Array.of(1, 2, 3, 4)" class="loading-item">
                <CoreSkeleton class="icon" />
                <div>
                    <CoreSkeleton class="text" />
                    <CoreSkeleton class="text" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useInView } from 'motion-v';
import { onMounted, ref } from 'vue';
import CoreSkeleton from '../core/CoreSkeleton.vue';

const { widget } = defineProps<{ widget?: boolean }>()
const container = ref<HTMLElement | null>(null)
const contentLoaded = ref(false)
const inView = useInView(container, { once: true })

onMounted(() => {
    import('../../custom-elements/indie-boosting')
})
</script>

<style scoped>
#indie-products {
    text-align: center;
    margin-bottom: 2rem;
}

#indie-products.widget {
    padding: 1.5rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 1rem;
}

.title {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.title a {
    display: inline-flex;
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    transition: 0.2s;
}

.title a:hover {
    color: var(--vp-c-brand-1);
}

.loader {
    display: grid;
    gap: 0.75rem;
    margin-bottom: 1.8rem;
}

.widget .loader {
    grid-template-columns: repeat(2, 1fr);
}

.loading-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 0.5rem;
}

.loading-item .icon {
    width: 4rem;
    height: 4rem;
}

.widget .loading-item .icon {
    width: 3rem;
    height: 3rem;
}

.loading-item>div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.loading-item .text:first-of-type {
    width: 60%;
}

/* override indie-boosting styles below */

#indie-products :deep(.indieboosting) {
    background: none;
    padding: 0;
}

#indie-products :deep(.indieboosting .indieboosting-product) {
    background-color: transparent;
    border-color: var(--vp-c-divider);
    border-radius: 0.5rem;
    padding: 0.75rem;
    text-decoration: none;
}

#indie-products :deep(.indieboosting-product:hover) {
    border-color: var(--vp-c-brand-1);
    box-shadow: none;
}

.widget :deep(.indieboosting-product > div:first-of-type) {
    width: 3rem;
    height: 3rem;
}

#indie-products :deep(.indieboosting-product .product-name) {
    color: var(--vp-c-text-1);
    margin: 0;
}

#indie-products :deep(.indieboosting-product .product-description) {
    color: var(--vp-c-text-2);
    line-height: 1.5;
}
</style>
