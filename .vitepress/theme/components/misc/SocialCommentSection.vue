<template>
    <div id="comments" :class="isLoaded ? '' : 'idle'">
        <div v-if="isLoaded" id="disqus_thread" />
        <div v-else class="placeholder">
            <VPButton size="big" text="Show comments" @click="load" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress';
import { VPButton } from 'vitepress/theme';
import { inject, nextTick, ref, watch } from 'vue';
import { DISQUS } from '../../constants';
import { fixCommentId } from '../../utils/misc';

declare global {
    interface Window {
        DISQUS: {
            reset: (options: { reload: boolean, config: () => void }) => void;
        };
        disqus_config: () => void;
    }
}

const route = useRoute()
const shortname = inject(DISQUS)
const isLoaded = ref(false)

function setConfig() {
    this.page.identifier = location.pathname;
    this.page.url = location.href;
    if (location.pathname.endsWith('themestudio.html')) {
        this.page.identifier = fixCommentId(location.pathname);
        this.page.url = fixCommentId(location.href);
    }
}

const loadEmbedScript = () => {
    const date = +new Date();
    const s = document.createElement("script");
    s.setAttribute("id", "embed-disqus-script");
    s.setAttribute("data-timestamp", date.toString());
    s.type = "text/javascript";
    s.async = true;
    s.src = `//${shortname}.disqus.com/embed.js`;
    document.body.appendChild(s);
}

const reset = () => {
    window.DISQUS.reset({
        reload: true,
        config: setConfig
    })
}

const load = () => {
    isLoaded.value = true;
    if (!window.DISQUS) {
        window.disqus_config = setConfig;
        loadEmbedScript();
    } else {
        nextTick(reset);
    }
}

watch(() => route.path, () => {
    isLoaded.value = false;
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
</style>
