<template>
    <IndexSection bg-ease="ease-in" :animate-header="shouldAnimate">
        <template #title>Brick but feature-rich</template>
        <template #caption>Brick 1100 brings you the simplicity at its best, packed with tons of features to ease your
            life</template>

        <ul ref="features">
            <Motion as="li" v-for="i in 12" :variants="imgVariants(i)" :animate="shouldAnimate"
                :class="{ addons: i > 6 }">
                <img :src="`/assets/brick1100/features/image-${i}.png`" alt="Feature" width="260" height="193" />
            </Motion>
        </ul>

        <IndexLink href="/brick1100/changelog" text="All features through versions" />
    </IndexSection>
</template>

<script setup lang="ts">
import { Motion, useInView } from 'motion-v';
import { computed, ref } from 'vue';
import IndexLink from './IndexLink.vue';
import IndexSection from './IndexSection.vue';

const features = ref<HTMLElement | null>(null)
const inView = useInView(features, { amount: 0.2, once: true })

const shouldAnimate = computed(() => inView.value ? 'animate' : 'initial')
const imgVariants = (i: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 * i + 0.3 } },
})

defineExpose({ features })
</script>

<style scoped>
ul {
    display: grid;
    gap: 2rem;
    padding: 0.25rem;
    margin-bottom: 3rem;
}

li {
    width: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
}

li.addons {
    display: none;
}

li img {
    width: 100%;
}

@media (min-width: 640px) {
    ul {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }
}

@media (min-width: 992px) {
    ul {
        grid-template-columns: repeat(3, 1fr);
    }

    li.addons {
        display: flex;
    }
}

@media (min-width: 1200px) {
    li {
        width: 320px;
    }
}
</style>
