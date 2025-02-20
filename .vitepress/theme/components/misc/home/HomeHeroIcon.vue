<template>
    <button class="hero-icon" @click="emit('click')">
        <span class="text">
            <span>Explore</span>
            <span>projects</span>
        </span>
        <span class="logo">
            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M343.559 101H168.446C161.571 101 156 106.601 156 113.525V168.325C156 206.23 176.944 239.282 207.786 256.441C176.949 273.6 156 306.651 156 344.557V398.475C156 400.103 156.334 401.731 156.961 403.259C158.22 406.326 160.65 408.766 163.692 410.033C165.21 410.664 166.828 411 168.446 411H343.554C345.172 411 346.79 410.669 348.308 410.033C351.355 408.766 353.78 406.326 355.039 403.259C355.666 401.731 356 400.103 356 398.475V344.557C356 306.651 335.056 273.6 304.214 256.441C335.051 239.282 356 206.23 356 168.325V113.525C356.005 106.606 350.429 101 343.559 101ZM180.892 126.05H331.108V168.325C331.108 174.978 330.162 181.401 328.554 187.548C309.855 167.653 283.698 155.8 256.002 155.8C228.307 155.8 202.15 167.653 183.451 187.548C181.838 181.396 180.897 174.978 180.897 168.325V126.05H180.892ZM256.002 328.069L313.514 385.95H198.491L256.002 328.069ZM243.556 270.093V305.173L180.892 368.234V344.557C180.892 307.147 208.055 276.09 243.556 270.093ZM331.113 344.557V368.234L268.449 305.168V270.088C303.95 276.09 331.113 307.147 331.113 344.557ZM256.002 243.916C230.966 243.916 208.817 231.481 195.161 212.478C209.205 192.854 231.837 180.85 256.002 180.85C280.168 180.85 302.8 192.854 316.844 212.473C303.188 231.481 281.039 243.916 256.002 243.916Z"
                    fill="white" />
            </svg>
        </span>
    </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: 'click'): void
}>()
</script>

<style scoped>
.hero-icon {
    z-index: 1;
    align-items: center;
    justify-content: center;
    background: var(--vp-c-brand-2);
    color: var(--vp-button-brand-text);
    font-size: calc(var(--size) / 6);
    font-weight: 600;
    line-height: 1.5;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    transition: 0.3s;
}

.hero-icon:not(:hover) {
    animation: pulse 4s ease 2s infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(27, 184, 155, 0.5);
    }

    20% {
        box-shadow: 0 0 0 2rem rgba(0, 0, 0, 0);
    }
}

.hero-icon>.text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.2s;
}

.hero-icon>.logo {
    position: absolute;
    transition: 0.2s;
}

.hero-icon>.logo>svg {
    width: var(--size);
    height: var(--size);
}

.hero-icon::after {
    content: "";
    border-radius: 50%;
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.hero-icon::after {
    border: 2px solid var(--vp-c-brand-2);
}

.hero-icon:focus,
.hero-icon:hover {
    outline: none;
    transform: scale(1.1);
    box-shadow: 0 calc(var(--size) / 20) calc(var(--size) / 10) rgba(0, 0, 0, 0.3);
    background: var(--vp-button-brand-bg);
}

.hero-icon:focus>.text,
.hero-icon:hover>.text {
    opacity: 1;
}

.hero-icon:focus>.logo,
.hero-icon:hover>.logo {
    opacity: 0.3;
    filter: blur(4px);
}

.hero-icon:focus::after,
.hero-icon:hover::after {
    transform: scale(1.4);
    opacity: 0;
    transition: 0.6s;
}

@media (min-width: 1200px) {
    .hero-icon {
        display: flex;
    }
}
</style>
