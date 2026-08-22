<template>
    <a v-if="pick" class="amazon-pick" :class="format" :href="pick.link" target="_blank"
        rel="sponsored nofollow noopener" :aria-label="`${pick.title} on Amazon`">
        <div class="pick-icon">
            <iconify-icon :icon="pick.icon" />
        </div>
        <div class="pick-body">
            <div class="pick-meta">
                <iconify-icon icon="simple-icons:amazon" />
                <span>Our pick</span>
                <span class="pick-disclosure" v-tooltip="DISCLOSURE">Affiliate link</span>
            </div>
            <div class="pick-title">{{ pick.title }}</div>
            <p v-if="format !== 'inline'" class="pick-hook">{{ pick.hook }}</p>
        </div>
        <span class="pick-cta">
            <span>{{ pick.cta ?? 'View on Amazon' }}</span>
            <iconify-icon icon="fluent:arrow-right-24-regular" />
        </span>
    </a>
</template>

<script setup lang="ts">
import type { AmazonPick as PickData } from '@/.content/amazon-picks.data';
import { useRoute } from 'vitepress';
import { computed, onMounted, useId } from 'vue';
import useAmazonPicks, { claimPicks } from '../../composables/useAmazonPicks';

interface Props {
    /** Show a specific pick by id, instead of one matched to the page. */
    id?: string;
    /** An already resolved pick, when the parent does the matching. */
    pick?: PickData;
    format?: 'horizontal' | 'rectangle' | 'vertical' | 'inline';
    /** Shifts the rotation, so two slots on one page differ. */
    offset?: number | string;
}

const DISCLOSURE = 'We may earn a commission on qualifying purchases, at no extra cost to you.'

const props = withDefaults(defineProps<Props>(), { format: 'horizontal' })

// Only resolve from the page when the parent has not handed us a pick already.
const instanceId = useId()
const matched = useAmazonPicks({
    ids: props.id ? [props.id] : undefined,
    offset: props.offset ?? instanceId,
})

const pick = computed(() => props.pick ?? matched.value[0])

const route = useRoute()
// A pick handed in by a parent is that parent's to claim, not ours.
onMounted(() => {
    if (!props.pick && pick.value) claimPicks(route.path, [pick.value.id])
})
</script>

<style scoped>
.amazon-pick {
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
}

.amazon-pick:hover {
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
    border-radius: 0.5rem;
    background: var(--vp-c-default-soft);
    color: var(--vp-c-brand-1);
    font-size: 1.75rem;
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
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.pick-disclosure {
    padding: 0 0.375rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 1rem;
    cursor: help;
    text-transform: none;
    letter-spacing: normal;
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

.amazon-pick:hover .pick-cta {
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
    font-size: 1.25rem;
}

@media (max-width: 640px) {
    .horizontal {
        flex-direction: column;
        align-items: flex-start;
    }

    .horizontal .pick-cta {
        align-self: stretch;
        justify-content: center;
    }
}
</style>
