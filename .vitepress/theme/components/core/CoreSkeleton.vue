<template>
    <span class="core-skeleton" />
</template>

<style scoped>
.core-skeleton {
    display: block;
    width: 100%;
    height: 1.25rem;
    background-color: var(--vp-c-default-1);
    border-radius: 0.25rem;
    animation: pulse 2s infinite linear;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }
}
</style>
