<template>
    <HomeSection id="channel">
        <template #title>And videos</template>
        <template #caption>Check out our YouTube channel for some video tutorials, tips and more</template>

        <div ref="container" class="channel">
            <div class="header">
                <Motion as="img" :variants="headerVariants(0)" :animate="animate" class="header-logo" width="120"
                    height="120" src="/favicon.png" alt="Channel logo" />
                <div class="header-content">
                    <Motion as="h3" :variants="headerVariants(1)" :animate="animate">
                        {{ stats.title || 'Visnalize' }}
                    </Motion>
                    <Motion :variants="headerVariants(2)" :animate="animate" class="handle">{{ handle }}</Motion>
                    <Motion :variants="headerVariants(2)" :animate="animate" class="stats">
                        <span>{{ shortenNumber(stats.subscriberCount) }} subscribers</span>
                        <span>•</span>
                        <span>{{ stats.videoCount || 0 }} videos</span>
                    </Motion>
                    <HomeChannelSubscribe :variants="headerVariants(3)" :animate="animate" class="subscribe-desktop"
                        :href="channelUrl" />
                </div>
            </div>
            <HomeChannelSubscribe :variants="headerVariants(3)" :animate="animate" class="subscribe-mobile"
                :href="channelUrl" />
            <div class="tabs">
                <Motion as="a" v-for="(tab, i) in tabs" target="_blank" :href="`${channelUrl}${tab.url}`"
                    :variants="tabVariants(i)" :animate="animate">{{ tab.title }}</Motion>
            </div>
            <div class="videos">
                <Motion as="a" v-for="(video, i) in videos" target="_blank" :variants="videoVariants(i)"
                    :animate="animate" :href="`https://youtube.com/watch?v=${video.resourceId.videoId}`">
                    <img :src="video.thumbnails.medium.url" alt="Thumbnail image" :width="video.thumbnails.medium.width"
                        :height="video.thumbnails.medium.height" />
                    <h4>{{ video.title }}</h4>
                </Motion>
            </div>
        </div>
    </HomeSection>
</template>

<script setup lang="ts">
import { data as channelData } from '@/.content/channel.data';
import { useSectionInView, Variants } from '@composables/useMotion';
import { shortenNumber } from '@utils/misc';
import { Motion } from 'motion-v';
import { computed, ref } from 'vue';
import HomeChannelSubscribe from './HomeChannelSubscribe.vue';
import HomeSection from './HomeSection.vue';

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
const container = ref<HTMLElement | null>(null);
const inView = useSectionInView(container);

const animate = computed(() => inView.value ? 'animate' : 'initial');
const headerVariants = (index: number): Variants => ({
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { delay: index * 0.1 } }
})
const tabVariants = (index: number): Variants => ({
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0, transition: { delay: index * 0.05 + 0.5 } }
})
const videoVariants = (index: number): Variants => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { delay: index * 0.05 + 0.8 } }
})
</script>

<style scoped>
.channel {
    border: 1px solid;
    border-color: var(--vp-c-default-1) transparent var(--vp-c-default-1) transparent;
    border-radius: 1rem;
    padding: 1.5rem 0;
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

.subscribe-desktop {
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
    .channel {
        border-color: var(--vp-c-default-1);
        padding: 1.5rem;
    }

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

    .subscribe-desktop {
        display: block;
    }

    .subscribe-mobile {
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
