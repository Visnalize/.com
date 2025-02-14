<template>
    <div class="home-page">
        <HomeCursor />
        <HomeHero />
        <HomeSectionWin7Simu />
        <HomeSectionBrick1100 />
        <HomeSectionTestimonials />
        <HomeSectionNews />
        <HomeSectionChannel />
        <HomeSectionContact />
    </div>
</template>

<script setup lang="ts">
import { dismissToast, toastSitenews } from '@composables/useToast';
import { onMounted, onUnmounted, ref } from 'vue';
import HomeCursor from './HomeCursor.vue';
import HomeHero from './HomeHero.vue';
import HomeSectionBrick1100 from './HomeSectionBrick1100.vue';
import HomeSectionChannel from './HomeSectionChannel.vue';
import HomeSectionContact from './HomeSectionContact.vue';
import HomeSectionNews from './HomeSectionNews.vue';
import HomeSectionTestimonials from './HomeSectionTestimonials.vue';
import HomeSectionWin7Simu from './HomeSectionWin7Simu.vue';

const toastId = ref<string | number>(null);

onMounted(async () => {
    toastId.value = await toastSitenews()
})

onUnmounted(() => {
    dismissToast(toastId.value)
})
</script>

<style scoped></style>
