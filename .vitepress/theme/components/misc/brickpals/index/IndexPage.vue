<template>
    <div class="index-page">
        <!-- decorations -->
        <IndexDecor v-for="(deco, i) in decorations" :key="i" :name="deco.name"
            :style="{ height: deco.size, top: deco.top, left: deco.left }" />

        <!-- sections -->
        <IndexSectionHero />
        <IndexSectionGrow />
        <IndexSectionAnywhere />
        <IndexSectionLooks />
        <IndexSectionCta />
    </div>
</template>

<script setup lang="ts">
import IndexDecor, { DecorName } from './IndexDecor.vue';
import IndexSectionAnywhere from './IndexSectionAnywhere.vue';
import IndexSectionCta from './IndexSectionCta.vue';
import IndexSectionGrow from './IndexSectionGrow.vue';
import IndexSectionHero from './IndexSectionHero.vue';
import IndexSectionLooks from './IndexSectionLooks.vue';

const decorations: { name: DecorName, size: string, top: string, left: string }[] = [
    { name: 'heart', size: '5rem', top: '2%', left: '6%' },
    { name: 'apple1', size: '7rem', top: '4%', left: '82%' },
    { name: 'note', size: '4rem', top: '9%', left: '18%' },
    { name: 'egg2', size: '8rem', top: '11%', left: '70%' },
    { name: 'bolt', size: '4rem', top: '15%', left: '3%' },
    { name: 'cookie1', size: '5rem', top: '18%', left: '88%' },
    { name: 'egg1', size: '9rem', top: '23%', left: '8%' },
    { name: 'zzz', size: '5rem', top: '27%', left: '76%' },
    { name: 'drop', size: '3rem', top: '31%', left: '22%' },
    { name: 'grapes1', size: '6rem', top: '35%', left: '90%' },
    { name: 'steps', size: '5rem', top: '39%', left: '4%' },
    { name: 'egg3', size: '7rem', top: '43%', left: '80%' },
    { name: 'milk1', size: '6rem', top: '48%', left: '12%' },
    { name: 'heart', size: '4rem', top: '52%', left: '92%' },
    { name: 'bowl1', size: '6rem', top: '56%', left: '2%' },
    { name: 'note', size: '5rem', top: '60%', left: '84%' },
    { name: 'egg4', size: '8rem', top: '64%', left: '6%' },
    { name: 'bolt', size: '4rem', top: '69%', left: '72%' },
    { name: 'apple1', size: '5rem', top: '73%', left: '20%' },
    { name: 'zzz', size: '4rem', top: '77%', left: '90%' },
    { name: 'egg5', size: '8rem', top: '81%', left: '78%' },
    { name: 'drop', size: '4rem', top: '85%', left: '4%' },
    { name: 'cookie1', size: '5rem', top: '90%', left: '62%' },
    { name: 'heart', size: '6rem', top: '93%', left: '14%' },
]
</script>

<style scoped>
.index-page {
    position: relative;
    overflow: hidden;
}
</style>
