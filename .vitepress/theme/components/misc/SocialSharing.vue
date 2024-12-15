<template>
    <div class="social-sharing">
        <SocialShareButtons :data="shareData" />
    </div>

    <div class="social-sharing-mobile">
        <VDropdown>
            <button class="social-share-button">
                <iconify-icon icon="fluent:share-android-24-filled" height="16" />
                <span>Share</span>
            </button>
            <template #popper>
                <SocialShareButtons :data="shareData" />
            </template>
        </VDropdown>
    </div>
</template>

<script setup lang="ts">
import { inBrowser, useData } from 'vitepress';
import { ref, watchEffect } from 'vue';
import SocialShareButtons from './SocialShareButtons.vue';

export interface ShareData {
    url: string;
    title?: string;
    description?: string;
}

const data = useData()
const shareData = ref<ShareData>()

watchEffect(() => {
    if (!inBrowser) return;

    const { title, description } = data.page.value;
    shareData.value = { url: window.location.href, title, description }
})
</script>

<style scoped>
.social-sharing {
    display: none;
    align-items: center;
}

.social-sharing-mobile button {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    gap: 0.25rem;
}

.social-sharing-mobile button:hover {
    color: var(--vp-c-brand-2);
    transition: color 0.2s;
}

@media (min-width: 640px) {
    .social-sharing {
        display: flex;
    }

    .social-sharing-mobile {
        display: none;
    }
}
</style>
