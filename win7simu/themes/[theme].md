# {{ title }}

<script setup lang="ts">
import { transformImage } from "@utils/images";
import { useData } from "vitepress";

const { frontmatter } = useData()
const { slug, title, image, premium, bundle, isOriginal, features, imageData } = frontmatter.value

const transformWidth = 1200;
const imageRatio = imageData?.width / imageData?.height;
const imageProps = {
    src: transformImage(image, { width: transformWidth, quality: 100 }),
    alt: title,
    width: transformWidth,
    height: Math.round(transformWidth / imageRatio),
}
const featureChanges = {
    startMenu: ["win3-1", "win8", "macos", "ubuntu"]
}
</script>

<p>
    <img v-bind="imageProps" data-zoomable />
</p>

__{{ title }}__ is an official theme in [Win7 Simu](../about.md).

<p v-if="premium">
It is offered as a premium theme{{bundle ? ` as part of the "${bundle}" bundle` : ''}}, users can unlock it by purchasing {{ bundle ? 'the bundle' : '' }} from within the app. Once purchased, users will own the theme permanently and receive all future updates for it.
</p>
<p v-else>
It is generally available for free in the app. Users can use it at no cost and receive all future updates for it.
</p>

## Origin & how to unlock

<p v-if="isOriginal">
This theme is developed exclusively for Win7 Simu. It is not available in any other applications or platforms.
</p>
<p v-else>
This theme is developed based on "{{ title }}", aiming to replicate the aesthetics and functionality of the original version and provide a similar user experience.
</p>

To unlock this theme:

- Right-click on the desktop and select "Personalize".
  - Alternatively, you can open the "Personalize" settings from the Control Panel.
- Here, you will find it listed among the available themes.
- Simply click on the theme to apply it.

## Visual and functional changes

<p v-if="slug.startsWith('win7')">
    <i>This is one of the default themes in Win7 Simu and does not include any changes in functionality other than the visual appearance.</i>
</p>
<p v-else-if="isOriginal">
    <i>This theme does not include any changes in functionality other than the visual appearance.</i>
</p>
<template v-else>
    <p>This theme includes the following changes in visual appearance and functionality compared to the default theme of Win7 Simu:</p>
    <ul>
        <li>Sound scheme based on {{ title }}</li>
        <li>Boot animation based on {{ title }}</li>
        <li>Logon screen based on {{ title }}</li>
        <li>Window layout and controls based on {{ title }}</li>
        <li>Icon set based on {{ title }}</li>
        <li v-if="!featureChanges.startMenu.includes(slug)">Start menu based on {{ title }}</li>
        <li v-for="feature in features" :key="feature">{{ feature }}</li>
    </ul>
</template>

## Check it out in action

Explore the {{ title }} theme and other cool features of Win7 Simu on your preferred platform. Simply click a button below to download the Android app or access directly from your browser.

<AccessLinks app="win7simu" />
