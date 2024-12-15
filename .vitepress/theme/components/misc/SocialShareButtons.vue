<template>
    <button @click="copyUrl" :style="{ '--index': networks.length + 1 }" v-tooltip="'Copy URL'" aria-label="Copy URL">
        <iconify-icon :icon="copied ? 'fluent:checkmark-24-filled' : 'fluent:attach-24-filled'" height="16" />
    </button>
    <ShareNetwork v-for="(network, i) in networks" :network="network.name" :url="data?.url" :title="data?.title"
        :description="data?.description" v-slot="{ share }">
        <button @click="share" :style="{ '--index': networks.length - i }" v-tooltip="getShareLabel(network.name)"
            :aria-label="getShareLabel(network.name)">
            <iconify-icon :icon="network.icon" height="16" />
        </button>
    </ShareNetwork>
</template>

<script setup lang="ts">
import capitalize from 'voca/capitalize';
import { ref } from 'vue';
import { ShareNetwork } from 'vue3-social-sharing';
import { ShareData } from './SocialSharing.vue';

const props = defineProps<{ data: ShareData }>();

const networks = [
    { name: "facebook", icon: 'simple-icons:facebook' },
    { name: "telegram", icon: 'simple-icons:telegram' },
    { name: 'whatsapp', icon: 'simple-icons:whatsapp' },
    { name: "x", icon: 'simple-icons:x' },
];

const copied = ref(false)

const copyUrl = () => {
    navigator.clipboard.writeText(props.data.url || '');
    copied.value = true;
    setTimeout(() => copied.value = false, 2000);
};

const getShareLabel = (network: string) => {
    return `Share on ${capitalize(network)}`;
}

</script>

<style scoped>
button {
    display: flex;
    padding: 0.5rem;
    margin: 0 0.25rem;
    color: var(--vp-c-text-1);
    background: var(--vp-c-default-3);
    border-radius: 100%;
    position: relative;
    z-index: var(--index);
    transition: 0.2s;
}

button:hover {
    color: var(--vp-c-white);
    background: var(--vp-c-brand-2);
}

@media (min-width: 640px) {
    button {
        margin-left: -1rem;
    }

    .social-sharing:hover>button {
        margin-left: 0.25rem;
    }
}
</style>
