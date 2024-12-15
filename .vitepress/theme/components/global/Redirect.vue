<template>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';

const { to } = defineProps<{ to: string }>()

onBeforeMount(() => {
    document.location.replace(to)
})
</script>
