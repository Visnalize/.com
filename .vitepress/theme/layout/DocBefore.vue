<template>
    <div v-if="enableSocial" class="before-doc">
        <div class="doc-meta">
            <div v-if="createdDate" class="meta-date" v-tooltip="'Created date'">
                <iconify-icon icon="fluent:calendar-clock-24-regular" />
                <span>{{ createdDate }}</span>
            </div>

            <div v-if="frontmatter.version" class="meta-version" v-tooltip="'Since Win7 Simu version'">
                <iconify-icon icon="fluent:rocket-24-regular" />
                <span>v{{ frontmatter.version }}</span>
            </div>

            <div v-if="frontmatter.appVersion" class="meta-version" v-tooltip="'Latest version'">
                <iconify-icon icon="fluent:text-bullet-list-square-sparkle-24-regular" />
                <span>v{{ frontmatter.appVersion }}</span>
            </div>
        </div>

        <div class="doc-social">
            <SocialSharing />
            <SocialCommentCount v-if="enableComments" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import SocialCommentCount from '../components/misc/SocialCommentCount.vue';
import SocialSharing from '../components/misc/SocialSharing.vue';
import useCustomData from '../composables/useCustomData';

const { frontmatter } = useData()
const { createdDate, enableSocial, enableComments } = useCustomData()
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

.meta-version {
    font-weight: 500;
}
</style>
