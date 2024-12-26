<template>
    <HomeSection>
        <template #title>And videos</template>
        <template #caption>Check out our YouTube channel for some video tutorials, tips and more</template>

        <div class="channel">
            <div class="header">
                <img class="header-logo" width="120" height="120" src="/favicon.png" alt="Channel logo" />
                <div class="header-content">
                    <h3>{{ stats.title || 'Visnalize' }}</h3>
                    <div class="handle">{{ handle }}</div>
                    <div class="stats">
                        <span>{{ shortenNumber(stats.subscriberCount) }} subscribers</span>
                        <span>•</span>
                        <span>{{ stats.videoCount || '63' }} videos</span>
                    </div>
                    <HomeChannelSubscribe class="subscribe-desktop" :href="channelUrl" />
                </div>
            </div>
            <HomeChannelSubscribe class="subscribe-mobile" :href="channelUrl" />
            <div class="tabs">
                <a v-for="tab in tabs" target="_blank" :href="`${channelUrl}${tab.url}`">{{ tab.title }}</a>
            </div>
            <div class="videos">
                <a v-for="video in videos" target="_blank"
                    :href="`https://youtube.com/watch?v=${video.resourceId.videoId}`">
                    <img :src="video.thumbnails.medium.url" alt="Thumbnail image" :width="video.thumbnails.medium.width"
                        :height="video.thumbnails.medium.height" />
                    <h4>{{ video.title }}</h4>
                </a>
            </div>
        </div>
    </HomeSection>
</template>

<script setup lang="ts">
import { data as channelData } from '@/.content/channel.data';
import { shortenNumber } from '@utils/misc';
import HomeChannelSubscribe from './HomeChannelSubscribe.vue';
import HomeSection from './HomeSection.vue';
import HomeSectionCaption from './HomeSectionCaption.vue';
import HomeSectionTitle from './HomeSectionTitle.vue';

const { stats, videos } = channelData;
const handle = '@' + (stats.title || 'Visnalize');
const channelUrl = `https://youtube.com/${handle}`;
const tabs = [
    { title: 'Home', url: '/' },
    { title: 'Videos', url: '/videos' },
    { title: 'Shorts', url: '/shorts' },
    { title: 'Playlists', url: '/playlists' },
    { title: 'Community', url: '/community' },
]
</script>

<style scoped>
.channel {
    border: 1px solid var(--vp-c-default-1);
    padding: 1.5rem;
    border-radius: 1rem;
}

.header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.75rem;
}

.header-content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.header h3 {
    line-height: 1;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem
}

.header .handle {
    font-weight: 500;
}

.header .stats {
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.header .stats span {
    margin-right: 0.25rem;
}

.header-logo {
    width: 72px;
    height: 72px;
}

.subscribe.subscribe-desktop {
    display: none;
}

.tabs {
    display: flex;
    gap: 1.5rem;
    border-bottom: 1px solid var(--vp-c-default-1);
    margin-bottom: 1rem;
    overflow: hidden;
}

.tabs a {
    color: var(--vp-c-text-2);
    border-bottom: 1px solid transparent;
    padding: 0.75rem 0;
    font-weight: 600;
    transition: 0.2s;
}

.tabs a:hover {
    border-color: var(--vp-c-text-2);
}

.tabs a:nth-of-type(2) {
    color: var(--vp-c-text-1);
    border-color: var(--vp-c-text-1);
}

.videos {
    display: grid;
    grid-template-columns: repeat(auto-fill, min(320px, 100%));
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
}

.videos a img {
    border-radius: 0.75rem;
    margin-bottom: 0.5rem;
}

.videos h4 {
    font-weight: 500;
    font-size: 0.875rem;
}

@media (min-width: 640px) {
    .header h3 {
        font-size: 2.25rem;
    }

    .header-logo {
        width: 120px;
        height: 120px;
    }
}

@media (min-width: 840px) {
    .header-logo {
        width: 160px;
        height: 160px;
    }

    .header-content {
        align-items: flex-start;
        gap: 0.5rem;
    }

    .subscribe.subscribe-desktop {
        display: block;
    }

    .subscribe.subscribe-mobile {
        display: none;
    }
}

@media (min-width: 960px) {
    .videos {
        grid-template-columns: repeat(auto-fill, calc(33.3% - 0.75rem));
        gap: 1rem;
    }
}
</style>
