<template>
    <IndexSection :animate-header="shouldAnimate">
        <template #title>Choose your pal</template>
        <template #caption>There are five pals, each with its own egg. Tap an egg to see how it grows, then care
            for your pal every day to find out what it becomes.</template>

        <ul class="pals" ref="grid">
            <!-- Motion sets an inline opacity, so the dimming sits on an inner element. -->
            <Motion as="li" v-for="(egg, i) in eggs" :key="i" :variants="variants(i)" :animate="shouldAnimate">
                <div :class="['pal', { active: i === picked, dimmed: picked !== null && i !== picked }]">
                    <button type="button" class="egg" :aria-label="`Hatch egg ${i + 1}`" :aria-pressed="i === picked"
                        @click="hatch(i)">
                        <!-- Eggs stand at the bottom of their 24 px square, so the view centers them. -->
                        <svg viewBox="0 8 24 18" shape-rendering="crispEdges" aria-hidden="true">
                            <path :d="pixelPath([{ rows: i === picked ? egg.hatching : egg.egg }])"
                                fill="currentColor" />
                        </svg>
                    </button>
                    <svg v-for="(stage, s) in STAGES" :key="stage" viewBox="0 0 24 24" shape-rendering="crispEdges"
                        :class="['stage', { lit: i === picked && isLit(s) }]" aria-hidden="true">
                        <path :d="pixelPath([{ rows: stageFrame(egg, s, i === picked) }])" fill="currentColor" />
                    </svg>
                </div>
            </Motion>
        </ul>
    </IndexSection>
</template>

<script setup lang="ts">
import { Motion, useInView } from 'motion-v';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { pixelPath, Sprite } from '../pixels';
import { eggs } from '../sprites';
import IndexSection from './IndexSection.vue';

const STAGES = ['baby', 'child', 'teen', 'adult'] as const

// At the app's 500 ms tick: the egg cracks, then each stage lights up in turn.
const CRACK_TICKS = 2
const STAGE_TICKS = 2

const grid = ref<HTMLElement | null>(null)
const inView = useInView(grid, { amount: 0.3, once: true })

const shouldAnimate = computed(() => inView.value ? 'animate' : 'initial')
const variants = (i: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 * i + 0.3 } },
})

const tick = ref(0)
const picked = ref<number | null>(null)
const pickedAt = ref(0)

const hatch = (i: number) => {
    picked.value = i
    pickedAt.value = tick.value
}

const isLit = (stage: number) => tick.value - pickedAt.value >= CRACK_TICKS + stage * STAGE_TICKS

/** A lit stage bobs; the others stand still. */
const stageFrame = (egg: (typeof eggs)[number], stage: number, active: boolean): Sprite => {
    const name = STAGES[stage]
    const bobbing = active && isLit(stage) && tick.value % 2 === 1
    return bobbing ? egg[`${name}Bob`] : egg[name]
}

let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => timer = setInterval(() => tick.value++, 500))
onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
.pals {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.25rem;
    width: 100%;
    max-width: 600px;
    padding: 0 1rem;
}

.pal {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.25rem 0.75rem;
    border-radius: 1rem;
    transition: opacity 0.3s, background-color 0.3s;
}

.pal.active {
    background: var(--vp-c-bg-soft);
}

.pal.dimmed {
    opacity: 0.2;
}

.egg {
    display: block;
    width: 100%;
    max-width: 5rem;
    padding: 0.5rem;
    border-radius: 12px;
    box-shadow: inset 0 0 0 1px var(--vp-c-divider);
    transition: transform 0.2s, box-shadow 0.2s;
}

.egg:hover {
    transform: scale(1.05);
}

.active .egg {
    box-shadow: inset 0 0 0 3px var(--vp-c-text-1);
}

.egg svg {
    display: block;
    width: 100%;
}

.stage {
    display: block;
    width: 100%;
    max-width: 5rem;
    opacity: 0.35;
    transition: opacity 0.3s;
}

.stage.lit {
    opacity: 1;
}

@media (min-width: 768px) {
    .pals {
        gap: 1rem;
    }

    .pal {
        padding: 0.75rem 0.5rem 1rem;
    }
}
</style>
