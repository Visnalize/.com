<template>
    <div class="index-page">
        <IndexSectionHero />
        <IndexSectionFeatures ref="features" />
        <IndexSectionBuilder ref="builder" />
        <IndexSectionTestimonials />
        <IndexSectionCta />
    </div>
</template>

<script setup lang="ts">
import { useNavbarVisibility } from '@/.vitepress/theme/composables/useNavbar';
import { useInView } from 'motion-v';
import { onMounted, toRef, useTemplateRef } from 'vue';
import IndexSectionBuilder from './IndexSectionBuilder.vue';
import IndexSectionCta from './IndexSectionCta.vue';
import IndexSectionFeatures from './IndexSectionFeatures.vue';
import IndexSectionHero from './IndexSectionHero.vue';
import IndexSectionTestimonials from './IndexSectionTestimonials.vue';

const featuresRef = useTemplateRef('features');
const builderRef = useTemplateRef('builder');

onMounted(() => {
    const featuresInView = useInView(toRef(featuresRef.value.features))
    const builderInView = useInView(toRef(builderRef.value.section))
    useNavbarVisibility([featuresInView, builderInView]);
});
</script>

<style scoped>
@font-face {
    font-family: "primary";
    src: url("/assets/fonts/brick.ttf") format("truetype");
}

@font-face {
    font-family: "condensed";
    src: url("/assets/fonts/brick-condensed.ttf") format("truetype");
}

.index-page {
    --c-greenish: rgb(144, 166, 126);
    --c-blackish: rgb(0, 0, 0);
}
</style>
