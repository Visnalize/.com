<template>
    <div class="pricing">
        <div class="pricing-switch" role="group" aria-label="Buying option">
            <button type="button" :class="{ active: !isPack }" :aria-pressed="!isPack" @click="isPack = false">
                Single post
            </button>
            <button type="button" :class="{ active: isPack }" :aria-pressed="isPack" @click="isPack = true">
                {{ packSize }}-post pack
                <span class="save">save {{ topSaving }}%</span>
            </button>
        </div>

        <div class="pricing-tiers">
            <div v-for="tier in tiers" :key="tier.name" class="tier">
                <div class="tier-head">
                    <h3>{{ tier.name }}</h3>
                    <p>{{ tier.note }}</p>
                </div>
                <div v-for="row in tier.rows" :key="row.label" class="tier-row">
                    <div class="row-label">{{ row.label }}</div>
                    <div class="row-price">
                        <span class="amount">${{ isPack ? row.pack : row.single }}</span>
                        <span class="unit">
                            <template v-if="isPack">
                                ${{ perPost(row) }} per post
                                <span class="row-save">save {{ saving(row) }}%</span>
                            </template>
                            <template v-else>per post</template>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <p class="pricing-note">
            <template v-if="isPack">
                One payment for {{ packSize }} posts, published one per month over {{ packSize }} months.
            </template>
            <template v-else>
                Pay once, after the post is live. No subscription, no renewal.
            </template>
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface PriceRow {
    label: string;
    single: number;
    pack: number;
}

interface Tier {
    name: string;
    note: string;
    rows: PriceRow[];
}

const props = withDefaults(defineProps<{ tiers: Tier[]; packSize?: number }>(), {
    packSize: 3,
});

const isPack = ref(false);

// A pack is quoted as a round total, so the per-post figure and the discount are
// derived rather than written out for each tier.
const perPost = (row: PriceRow) => Math.round(row.pack / props.packSize);
const saving = (row: PriceRow) =>
    Math.round((1 - row.pack / (row.single * props.packSize)) * 100);

const topSaving = computed(() =>
    Math.max(...props.tiers.flatMap((tier) => tier.rows.map(saving)))
);
</script>

<style scoped>
.pricing {
    margin: 2rem 0;
}

.pricing-switch {
    display: flex;
    margin-bottom: 1rem;
    overflow: hidden;
}

.pricing-switch button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.75rem;
    border: 1.5px solid var(--vp-c-divider);
    background: var(--vp-c-bg-soft);
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
}

.pricing-switch button:first-child {
    border-radius: 0.75rem 0 0 0.75rem;
}

.pricing-switch button:last-child {
    border-radius: 0 0.75rem 0.75rem 0;
}

.pricing-switch button:hover {
    background: var(--vp-c-default-soft);
    color: var(--vp-c-text-1);
}

.pricing-switch button:focus-visible {
    outline: 2px solid var(--vp-c-brand-1);
    outline-offset: -2px;
}

.pricing-switch button.active {
    background: var(--vp-c-bg);
    border-color: var(--vp-c-brand-3);
    color: var(--vp-c-brand-1);
}

.save {
    color: var(--vp-c-brand-1);
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
}

.pricing-switch button.active .save {
    color: inherit;
    opacity: 0.85;
}

.pricing-tiers {
    display: grid;
    gap: 1rem;
}

.tier {
    display: flex;
    flex-direction: column;
    border: 1.5px solid var(--vp-c-divider);
    border-radius: 0.75rem;
    overflow: hidden;
}

.tier-head {
    padding: 1rem 1.5rem;
    background: var(--vp-c-bg-soft);
    border-bottom: 1.5px solid var(--vp-c-divider);
}

.tier-head h3 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.0625rem;
    line-height: 1.4;
}

.tier-head p {
    margin: 0;
    color: var(--vp-c-text-3);
    font-size: 0.8125rem;
}

.tier-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 1.5rem;
}

.tier-row + .tier-row {
    border-top: 1px solid var(--vp-c-divider);
}

.tier-row:last-child {
    margin-top: auto;
}

.row-label {
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
}

.row-price {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-shrink: 0;
}

.amount {
    color: var(--vp-c-text-1);
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.03em;
    font-variant-numeric: tabular-nums;
}

.unit {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    color: var(--vp-c-text-3);
    font-size: 0.75rem;
    white-space: nowrap;
}

.row-save {
    color: var(--vp-c-brand-1);
    font-weight: 600;
}

.pricing-note {
    margin: 1rem 0 0;
    color: var(--vp-c-text-3);
    font-size: 0.8125rem;
    text-align: center;
}

@media (min-width: 640px) {
    .pricing-tiers {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
