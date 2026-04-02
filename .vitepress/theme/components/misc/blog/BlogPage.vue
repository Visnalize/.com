<template>
    <PageTitle :title="title.split(/-\s|\|/)[0].trim()">
        {{ description }}
    </PageTitle>

    <BlogTags :tags="tags" :activeTag="currentTag" />

    <SponsorAd format="horizontal" />

    <BlogList>
        <BlogPost v-for="(post, i) in displayedPosts"
            :post="{ ...post, badge: isLatest(i) ? 'latest' : post.badge }" :class="{ latest: isLatest(i) }" />
    </BlogList>

    <BlogPagination v-if="!currentTag" :currentPage="currentPage" :totalPages="totalPages" />
</template>

<script setup lang="ts">
import { data as posts } from '@/.content/blog-posts.data';
import { data as tags } from '@/.content/blog-tags.data';
import { useData } from 'vitepress';
import SponsorAd from '../../global/SponsorAd.vue';
import PageTitle from '../PageTitle.vue';
import BlogList from './BlogList.vue';
import BlogPagination from './BlogPagination.vue';
import BlogPost from './BlogPost.vue';
import BlogTags from './BlogTags.vue';

const FIRST_PAGE_SIZE = 11;
const POSTS_PER_PAGE = 12;

const { title, description, params } = useData()

const currentTag = params.value?.tag as string;
const tagPosts = posts.filter(post => post.tags.filter(tag => tag.name === currentTag).length > 0);

const currentPage = Number(params.value?.page) || 1;
const totalPages = 1 + Math.ceil((posts.length - FIRST_PAGE_SIZE) / POSTS_PER_PAGE);
const startIndex = currentPage === 1 ? 0 : FIRST_PAGE_SIZE + (currentPage - 2) * POSTS_PER_PAGE;
const endIndex = currentPage === 1 ? FIRST_PAGE_SIZE : startIndex + POSTS_PER_PAGE;
const pagedPosts = posts.slice(startIndex, endIndex);

const displayedPosts = currentTag ? tagPosts : pagedPosts;
const isLatest = (index: number) => index === 0 && currentPage === 1 && !currentTag;
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
