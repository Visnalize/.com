<template>
    <component :is="'script'" async crossorigin="anonymous"
        :src="'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-' + ADSENSE_ID" />
    <ins class="adsbygoogle" :class="className" style="display: block" data-ad-slot="3336580675"
        :data-ad-client="'ca-pub-' + ADSENSE_ID" data-full-width-responsive="true"
        :data-ad-format="normalizedFormat.join()" />
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
/* .adsbygoogle[data-ad-status="unfilled"] {
    display: none !important;
} */

.h-ad {
    margin: 3rem auto;
    text-align: center;
}

.r-ad {
    margin-top: 2rem;
}
</style>
