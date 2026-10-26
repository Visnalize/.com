<template>
    <section v-if="picks.length > 0" class="app-picks">
        <h3 v-if="title" class="picks-title">{{ title }}</h3>
        <p v-if="note" class="picks-note">{{ note }}</p>
        <div class="picks-list" :class="{ stacked: picks.length === 1 }">
            <AppPick v-for="pick in picks" :key="pick.app" :pick="pick"
                :format="picks.length === 1 ? 'horizontal' : 'vertical'" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress';
import { onMounted, useId } from 'vue';
import useAppPicks, { claimPicks } from '../../composables/useAppPicks';
import AppPick from './AppPick.vue';

interface Props {
    /** Heading above the list. Omit for a bare list. */
    title?: string;
    /** A line of context under the heading. */
    note?: string;
    count?: number;
}

const props = withDefaults(defineProps<Props>(), { count: 2 })

const route = useRoute()
const picks = useAppPicks({ count: props.count, offset: useId() })

onMounted(() => claimPicks(route.path, picks.value.map((pick) => pick.app)))
</script>

<style scoped>
.app-picks {
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
