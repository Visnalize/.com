<template>
    <div :class="['share-buttons', variant]">
        <button class="share-item" @click="copyUrl">
            <iconify-icon :icon="copied ? 'fluent:checkmark-24-regular' : 'fluent:link-24-regular'" />
            <span>{{ copied ? 'Copied' : 'Copy link' }}</span>
        </button>
        <div v-if="variant === 'menu'" class="divider" />
        <ShareNetwork v-for="network in networks" :key="network.name" :network="network.name" :url="data.url"
            :title="data.title" :description="data.description" v-slot="{ share }">
            <button class="share-item" @click="share(); emit('shared')">
                <iconify-icon :icon="network.icon" />
                <span>{{ network.label }}</span>
            </button>
        </ShareNetwork>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ShareNetwork } from 'vue3-social-sharing';
import { ShareData } from '../../composables/useShareData';

const props = withDefaults(defineProps<{
    data: ShareData;
    /** `menu` lists the options in the Share dropdown, `inline` shows them as buttons. */
    variant?: 'menu' | 'inline';
}>(), { variant: 'menu' })

const emit = defineEmits<{ shared: [] }>()

const networks = [
    { name: 'x', label: 'X', icon: 'simple-icons:x' },
    { name: 'facebook', label: 'Facebook', icon: 'simple-icons:facebook' },
    { name: 'linkedin', label: 'LinkedIn', icon: 'simple-icons:linkedin' },
    { name: 'bluesky', label: 'Bluesky', icon: 'simple-icons:bluesky' },
    { name: 'telegram', label: 'Telegram', icon: 'simple-icons:telegram' },
    { name: 'whatsapp', label: 'WhatsApp', icon: 'simple-icons:whatsapp' },
];

const copied = ref(false)

const copyUrl = () => {
    navigator.clipboard.writeText(props.data.url);
    copied.value = true;
    setTimeout(() => copied.value = false, 2000);
};
</script>

<style scoped>
.share-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--vp-c-text-1);
    white-space: nowrap;
    transition: color 0.25s, background-color 0.25s, border-color 0.25s;
}

.share-item iconify-icon {
    font-size: 1rem;
}

/* Matches the nav menus of the default theme. */
.menu {
    display: flex;
    flex-direction: column;
    min-width: 160px;
}

.menu .share-item {
    padding: 0 0.75rem;
    line-height: 2rem;
    border-radius: 6px;
}

.menu .share-item:hover {
    color: var(--vp-c-brand-1);
    background: var(--vp-c-default-soft);
}

.menu .divider {
    margin: 0.5rem 0.75rem;
    border-top: 1px solid var(--vp-c-divider);
}

.inline {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.inline .share-item {
    padding: 0.375rem 0.875rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 2rem;
}

.inline .share-item:hover {
    color: var(--vp-c-brand-1);
    border-color: var(--vp-c-brand-1);
}
</style>
