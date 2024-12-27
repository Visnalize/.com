---
title: Win7 Simu simulated apps
description: Discover simulated applications available in Win7 Simu. Learn more about each app, history, and supported features.
aside: false
comments: false
pagefind-indexed: false
---

<PageTitle title="Simulated apps">
    {{ $frontmatter.description }}
</PageTitle>

<script setup lang="ts">
import { data as apps } from '@/.content/simulated-apps.data';
import PageTitle from '@components/misc/PageTitle.vue';
import { getAppImage, transformImage } from '@utils/images';

const transform = (image: string) => transformImage(getAppImage(image), { width: 500, quality: 100 });
</script>

<div :class="$style['app-list']">
    <div v-for="app in apps" :class="$style['app-item']">
        <div :class="$style['app-image']">
            <img :src="transform(app.slug)" :alt="app.title" />
        </div>
        <div :class="$style['app-info']">
            <h2>{{ app.title }}</h2>
            <p>Since version {{ app.version }}</p>
        </div>
        <a :href="'/win7simu/simulated/' + app.slug" :aria-label="'View details: ' + app.title" />
    </div>
</div>

<style module>
.app-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 2.5rem 1.5rem;
}

.app-item {
    position: relative;
}

.app-info {
    text-align: right;
    position: absolute;
    bottom: 0;
    padding: 1rem;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: var(--vp-c-white);
}

.app-info::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
    opacity: 0.4;
    transition: 0.3s;
    z-index: 0;
}

.app-info h2 {
    border: 0;
    margin: 0;
    padding: 0;
    font-size: 1.25rem;
    text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5);
    transform: translateY(1.5rem);
    transition: 0.4s;
    z-index: 1;
}

.app-info p {
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5rem;
    opacity: 0;
    transform: translateY(0.5rem);
    transition: 0.5s;
    z-index: 1;
}

.app-item:hover .app-image {
    filter: blur(2px);
}

.app-item:hover .app-info::after {
    opacity: 0.7;
}

.app-item:hover .app-info h2 {
    transform: translateY(0);
}

.app-item:hover .app-info p {
    opacity: 1;
    transform: translateY(0);
}

.app-item a {
    position: absolute;
    inset: 0;
    z-index: 2;
}

.app-image {
    height: 250px;
    overflow: hidden;
    position: relative;
    transition: filter 0.3s;
}

.app-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
    position: relative;
}

@media (min-width: 640px) {
    .app-image {
        height: 200px;
    }
}
</style>
