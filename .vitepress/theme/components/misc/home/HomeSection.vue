<template>
    <section class="home-section">
        <slot name="header" />
        <div v-if="!$slots.header" class="title">
            <HomeSectionTitle>
                <slot name="title" />
            </HomeSectionTitle>
            <HomeSectionCaption>
                <slot name="caption" />
            </HomeSectionCaption>
        </div>
        <slot />
    </section>
</template>

<script setup lang="ts">
import HomeSectionCaption from './HomeSectionCaption.vue';
import HomeSectionTitle from './HomeSectionTitle.vue';
</script>

<style scoped>
.home-section {
    padding: 1.5rem;
    max-width: 960px;
    margin: 0 auto 10rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
</style>
