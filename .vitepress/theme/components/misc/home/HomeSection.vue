<template>
    <section class="home-section">
        <slot />
    </section>
</template>

<script setup lang="ts">

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
