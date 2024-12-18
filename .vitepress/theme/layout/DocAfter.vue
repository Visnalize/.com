<template>
    <div class="after-doc">
        <SponsorAd v-if="enableAds" :format="hasAside ? undefined : 'auto'" :key="route.path" />
        <SocialCommentSection v-if="enableComments" />
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress';
import { useSidebar } from 'vitepress/theme';
import SponsorAd from '../components/global/SponsorAd.vue';
import SocialCommentSection from '../components/misc/SocialCommentSection.vue';
import useCustomData from '../composables/useCustomData';

const { enableAds, enableComments } = useCustomData()
const { hasAside } = useSidebar()
const route = useRoute()
</script>

<style scoped>
.after-doc {
    margin-top: 4rem;
}
</style>
