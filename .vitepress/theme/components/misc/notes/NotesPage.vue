<template>
    <PageTitle title="Notes">
        My personal notebook for dumping ideas, thoughts, learnings, and all sorts of things that catch my attention.
    </PageTitle>

    <div class="list">
        <NotePost v-for="note in notes" :note="note" />
    </div>
</template>

<script setup lang="ts">
import { data as notes } from '@/.content/notes.data';
import PageTitle from '@components/misc/PageTitle.vue';
import NotePost from './NotePost.vue';
</script>

<style scoped>
.list {
    display: grid;
    gap: 1.5rem;
    align-items: flex-start;
}

@media (min-width: 640px) {
    .list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 960px) {
    .list {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>

<style>
@media (min-width: 960px) {
    .notes .VPDoc:not(.has-sidebar) .content {
        max-width: unset;
    }
}
</style>
