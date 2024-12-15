<template>
    <div class="after-doc">
        <div v-if="tags.length > 0" class="blog-tags">
            <div class="tags-title">Tags</div>
            <div>
                <BlogTag v-for="tag in tags" :tag="tag" />
            </div>
        </div>
        <SocialCommentSection v-if="enableComments" />
    </div>
</template>

<script setup lang="ts">
import BlogTag from '../components/misc/blog/BlogTag.vue';
import SocialCommentSection from '../components/misc/SocialCommentSection.vue';
import usePageMeta from '../composables/usePageMeta';

const { tags, enableComments } = usePageMeta()
</script>

<style scoped>
.after-doc {
    margin-top: 4rem;
}

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
