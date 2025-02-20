<template>
    <footer :class="{ 'has-sidebar': hasSidebar }">
        <div class="footer-wrapper">
            <div class="footer-content">
                <div class="brand">
                    <a class="brand-logo" href="/">
                        <img src="/logo.svg" alt="Logo" />
                        <span>Visnalize</span>
                    </a>
                    <ul class="brand-social">
                        <li v-for="{ icon, link, ariaLabel } in socialLinks">
                            <a :href="link" target="_blank" rel="noopener noreferrer" :aria-label="ariaLabel">
                                <iconify-icon :icon="'simple-icons:' + icon" />
                            </a>
                        </li>
                    </ul>
                    <div>
                        <a href="https://startupfa.me/s/visnalize?utm_source=visnalize.com" target="_blank">
                            <img :src="`https://startupfa.me/badges/featured-small-${isDark ? 'dark' : 'light'}.webp`"
                                alt="Startup Fame logo" width="224" height="36" />
                        </a>
                    </div>
                </div>
                <div class="nav">
                    <div class="nav-group">
                        <div class="group-title">Win7 Simu</div>
                        <ul class="group-list">
                            <li v-for="{ link, text } in win7Links" :key="text">
                                <a :href="link">{{ text }}</a>
                            </li>
                        </ul>
                    </div>

                    <div class="nav-group">
                        <div class="group-title">Brick 1100</div>
                        <ul class="group-list">
                            <li v-for="{ link, text } in brickLinks" :key="text">
                                <a :href="link">{{ text }}</a>
                            </li>
                        </ul>
                    </div>

                    <div class="nav-group">
                        <div class="group-title">Visnalize</div>
                        <ul class="group-list">
                            <li v-for="{ link, text } in visnalizeLinks" :key="text">
                                <a :href="link">{{ text }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright">
                Copyright © 2021 - {{ new Date().getFullYear() }} Visnalize
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { About, Blog, Brick1100, Metrics, Services, Testimonials, Win7Simu } from '@/.vitepress/config/sitelinks';
import socialLinks from '@/.vitepress/config/social';
import { useData } from 'vitepress';
import { useSidebar } from 'vitepress/theme';

const { isDark } = useData()
const { hasSidebar } = useSidebar()

const win7Links = [Win7Simu.About, Win7Simu.Changelog, Win7Simu.Simulated, Win7Simu.ThemeStudio]
const brickLinks = [Brick1100.About, Brick1100.Changelog, Brick1100.FeatureRequests, Brick1100.Builders]
const visnalizeLinks = [Blog, About, Services, Metrics, Testimonials]
</script>

<style scoped>
footer {
    border-top: 1px solid var(--vp-c-gutter);
    z-index: var(--vp-z-index-footer);
}

.footer-wrapper {
    margin: auto;
    max-width: calc(var(--vp-layout-max-width) - 4rem);
    padding: 2rem 1.5rem;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-gutter);
    border-top: 0;
    border-bottom: 0;
}

.footer-content {
    display: grid;
    gap: 3rem;
    margin-bottom: 4rem;
}

.brand {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.brand-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 1.25rem;
}

.brand-logo img {
    width: 1.75rem;
    height: 1.75rem;
}

.brand-logo span {
    font-family: "croogla4f";
    font-size: 1.5rem;
    margin-top: 0.25rem;
}

.brand-social {
    display: flex;
    gap: 1rem;
    font-size: 1.25rem;
    color: var(--vp-c-text-2);
}

.brand-social a {
    display: flex;
    transition: color 0.2s;
}

.brand-social a:hover {
    color: var(--vp-c-text-1);
}

.nav {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.group-title {
    font-weight: 500;
    color: var(--vp-c-text-1);
    margin-bottom: 1.5rem;
}

.group-list {
    color: var(--vp-c-text-2);
}

.group-list a {
    display: block;
    padding: 0.375rem 0;
    transition: color 0.2s;
}

.group-list:hover {
    color: var(--vp-c-text-3);
}

.group-list a:hover {
    color: var(--vp-c-text-1);
}

.copyright {
    text-align: center;
}

@media (min-width: 640px) {
    .nav {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 768px) {
    .footer-wrapper {
        padding: 3rem 2rem;
    }
}

@media (min-width: 960px) {
    .has-sidebar .footer-wrapper {
        padding-left: calc(var(--vp-sidebar-width) + 2rem);
    }

    .has-sidebar .footer-content {
        grid-template-columns: unset;
    }

    .footer-wrapper {
        padding: 4rem 3rem;
    }

    .footer-content {
        grid-template-columns: 1fr 3fr;
    }
}

@media (min-width: 1280px) {
    .has-sidebar .footer-content {
        grid-template-columns: 1fr 3fr;
    }
}
</style>
