<template>
    <section v-if="related.length > 0" class="blog-related">
        <h2 class="related-title">Keep reading</h2>
        <a v-for="post in related" :key="post.url" class="related-post" :href="post.url">
            <img v-if="post.image" class="related-image" :src="getThumbnail(post.image)" alt="" width="120"
                height="90" loading="lazy" decoding="async" />
            <span class="related-text">
                <span class="related-name">{{ post.title }}</span>
                <span class="related-description">{{ post.description }}</span>
                <span class="related-tags">{{ sharedTags(post).join(' · ') }}</span>
            </span>
        </a>
    </section>
</template>

<script setup lang="ts">
import { data as posts, PostData } from '@/.content/blog-posts.data';
import { useRoute } from 'vitepress';
import { computed } from 'vue';
import { FORMAT_TAGS } from '../../../constants';
import { getThumbnail } from '../../../utils/images';

const MAX_RELATED = 3;

/** A shared subject counts for more than a shared format. */
const TOPIC_WEIGHT = 2;
const FORMAT_WEIGHT = 1;

const route = useRoute()

// Post urls carry no extension, while the route keeps one until it is resolved.
const normalize = (path: string) => path.replace(/\.html$/, '')

const current = computed(() => posts.find(post => post.url === normalize(route.path)))

const currentTags = computed(() => new Set(current.value?.tags.map(tag => tag.name)))

const sharedTags = (post: PostData) =>
    post.tags.map(tag => tag.name).filter(name => currentTags.value.has(name))

const score = (post: PostData) =>
    sharedTags(post).reduce(
        (total, name) => total + (FORMAT_TAGS.includes(name) ? FORMAT_WEIGHT : TOPIC_WEIGHT),
        0
    )

const related = computed(() => {
    if (!current.value) return []
    return posts
        .filter(post => post.url !== current.value.url)
        .map(post => ({ post, score: score(post) }))
        .filter(({ score }) => score > 0)
        // The closest subject wins, and the newer post breaks a tie.
        .sort((a, b) => b.score - a.score || b.post.createdAt - a.post.createdAt)
        .slice(0, MAX_RELATED)
        .map(({ post }) => post)
})
</script>

<style scoped>
.blog-related {
    margin-bottom: 4rem;
}

.related-title {
    border-top: 1px solid var(--vp-c-divider);
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    margin-bottom: 1rem;
    padding-top: 1.5rem;
}

.related-post {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem 0.75rem;
    margin: 0 -0.75rem;
    border-radius: 0.5rem;
    color: inherit;
    text-decoration: none;
    transition: background-color 0.2s;
}

.related-post:hover {
    background: var(--vp-c-default-soft);
}

.related-image {
    width: 120px;
    height: 90px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 0.375rem;
    background: var(--vp-c-bg-alt);
}

.related-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;
}

.related-name {
    color: var(--vp-c-text-1);
    font-weight: 600;
    line-height: 1.4;
    transition: color 0.2s;
}

.related-post:hover .related-name {
    color: var(--vp-c-brand-1);
}

.related-description {
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
    line-height: 1.5;
    /* Two lines is enough to sell the post without unbalancing the rows. */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
}

.related-tags {
    color: var(--vp-c-text-3);
    font-size: 0.75rem;
}

@media (max-width: 480px) {
    .related-image {
        width: 80px;
        height: 60px;
    }

    .related-description {
        -webkit-line-clamp: 3;
        line-clamp: 3;
    }
}
</style>
