<template>
    <div class="social-sharing">
        <button @click="copyUrl" :style="{ '--index': networks.length + 1 }" v-tooltip="'Copy URL'">
            <iconify-icon :icon="copied ? 'fluent:checkmark-24-filled' : 'fluent:attach-24-filled'" height="16" />
        </button>
        <ShareNetwork v-for="(network, i) in networks" :network="network.name" :url="shareData?.url"
            :title="shareData?.title" :description="shareData?.description" v-slot="{ share }">
            <button @click="share" :style="{ '--index': networks.length - i }"
                v-tooltip="'Share on ' + upperCaseFirst(network.name)">
                <iconify-icon :icon="network.icon" height="16" />
            </button>
        </ShareNetwork>
    </div>
</template>

<script setup lang="ts">
import { inBrowser, useData } from 'vitepress';
import { ref, watchEffect } from 'vue';
import { ShareNetwork } from 'vue3-social-sharing';

interface ShareData {
    url: string;
    title?: string;
    description?: string;
}

const networks = [
    { name: "facebook", icon: 'simple-icons:facebook' },
    { name: "telegram", icon: 'simple-icons:telegram' },
    { name: 'whatsapp', icon: 'simple-icons:whatsapp' },
    { name: "x", icon: 'simple-icons:x' },
];

const data = useData()
const copied = ref(false)
const shareData = ref<ShareData>()

const copyUrl = () => {
    navigator.clipboard.writeText(shareData.value?.url || '');
    copied.value = true;
    setTimeout(() => copied.value = false, 2000);
};

const upperCaseFirst = (name: string) => name.charAt(0).toUpperCase() + name.slice(1);

watchEffect(() => {
    if (!inBrowser) return;

    const { title, description } = data.page.value;
    shareData.value = { url: window.location.href, title, description }
})
</script>

<style scoped>
.social-sharing {
    display: flex;
    align-items: center;
}

.social-sharing:hover>button {
    margin-left: 0.25rem;
}

button {
    display: flex;
    padding: 0.5rem;
    background: var(--vp-c-default-3);
    border-radius: 100%;
    margin-left: -1rem;
    position: relative;
    z-index: var(--index);
    transition: 0.25s;
}

button:hover {
    color: var(--vp-c-white);
    background: var(--vp-c-brand-2);
}
</style>
