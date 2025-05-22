<template>
    <HomeSection id="contact">
        <template #title>Want to talk?</template>
        <template #caption>If you have any questions, feedback, or just want to chat, feel free to reach out</template>

        <div ref="form" class="form-container">
            <ContactForm class="form" :animate="inView" />
        </div>
    </HomeSection>
</template>

<script setup lang="ts">
import { useSectionInView } from '@composables/useMotion';
import { ref } from 'vue';
import ContactForm from '../ContactForm.vue';
import HomeSection from './HomeSection.vue';

const form = ref<HTMLElement | null>(null);
const inView = useSectionInView(form);
</script>

<style scoped>
@media (min-width: 640px) {
    .form-container {
        border: 1px solid var(--vp-c-divider);
        border-radius: 1rem;
        padding: 3rem;
    }

    .form {
        max-width: 680px;
    }
}
</style>
