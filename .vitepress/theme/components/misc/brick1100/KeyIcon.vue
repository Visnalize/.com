<template>
    <img :src="src" :alt="'key ' + s" />
</template>

<script setup lang="ts">
const { s } = defineProps<{ s: string }>();
const src = "/assets/keys/" + s + ".png"
</script>

<style scoped>
img {
    width: auto;
    height: 20px;
    display: inline;
}
</style>