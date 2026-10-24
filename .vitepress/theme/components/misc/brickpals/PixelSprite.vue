<template>
    <svg :viewBox="`0 0 ${rows[0].length} ${rows.length}`" shape-rendering="crispEdges" aria-hidden="true">
        <path :d="pixelPath([{ rows }])" fill="currentColor" />
    </svg>
</template>

<script setup lang="ts">
import { pixelPath, Sprite } from './pixels';

defineProps<{
    rows: Sprite
}>()
</script>
