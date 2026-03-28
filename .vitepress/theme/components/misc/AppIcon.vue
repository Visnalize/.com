<template>
    <img v-bind="imgProps" />
</template>

<script setup lang="ts">
import { App } from '@utils/types';
import { computed } from 'vue';

const props = defineProps<{
    app: App
    size?: string
}>()

const imgProps = computed(() => {
    const width = props.size || '64'
    const height = props.size || '64'
    const src = `/assets/logo-${props.app}.png`
    const alt = `${props.app === 'win7simu' ? 'Win7 Simu' : 'Brick 1100'} logo`
    return { src, alt, width, height }
})
</script>

<style scoped>
img {
    border-radius: 12.5%;
}
</style>
