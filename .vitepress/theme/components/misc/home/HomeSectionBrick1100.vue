<template>
    <section id="brick1100" class="home-container">
        <section class="brick-demo">
            <!-- <video autoplay loop muted playsinline>
                <source src="./assets/brick1100-demo.mp4" type="video/mp4" />
            </video> -->
        </section>
        <HomeIntroSection app="brick1100" title="Brick 1100" description="Transform your smartphone into a Nokia 1100.
        Experience the monochrome visual style, classic keypad, and the legendary Snake game.">
            <img src="./assets/brick1100.png" alt="Brick 1100 logo" width="128" height="128" />
        </HomeIntroSection>
    </section>
</template>

<script setup lang="ts">
import HomeIntroSection from './HomeIntroSection.vue';
</script>

<style scoped>
.home-container {}

.brick-demo {
    /* position: sticky; */
    inset: 0;
}

.brick-demo video {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.intro-section img {
    width: 4em;
    height: auto;
    margin: 0 auto 1rem;
    border-radius: 0.5rem;
}
</style>
