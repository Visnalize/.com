<template>
    <a class="social-comment" href="#comments">
        <iconify-icon icon="simple-icons:disqus" height="16" />
        <span class="disqus-comment-count" :data-disqus-identifier="id" :key="id">
            <CoreSkeleton />
        </span>
    </a>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress';
import { inject, nextTick, onMounted, ref, watchEffect } from 'vue';
import { DISQUS } from '../../constants';
import { fixCommentId } from '../../utils/misc';
import CoreSkeleton from '../core/CoreSkeleton.vue';

const route = useRoute()
const id = ref(route.path)
const shortname = inject<string>(DISQUS)

onMounted(() => {
    const getCount = () => {
        window.DISQUSWIDGETS?.getCount({ reset: true });
    }

    const script = document.createElement("script");
    script.id = "dsq-count-scr";
    script.src = `//${shortname}.disqus.com/count.js`;
    script.async = true;
    document.body.appendChild(script);

    watchEffect(() => {
        id.value = fixCommentId(route.path)
        nextTick(getCount)
    })
})

</script>

<style scoped>
a {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    transition: 0.2s;
}

a:hover {
    color: var(--vp-c-brand-2);
}

.core-skeleton {
    width: 6rem;
}

.disqus-comment-count {
    font-size: 0.875rem;
}
</style>
