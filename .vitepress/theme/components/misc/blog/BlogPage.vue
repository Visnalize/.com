<template>
    <h1 class="title">
        <template v-if="currentTag">Posts with tag "{{ currentTag }}"</template>
        <template v-else>News and sharing</template>
    </h1>

    <div class="caption" v-if="!currentTag">
        Where I share updates, thoughts, insights on various topics. Hope you find helpful and valuable information
        here.
    </div>

    <BlogFeatured :post="currentTag ? undefined : latestPost" :tags="tags" :activeTag="currentTag" />

    <BlogList>
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

const [latestPost, ...otherPosts] = posts;
const data = useData()
const currentTag = data.params.value?.tag;
const tagPosts = posts.filter(post => post.tags.includes(currentTag));
</script>


<style scoped>
.title {
    text-align: center;
    margin-bottom: 1rem;
}

.caption {
    margin: auto;
    text-align: center;
    max-width: 500px;
    width: 100%;
}
</style>

<style>
@media (min-width: 960px) {
    .blog .VPDoc:not(.has-sidebar) .content {
        max-width: unset;
    }
}
</style>