<template>
    <div class="before-doc-footer">
        <div v-if="tags.length > 0" class="blog-tags">
            <div class="tags-title">Tags:</div>
            <div>
                <BlogTag v-for="tag in tags" :tag="{ name: tag }" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BlogTag from '../components/misc/blog/BlogTag.vue';
import useCustomData from '../composables/useCustomData';

const { tags } = useCustomData()
</script>

<style scoped>
.blog-tags {
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.tags-title {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}
</style>
