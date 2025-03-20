<template>
    <div class="section-cta">
        <div class="headline">
            <h2>Feeling nostalgic yet?</h2>
            <p>Join thousands of retro enthusiasts and relive the good old days with Brick 1100</p>
        </div>
        <AccessLinks app="brick1100" />
    </div>
</template>

<script setup lang="ts">
import AccessLinks from '../../../global/AccessLinks.vue';
</script>

<style scoped>
.section-cta {
    margin: 0 auto;
    padding: 0 1.5rem 10rem;
    position: relative;
}

.headline {
    text-align: center;
    margin: 0 auto 4rem;
    max-width: 600px;
}

h2 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 1rem;
}

@media (min-width: 768px) {
    p {
        font-size: 1.5rem;
        line-height: 1.5;
    }
}
</style>
