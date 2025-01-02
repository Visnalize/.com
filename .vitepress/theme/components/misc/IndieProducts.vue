<template>
    <div ref="container" class="indie-products" :class="{ widget }">
        <h2 v-if="widget" class="title">
            <span>Indie products</span>
            <a href="/indie-products" target="_blank" v-tooltip="'What\'s this?'">
                <iconify-icon icon="fluent:question-circle-24-regular" />
            </a>
        </h2>
        <link rel="stylesheet" href="https://cdn.indieboosting.com/latest/style.css" />
        <div v-if="!isLoaded" class="loader">
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
import { onMounted, ref, watch } from 'vue';
import CoreSkeleton from '../core/CoreSkeleton.vue';

const { widget } = defineProps<{ widget?: boolean }>()
const container = ref<HTMLElement | null>(null)
const isLoaded = ref(false)
const inView = useInView(container)

const observeCallback: MutationCallback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type !== 'childList') return;
        Array.from(mutation.addedNodes).forEach((node: HTMLElement) => {
            if (node.matches('#indieboosting-container')) {
                isLoaded.value = true
                observer.disconnect()
            }
        })
    }
}

const loadScript = () => {
    const script = document.createElement('script')
    const options = new URLSearchParams({
        id: 'HUQBLZLWPR',
        maxProducts: widget ? '4' : '10',
        maxColumns: widget ? '2' : '1',
        noTitle: 'true',
        noBorder: 'true',
        noShadow: 'true',
    })
    script.src = `https://cdn.indieboosting.com/latest/script.js?${options.toString()}`;
    container.value.appendChild(script)
}

onMounted(() => {
    const observer = new MutationObserver(observeCallback)
    observer.observe(container.value, { childList: true })
})

watch(inView, (value) => value && !isLoaded.value && loadScript())
</script>

<style scoped>
.indie-products {
    text-align: center;
    margin-bottom: 2rem;
}

.indie-products.widget {
    padding: 1rem 1.5rem;
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
    gap: 1rem;
    margin-bottom: 2.25rem;
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

:deep(.indieboosting-product) {
    background-color: transparent;
    border-color: var(--vp-c-divider);
    border-radius: 0.5rem;
    padding: 0.75rem;
    text-decoration: none;
}

:deep(.indieboosting-product:hover) {
    border-color: var(--vp-c-brand-1);
    box-shadow: none;
}

.widget :deep(.indieboosting-product > div:first-of-type) {
    width: 3rem;
    height: 3rem;
}

:deep(.indieboosting-product p) {
    color: var(--vp-c-text-1);
    margin: 0;
}

:deep(.indieboosting-product p:last-of-type) {
    color: var(--vp-c-text-2);
    line-height: 1.5;
}

:not(.widget) :deep(.indieboosting-product p) {
    white-space: unset;
}
</style>
