<template>
    <IndexSection horizontal :animate-header="shouldAnimate">
        <template #title>Make it yours</template>
        <template #caption>Pick a screen color and a shell. The 1100 screen and the Ink shell are free. The rest
            come with Pro.</template>
        <template #header>
            <div class="pickers" ref="trigger">
                <Motion v-for="(row, i) in rows" :key="row.label" class="picker" :variants="variants(i)"
                    :animate="shouldAnimate">
                    <h3>{{ row.label }}</h3>
                    <div class="swatches">
                        <button v-for="option in row.options" :key="option.id" type="button" class="swatch"
                            :aria-label="`${row.label}: ${option.name}`" :aria-pressed="option.id === row.selected"
                            @click="row.pick(option.id)">
                            <span :class="['fill', { active: option.id === row.selected }]"
                                :style="{ background: option.fill, color: option.accent }" />
                            <span class="name">{{ option.name }}</span>
                        </button>
                    </div>
                </Motion>
            </div>
        </template>

        <Motion class="preview" :variants="variants(2)" :animate="shouldAnimate">
            <PalShell :palette-id="paletteId" :shell-id="shellId" />
        </Motion>
    </IndexSection>
</template>

<script setup lang="ts">
import { Motion, useInView } from 'motion-v';
import { computed, ref } from 'vue';
import PalShell from '../PalShell.vue';
import { PaletteId, shellColors, ShellId } from '../pixels';
import { palettes, shells } from '../sprites';
import IndexSection from './IndexSection.vue';

const paletteId = ref<PaletteId>('1100')
const shellId = ref<ShellId>('berry')

const rows = computed(() => [
    {
        label: 'Screen',
        selected: paletteId.value,
        pick: (id: string) => paletteId.value = id as PaletteId,
        options: palettes.map((p) => ({ id: p.id, name: p.name, fill: p.background, accent: p.ink })),
    },
    {
        label: 'Shell',
        selected: shellId.value,
        pick: (id: string) => shellId.value = id as ShellId,
        options: shells.map((s) => {
            const colors = shellColors(s.id, paletteId.value)
            return { id: s.id, name: s.name, fill: colors.body, accent: colors.button }
        }),
    },
])

const trigger = ref<HTMLElement | null>(null)
const inView = useInView(trigger, { amount: 0.6, once: true })
const shouldAnimate = computed(() => inView.value ? 'animate' : 'initial')

const variants = (index: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.15 * index + 0.3 } },
})
</script>

<style scoped>
.pickers {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
}

.picker h3 {
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}

.swatches {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
}

/* Matches the app's ColorSwatch: a rounded square with a small accent square in the corner. */
.swatch {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
}

.fill {
    position: relative;
    width: 56px;
    height: 56px;
    border-radius: 12px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
    transition: transform 0.2s, box-shadow 0.2s, background-color 0.3s;
}

.fill::after {
    content: "";
    position: absolute;
    right: 6px;
    bottom: 6px;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    background: currentColor;
}

.swatch:hover .fill {
    transform: scale(1.05);
}

.fill.active {
    box-shadow: inset 0 0 0 3px var(--vp-c-text-1);
}

.name {
    font-size: 0.75rem;
    color: var(--vp-c-text-2);
}

.preview {
    width: 100%;
    max-width: 420px;
    padding: 3rem 1.5rem 0;
}

@media (min-width: 992px) {
    .swatches {
        justify-content: flex-start;
    }

    .preview {
        padding-top: 0;
    }
}
</style>
