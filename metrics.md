---
title: Open metrics
description: Be part of my journey building Visnalize and explore some open metrics about Visnalize and all of the projects combined.
aside: false
comments: false
lastUpdated: false
pagefind-indexed: false
pageClass: metrics
---

<script setup lang="ts">
import { data as blogData } from '@/.content/blog-posts.data';
import { data as channelData } from '@/.content/channel.data';
import { data as metricsData } from '@/.content/metrics.data';
import PageTitle from '@components/misc/PageTitle.vue';
import { useData } from 'vitepress';
import { shortenNumber } from './.vitepress/theme/utils/misc';

const ChartId = {
    revenueMonthly: ['1743225384', '1013018153'],
    revenuePorfolio: ['1607053272', '159571900'],
    revenueModelShare: ['1547699295', '950520188'],
    totalRevenue: ['1273183282', '103924907'],
    cost: ['535540876', '417887880'],
    mrr: ['1435045753', '2104659133'],
    arr: ['1698210707', '1090830063'],
}

const { isDark } = useData()
const { stats } = channelData

const getChartUrl = (chartId: keyof typeof ChartId, format = 'interactive') => {
    return `https://docs.google.com/spreadsheets/d/e/2PACX-1vRtE7C4cQv6eH8tQFb4uhK86P-0LwynBssSrAc-uxlcCgo3GiGv9KA-IKWiT9BT0Kgd6Ec6ggTbrjFT/pubchart?oid=${ChartId[chartId][+isDark.value]}&format=${format}`;
}
</script>

<PageTitle title="Open metrics">
    I started Visnalize for fun and learning, but it has become something more. I want to share that journey, so here are some open metrics about Visnalize and all of the projects combined.
</PageTitle>

<div :class="$style.cards">
    <div :class="$style.card">
        <h2>Cost</h2>
        <p>Average monthly cost</p>
        <img alt="Visnalize costs" :src="getChartUrl('cost', 'image')" width="200" height="61" />
    </div>
    <div :class="$style.card">
        <h2>MRR</h2>
        <p>Monthly Recurring Revenue</p>
        <img alt="Visnalize MRR" :src="getChartUrl('mrr', 'image')" width="200" height="61" />
    </div>
    <div :class="$style.card">
        <h2>ARR</h2>
        <p>Annual Recurring Revenue</p>
        <img alt="Visnalize ARR" :src="getChartUrl('arr', 'image')" width="200" height="61" />
    </div>
    <div :class="$style.card">
        <h2>Total</h2>
        <p>Total revenue from beginning</p>
        <img alt="Visnalize total revenue" :src="getChartUrl('totalRevenue', 'image')" width="200" height="61" />
    </div>
</div>

<div :class="$style.framefull">
    <h2>Monthly revenue since 2023</h2>
    <iframe width="704" height="422" frameborder="0" :src="getChartUrl('revenueMonthly')"></iframe>
</div>

<div :class="$style.framerow">
    <div class="frame">
        <h2>Revenue portfolio</h2>
        <iframe width="325" height="190" frameborder="0" :src="getChartUrl('revenuePorfolio')"></iframe>
    </div>
    <div class="frame">
        <h2>Revenue model share</h2>
        <iframe width="325" height="190" frameborder="0" :src="getChartUrl('revenueModelShare')"></iframe>
    </div>
</div>

<div :class="[$style.framefull, $style.stats]">
    <h2>Statistics</h2>
    <div :class="$style.cards">
        <div :class="$style.card">
            <h3>Since</h3>
            <figure>2020</figure>
        </div>
        <a :class="$style.card" href="/win7simu/changelog">
            <h3 class="vp-external-link-icon">Win7 Simu releases</h3>
            <figure>{{ metricsData.win7SimuReleases }}</figure>
        </a>
        <a :class="$style.card" href="/brick1100/changelog">
            <h3 class="vp-external-link-icon">Brick 1100 releases</h3>
            <figure>{{ metricsData.brick1100Releases }}</figure>
        </a>
        <a :class="$style.card" href="/blog">
            <h3 class="vp-external-link-icon">Blog posts</h3>
            <figure>{{ blogData.length }}</figure>
        </a>
        <a :class="$style.card" href="https://youtube.com/@visnalize">
            <h3 class="vp-external-link-icon">YouTube videos</h3>
            <figure>{{ stats.videoCount }}</figure>
        </a>
        <a :class="$style.card" href="https://youtube.com/@visnalize">
            <h3 class="vp-external-link-icon">YouTube subscribers</h3>
            <figure>{{ shortenNumber(stats.subscriberCount) }}</figure>
        </a>
    </div>
</div>

<style module>
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
    border-color: var(--vp-c-purple-1);
    background: var(--vp-c-purple-soft);
}

.card:nth-child(2) {
    border-color: var(--vp-c-red-1);
    background: var(--vp-c-red-soft);
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

.stats {
    border: 1px solid var(--vp-c-border);
    border-radius: 0.5rem;
    padding: 2rem;
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
}
</style>

<style scoped>
.metrics h2,
.metrics h3 {
    margin: 0;
    border: 0;
    padding: 0;
}

.metrics iframe {
    color-scheme: normal; /* https://stackoverflow.com/a/70119968/3916702 */
}

.vp-doc a {
    color: var(--vp-c-text-1);
    text-decoration: none;
}
</style>
