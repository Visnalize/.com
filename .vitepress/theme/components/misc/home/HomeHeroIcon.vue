<template>
    <button class="hero-icon" @click="$emit('click')">
        <span class="text">
            <span>Explore</span>
            <span>projects</span>
        </span>
        <span class="logo">
            <svg width="247" height="360" viewBox="0 0 247 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M247 -2.38419e-05V168.5C247 213.5 236.667 252.667 216 286C195.333 319 164.667 343.667 124 360C83.6667 344 53 319.833 32 287.5C11 255.167 0.500002 217 0.500002 173V-2.38419e-05H48.5V167C48.5 200.333 54 228.333 65 251C76 273.667 95.8333 292.833 124.5 308.5C152.5 292.5 172 273.167 183 250.5C194.333 227.833 200 200 200 167V-2.38419e-05H247Z"
                    fill="white" />
            </svg>
        </span>
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped>
.hero-icon {
    --size: 9rem;
    position: absolute;
    top: calc(50% - var(--size) / 2);
    left: calc(50% - var(--size) / 2);
    z-index: 1;
    display: flex;
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
    margin-top: 0.5rem;
}

.hero-icon>.logo>svg {
    width: calc(var(--size) / 1.5);
    height: calc(var(--size) / 1.5);
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
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
    background: var(--vp-button-brand-bg);
}

.hero-icon:focus>.text,
.hero-icon:hover>.text {
    opacity: 1;
}

.hero-icon:focus>.logo,
.hero-icon:hover>.logo {
    opacity: 0.2;
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
