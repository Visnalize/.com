<template>
    <div id="analytics" class="frame">
        <iframe width="720" height="720" :src="`https://lookerstudio.google.com/embed/reporting/${reportId[+isDark]}`"
            frameborder="0" style="border:0" allowfullscreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
    </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';

const { isDark } = useData()
const reportId = ['2a51db73-b1ad-49ac-a14e-f3f7ed3d7a46', '0235d9f4-f1a9-4a26-8f02-aa4c4637afaf']
</script>

<style scoped>
.frame {
    overflow: auto;
}
</style>
