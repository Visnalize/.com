<template>
    <div class="quote" tabindex="0">
        <div class="metadata">
            <a v-if="quote.app" :href="`/${quote.app}/about`">
                <AppIcon :app="quote.app" class="app" />
            </a>
        </div>
        <div>
            <div class="quote-author">
                <img :src="quote.image" alt="User avatar" width="48" height="48" />
                <a v-if="quote.url" :href="quote.url" target="_blank" rel="noopener noreferrer">
                    {{ quote.author }}
                    <iconify-icon icon="fluent:open-24-regular" />
                </a>
                <span v-else>{{ quote.author }}</span>
            </div>
            <p class="quote-content">{{ content }}
                <a v-if="showMore" href="javascript:void(0)" @click="handleShowMore">
                    Read more</a>
            </p>
        </div>
        <div v-if="!home" class="quote-footer">
            <span class="date">{{ quote.date }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Quote } from '@/.content/quotes.data';
import { ref } from 'vue';
import { isTextTooLong, previewText } from '@utils/strings';
import AppIcon from '../AppIcon.vue';

const { quote, home } = defineProps<{
    quote: Quote,
    home?: boolean,
}>()

const content = ref(home ? quote.content : previewText(quote.content))
const showMore = ref(!home && isTextTooLong(quote.content))

const handleShowMore = () => {
    content.value = quote.content
    showMore.value = false
}
</script>

<style scoped>
.quote {
    cursor: default;
    color: var(--vp-c-text-1);
    border: 1px solid var(--vp-c-divider);
    border-radius: 1rem;
    padding: 1.5rem;
    padding-top: 2rem;
    position: relative;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0.7;
    transition: 0.2s;
    filter: grayscale(1);
}

.quote:hover,
.quote:focus,
.quote:focus-within {
    border-color: var(--vp-c-default-1);
    opacity: 1;
    filter: grayscale(0);
}

.quote-author {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 1rem;
}

.quote-author img {
    background: var(--vp-c-default-1);
    border-radius: 0.5rem;
    font-size: 0.75rem;
}

.quote-author a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    text-decoration: none;
}

.metadata {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
}

.app {
    width: 2rem;
}

.quote-footer {
    text-align: right;
}

.date {
    font-size: 0.875rem;
}
</style>
