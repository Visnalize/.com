<template>
    <form @submit.prevent="send">
        <div>
            <input :class="{ error: errors.includes('subject') }" type="text" name="subject" placeholder="Subject"
                required />
        </div>
        <div>
            <textarea :class="{ error: errors.includes('content') }" name="content" placeholder="Content"
                required></textarea>
        </div>
        <div>
            <VPButton class="VPButton big brand" type="submit" text="Send" />
        </div>
    </form>
</template>

<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
import { ref } from 'vue';

const errors = ref<string[]>([])

const send = ({ target }: Event) => {
    let { subject, content } = target as HTMLFormElement;
    errors.value = [];

    if (!subject.value) return errors.value.push("subject");

    if (!content.value) return errors.value.push("content");

    subject = encodeURIComponent(subject.value);
    content = encodeURIComponent(content.value);
    const link = document.createElement("a");
    link.href = `mailto:hey@visnalize.com?subject=${subject}&body=${content}`;
    link.target = "_blank";
    link.click();
    errors.value = [];
}
</script>

<style scoped>
div {
    margin: 0.5rem 0;
}

input,
textarea {
    outline: none;
    padding: 0.5rem 1rem;
    width: 100%;
    font-size: 100%;
    font-family: inherit;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid var(--vp-c-default-2);
    transition: border-color 0.25s;
}

input:focus,
textarea:focus {
    border-color: var(--vp-c-brand-1);
}

input.error,
textarea.error {
    border-color: red;
}

textarea {
    height: 200px;
    resize: vertical;
}
</style>