<template>
    <div class="service">
        <div class="service-price">
            <div>For a flat price of</div>
            <div class="price-tag">
                <span v-if="originalPrice" class="og-price">{{ originalPrice }}</span>
                <span class="main-price">{{ price }}</span>
                <span v-if="suffix">{{ suffix }}</span>
            </div>
            <div v-if="offer" class="price-offer">{{ offer }}</div>
            <VPButton size="big" :text="buttonText || 'Get in touch'"
                :href="buttonLink || 'mailto:hey@visnalize.com'" />
            <div v-if="note" class="price-note">{{ note }}</div>
        </div>
        <div class="service-features">
            <h3>What you will get</h3>
            <ul>
                <li v-for="feature in features">
                    <iconify-icon icon="fluent:checkmark-circle-24-regular" />{{ feature }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { VPButton } from 'vitepress/theme';

defineProps<{
    features: string[];
    price: string;
    originalPrice?: string;
    suffix?: string;
    buttonText?: string;
    buttonLink?: string;
    offer?: string;
    note?: string;
}>()
</script>

<style scoped>
.service {
    color: var(--vp-c-text-2);
    border: 1px solid var(--vp-c-divider);
    border-radius: 1rem;
    margin: 2rem 0;
    overflow: hidden;
}

.service h3 {
    margin: 0 0 1rem 0;
    padding: 0;
}

.service-price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--vp-c-default-soft);
    padding: 2rem;
}

.price-tag {
    display: flex;
    align-items: baseline;
    gap: 0.25rem;
    margin: 1rem 0;
}

.main-price {
    font-size: 3rem;
    font-weight: 700;
    color: var(--vp-c-text-1);
}

.og-price {
    font-size: 2rem;
    font-weight: 500;
    color: var(--vp-c-text-3);
    background: linear-gradient(-20deg, transparent 47.75%, currentColor 49.5%, currentColor 52.5%, transparent 54.25%);
}

.price-offer {
    background: var(--vp-c-danger-soft);
    border: 1px solid var(--vp-c-danger-soft);
    border-radius: 0.5rem;
    color: var(--vp-c-danger-1);
    font-size: 0.75rem;
    padding: 0 0.25rem;
    margin-bottom: 0.5rem;
}

.price-note {
    font-size: 0.875rem;
    margin-top: 2rem;
}

.service-features {
    padding: 2rem;
}

.service-features ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.service-features li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
}

.service-features iconify-icon {
    font-size: 1.25rem;
    color: var(--vp-c-brand-1);
    margin-top: 0.25rem;
}

.VPButton {
    text-decoration: none;
}

@media (min-width: 840px) {
    .service {
        display: flex;
    }

    .service-price {
        min-width: 300px;
    }
}
</style>
