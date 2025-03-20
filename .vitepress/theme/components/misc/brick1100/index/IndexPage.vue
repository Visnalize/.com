<template>
    <div class="index-page">
        <!-- decorations -->
        <IndexDecor class="deco-messages" name="messages" />
        <IndexDecor class="deco-stop" name="stop" />
        <IndexDecor class="deco-calc" name="calculator" />
        <IndexDecor class="deco-saur" name="pterosaurs" />
        <div class="features-deco">
            <IndexDecor class="deco-extras" name="extras" />
            <IndexDecor class="deco-games" name="games" />
            <IndexDecor class="deco-flash" name="flash" />
            <IndexDecor class="deco-search" name="search" />
        </div>
        <IndexDecor class="deco-egg" name="egg" />
        <IndexDecor class="deco-child" name="child" />
        <IndexDecor class="deco-timer" name="timer" />
        <IndexDecor class="deco-composer" name="composer" />

        <!-- sections -->
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
import IndexDecor from './IndexDecor.vue';
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
    position: relative;
    overflow: hidden;
}

.features-deco {
    color: var(--c-blackish);
}

.deco-messages {
    height: 10rem;
    top: 2%;
    left: 5%;
}

.deco-saur {
    height: 5rem;
    top: 1%;
    left: 60%;
}

.deco-extras {
    height: 16rem;
    top: 22%;
    left: 0%;
}

.deco-games {
    height: 12rem;
    top: 36%;
    left: 6%;
}

.deco-stop {
    height: 12rem;
    top: 5%;
    right: 8%;
}

.deco-calc {
    height: 14rem;
    top: 8%;
    left: 25%;
}

.deco-flash {
    height: 12rem;
    top: 25%;
    left: 80%;
}

.deco-search {
    height: 8rem;
    top: 50%;
    left: 80%;
}

.deco-egg {
    height: 6rem;
    top: 67%;
    left: 15%;
}

.deco-child {
    height: 12rem;
    top: 70%;
    right: -3%;
}

.deco-timer {
    height: 16rem;
    top: 75%;
    left: 35%;
}

.deco-composer {
    height: 8rem;
    top: 88%;
    right: 60%;
}
</style>
