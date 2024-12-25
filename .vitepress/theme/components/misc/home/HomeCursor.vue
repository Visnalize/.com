<template>
    <AnimatePresence>
        <Motion v-if="visible" as="span" class="cursor" :initial="{ opacity: 0 }" :animate="{ opacity: 1 }"
            :exit="{ opacity: 0 }" :style="{ x, y }">
            {{ text }}
        </Motion>
    </AnimatePresence>
</template>

<script setup lang="ts">
import { useEventListener } from '@vueuse/core';
import { AnimatePresence, Motion, useSpring } from 'motion-v';
import { ref } from 'vue';

const visible = ref(false)
const text = ref('')
const x = useSpring(0, { stiffness: 200, damping: 20 })
const y = useSpring(0, { stiffness: 200, damping: 20 })

useEventListener('mousemove', (e) => {
    const element = e.target as HTMLElement
    const tagName = element.tagName.toLowerCase()
    const hasVideoElem = tagName === 'video' || element.closest('video') !== null
    const hasLinkElem = tagName === 'a' || element.closest('a') !== null

    if (hasVideoElem) text.value = 'Playing demo'
    else text.value = 'Open link'

    visible.value = hasVideoElem || hasLinkElem
    x.set(e.clientX + 10)
    y.set(e.clientY + 20)
})
</script>

<style scoped>
.cursor {
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    background: var(--vp-c-bg-soft);
    box-shadow: var(--vp-shadow-2);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
}
</style>