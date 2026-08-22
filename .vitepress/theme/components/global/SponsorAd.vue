<template>
    <component :is="'script'" async crossorigin="anonymous"
        :src="'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-' + ADSENSE_ID" />
    <div class="sponsor-slot" :class="slotClass">
        <div class="ad-container" :class="{ 'is-empty': state === 'empty' }">
            <ins ref="insRef" class="adsbygoogle" style="display: block" data-ad-slot="3336580675"
                :data-ad-client="'ca-pub-' + ADSENSE_ID" data-full-width-responsive="true"
                :data-ad-format="normalizedFormat.join()" />
        </div>
        <template v-if="state === 'empty'">
            <div v-if="fallbackPick" class="slot-filler">
                <AmazonPick :pick="fallbackPick" :format="fallbackFormat" />
                <a class="filler-link" href="/services#advertising">Or place your ad here</a>
            </div>
            <a v-else class="placeholder" href="/services#advertising">Place your ad</a>
        </template>
    </div>
    <component :is="'script'">
        (adsbygoogle = window.adsbygoogle || []).push({});
    </component>
</template>

<script setup lang="ts">
import type { AmazonPick as PickData } from '@/.content/amazon-picks.data';
import { useRoute } from 'vitepress';
import first from 'voca/first';
import { computed, onBeforeUnmount, onMounted, ref, useId } from 'vue';
import { AD_FILL_TIMEOUT, ADSENSE_ID } from '../../constants';
import useAmazonPicks, { claimPicks } from '../../composables/useAmazonPicks';
import AmazonPick from './AmazonPick.vue';

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

type Format = 'horizontal' | 'rectangle' | 'vertical';
type AdState = 'pending' | 'filled' | 'empty';

interface Props {
    format?: Format | Format[] | 'auto';
}

const props = withDefaults(defineProps<Props>(), { format: 'horizontal' })
const emit = defineEmits<{ resolve: [state: AdState] }>()

const normalizedFormat = Array.isArray(props.format) ? props.format : [props.format]
// Deliberately not named "*-ad": adblock filter lists hide generic ad class
// names outright (EasyList hides `.r-ad`), which would take the fallback too.
const slotClass = 'slot-' + normalizedFormat.map((f) => first(f)).join('-')

const insRef = ref<HTMLElement>()
const state = ref<AdState>('pending')

const route = useRoute()
// The instance id spreads slots across the pool; claiming then guarantees that
// no two slots on a page end up on the same pick.
const amazonPicks = useAmazonPicks({ offset: useId(), avoidClaimed: true })
const fallbackPick = ref<PickData>()
const fallbackFormat = computed(() => {
    const [primary] = normalizedFormat;
    return primary === 'auto' ? 'horizontal' : primary;
})

/**
 * AdSense marks the slot with `data-ad-status` once it decides whether to serve
 * an ad. A blocked script never runs, so the attribute never appears at all,
 * which is why an unresolved slot has to be timed out rather than waited on.
 */
let observer: MutationObserver | undefined
let timer: ReturnType<typeof setTimeout> | undefined
/** Set once AdSense itself reported a status, which nothing should override. */
let settled = false

const apply = (next: AdState, final: boolean) => {
    if (settled) return;
    if (final) {
        settled = true;
        observer?.disconnect();
        clearTimeout(timer);
    }
    if (state.value === next) return;
    state.value = next;

    if (next === 'empty') {
        // Resolve the pick here rather than in a live computed, so it cannot
        // change again while the reader is looking at it.
        const pick = amazonPicks.value[0];
        if (pick) {
            fallbackPick.value = pick;
            claimPicks(route.path, [pick.id]);
        }
    } else {
        fallbackPick.value = undefined;
    }

    emit('resolve', next);
}

const readStatus = (el: HTMLElement) => el.getAttribute('data-ad-status')

onMounted(() => {
    const el = insRef.value;
    if (!el) return;

    const status = readStatus(el);
    if (status) return apply(status === 'filled' ? 'filled' : 'empty', true);

    observer = new MutationObserver(() => {
        const current = readStatus(el);
        if (current) apply(current === 'filled' ? 'filled' : 'empty', true);
    })
    observer.observe(el, { attributes: true, attributeFilter: ['data-ad-status'] })

    // Timing out is only a guess, so keep watching: an ad that arrives late
    // still takes the slot back from the fallback.
    timer = setTimeout(() => apply('empty', false), AD_FILL_TIMEOUT)
})

onBeforeUnmount(() => {
    observer?.disconnect();
    clearTimeout(timer);
})
</script>

<style scoped>
.ad-container {
    position: relative;
}

/* Keep the slot in the DOM for AdSense, but out of the layout once it is empty. */
.ad-container.is-empty .adsbygoogle {
    display: none !important;
}

.sponsor-slot .placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 8rem;
    border: 2px dashed var(--vp-c-divider);
    color: var(--vp-c-text-3);
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s;
}

.sponsor-slot .placeholder:hover {
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-2);
}

.filler-link {
    display: block;
    margin-top: 0.5rem;
    color: var(--vp-c-text-3);
    font-size: 0.75rem;
    text-align: center;
    text-decoration: none;
    transition: 0.2s;
}

.filler-link:hover {
    color: var(--vp-c-text-2);
}

/*
 * Reserve the height the filler will need, from the very first paint, so that
 * swapping an empty ad slot for a pick does not push the page around. Measured
 * against the real thing; a taller ad simply grows past the reservation.
 */
.sponsor-slot {
    min-height: var(--slot-reserve, 0);
}

.slot-h,
.slot-a {
    --slot-reserve: 288px;
}

@media (min-width: 360px) {
    .slot-h,
    .slot-a {
        --slot-reserve: 264px;
    }
}

@media (min-width: 576px) {
    .slot-h,
    .slot-a {
        --slot-reserve: 241px;
    }
}

@media (min-width: 768px) {
    .slot-h,
    .slot-a {
        --slot-reserve: 164px;
    }
}

.slot-r {
    --slot-reserve: 285px;
}

.slot-r-v {
    --slot-reserve: 241px;
}

.slot-h {
    margin: 3rem auto;
    text-align: center;
}

.slot-r,
.slot-r-v {
    margin-bottom: 1rem;
}

:deep(iframe) {
    color-scheme: normal;
}
</style>
