<template>
    <PageTitle title="Wall of love">
        See what users have to say about {{ app ? APP_NAMES[app] : 'our retro apps' }}
    </PageTitle>

    <ul class="filter">
        <li>
            <a :href="`/testimonials`" :class="{ active: !app }">
                <iconify-icon icon="fluent:square-hint-24-regular" />
                <span>All apps</span>
            </a>
        </li>
        <li v-for="_app in apps">
            <a :href="`/testimonials/${_app}`" :class="{ active: _app === app }">
                <AppIcon :app="_app" class="app" />
                <span>{{ APP_NAMES[_app] }}</span>
            </a>
        </li>
    </ul>

    <div class="quotes">
        <UserQuote v-for="quote in filteredQuotes" :quote="quote" />
    </div>
</template>

<script setup lang="ts">
import { data as quotes } from '@/.content/quotes.data';
import { APP_NAMES } from '@/.vitepress/theme/constants';
import { App } from '@utils/types';
import { useRoute } from 'vitepress';
import { computed } from 'vue';
import AppIcon from '../AppIcon.vue';
import PageTitle from '../PageTitle.vue';
import UserQuote from './UserQuote.vue';

const { data } = useRoute()
const app = computed(() => data.params?.app)
const filteredQuotes = app.value ? quotes.filter((quote) => quote.app === app.value) : quotes;
const apps = Object.keys(APP_NAMES) as App[];
</script>

<style scoped>
.filter {
    --icon-size: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0 0 2rem;
    padding: 0;
    list-style: none;
}

.filter li {
    margin: 0;
}

.filter a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    text-decoration: none;
    background: var(--vp-c-default-soft);
    border: 1px solid transparent;
    color: var(--vp-c-text-1);
    border-radius: 0.5rem;
    filter: grayscale(1);
}

.filter a>span {
    display: none;
}

.filter a.active {
    background: var(--vp-c-bg);
    border-color: var(--vp-c-brand-1);
    color: var(--vp-c-brand-1);
    filter: grayscale(0);
}

.filter img {
    width: var(--icon-size);
}

.filter iconify-icon {
    font-size: var(--icon-size);
}

.quotes {
    display: grid;
    gap: 1.5rem;
}

@media (min-width: 480px) {
    .filter {
        --icon-size: 1.5rem;
    }

    .filter a>span {
        display: initial;
    }

    .quotes {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
}
</style>

<style>
.testimonials .VPDoc:not(.has-sidebar) .content {
    max-width: unset;
}
</style>
