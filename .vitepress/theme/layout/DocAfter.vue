<template>
    <div class="after-doc">
        <!-- <IndieProducts v-if="enableSocial" :key="route.path" widget /> -->
        <SponsorAd v-if="enableAds" :format="hasAside ? undefined : 'auto'" :key="route.path"
            @resolve="adState = $event" />
        <AmazonPicks v-if="showPicks" :key="route.path + '-picks'" title="Related picks"
            note="Gear that fits what this post is about. Affiliate links, at no extra cost to you." :count="2" />
        <SocialCommentSection v-if="enableComments" />
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress';
import { useSidebar } from 'vitepress/theme';
import { computed, ref, watch } from 'vue';
import AmazonPicks from '../components/global/AmazonPicks.vue';
import SponsorAd from '../components/global/SponsorAd.vue';
import SocialCommentSection from '../components/misc/SocialCommentSection.vue';
import useCustomData from '../composables/useCustomData';

const { enableAds, enableComments, enableSocial } = useCustomData()
const { hasAside } = useSidebar()
const route = useRoute()

const adState = ref<'pending' | 'filled' | 'empty'>('pending')
const isBlogPost = computed(
    () => route.path.startsWith('/blog/') && !route.path.includes('/tag')
)

/**
 * The ad slot above already falls back to a pick when it is empty, so the strip
 * only appears once we know an actual ad filled that slot.
 */
const showPicks = computed(
    () => isBlogPost.value && (!enableAds.value || adState.value === 'filled')
)

watch(() => route.path, () => (adState.value = 'pending'))
</script>

<style scoped>
.after-doc {
    margin-top: 4rem;
}
</style>
