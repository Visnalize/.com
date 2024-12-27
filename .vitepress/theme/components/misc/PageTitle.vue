<template>
    <div class="page-title">
        <h1>{{ title }}</h1>
        <p v-if="$slots.default" class="caption">
            <slot />
        </p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string;
}

defineProps<Props>();
</script>

<style scoped>
.page-title {
    margin-bottom: 4rem;
}

h1 {
    text-align: center;
    margin-bottom: 1rem;
}

.caption {
    margin: auto;
    text-align: center;
    max-width: 500px;
    width: 100%;
}
</style>