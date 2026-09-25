<template>
    <div class="blog-share">
        <div class="share-title">Found this useful? Share it</div>
        <SocialShareButtons :data="shareData" variant="inline" />
    </div>
</template>

<script setup lang="ts">
import useShareData from '../../../composables/useShareData';
import SocialShareButtons from '../SocialShareButtons.vue';

const shareData = useShareData()
</script>

<style scoped>
.blog-share {
    margin-bottom: 3rem;
}

.share-title {
    font-weight: 600;
    margin-bottom: 0.75rem;
}
</style>
