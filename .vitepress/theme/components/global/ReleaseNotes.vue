<template>
    <div class="release-notes">
        <a class="back-link" :href="changelogLink">
            <iconify-icon icon="fluent:arrow-left-24-regular" />
            <span>All releases</span>
        </a>

        <div class="hero">
            <h1 class="title">
                {{ appName }}
                <span class="version">{{ release }}</span>
            </h1>
            <div class="meta">
                <span>Released {{ releasedOn }}</span>
                <template v-if="platforms.length">
                    <span class="separator">·</span>
                    <span class="platforms">
                        <span v-for="platform in platforms" :key="platform.label" class="badge">
                            <iconify-icon :icon="platform.icon" />
                            {{ platform.label }}
                        </span>
                    </span>
                </template>
            </div>
            <p v-if="summary" class="summary">{{ summary }}</p>
        </div>

        <div v-if="video" class="video">
            <lite-youtube :videoid="video" :params="ytParams" :title="videoTitle"></lite-youtube>
            <p class="video-caption">A quick tour of everything in this release.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { computed, onMounted } from 'vue';
import { APP_NAMES, RELEASE_PLATFORMS, type ReleasePlatform } from '../../constants';
import type { App } from '../../utils/types';

const ytParams = 'rel=0';

const { frontmatter } = useData()

const app = computed<App>(() => frontmatter.value.app ?? 'win7simu')
const appName = computed(() => APP_NAMES[app.value])
const changelogLink = computed(() => `/${app.value}/changelog`)
const release = computed<string>(() => frontmatter.value.release)
const summary = computed<string | undefined>(() => frontmatter.value.summary)
const video = computed<string | undefined>(() => frontmatter.value.video)
const videoTitle = computed(() => `What's new in ${appName.value} ${release.value}`)

const platforms = computed(() =>
    ((frontmatter.value.platforms ?? []) as ReleasePlatform[])
        .map((key) => RELEASE_PLATFORMS[key])
        .filter(Boolean)
)

/**
 * `releaseDate` is a plain YYYY-MM-DD string. Anchoring it to midnight keeps the
 * browser from reading it as UTC and rendering the previous day west of GMT.
 */
const releasedOn = computed(() =>
    new Date(`${frontmatter.value.releaseDate}T00:00:00`)
        .toLocaleDateString(undefined, { dateStyle: 'long' })
)

onMounted(() => import('@justinribeiro/lite-youtube'))
</script>

<style scoped>
.release-notes {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
}

.back-link {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--vp-c-brand-1);
    text-decoration: none;
    transition: 0.2s;
}

.back-link:hover {
    color: var(--vp-c-brand-2);
}

.back-link iconify-icon {
    font-size: 1.125rem;
}

.hero {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.title {
    font-size: 2.25rem;
    line-height: 1.2;
    letter-spacing: -0.03em;
    margin: 0;
}

.version {
    font-family: var(--vp-font-family-mono);
}

.meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
}

.separator {
    color: var(--vp-c-text-3);
}

.platforms {
    display: flex;
    gap: 0.375rem;
}

.badge {
    display: inline-flex;
    align-items: center;
    gap: 0.3125rem;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.1875rem 0.5rem;
    border-radius: 0.375rem;
    background: var(--vp-c-brand-soft);
    color: var(--vp-c-brand-1);
}

.summary {
    margin: 0.25rem 0 0;
    font-size: 1.0625rem;
    line-height: 1.6;
    color: var(--vp-c-text-2);
}

.video lite-youtube {
    width: 100%;
    max-width: 100%;
    border-radius: 0.625rem;
    overflow: hidden;
}

.video-caption {
    margin: 0.625rem 0 0;
    font-size: 0.8125rem;
    color: var(--vp-c-text-3);
    text-align: center;
}

@media (min-width: 768px) {
    .title {
        font-size: 2.75rem;
    }
}
</style>
