<template>
    <div class="bottom-aside">
        <SponsorAd v-if="enableAds" :format="outline ? 'rectangle' : ['rectangle', 'vertical']" class="aside-ad"
            :key="route.path" />
    </div>
</template>

<script setup lang="ts">
import { useData, useRoute } from 'vitepress';
import { computed } from 'vue';
import SponsorAd from '../components/global/SponsorAd.vue';
import useCustomData from '../composables/useCustomData';

const { frontmatter } = useData()
const { enableAds } = useCustomData()
const route = useRoute()
const outline = computed(() => frontmatter.value.outline ?? true);
</script>

<style scoped>
.aside-ad:not(.v-ad):not(.r-v-ad) {
    margin-top: 2rem;
}
</style>
