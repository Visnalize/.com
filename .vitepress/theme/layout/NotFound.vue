<template>
    <div id="bsod" @click="router.go('/')">
        <div class="wrapper">
            <div>
                A problem has been detect and Windows has been shut down to prevent damage to your device.
            </div>

            <div>ERROR_PAGE_NOT_FOUND</div>

            <div>
                If this is the first time you've seen this Stop error screen, restart the app. If this screen appears
                again, follow these steps:
            </div>

            <div>
                Check to make sure any new hardware or software is properly installed. If this is a new installation,
                ask your hardware or software manufacturer for any Windows updates you might need.
            </div>

            <div>
                If problems continue, disable or remove any newly installed hardware or software. Disable BIOS memory
                options such as caching or shadowing. IF you need to use Safe Mode to remove or disable components,
                restart your device, press F8 to select Advanced Startup options, and then select Safe Mode.
            </div>

            <div>Technical information:</div>

            <div>*** STOP: 0x000000000 (0x000000000, 0x000000000, 0x000000000)</div>

            <div>
                Just kidding! This page doesn't exist. Click anywhere to go back to the home page.
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vitepress';

const router = useRouter()
</script>

<style scoped>
@font-face {
    font-family: "lucidacons";
    src: url('/assets/fonts/lucidacons.ttf') format('truetype');
}

#bsod {
    background: #0100ad;
    color: #fff;
    font-family: "lucida console", "lucidacons", monospace;
}

.wrapper {
    max-width: 960px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 2rem;
    padding: 3vmax 5vmax;
}
</style>
