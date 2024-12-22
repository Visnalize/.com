<template>
    <div class="intro-section">
        <slot />
        <h2>{{ title }}</h2>
        <p>{{ description }}
            <a class="link" :href="`/${app}/about`">
                <span>Learn more</span>
                <iconify-icon icon="fluent:arrow-up-right-24-regular" height="12" />
            </a>
        </p>
        <AccessLinks :app="app" class="small" />
    </div>
</template>

<script setup lang="ts">
import AccessLinks from '../../global/AccessLinks.vue';

interface Props {
    app: 'win7simu' | 'brick1100';
    title: string;
    description: string;
}

defineProps<Props>();
</script>

<style scoped>
.intro-section {
    font-size: 1rem;
    line-height: 1.5;
    padding: 4rem 2rem;
    text-align: center;
}

.intro-section h2 {
    font-size: 2em;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 0.5rem;
}

.intro-section p {
    color: var(--vp-c-text-2);
    margin: auto;
    margin-bottom: 2rem;
    max-width: 30em;
}

.intro-section .link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    border-bottom: 1px solid;
    font-weight: 500;
}

.intro-section .link iconify-icon {
    transition: 0.2s;
}

.intro-section .link:hover iconify-icon {
    transform: translate(0.125rem, -0.125rem);
}

.intro-section .access {
    margin: 0;
}

.intro-section .access :deep(img) {
    height: 64px;
}
</style>