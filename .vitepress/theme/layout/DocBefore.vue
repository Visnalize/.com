<template>
    <div v-if="enableSocial" class="before-doc">
        <div class="doc-meta">
            <div v-if="createdDate" class="meta-date" v-tooltip="'Created date'">
                <iconify-icon icon="fluent:calendar-clock-24-regular" />
                <span>{{ createdDate }}</span>
            </div>

            <div v-if="frontmatter.version" class="meta-note" v-tooltip="'Since Win7 Simu version'">
                <iconify-icon icon="fluent:rocket-24-regular" />
                <span>v{{ frontmatter.version }}</span>
            </div>

            <div v-if="frontmatter.premium" class="meta-note" v-tooltip="'Unlock with in-app purchase'">
                <iconify-icon icon="fluent:premium-24-regular" />
                <span>Premium</span>
            </div>

            <div v-if="frontmatter.appVersion" class="meta-note" v-tooltip="'Latest version'">
                <iconify-icon icon="fluent:text-bullet-list-square-sparkle-24-regular" />
                <span>v{{ frontmatter.appVersion }}</span>
            </div>
        </div>

        <div class="doc-social">
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

    <div v-if="tags.includes('sponsor')" class="doc-sponsor warning custom-block">
        This is a <a href="/services#sponsored-posts" target="_blank">sponsored post</a>.
        The content has been reviewed and the links in this post are safe to access.
        If you notice an issue, please leave a comment below or <a href="/contact" target="_blank">contact us</a>.
    </div>
</template>

<script setup lang="ts">
import { useData, useRoute } from 'vitepress';
import { computed } from 'vue';
import SocialCommentCount from '../components/misc/SocialCommentCount.vue';
import SocialSharing from '../components/misc/SocialSharing.vue';
import useCustomData from '../composables/useCustomData';

const { frontmatter } = useData()
const { createdDate, enableSocial, enableComments, tags } = useCustomData()
const route = useRoute()
const isNote = computed(() => /notes\/.+/.test(route.path))
</script>

<style scoped>
.before-doc {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    margin-bottom: 0.5rem;
}

.doc-meta iconify-icon {
    font-size: 1.25rem;
}

.doc-meta,
.doc-social {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.doc-meta>div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: var(--vp-c-text-2);
}

.meta-note {
    font-weight: 500;
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
