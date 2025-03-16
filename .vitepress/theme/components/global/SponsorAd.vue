<template>
    <component :is="'script'" async crossorigin="anonymous"
        :src="'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-' + ADSENSE_ID" />
    <div class="ad-container">
        <ins class="adsbygoogle" :class="className" style="display: block" data-ad-slot="3336580675"
            :data-ad-client="'ca-pub-' + ADSENSE_ID" data-full-width-responsive="true"
            :data-ad-format="normalizedFormat.join()" />
        <a class="placeholder" href="/services#advertising">Place your ad</a>
    </div>
    <component :is="'script'">
        (adsbygoogle = window.adsbygoogle || []).push({});
    </component>
</template>

<script setup lang="ts">
import first from 'voca/first';
import { ADSENSE_ID } from '../../constants';

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

type Format = 'horizontal' | 'rectangle' | 'vertical';

interface Props {
    format?: Format | Format[] | 'auto';
}


const props = withDefaults(defineProps<Props>(), { format: 'horizontal' })
const normalizedFormat = Array.isArray(props.format) ? props.format : [props.format]
const className = normalizedFormat.map((f) => first(f)).join('-') + '-ad'
</script>

<style scoped>
.ad-container {
    position: relative;
}

.ad-container .placeholder {
    display: none;
    position: absolute;
    inset: 0;
    justify-content: center;
    align-items: center;
    border: 2px dashed var(--vp-c-divider);
    color: var(--vp-c-text-3);
    font-size: 1.5rem;
    z-index: 1;
    text-decoration: none;
    transition: 0.2s;
}

.ad-container .placeholder:hover {
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-2);
}

.adsbygoogle {
    min-height: 200px;
}

.adsbygoogle[data-ad-status="unfilled"]+.placeholder {
    display: flex;
}

.h-ad {
    margin: 3rem auto;
    text-align: center;
}

.r-ad {
    margin-bottom: 1rem;
}

:deep(iframe) {
    color-scheme: normal;
}
</style>
