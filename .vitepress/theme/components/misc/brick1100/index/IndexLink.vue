<template>
    <a :href="href">
        <span>{{ text }}</span>
        <iconify-icon icon="pixelarticons:arrow-right" />
    </a>
</template>

<script setup lang="ts">
interface Props {
    href: string;
    text: string;
}

defineProps<Props>()
</script>

<style scoped>
a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-family: primary, monospace;
    font-size: 1.25rem;
    padding: 0.5rem;
    border: 2px solid rgba(0, 0, 0, 0.4);
    color: var(--c-blackish);
}

a iconify-icon {
    font-size: 1.5em;
}

a:hover {
    background: rgba(0, 0, 0, 0.8);
    color: var(--c-greenish);
}
</style>