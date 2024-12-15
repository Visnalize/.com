<template>
    <div class="blog-featured" :class="{ featured: hasFeaturedPost }">
        <div>
            <h2>Browse tags</h2>
            <div>
                <BlogTag v-for="tag in tags" :tag="tag" :active="tag === activeTag" />
            </div>
        </div>
        <BlogPost v-if="hasFeaturedPost" :post="_post" />
    </div>
</template>

<script setup lang="ts">
import { PostData } from '@/.content/blog-posts.data';
import BlogPost from './BlogPost.vue';
import BlogTag from './BlogTag.vue';
import { computed } from 'vue';

interface Props {
    tags: string[];
    post?: PostData;
    activeTag?: string;
}

const props = defineProps<Props>()

const hasFeaturedPost = props.post !== undefined
const _post = hasFeaturedPost && computed(() => ({
    ...props.post,
    badge: 'latest' as PostData['badge']
}))
</script>

<style scoped>
.blog-featured {
    display: grid;
    gap: 1.5rem;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
}

.blog-featured h2 {
    border: 0;
    margin-top: 0;
}

@media (min-width: 640px) {
    .blog-featured.featured {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 960px) {
    .blog-featured.featured {
        gap: 0.75rem;
        grid-template-columns: 1fr 2fr;
    }
}
</style>