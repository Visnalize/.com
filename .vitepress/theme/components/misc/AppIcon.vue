<template>
    <img v-if="app === 'win7simu'" src="/assets/logo-win7simu.png" alt="Win7 Simu logo" v-bind="size" />
    <img v-else src="/assets/logo-brick1100.png" alt="Brick 1100 logo" v-bind="size" />
</template>

<script setup lang="ts">
import { App } from '@utils/types';
import { computed } from 'vue';

const props = defineProps<{
    app: App
    size?: string
}>()

const size = computed(() => ({
    width: props.size || '64',
    height: props.size || '64'
}))
</script>

<style scoped></style>
