<template>
    <div class="blog-list">
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.blog-list {
    display: grid;
    gap: 1.5rem;
}

@media (min-width: 640px) {
    .blog-list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 960px) {
    .blog-list {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
