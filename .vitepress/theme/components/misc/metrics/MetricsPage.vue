<template>
    <PageTitle title="Open metrics">
        I started Visnalize for fun and learning, but it has become something more. I want to share that journey, so
        here are some open metrics about Visnalize and all of the projects combined.
    </PageTitle>

    <div class="cards">
        <div v-for="card in metricsData.revenueCards" class="card">
            <h2>{{ card.title }}</h2>
            <p>{{ card.subtitle }}</p>
            <img :key="renderCount" alt="Visnalize metric" :src="getChart(card.id as ChartId, 'image')" width="200"
                height="61" />
        </div>
    </div>

    <div class="framefull">
        <h2>Monthly revenue since 2023</h2>
        <iframe :key="renderCount" width="704" height="422" frameborder="0" :src="getChart('revenueMonthly')"></iframe>
    </div>

    <div class="framerow">
        <div class="frame">
            <h2>Revenue portfolio</h2>
            <iframe :key="renderCount" width="325" height="190" frameborder="0"
                :src="getChart('revenuePorfolio')"></iframe>
        </div>
        <div class="frame">
            <h2>Revenue model share</h2>
            <iframe :key="renderCount" width="325" height="190" frameborder="0"
                :src="getChart('revenueModelShare')"></iframe>
        </div>
    </div>

    <div class="framefull stats">
        <h2>Statistics</h2>
        <div class="cards">
            <component v-for="card in statCards" :is="card.link ? 'a' : 'div'" class="card" :href="card.link">
                <h3 :class="card.link ? 'vp-external-link-icon' : ''">{{ card.title }}</h3>
                <figure>{{ card.value }}</figure>
            </component>
        </div>
    </div>
</template>

<script setup lang="ts">
import { data as blogData } from '@/.content/blog-posts.data';
import { data as channelData } from '@/.content/channel.data';
import { data as metricsData } from '@/.content/metrics.data';
import PageTitle from '@components/misc/PageTitle.vue';
import { shortenNumber } from '@utils/misc';
import { useData } from 'vitepress';
import { onMounted, ref } from 'vue';

type ChartId = keyof typeof ChartId;

const ChartId = {
    revenueMonthly: ['1743225384', '1013018153'],
    revenuePorfolio: ['1607053272', '159571900'],
    revenueModelShare: ['1547699295', '950520188'],
    total: ['1273183282', '103924907'],
    cost: ['535540876', '417887880'],
    mrr: ['1435045753', '2104659133'],
    arr: ['1698210707', '1090830063'],
}

const { isDark } = useData()
const renderCount = ref(0) // dirty way to resolve hydration issue for initial dark mode

onMounted(() => renderCount.value++)

const statCards = [
    { title: 'Since', value: 2020, },
    { title: 'Win7 Simu releases', value: metricsData.stats.win7SimuReleases, link: '/win7simu/changelog' },
    { title: 'Brick 1100 releases', value: metricsData.stats.brick1100Releases, link: '/brick1100/changelog' },
    { title: 'Blog posts', value: blogData.length, link: '/blog' },
    { title: 'YouTube videos', value: channelData.stats.videoCount, link: 'https://youtube.com/@visnalize' },
    { title: 'YouTube subscribers', value: shortenNumber(channelData.stats.subscriberCount), link: 'https://youtube.com/@visnalize' },
]

const getChart = (chartId: ChartId, format = 'interactive') => {
    return `https://docs.google.com/spreadsheets/d/e/2PACX-1vRtE7C4cQv6eH8tQFb4uhK86P-0LwynBssSrAc-uxlcCgo3GiGv9KA-IKWiT9BT0Kgd6Ec6ggTbrjFT/pubchart?oid=${ChartId[chartId][+isDark.value]}&format=${format}`;
}
</script>

<style scoped>
.metrics h2,
.metrics h3 {
    margin: 0;
    border: 0;
    padding: 0;
}

.metrics iframe {
    /* https://stackoverflow.com/a/70119968/3916702 */
    color-scheme: normal;

}

.vp-doc a {
    color: var(--vp-c-text-1);
    text-decoration: none;
}

.cards {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.card {
    border: 1px solid var(--vp-c-border);
    border-radius: 0.5rem;
    padding: 1rem;
    text-align: center;
}

.card:nth-child(1) {
    border-color: var(--vp-c-red-1);
    background: var(--vp-c-red-soft);
}

.card:nth-child(2) {
    border-color: var(--vp-c-purple-1);
    background: var(--vp-c-purple-soft);
}

.card:nth-child(3) {
    border-color: var(--vp-c-indigo-1);
    background: var(--vp-c-indigo-soft);
}

.card:nth-child(4) {
    border-color: var(--vp-c-green-1);
    background: var(--vp-c-green-soft);
}

.card p {
    margin: 0 0 0.5rem 0;
}

.card img {
    margin: auto;
}

.card figure {
    font-family: Arial, sans-serif;
    font-size: 3rem;
    line-height: 1.25;
}

.framefull {
    margin: 3rem 0;
    overflow: auto;
}

.framerow {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
}

.stats h2 {
    margin-bottom: 1rem !important;
}

.stats .card {
    border-color: var(--vp-c-border);
    background: var(--vp-c-bg-soft);
}

.stats a.card {
    transition: 0.2s;
}

.stats a.card:hover {
    border-color: var(--vp-c-brand-1);
    background: none;
}
</style>
