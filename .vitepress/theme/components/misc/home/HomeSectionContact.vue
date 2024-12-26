<template>
    <HomeSection id="testimonials">
        <template #title>Want to talk?</template>
        <template #caption>If you have any questions, feedback, or just want to chat, feel free to reach out</template>

        <div ref="form" class="form">
            <ContactForm :animate="inView" />
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
.form {
    border: 1px solid var(--vp-c-default-1);
    border-radius: 1rem;
    padding: 3rem;
}
</style>
