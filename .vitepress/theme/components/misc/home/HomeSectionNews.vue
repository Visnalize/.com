<template>
    <HomeSection id="news">
        <template #header>
            <div ref="titleContainer" class="title">
                <HomeSectionTitle :animate="titleInView">Some news</HomeSectionTitle>
                <HomeSectionCaption :animate="titleInView">Updates, thoughts, insights and sharing on various topics
                    from the maker</HomeSectionCaption>
                <Motion :variants="linkVariants" :animate="titleInView ? 'animate' : 'initial'">
                    <HomeLink href="/blog" class="link-title">View all posts</HomeLink>
                </Motion>
            </div>
        </template>

        <div ref="listContainer" class="list">
            <Motion v-for="(post, i) in latestPosts" :variants="listItemVariants(i)"
                :animate="listInView ? 'animate' : 'initial'">
                <a :href="post.url" class="item">
                    <div class="content">
                        <div class="metadata">
                            {{ new Date(post.createdAt).toLocaleDateString(undefined, { dateStyle: 'long' }) }}
                        </div>
                        <h3>{{ post.title }}</h3>
                        <p>{{ post.description }}</p>
                    </div>
                    <iconify-icon icon="fluent:arrow-up-right-24-regular" />
                </a>
            </Motion>
        </div>

        <div class="link-footer">
            <HomeLink href="/blog">View all posts</HomeLink>
        </div>
    </HomeSection>
</template>

<script setup lang="ts">
import { data as posts } from '@/.content/blog-posts.data';
import { useSectionInView, Variants } from '@composables/useMotion';
import { Motion } from 'motion-v';
import { ref } from 'vue';
import HomeLink from './HomeLink.vue';
import HomeSection from './HomeSection.vue';
import HomeSectionCaption from './HomeSectionCaption.vue';
import HomeSectionTitle from './HomeSectionTitle.vue';

const latestPosts = posts.slice(0, 3);

const titleContainer = ref<HTMLElement | null>(null);
const listContainer = ref<HTMLElement | null>(null);
const titleInView = useSectionInView(titleContainer);
const listInView = useSectionInView(listContainer);

const listItemVariants = (index: number): Variants => ({
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0, transition: { type: 'spring', duration: 0.8, delay: index * 0.1 + 0.2 } },
})
const linkVariants: Variants = {
    initial: { opacity: 0, scale: 1.1, filter: 'blur(4px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.4, delay: 0.2 } },
}
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
    font-size: 1.5rem;
    color: var(--vp-c-default-1);
    transition: 0.2s;
    display: none;
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

@media (min-width: 640px) {
    .item iconify-icon {
        display: block;
    }
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
