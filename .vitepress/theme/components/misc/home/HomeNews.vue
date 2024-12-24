<template>
    <HomeSection id="news">
        <div class="title">
            <HomeSectionTitle>Some news</HomeSectionTitle>
            <HomeSectionCaption>
                Updates, thoughts, insights and sharing on various topics from the maker
            </HomeSectionCaption>
            <HomeLink href="/blog" class="link-title">View all posts</HomeLink>
        </div>
        <div class="list">
            <a v-for="post in latestPosts" :href="post.url" class="item">
                <div class="content">
                    <div class="metadata">
                        {{ new Date(post.createdAt).toLocaleDateString(undefined, { dateStyle: 'long' }) }}
                    </div>
                    <h3>{{ post.title }}</h3>
                    <p>{{ post.description }}</p>
                </div>
                <iconify-icon icon="fluent:arrow-up-right-24-regular" height="24" />
            </a>
        </div>
        <div class="link-footer">
            <HomeLink href="/blog">View all posts</HomeLink>
        </div>
    </HomeSection>
</template>

<script setup lang="ts">
import { data as posts } from '@/.content/blog-posts.data';
import HomeLink from './HomeLink.vue';
import HomeSection from './HomeSection.vue';
import HomeSectionTitle from './HomeSectionTitle.vue';
import HomeSectionCaption from './HomeSectionCaption.vue';

const latestPosts = posts.slice(0, 3);
</script>

<style scoped>
.title .link-title {
    display: none;
}

.link-footer {
    text-align: center;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    flex: 1;
}

.item {
    padding: 1.5rem;
    border: 1px solid var(--vp-c-default-3);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    transition: 0.2s;
}

.item:hover {
    border-color: var(--vp-c-brand-2);
}

.item:hover iconify-icon {
    color: var(--vp-c-brand-2);
    transform: translate(0.25rem, -0.25rem);
}

.item iconify-icon {
    color: var(--vp-c-default-1);
    transition: 0.2s;
}

.content {
    display: flex;
    flex-direction: column;
    max-width: 450px;
}

.metadata {
    color: var(--vp-c-text-2);
    margin-bottom: 0.75rem;
}

h3 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5;
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
}

@media (min-width: 960px) {
    #news {
        flex-direction: row;
        align-items: flex-start;
    }

    #news h2 {
        text-align: left;
        margin: 1.5rem 0;
    }

    .title p {
        text-align: left;
        margin-bottom: 1rem;
        max-width: 300px;
    }

    .title .link-title {
        display: inline-flex;
    }

    .link-footer {
        display: none;
    }
}
</style>
