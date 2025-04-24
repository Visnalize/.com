<template>
    <PageTitle :title='currentTag ? `Posts with tag "${currentTag}"` : "News and sharing"'>
        <template v-if="currentTag === 'sponsor'">
            Sharing, updates, thoughts, and insights from our sponsors.
            Don't forget to check out their products and services.
        </template>
        <template v-else-if="currentTag">
            Sharing, updates, thoughts, and insights with tag <code>{{ currentTag }}</code>.
            Hope you find helpful and valuable information here.
        </template>
        <template v-else>
            Where I share updates, thoughts, insights on various topics.
            Hope you find helpful and valuable information here.
        </template>
    </PageTitle>

    <BlogTags :tags="tags" :activeTag="currentTag" />

    <SponsorAd format="horizontal" />

    <BlogList>
        <BlogPost v-for="(post, i) in (currentTag ? tagPosts : posts)"
            :post="{ ...post, badge: isLatest(i) ? 'latest' : post.badge }" :class="{ latest: isLatest(i) }" />
    </BlogList>
</template>

<script setup lang="ts">
import { data as posts } from '@/.content/blog-posts.data';
import { data as tags } from '@/.content/blog-tags.data';
import { useData } from 'vitepress';
import SponsorAd from '../../global/SponsorAd.vue';
import PageTitle from '../PageTitle.vue';
import BlogList from './BlogList.vue';
import BlogPost from './BlogPost.vue';
import BlogTags from './BlogTags.vue';

const data = useData()
const currentTag = data.params.value?.tag as string;
const tagPosts = posts.filter(post => post.tags.filter(tag => tag.name === currentTag).length > 0);

const isLatest = (index: number) => index === 0 && !currentTag;
</script>

<style scoped>
@media (min-width: 640px) {
    .blog-post.latest {
        grid-column: span 2;
    }
}

@media (min-width: 768px) {
    .blog-post.latest :deep(.post-content h2) {
        font-size: 2rem;
        line-height: 2.5rem;
    }

    .blog-post.latest :deep(.post-content) {
        font-size: 1.25rem;
    }
}
</style>

<style>
@media (min-width: 960px) {
    .blog .VPDoc:not(.has-sidebar) .content {
        max-width: unset;
    }
}
</style>
