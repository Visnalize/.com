<template>
    <div class="access">
        <a v-for="link in links" :key="link" :href="link" target="_blank">
            <img data-no-zoom v-bind="getImageProps(link)" />
        </a>
        <Dropdown>
            <button class="qr" aria-label="Scan QR code">
                <iconify-icon icon="mdi:qrcode-scan" />
                <span>
                    <span>Scan the</span>
                    <span>QR code</span>
                </span>
            </button>
            <template #popper>
                <img data-no-zoom :src="`/assets/${app}-qr.svg`" width="256" height="256" />
            </template>
        </Dropdown>
    </div>
</template>

<script setup lang="ts">
import { Dropdown } from 'floating-vue'

const LinkMap = {
    win7simu: [
        "https://play.google.com/store/apps/details?id=com.visnalize.win7simu",
        "https://win7simu.visnalize.com",
    ],
    brick1100: [
        "https://play.google.com/store/apps/details?id=com.visnalize.brick1100",
        "https://apps.apple.com/us/app/brick-1100/id6554000754",
        "https://brick1100.visnalize.com",
    ],
};

interface Props {
    app: keyof typeof LinkMap;
    maxLinks?: number;
}

interface ImageProps {
    alt: string;
    src: string;
}

const { app, maxLinks } = defineProps<Props>();

const links = LinkMap[app].slice(0, maxLinks ?? LinkMap[app].length);

const getImageProps = (link) => {
    const props: ImageProps = { alt: "Web App", src: "/assets/access-web.svg" };
    if (link.includes("google.com")) {
        props.alt = "Play Store";
        props.src = "/assets/access-google.svg";
    } else if (link.includes("apple.com")) {
        props.alt = "App Store";
        props.src = "/assets/access-apple.svg";
    }
    return props;
}

</script>

<style scoped>
.access {
    --size: 80px;
    margin: 2rem 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.qr {
    background: var(--vp-c-bg);
    color: var(--vp-c-text-1);
    border: 1.5px solid currentColor;
    border-radius: 0.5rem;
    width: var(--size);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: calc(var(--size) * 3.375);
}

.qr iconify-icon {
    font-size: calc(var(--size) / 2);
}

.qr>span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 65%;
}

.qr>span span {
    line-height: 1.1;
}

.qr>span span:last-child {
    font-weight: 600;
    font-size: calc(var(--size) / 3);
}

img,
.qr {
    height: var(--size);
}

a,
.qr {
    transition: transform 0.2s;
}

a:hover,
.qr:hover {
    transform: scale(1.05);
}

@media (min-width: 640px) {
    .qr {
        width: var(--size);
    }

    .qr>span {
        display: none;
    }
}
</style>
