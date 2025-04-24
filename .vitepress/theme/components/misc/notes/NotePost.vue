<template>
    <div class="note" :style="{ '--note-bg': bgColor }">
        <div class="note-control"></div>
        <div class="note-content">
            <h2>
                <a :href="note.url" class="note-link">
                    {{ note.title }}
                    <iconify-icon icon="fluent:open-24-regular" />
                </a>
            </h2>
            <div v-html="md.render(note.content)"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { NoteData } from '@/.content/notes.data';
import MarkdownIt from 'markdown-it'

defineProps<{ note: NoteData }>()

const md = MarkdownIt({})

const color = {
    blue: "#c3f3fa",
    green: "#c8fec0",
    pink: "#f9ccf8",
    purple: "#d2d7fc",
    white: "#eaeaea",
    yellow: "#fffeb3"
}

const bgColor = (() => {
    const colors = Object.values(color);
    return colors[Math.floor(Math.random() * colors.length)];
})()
</script>

<style scoped>
.note {
    --padding-top: 2rem;
    --padding-top-dark: 0.75rem;
    --content-padding: 1.5rem;

    display: flex;
    flex-direction: column;
    background: var(--note-bg);
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
    padding-top: var(--padding-top);
    position: relative;
    overflow: hidden;
}

.note-control {
    position: absolute;
    top: 0;
    width: 100%;
    height: var(--padding-top);
    background: var(--note-bg);
    transition: height 0.2s;
}

.note-content {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
    padding: var(--content-padding);
    height: 100%;
}

.note-content h2 {
    border: 0;
    padding: 0;
    margin: 0;
    font-size: 1.325rem;
}

.note-link {
    text-decoration: none;
    color: inherit;
}

.dark .note {
    padding-top: var(--padding-top-dark);
}

.dark .note-control {
    height: var(--padding-top-dark);
}

.dark .note-content {
    background: rgba(0, 0, 0, 0.8);
    padding-top: calc(var(--content-padding) + (var(--padding-top) - var(--padding-top-dark)));
}

.dark .note:hover .note-control {
    height: var(--padding-top);
}
</style>
