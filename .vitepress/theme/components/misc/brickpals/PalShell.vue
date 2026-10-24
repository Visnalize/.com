<template>
    <div class="pal-shell" :style="{
        '--body': colors.body,
        '--window': colors.window,
        '--button': colors.button,
        '--label': colors.label,
        '--dot': colors.dot,
    }">
        <div class="body">
            <div class="window">
                <svg class="lcd" :viewBox="`0 0 ${WIDTH} ${HEIGHT}`" role="img"
                    aria-label="Your pal on a pixel screen" :style="{ background: palette.background }">
                    <defs>
                        <pattern :id="ghostId" width="1" height="1" patternUnits="userSpaceOnUse">
                            <rect :x="GAP / 2" :y="GAP / 2" :width="1 - GAP" :height="1 - GAP" :fill="ghost" />
                        </pattern>
                    </defs>
                    <rect :width="WIDTH" :height="HEIGHT" :fill="`url(#${ghostId})`" />
                    <path :d="screen" :fill="palette.ink" />
                </svg>
            </div>
            <div class="buttons">
                <button type="button" aria-label="Feed your pal" @click="start('feed')">Feed</button>
                <span class="dot" />
                <button type="button" aria-label="Play with your pal" @click="start('play')">Play</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useId } from 'vue';
import { findPalette, Layer, mix, PaletteId, pixelPath, shellColors, ShellId, Sprite, textLayers, textWidth } from './pixels';
import { food, fx, pal } from './sprites';

const { paletteId = '1100', shellId = 'berry' } = defineProps<{
    paletteId?: PaletteId
    shellId?: ShellId
}>()

// The shelled widget's screen and the app's layout rules (PalFace in the app).
const WIDTH = 48
const HEIGHT = 36
const PAL_X = 12
const PAL_Y = 9
const EFFECT_X = 37
const EFFECT_Y = 11
const TICK_MILLIS = 500
// The thin gap between LCD pixels, as a share of one pixel (PixelView in the app).
const GAP = 0.12
const NAME = 'Pal'
const ACTION_TICKS = 6
const HAPPY_TICKS = 10

const heart: Sprite = ['.#.#.', '#####', '#####', '.###.', '..#..']
const emptyHeart: Sprite = ['.#.#.', '#.#.#', '#...#', '.#.#.', '..#..']

/** Raises the young pal to the middle of the short shelled screen, as the app does. */
const lift = (() => {
    const lit = pal.baby.flatMap((row, y) => row.includes('#') ? [y] : [])
    const [top, bottom] = [lit[0], lit[lit.length - 1]]
    return Math.max(0, Math.floor((2 * PAL_Y + top + bottom - 7 - (HEIGHT - 1)) / 2))
})()

const palette = computed(() => findPalette(paletteId))
const colors = computed(() => shellColors(shellId, paletteId))
const ghost = computed(() => mix(palette.value.background, palette.value.ink, 0.08))
const ghostId = `ghost-${useId()}`

const tick = ref(0)
const hearts = ref(1)
const action = ref<{ name: 'feed' | 'play', from: number } | null>(null)
const happyUntil = ref(0)

const start = (name: 'feed' | 'play') => {
    if (action.value) return
    action.value = { name, from: tick.value }
}

const step = () => {
    tick.value++
    if (action.value && tick.value - action.value.from >= ACTION_TICKS) {
        if (action.value.name === 'feed') hearts.value = Math.min(3, hearts.value + 1)
        action.value = null
        happyUntil.value = tick.value + HAPPY_TICKS
    }
}

const screen = computed(() => {
    const t = tick.value
    const layers: Layer[] = []

    for (let i = 0; i < 3; i++) layers.push({ rows: i < hearts.value ? heart : emptyHeart, x: 2 + i * 6, y: 2 })
    layers.push(...textLayers(NAME, WIDTH - 2 - textWidth(NAME), 2))

    let body: Sprite = t % 2 ? pal.babyBob : pal.baby
    let effect: Sprite | null = null
    if (action.value?.name === 'feed') {
        const bite = food[Math.min(2, Math.floor((t - action.value.from) / 2))]
        layers.push({ rows: bite, y: PAL_Y + 23 - bite.length - lift })
    } else if (action.value?.name === 'play') {
        body = t % 2 ? pal.babyHappyBob : pal.babyHappyStretch
        effect = fx.note
    } else if (t < happyUntil.value) {
        body = t % 2 ? pal.babyHappyBob : pal.babyHappy
        effect = fx.heart
    } else if (t % 8 === 7) {
        body = pal.babyClosed
    }

    layers.push({ rows: body, x: PAL_X, y: PAL_Y - lift })
    if (effect) layers.push({ rows: effect, x: EFFECT_X, y: EFFECT_Y })
    return pixelPath(layers, GAP)
})

let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => timer = setInterval(step, TICK_MILLIS))
onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
/* Sizes follow the app's shell (ShellLayout), where one unit is 1/170 of the shell width. */
.pal-shell {
    container-type: inline-size;
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
}

.body {
    --u: calc(100cqw / 170);
    background: var(--body);
    border-radius: calc(var(--u) * 26);
    padding: calc(var(--u) * 12);
    box-shadow: inset 0 calc(var(--u) * -4) 0 rgba(0, 0, 0, 0.15), 0 1.5rem 3rem -1rem rgba(0, 0, 0, 0.35);
    transition: background-color 0.3s;
}

.window {
    background: var(--window);
    border-radius: calc(var(--u) * 14);
    padding: calc(var(--u) * 4);
    transition: background-color 0.3s;
}

.lcd {
    display: block;
    width: 100%;
    border-radius: calc(var(--u) * 8);
    transition: background-color 0.3s;
}

.lcd path {
    transition: fill 0.3s;
}

.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(var(--u) * 10);
    margin-top: calc(var(--u) * 10);
}

button {
    width: calc(var(--u) * 56);
    height: calc(var(--u) * 28);
    border-radius: calc(var(--u) * 14);
    background: var(--button);
    color: var(--label);
    font-size: calc(var(--u) * 11.2);
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    box-shadow: 0 calc(var(--u) * 2) 0 rgba(0, 0, 0, 0.2);
    transition: transform 0.1s, background-color 0.3s, color 0.3s;
}

button:active {
    transform: translateY(calc(var(--u) * 2));
    box-shadow: none;
}

.dot {
    width: calc(var(--u) * 10);
    height: calc(var(--u) * 10);
    border-radius: 50%;
    background: var(--dot);
}
</style>
