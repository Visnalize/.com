<template>
    <video ref="videoRef" :autoplay="!xl" loop muted playsinline @pointerenter="togglePlay" @pointerleave="togglePlay">
        <slot />
    </video>
</template>

<script setup lang="ts">
import { useBreakpoints } from '@composables/useVueUse';
import { useInView } from 'motion-v';
import { ref, watchEffect } from 'vue';

const videoRef = ref<HTMLVideoElement | null>(null)
const { xl } = useBreakpoints()
const inview = useInView(videoRef, { amount: 'all', margin: '10px' })

const togglePlay = () => {
    if (videoRef.value && xl.value) {
        videoRef.value.paused ? videoRef.value.play() : videoRef.value.pause()
    }
}

watchEffect(() => {
    if (!xl.value && inview.value) {
        videoRef.value?.play()
    } else {
        videoRef.value?.pause()
    }
})
</script>

<style scoped></style>
