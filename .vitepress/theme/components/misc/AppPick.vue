<template>
    <a class="app-pick" :class="format" :href="pick.link">
        <div class="pick-icon">
            <AppIcon :app="pick.app" :size="format === 'inline' ? '40' : '56'" />
        </div>
        <div class="pick-body">
            <div class="pick-meta">From Visnalize</div>
            <div class="pick-title">{{ pick.title }}</div>
            <p v-if="format !== 'inline'" class="pick-hook">{{ pick.hook }}</p>
        </div>
        <span class="pick-cta">
            <span>{{ pick.cta }}</span>
            <iconify-icon icon="fluent:arrow-right-24-regular" />
        </span>
    </a>
</template>

<script setup lang="ts">
import type { AppPick as PickData } from '../../composables/useAppPicks';
import AppIcon from './AppIcon.vue';

withDefaults(defineProps<{
    pick: PickData;
    format?: 'horizontal' | 'rectangle' | 'vertical' | 'inline';
}>(), { format: 'horizontal' })
</script>

<style scoped>
.app-pick {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 0.75rem;
    background: var(--vp-c-bg-soft);
    text-decoration: none;
    color: inherit;
    transition: 0.2s;
    text-align: left;
    max-width: 48rem;
    margin-inline: auto;
}

.app-pick:hover {
    border-color: var(--vp-c-brand-1);
    background: var(--vp-c-bg-elv);
}

.pick-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 3.5rem;
    height: 3.5rem;
}

.rectangle .pick-icon {
    display: none;
}

.pick-body {
    flex: 1;
    min-width: 0;
}

.pick-meta {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    margin-bottom: 0.25rem;
    color: var(--vp-c-text-3);
    font-size: 0.75rem;
    letter-spacing: 0.05em;
}

.pick-title {
    font-weight: 600;
    line-height: 1.4;
}

.pick-hook {
    margin: 0.25rem 0 0;
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
    line-height: 1.5;
}

/*
 * Ad slots reserve their height before the fallback is chosen, so every app has
 * to render at the same height or the page shifts. A fixed number of hook lines
 * makes the card height independent of how long each app's hook is.
 */
.horizontal,
.rectangle {
    --hook-lines: 2;
}

.rectangle {
    --hook-lines: 4;
}

@media (max-width: 575px) {
    .horizontal {
        --hook-lines: 4;
    }
}

@media (max-width: 359px) {
    .horizontal {
        --hook-lines: 5;
    }
}

.horizontal .pick-hook,
.rectangle .pick-hook {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--hook-lines);
    line-clamp: var(--hook-lines);
    overflow: hidden;
    min-height: calc(var(--hook-lines) * 1.5em);
}

.pick-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    flex-shrink: 0;
    padding: 0.5rem 0.875rem;
    border-radius: 1.5rem;
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
    font-size: 0.875rem;
    font-weight: 500;
    white-space: nowrap;
    transition: 0.2s;
}

.app-pick:hover .pick-cta {
    background: var(--vp-c-brand-3);
    color: var(--vp-c-white);
}

/* Stacked variants fill the AdSense rectangle and vertical slots. */
.rectangle,
.vertical {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}

.rectangle .pick-cta,
.vertical .pick-cta {
    align-self: stretch;
    justify-content: center;
}

.inline {
    gap: 0.75rem;
    padding: 0.75rem 1rem;
}

.inline .pick-icon {
    width: 2.5rem;
    height: 2.5rem;
}

/*
 * Keep the icon beside the text on narrow screens and drop only the button to
 * its own line. Stacking all three made the card tall enough that swapping it in
 * for an empty ad slot shifted the page noticeably.
 */
@media (max-width: 640px) {
    .horizontal {
        flex-wrap: wrap;
    }

    .horizontal .pick-body {
        flex: 1 1 8rem;
    }

    .horizontal .pick-cta {
        flex: 1 0 100%;
        justify-content: center;
    }
}
</style>
