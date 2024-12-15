<template>
    <a :href="link">
        <code>{{ link }}</code>
    </a>
</template>

<script setup lang="ts">
const { path } = defineProps<{ path: string }>();
const link = `https://brick1100.visnalize.com/#${path}`
</script>
