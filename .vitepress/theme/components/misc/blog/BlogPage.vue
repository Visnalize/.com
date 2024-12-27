<template>
    <PageTitle :title='currentTag ? `Posts with tag "${currentTag}"` : "New and sharing"'>
        <template v-if="!currentTag">
            Where I share updates, thoughts, insights on various topics.
            Hope you find helpful and valuable information here.
        </template>
    </PageTitle>

    <BlogFeatured :post="currentTag ? undefined : latestPost" :tags="tags" :activeTag="currentTag" />

    <BlogList>
        <div v-if="showAd" class="blog-ad">
            <button v-tooltip="'Hide Ad'" aria-label="Hide Ad" @click="showAd = false">
                <iconify-icon icon="fluent:dismiss-24-filled" />
            </button>
            <SponsorAd format="rectangle" />
        </div>
        <BlogPost v-for="post in (currentTag ? tagPosts : otherPosts)" :post="post" />
    </BlogList>
</template>

<script setup lang="ts">
import { data as posts } from '@/.content/blog-posts.data';
import { data as tags } from '@/.content/blog-tags.data';
import BlogFeatured from '@components/misc/blog/BlogFeatured.vue';
import BlogList from '@components/misc/blog/BlogList.vue';
import BlogPost from '@components/misc/blog/BlogPost.vue';
import { useData } from 'vitepress';
import { ref } from 'vue';
import SponsorAd from '../../global/SponsorAd.vue';
import PageTitle from '../PageTitle.vue';

const [latestPost, ...otherPosts] = posts;
const data = useData()
const currentTag = data.params.value?.tag as string;
const tagPosts = posts.filter(post => post.tags.filter(tag => tag.name === currentTag).length > 0);
const showAd = ref(!tagPosts.length || tagPosts.length > 3);
</script>

<style scoped>
.blog-ad {
    text-align: center;
    position: relative;
}

.blog-ad button {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.125rem;
    border-radius: 10%;
    background: var(--vp-c-default-soft);
    padding: 0.375rem;
    display: flex;
    z-index: 1;
    transition: 0.2s;
}

.blog-ad button:hover {
    background: var(--vp-c-default-2);
}
</style>

<style>
@media (min-width: 960px) {
    .blog .VPDoc:not(.has-sidebar) .content {
        max-width: unset;
    }
}
</style>
