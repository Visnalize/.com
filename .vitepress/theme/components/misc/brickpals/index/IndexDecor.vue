<template>
    <PixelSprite class="index-decor" :rows="sprites[name]" />
</template>

<script setup lang="ts">
import PixelSprite from '../PixelSprite.vue';
import { decorFood, eggs, fx } from '../sprites';

const sprites = {
    ...fx,
    ...decorFood,
    egg1: eggs[0].egg,
    egg2: eggs[1].egg,
    egg3: eggs[2].egg,
    egg4: eggs[3].egg,
    egg5: eggs[4].egg,
}

export type DecorName = keyof typeof sprites

defineProps<{
    name: DecorName
}>()
</script>

<style scoped>
/* Narrow screens have no free space beside the content, so the icons would sit on top of it. */
.index-decor {
    display: none;
    position: absolute;
    opacity: 0.08;
    pointer-events: none;
}

@media (min-width: 992px) {
    .index-decor {
        display: block;
    }
}
</style>
