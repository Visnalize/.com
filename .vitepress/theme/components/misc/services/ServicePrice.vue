<template>
    <div class="service">
        <div class="service-price">
            <div class="price-label">For a flat price of</div>
            <div class="price-tag">
                <span class="main-price">{{ price }}</span>
                <span v-if="suffix" class="price-suffix">{{ suffix }}</span>
            </div>
            <div v-if="originalPrice || offer" class="price-meta">
                <span v-if="originalPrice" class="og-price">{{ originalPrice }}</span>
                <span v-if="offer" class="price-offer">{{ offer }}</span>
            </div>
            <VPButton size="big" :text="buttonText || 'Get in touch'"
                :href="buttonLink || 'mailto:hey@visnalize.com'" />
            <VPLink v-if="terms" :href="terms" class="price-terms">View terms</VPLink>
        </div>
        <div class="service-features">
            <h3>What you will get</h3>
            <ul>
                <li v-for="feature in features">
                    <iconify-icon icon="fluent:checkmark-24-filled" />{{ feature }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { VPButton, VPLink } from 'vitepress/theme';

defineProps<{
    features: string[];
    price: string;
    originalPrice?: string;
    suffix?: string;
    buttonText?: string;
    buttonLink?: string;
    offer?: string;
    terms?: string;
}>()
</script>

<style scoped>
.service {
    color: var(--vp-c-text-2);
    background: var(--vp-c-bg);
    border: 1.5px solid var(--vp-c-divider);
    border-radius: 0.75rem;
    margin: 2rem 0;
    overflow: hidden;
    transition: border-color 0.25s;
}

.service:hover {
    border-color: var(--vp-c-brand-1);
}

.service-price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--vp-c-bg-soft);
    border-bottom: 1.5px solid var(--vp-c-divider);
    padding: 1.75rem;
}

.price-label {
    color: var(--vp-c-text-3);
    font-size: 0.875rem;
}

.price-tag {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0.375rem;
    margin-top: 0.375rem;
}

.main-price {
    color: var(--vp-c-text-1);
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.04em;
    font-variant-numeric: tabular-nums;
}

.price-suffix {
    color: var(--vp-c-text-3);
    font-size: 1.125rem;
    font-weight: 500;
}

.price-meta {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.og-price {
    color: var(--vp-c-text-3);
    font-size: 1.125rem;
    text-decoration: line-through;
    text-decoration-thickness: 1.5px;
}

.price-offer {
    color: var(--vp-c-brand-1);
    font-size: 0.8125rem;
    font-weight: 600;
}

.VPButton {
    margin-top: 1.25rem;
    width: 100%;
    text-decoration: none;
}

.price-terms {
    margin-top: 0.75rem;
    color: var(--vp-c-text-3);
    font-size: 0.8125rem;
}

.price-terms:hover {
    color: var(--vp-c-brand-1);
}

.service-features {
    padding: 2rem;
}

.service h3 {
    margin: 0;
    padding: 0;
    border: 0;
    color: var(--vp-c-text-3);
    font-size: 0.875rem;
    font-weight: 600;
}

.service-features ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.service-features li {
    display: flex;
    align-items: flex-start;
    gap: 0.625rem;
    padding: 0.5rem 0;
    line-height: 1.6;
}

.service-features li + li {
    border-top: 1px solid var(--vp-c-divider);
}

.service-features iconify-icon {
    flex-shrink: 0;
    font-size: 1rem;
    color: var(--vp-c-brand-1);
    margin-top: 0.3rem;
}

@media (min-width: 840px) {
    .service {
        display: flex;
    }

    .service-price {
        flex: 0 0 280px;
        border-bottom: 0;
        border-right: 1.5px solid var(--vp-c-divider);
    }

    .service-features {
        flex: 1;
    }
}
</style>
