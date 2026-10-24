<template>
    <div class="coming-soon">
        <iconify-icon icon="pixelarticons:clock" />
        <span>Coming soon to iPhone and Android</span>
    </div>
</template>

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
</style>
