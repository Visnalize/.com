<template>
    <div :class="['coming-soon', { compact }]">
        <iconify-icon icon="pixelarticons:clock" />
        <span>Coming soon<span class="platforms"> to iPhone and Android</span></span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    /** Leaves out the platforms on narrow screens, so the badge stays on one line in tight spots. */
    compact?: boolean
}>()
</script>

<style scoped>
.coming-soon {
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 0.5rem;
    margin: 2rem auto;
    padding: 0.75rem 1.25rem;
    border: 2px solid currentColor;
    border-radius: 999px;
    font-weight: 600;
}

.coming-soon iconify-icon {
    font-size: 1.5em;
}

@media (max-width: 639px) {
    .compact .platforms {
        display: none;
    }
}
</style>
