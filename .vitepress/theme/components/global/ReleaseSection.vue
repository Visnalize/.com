<template>
    <section class="release-section">
        <div class="section-head">
            <span class="section-icon">
                <iconify-icon :icon="meta.icon" />
            </span>
            <h2 :id="platform">{{ meta.label }}</h2>
        </div>
        <slot />
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RELEASE_PLATFORMS, type ReleasePlatform } from '../../constants';

const props = defineProps<{ platform: ReleasePlatform }>()

const meta = computed(() => RELEASE_PLATFORMS[props.platform])
</script>

<style scoped>
.release-section {
    margin-top: 2.5rem;
}

.section-head {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    position: relative;
}

.section-icon {
    display: grid;
    place-items: center;
    flex: none;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 0.4375rem;
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
    font-size: 1rem;
}

.section-head h2 {
    margin: 0;
    padding: 0;
    border-top: 0;
    font-size: 1.25rem;
    line-height: 1.4;
    letter-spacing: -0.01em;
}
</style>
