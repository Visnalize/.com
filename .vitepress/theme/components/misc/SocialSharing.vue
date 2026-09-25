<template>
    <VDropdown v-model:shown="menuShown" :disabled="nativeShare" placement="bottom-end" :distance="8">
        <button class="share-trigger" :aria-expanded="menuShown" @click="shareNatively">
            <iconify-icon icon="fluent:share-24-regular" />
            <span>Share</span>
        </button>
        <template #popper="{ hide }">
            <SocialShareButtons :data="shareData" @shared="hide" />
        </template>
    </VDropdown>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useShareData from '../../composables/useShareData';
import SocialShareButtons from './SocialShareButtons.vue';

const shareData = useShareData()
const menuShown = ref(false)
const nativeShare = ref(false)

/**
 * Touch devices get the system share sheet, which lists every app the reader
 * has. On desktop that sheet offers little, so the menu of networks is used.
 */
onMounted(() => {
    nativeShare.value = !!navigator.share && matchMedia('(pointer: coarse)').matches
})

const shareNatively = async () => {
    if (!nativeShare.value) return;
    try {
        await navigator.share(shareData.value)
    } catch {
        // The reader closed the sheet, which is not an error worth reporting.
    }
}
</script>

<style scoped>
.share-trigger {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    transition: color 0.2s;
}

.share-trigger:hover,
.share-trigger[aria-expanded="true"] {
    color: var(--vp-c-brand-2);
}
</style>
