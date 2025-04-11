<template>
    <video playsinline autoplay loop muted>
        <source :src="src" type="video/mp4">
    </video>
</template>

<script setup lang="ts">
interface Props {
    src: string,
    centered: boolean
}

defineProps<Props>()
</script>

<style scoped>
video {
    display: block;
    margin: auto;
}
</style>
