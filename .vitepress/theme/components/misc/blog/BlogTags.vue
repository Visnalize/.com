<template>
    <div class="blog-tags">
        <BlogTag v-for="tag in tags" :tag="tag" :active="tag.name === activeTag" />
    </div>
</template>

<script setup lang="ts">
import { TagData } from '@/.content/blog-tags.data';
import BlogTag from './BlogTag.vue';

interface Props {
    tags: TagData[];
    activeTag?: string;
}

defineProps<Props>()
</script>

<style scoped>
.blog-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    max-width: 640px;
}
</style>
