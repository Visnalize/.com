<template>
    <div class="after-doc">
        <BlogSeries />
        <div v-if="tags.length > 0" class="blog-tags">
            <div class="tags-title">Tags:</div>
            <div>
                <BlogTag v-for="tag in tags" :tag="{ name: tag }" />
            </div>
        </div>
        <BlogRelated />
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
import BlogRelated from '../components/misc/blog/BlogRelated.vue';
import BlogSeries from '../components/misc/blog/BlogSeries.vue';
import BlogTag from '../components/misc/blog/BlogTag.vue';
import SocialCommentSection from '../components/misc/SocialCommentSection.vue';
import useCustomData from '../composables/useCustomData';

const { enableAds, enableComments, enableSocial, tags } = useCustomData()
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

.blog-tags {
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.tags-title {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}
</style>
