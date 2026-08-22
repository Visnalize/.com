<template>
    <section v-if="picks.length > 0" class="amazon-picks">
        <h3 v-if="title" class="picks-title">{{ title }}</h3>
        <p v-if="note" class="picks-note">{{ note }}</p>
        <div class="picks-list" :class="{ stacked: picks.length === 1 }">
            <AmazonPick v-for="pick in picks" :key="pick.id" :pick="pick"
                :format="picks.length === 1 ? 'horizontal' : 'vertical'" />
        </div>
    </section>
</template>

<script setup lang="ts">
import type { PickTopic } from '@/.content/amazon-picks.data';
import { useRoute } from 'vitepress';
import { onMounted, useId } from 'vue';
import useAmazonPicks, { claimPicks } from '../../composables/useAmazonPicks';
import AmazonPick from './AmazonPick.vue';

interface Props {
    /** Heading above the list. Omit for a bare list. */
    title?: string;
    /** A line of context under the heading. */
    note?: string;
    /** Show these picks by id, in this order. */
    ids?: string[] | string;
    /** Match these topics instead of the ones inferred from the page. */
    topics?: PickTopic[] | PickTopic;
    count?: number;
    offset?: number;
}

const props = withDefaults(defineProps<Props>(), { count: 2 })

// Markdown usage passes a single value or a comma-separated list as a string.
const toArray = <T,>(value?: T[] | T) => {
    if (!value) return undefined;
    if (Array.isArray(value)) return value;
    return String(value).split(',').map((item) => item.trim()) as T[];
}

const route = useRoute()
const instanceId = useId()
const picks = useAmazonPicks({
    ids: toArray(props.ids),
    topics: toArray(props.topics),
    count: props.count,
    offset: props.offset ?? instanceId,
})

onMounted(() => claimPicks(route.path, picks.value.map((pick) => pick.id)))
</script>

<style scoped>
.amazon-picks {
    margin: 2rem 0;
}

.picks-title {
    margin: 0 0 1rem;
    border: 0;
    padding: 0;
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: normal;
}

.picks-note {
    margin: 0 0 1rem;
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
    line-height: 1.5;
}

.picks-title:has(+ .picks-note) {
    margin-bottom: 0.25rem;
}

.picks-list {
    display: grid;
    gap: 1rem;
}

@media (min-width: 640px) {
    .picks-list:not(.stacked) {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
