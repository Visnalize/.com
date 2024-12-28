<template>
    <form @submit.prevent="send">
        <Motion :variants="variants(0)" :animate="animate">
            <input type="text" name="subject" placeholder="Subject" required />
        </Motion>
        <Motion :variants="variants(1)" :animate="animate">
            <textarea name="content" placeholder="Content" required></textarea>
        </Motion>
        <Motion :variants="variants(2)" :animate="animate">
            <VPButton class="VPButton big brand" type="submit" text="Send" />
        </Motion>
    </form>
</template>

<script setup lang="ts">
import { Variants } from '@composables/useMotion';
import { Motion } from 'motion-v';
import { VPButton } from 'vitepress/theme';
import { computed } from 'vue';

const { animate: animateProp = undefined } = defineProps<{
    animate?: boolean;
}>()

const shouldAnimate = computed(() => animateProp ?? true);
const animate = computed(() => shouldAnimate.value ? 'animate' : 'initial');

const variants = (index: number): Variants => ({
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { delay: index * 0.1 } },
})

const send = ({ target }: Event) => {
    let { subject, content } = target as HTMLFormElement;
    subject = encodeURIComponent(subject.value);
    content = encodeURIComponent(content.value);
    const link = document.createElement("a");
    link.href = `mailto:hey@visnalize.com?subject=${subject}&body=${content}`;
    link.target = "_blank";
    link.click();
}
</script>

<style scoped>
form {
    max-width: 680px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

form>div:last-child {
    display: flex;
    flex-direction: column;
}

input,
textarea {
    background: var(--vp-c-bg);
    padding: 1rem;
    width: 100%;
    font-size: 100%;
    font-family: inherit;
    box-sizing: border-box;
    border-radius: 0.5rem;
    border: 1px solid var(--vp-c-divider);
    transition: 0.2s;
}

input:focus,
textarea:focus {
    border-color: var(--vp-c-brand-1);
}

textarea {
    height: 200px;
    resize: vertical;
}
</style>