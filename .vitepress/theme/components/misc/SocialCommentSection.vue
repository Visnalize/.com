<template>
    <div id="comments" ref="el" :class="isLoaded ? '' : 'idle'">
        <DisqusComments v-if="isLoaded" :identifier="id" :shortname="shortname" />
        <div v-else class="placeholder">
            <VPButton size="big" text="Show comments" @click="isLoaded = true" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress';
import { VPButton } from 'vitepress/theme';
import { inject, ref, watchEffect } from 'vue';
import { DisqusComments } from 'vue3-disqus';
import { DISQUS } from '../../constants';
import { fixCommentId } from '../../utils/misc';

const route = useRoute()
const shortname = inject<string>(DISQUS)
const isLoaded = ref(false)
const el = ref<HTMLDivElement>()
const id = ref(route.path)

watchEffect(() => {
    id.value = fixCommentId(route.path)
    isLoaded.value = false
})
</script>

<style scoped>
#comments {
    --placeholder-height: 250px;
    min-height: var(--placeholder-height);
    border: 2px dashed transparent;
}

#comments.idle {
    border-color: var(--vp-c-divider);
    border-radius: 0.5rem;
}

.placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--placeholder-height);
}

:deep(iframe[sandbox]),
:deep(iframe[src*="ads-iframe"]) {
    display: none !important;
}
</style>
