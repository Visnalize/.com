<template>
    <a class="link" :href="href">
        <span>
            <slot />
        </span>
        <iconify-icon icon="fluent:arrow-up-right-24-regular" height="12" />
    </a>
</template>

<script setup lang="ts">
defineProps<{
    href: string
}>()
</script>

<style scoped>
.link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    border-bottom: 1px solid;
    font-weight: 500;
    transition: 0.2s;
}

.link:hover {
    color: var(--vp-c-brand-2);
}

.link iconify-icon {
    transition: transform 0.2s;
}

.link:hover iconify-icon {
    transform: translate(0.125rem, -0.125rem);
}
</style>
