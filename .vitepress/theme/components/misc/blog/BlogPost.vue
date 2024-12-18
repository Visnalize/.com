<template>
    <div class="blog-post" :style="{ '--blog-bg': bgColor }">
        <div class="post-control"></div>
        <div class="post-content">
            <img class="post-image" :src="post.image" :alt="post.title" />
            <div class="post-badge" v-if="post.badge">
                <iconify-icon :icon="badgeIcon[post.badge]" />
            </div>
            <div class="post-date">
                <iconify-icon icon="fluent:calendar-clock-24-regular" height="16" />
                <span>{{ new Date(post.createdAt).toLocaleDateString(undefined, { dateStyle: 'medium' }) }}</span>
            </div>
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
            <div class="post-tags">
                <BlogTag v-for="tag in post.tags" :tag="tag" />
            </div>
        </div>
        <a :href="post.url" class="post-link" :aria-label="'View post: ' + post.title" />
    </div>
</template>

<script setup lang="ts">
import { PostData } from '@/.content/blog-posts.data';
import BlogTag from './BlogTag.vue';

defineProps<{ post: PostData }>()

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

const badgeIcon: Record<PostData['badge'], string> = {
    'latest': 'fluent:document-one-page-sparkle-24-regular',
    'popular': 'fluent:ribbon-star-24-regular'
}
</script>

<style scoped>
.blog-post {
    --padding-top: 2rem;
    --padding-top-dark: 0.75rem;
    --content-padding: 1.5rem;

    display: flex;
    flex-direction: column;
    background: var(--blog-bg);
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
    padding-top: var(--padding-top);
    position: relative;
    overflow: hidden;
}

.post-control {
    position: absolute;
    top: 0;
    width: 100%;
    height: var(--padding-top);
    background: var(--blog-bg);
    transition: height 0.2s;
}

.post-content {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
    padding: var(--content-padding);
    height: 100%;
}

.post-content>*:not(:last-child):not(.post-date):not(.post-badge) {
    margin-top: 0;
    margin-bottom: 1.5rem;
}

.post-content> :not(.post-image):not(.post-badge) {
    position: relative;
}

.post-content h2 {
    border: 0;
    padding: 0;
    font-size: 1.325rem;
}

.post-image {
    position: absolute;
    inset: 0;
    top: var(--padding-top);
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    filter: grayscale(1);
    transition: opacity 0.2s;
}

.post-badge {
    font-size: 9rem;
    position: absolute;
    right: 1rem;
    bottom: 0.5rem;
    opacity: 0.1;
    transition: opacity 0.2s;
}

.blog-post:hover .post-image {
    opacity: 0.15;
}

.blog-post:hover .post-badge {
    opacity: 0;
}

.post-content .post-date {
    color: var(--vp-c-text-2);
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
}

.post-content p {
    max-width: 500px;
}

.post-link {
    position: absolute;
    inset: 0;
}

.dark .blog-post {
    padding-top: var(--padding-top-dark);
}

.dark .post-control {
    height: var(--padding-top-dark);
}

.dark .post-content {
    background: rgba(0, 0, 0, 0.8);
    padding-top: calc(var(--content-padding) + (var(--padding-top) - var(--padding-top-dark)));
}

.dark .blog-post:hover .post-control {
    height: var(--padding-top);
}
</style>
