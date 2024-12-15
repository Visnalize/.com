<template>
    <span class="notation">
        <iconify-icon :icon="data.icon" width="20" height="20" v-tooltip="list ? undefined : data.name" />
        <span v-if="list">{{ data.name }}</span>
    </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    icon: string
    list?: boolean
}

const props = defineProps<Props>()

const data = computed(() => {
    if (props.icon === "android")
        return { name: "Android", icon: "logos:google-play-icon" };
    if (props.icon === "ios")
        return { name: "iOS", icon: "logos:apple-app-store" };
    if (props.icon === "premium")
        return { name: "Premium feature", icon: "noto:gem-stone" };
    return { name: "Unknown", icon: "noto:red-question-mark" };
})
</script>

<style scoped>
.notation {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    margin-left: 0.25rem;
    gap: 0.25rem;
}
</style>