<template>
    <ins class="adsbygoogle" :class="adFormatClass + '-ad'" style="display: block" data-ad-slot="3336580675"
        data-ad-client="ca-pub-5904323684803247" :data-ad-format="parsedFormat" data-full-width-responsive="true" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import first from 'voca/first';

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

type Format = 'horizontal' | 'rectangle' | 'vertical';

interface Props {
    format?: Format | Format[] | 'auto';
}

const props = withDefaults(defineProps<Props>(), {
    format: 'horizontal'
})
const isArrayFormat = Array.isArray(props.format)
const parsedFormat = isArrayFormat ? props.format.join() : props.format
const adFormatClass = isArrayFormat ? props.format.map((f) => first(f)).join('-') : first(props.format)

onMounted(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
})
</script>

<style scoped>
.adsbygoogle[data-ad-status="unfilled"] {
    display: none !important;
}

.h-ad {
    margin: 3rem auto;
    text-align: center;
}
</style>
