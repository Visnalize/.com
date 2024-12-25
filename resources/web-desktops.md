---
description: Curated list of apps and porfolios that mimic the appearance and behavior of desktop operating systems.
aside: right
outline: false
---

# Web desktops

Below is a curated list of apps and portfolios that mimic the appearance and behavior of desktop operating systems, similar to how [Win7 Simu](./win7simu/about.md) works.

::: info Note
All credits go to [Simone Marzulli](https://simone.computer/) for his findings and curations. Want to add your site to the list? Contribute in the [Awesome Web Desktops](https://github.com/syxanash/awesome-web-desktops) repository.
:::

<script setup lang="ts">
import { data } from '../.content/webtops.data';
</script>

<table tabindex="0">
    <thead>
        <tr>
            <th>Site name</th>
            <th>Source code</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in data">
            <td><a target="_blank" :href="item.url">{{item.name}}</a></td>
            <td>
                <a v-if="item.source" target="_blank" :href="item.source" :class="$style.link">
                    <iconify-icon icon="logos:github-icon" />
                    <span>Github</span>
                </a>
            </td>
        </tr>
    </tbody>
</table>

<style module>
.link {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}
</style>
