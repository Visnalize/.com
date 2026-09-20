<template>
    <div v-if="related.length > 0" class="blog-related">
        <div class="related-title">Related posts</div>
        <ul>
            <li v-for="post in related">
                <a :href="post.url">
                    <span class="related-name">{{ post.title }}</span>
                    <span class="related-tags">{{ sharedTags(post).join(', ') }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { data as posts, PostData } from '@/.content/blog-posts.data';
import { useRoute } from 'vitepress';
import { computed } from 'vue';
import { FORMAT_TAGS } from '../../../constants';

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
    background: var(--vp-c-bg-alt);
    border: 1px solid var(--vp-c-default-2);
    border-radius: 0.5rem;
    font-size: 0.875rem;
    margin: 0 0 4rem;
    padding: 1.5rem;
}

.related-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.blog-related ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.blog-related li:not(:last-child) {
    margin-bottom: 0.5rem;
}

.blog-related a {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    color: var(--vp-c-text-1);
    text-decoration: none;
    transition: 0.2s;
}

.blog-related a:hover {
    color: var(--vp-c-brand-1);
}

.related-name {
    flex: 1;
}

.related-tags {
    color: var(--vp-c-text-3);
    font-size: 0.75rem;
    white-space: nowrap;
}
</style>
