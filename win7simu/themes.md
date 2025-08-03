---
title: Win7 Simu themes
description: Discover official themes available in Win7 Simu. Learn more about each theme, how to use them, their visual and functional changes.
aside: false
comments: false
pagefind-indexed: false
---

<PageTitle title="Themes">
    {{ $frontmatter.description }}
</PageTitle>

<script setup lang="ts">
import { data as themes } from '@/.content/themes.data';
import PageTitle from '@components/misc/PageTitle.vue';
import { getThemeImage, transformImage } from '@utils/images';

const transform = (image: string) => transformImage(getThemeImage(image), { width: 500, quality: 100 });
</script>

<div> <!-- dummy wrapper div to avoid adsense messing up page layout -->
<div :class="$style['theme-list']">
    <div v-for="theme in themes" :class="$style['theme-item']">
        <div :class="$style['theme-image']">
            <img :src="transform(theme.id)" :alt="theme.title" />
        </div>
        <div :class="$style['theme-info']">
            <h2>{{ theme.title }}</h2>
        </div>
        <a :href="'/win7simu/themes/' + theme.slug" :aria-label="'View details: ' + theme.title" />
    </div>
</div>
</div>

<style module>
.theme-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 2.5rem 1.5rem;
}

.theme-item {
    position: relative;
}

.theme-info {
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

.theme-info::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
    opacity: 0.8;
    z-index: 0;
}

.theme-info h2 {
    border: 0;
    margin: 0;
    padding: 0;
    font-size: 1.25rem;
    text-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.theme-item a {
    position: absolute;
    inset: 0;
    z-index: 2;
}

.theme-image {
    height: 250px;
    overflow: hidden;
    position: relative;
}

.theme-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
    position: relative;
}

@media (min-width: 640px) {
    .theme-image {
        height: 200px;
    }
}
</style>
