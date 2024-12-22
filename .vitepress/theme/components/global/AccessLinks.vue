<template>
    <div class="access">
        <a v-for="link in links" :key="link" :href="link" target="_blank">
            <img v-bind="getImageProps(link)" />
        </a>
    </div>
</template>

<script setup lang="ts">
const LinkMap = {
    win7simu: [
        "https://play.google.com/store/apps/details?id=com.visnalize.win7simu",
        "https://win7simu.visnalize.com",
    ],
    brick1100: [
        "https://play.google.com/store/apps/details?id=com.visnalize.brick1100",
        "https://apps.apple.com/us/app/brick-1100/id6554000754",
    ],
};

interface Props {
    app: keyof typeof LinkMap;
}

interface ImageProps {
    alt: string;
    src: string;
}

const { app } = defineProps<Props>();

const links = LinkMap[app];

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
    margin: 2rem 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

a {
    transition: transform 0.2s;
}

a:hover {
    transform: scale(1.05);
}

img {
    height: 80px;
}
</style>
