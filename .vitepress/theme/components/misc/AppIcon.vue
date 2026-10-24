<template>
    <img v-bind="imgProps" />
</template>

<script setup lang="ts">
import { APP_NAMES } from '../../constants';
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
    const alt = `${APP_NAMES[props.app]} logo`
    return { src, alt, width, height }
})
</script>

<style scoped>
img {
    border-radius: 12.5%;
}
</style>
