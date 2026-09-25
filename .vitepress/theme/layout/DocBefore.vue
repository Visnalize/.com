<template>
    <div v-if="crumbs.length || enableSocial" class="before-doc">
        <Breadcrumbs :crumbs="crumbs" />

        <div v-if="enableSocial" class="doc-social">
            <SocialSharing />
            <SocialCommentCount v-if="enableComments" />
        </div>
    </div>

    <div v-if="isNote" class="doc-note">
        <a href="/notes" class="note-link">All notes</a>
        <div v-if="frontmatter.timestamp">
            {{ new Date(frontmatter.timestamp).toLocaleDateString(undefined, { dateStyle: 'long' }) }}
        </div>
    </div>

    <div v-if="tags.includes('sponsor')" class="custom-block doc-sponsor warning">
        This is a <a href="/services#sponsored-posts" target="_blank">sponsored post</a>.
        The content has been reviewed and the links in this post are safe to access.
        If you notice an issue, please leave a comment below or <a href="/contact" target="_blank">contact us</a>.
    </div>
</template>

<script setup lang="ts">
import { useData, useRoute } from 'vitepress';
import { computed } from 'vue';
import Breadcrumbs from '../components/misc/Breadcrumbs.vue';
import SocialCommentCount from '../components/misc/SocialCommentCount.vue';
import SocialSharing from '../components/misc/SocialSharing.vue';
import useCustomData from '../composables/useCustomData';
import { getBreadcrumbs } from '../utils/breadcrumbs';

const { frontmatter, page } = useData()
const { enableSocial, enableComments, tags } = useCustomData()
const route = useRoute()
const isNote = computed(() => /notes\/.+/.test(route.path))
const crumbs = computed(() =>
    getBreadcrumbs(route.path, frontmatter.value.title || page.value.title)
)
</script>

<style scoped>
.before-doc {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 1;
    margin-bottom: 1rem;
}

.doc-social {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 1rem;
    margin-left: auto;
}

.doc-note {
    display: flex;
    align-items: center;
    color: var(--vp-c-text-2);
}

.doc-note a {
    color: var(--vp-c-brand-1);
    transition: 0.2s;
}

.doc-note a:hover {
    color: var(--vp-c-brand-2);
}

.doc-note>*:not(:first-child)::before {
    content: '•';
    margin: 0 0.5rem;
}

.doc-sponsor {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
}
</style>
