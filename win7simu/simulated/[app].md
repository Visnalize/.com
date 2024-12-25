# {{ title }}

<script setup lang="ts">
import { transformImage } from '@utils/images';
import { useData } from 'vitepress';
import decapitalize from 'voca/decapitalize';
import { onMounted } from 'vue';

const { frontmatter } = useData();
const { title, image, imageData } = frontmatter.value
const transformWidth = 1200;
const imageRatio = imageData?.width / imageData?.height;
const imageProps = {
    src: transformImage(image, { width: transformWidth, quality: 100 }),
    alt: title,
    width: transformWidth,
    height: Math.round(transformWidth / imageRatio),
}

onMounted(() => import('@justinribeiro/lite-youtube'))
</script>

<p>
    <img v-bind="imageProps" data-zoomable />
</p>

__{{ title }}__ is a simulated application in [Win7 Simu](../about.md) that {{ decapitalize($frontmatter.description) }}. It was added in version [{{ $frontmatter.version }}](../changelog.md).

<SponsorAd />

## Supported features

As Win7 Simu aims to simulate the Windows 7 experience as closely as possible, {{ title }} is also regularly updated in order to provide the most authentic experience. Below are some of the features that are supported in {{ title }}, for a complete list of available features through versions, please refer to the [changelog page](../changelog.md).

<ul>
    <li v-for="feature in $frontmatter.features">
        {{ feature }}
    </li>
</ul>

## Check it out in action

Explore {{ title }} and other cool features of Win7 Simu on your preferred platform. Simply click a button below to download the Android app or access directly from your browser.

<AccessLinks app="win7simu" />

## Tutorial videos

Discover {{ title }}'s features, easter eggs, tips and tricks with the available tutorial videos below.

<div v-if="$frontmatter.videos?.length" :class="$style['video-list']">
    <lite-youtube v-for="videoId in $frontmatter.videos" :videoid="videoId"></lite-youtube>
</div>
<div v-else :class="$style['list-placeholder']">
    <iconify-icon icon="fluent:play-24-filled" /> No videos available
</div>

<style module>
.video-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}

.list-placeholder {
    max-width: 400px;
    width: 100%;
    height: 300px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--vp-c-text-3);
    background: var(--vp-c-bg-soft);
    font-size: 1.5rem;
}
</style>
