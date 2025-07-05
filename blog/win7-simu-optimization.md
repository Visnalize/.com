---
createdAt: 1751448411948
description: Sharing how I optimized this Webpack project, reducing the app size and boosting its initial load.
tags:
  - win7-simu
  - tips
  - technical
---

# Optimizing Win7 Simu

![Win7 Simu's performance score](/assets/covers/win7-simu-optimization.png)

_The performance score before the optimization_

[Win7 Simu](../win7simu/about.md) has been my brainchild since the early days of my career, starting as a simple project to learn about [front-end development](./building-win7-simu.md#the-goal). Over the years, it has evolved a lot, in terms of popularity and complexity. With thousands of daily active users, it has become something more than just a personal project. Entrusted with the responsibility of maintaining such a large user base, I realize that optimizing the app to make it more efficient and performant is now a crucial task.

In this post, I'm sharing some of the optimizations I've done to improve Win7 Simu. If you're a technical person, you might find interesting insights and tips to apply to your own projects, if you're my user, you might love to see how I made the app better for you. In any case, I hope you find this post useful.

## The technical setup

Win7 Simu was built with [Vue 2](https://v2.vuejs.org/), it uses [Vue CLI](https://cli.vuejs.org/) as a building tool companion, under the hood, it leverages the power of [Webpack v4](https://v4.webpack.js.org/) for bundling the project's assets. This is a significant technical aspect that's worth mentioning because it has a direct impact on the optimizations I can apply.

If your project is also built with the above setup, this post might be particularly relevant to you. However, even if you're using a different stack, the techniques and principles discussed here can still be applied in many cases.

## The problems

### The unnecessary bloated CSS

![Bloated CSS](./img/win7-simu-optimization/bloated-css.jpg)

Win7 Simu offers a unique feature that allows users to customize the app's appearance with [themes](../win7simu/simulated/personalize.md) other than the core Windows 7, the theming system. However, due to my lack of experience when I first built this feature, I ended up having the themes bottlenecked into a single CSS file, resulting in a bloated file with the size of over 4 MB.

This also caused an issue for development, as the CSS file was so large, it took a long time to be processed every time we made changes to the themes, severely slowing down the development process.

### The excessive entrypoint

The app's entrypoint is the initial JavaScript and CSS files that are loaded when the app starts. It is a crucial part of the app's performance, as it affects the initial load time and the overall user experience.

There is no ideal size for the entrypoint, but it's recommended to keep it as small as possible. And in Win7 Simu, it was over 1.2 MB, which triggered a warning from Vue CLI, indicating that the entrypoint was too large and could negatively impact the app's performance.

### The negative performance score

For web projects, [PageSpeed Insights](https://pagespeed.web.dev/) is a popular tool to measure the performance. It provides a score based on various metrics, and also suggests improvements that can be made to enhance the app's performance.

Unfortunately, Win7 Simu's performance only averaged a score of 45 out of 100, which is considered poor. This could be caused by several factors, including the above issues, as well as the app's complexity and the amount of JavaScript code it contains.

## The techniques

With the problems identified, I set out to optimize the app using various techniques, never expecting to achieve a perfect score, but at least to make it better, in terms of size and performance. Along the way, I learned a lot about Webpack and its capabilities, below are some of the techniques I applied:

### Code splitting and lazy loading

__Code splitting__ is a powerful feature of Webpack that allows me to split the app's code into smaller chunks. These chunks are then loaded on demand or in parallel when needed, rather than loading everything at once, this is known as __lazy loading__.

This technique is particularly useful for a large app like Win7 Simu, where it contains smaller apps and components that can be loaded separately. For example, the logon screen can be loaded only after the boot process has completed, or the [Calculator](../win7simu/simulated/calculator.md) app should only be loaded when the user opens it. This way, the initial load time is reduced, and the app becomes more responsive and efficient.

With Webpack, this can be achieved easily by using dynamic imports in the code, which tells Webpack to create separate chunks for the imported modules. For example, in `main.js`, the entry file:

- Before:

```js
import App from "./App.vue";
import Vue from "vue";
import i18n from "./locales";
import store from "./store";

new Vue({
  render: (h) => h(App),
  i18n,
  store,
}).$mount("#app");
```

- After:

```js
import Vue from "vue";

const lazyLoadCores = () => {
  return Promise.all([
    import(/* webpackChunkName: "vue-app" */ "./App.vue"),
    import(/* webpackChunkName: "vue-store" */ "./store"),
    import(/* webpackChunkName: "vue-i18n" */ "./locales"),
  ]);
};

(async () => {
  const [App, store, i18n] = await lazyLoadCores();

  new Vue({
    render: (h) => h(App.default),
    i18n: i18n.default,
    store: store.default,
  }).$mount("#app");
})();
```

By doing this, I parallelized and lazy loaded some modules, reducing the entrypoint size and improving the initial load time.

Similarly, for components, instead of this:

```js
import Bios from "./views/Bios.vue";
import Boot from "./views/Boot.vue";
import Logon from "./views/logon/index.vue";
import Shutdown from "./views/shutdown/index.vue";

export default {
  components: {
    Bios,
    Boot,
    Logon,
    Shutdown,
  },
};
```

I can do this:

```js
export default {
  components: {
    Bios: () => import(/* webpackChunkName: "bios" */ "./views/Bios.vue"),
    Boot: () => import(/* webpackChunkName: "boot" */ "./views/Boot.vue"),
    Logon: () => import(/* webpackChunkName: "logon" */ "./views/logon/index.vue"),
    Shutdown: () => import(/* webpackChunkName: "shutdown" */ "./views/shutdown/index.vue"),
  },
};
```

This way, the components are split into different chunks rather than being bundled into a single file, and are loaded only when needed.

For the themes, code splitting and lazy loading are also applied, so that the app only loads the CSS file (or in this case, an SCSS file) for the respective theme when the user selects it. This is done the same way using dynamic imports:

```js
function loadTheme(themeId) {
  return import(/* webpackChunkName: "theme" */ `@/scss/themes/${themeId}.scss`);
}
```

:::tip Tip
The `webpackChunkName` comment is used to specify the name of the chunk that Webpack will create. This is useful for debugging and for better organization of the chunks.
:::

### Tree shaking

Tree shaking is a technique used to eliminate unused code from the final bundle. It is particularly useful for libraries and frameworks that contain a lot of code, but only a small part of it is actually used in the app.

In Win7 Simu, there are massive dependencies like Firebase, Codemirror, or Three.js, which contain a lot of code that might not be relevant to the app. I applied tree shaking by making sure that only the necessary parts of these libraries are imported, rather than importing the entire library. For example, instead of importing the whole Codemirror library, I only import the specific features and plugins that are needed:

```js
import { Compartment, EditorState } from "@codemirror/state";
import { keymap } from "@codemirror/view";
```

Most of the time, tree shaking is supported out of the box by modern libraries and frameworks, just make sure to import only the necessary parts, and Webpack will take care of the rest.

### Compressing

Last but not least, a direct and effective way to reduce the app size, compressing the assets is a must.

When applicable, image assets should be converted to a more efficient format, such as WebP, which provides better compression without sacrificing quality. In other cases, like CSS and JS files, I made sure Webpack is configured to minify them, removing unnecessary whitespace and comments to reduce the file size.

Example of a minified CSS file:

```css
body{margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f0f0f0}h1{font-size:2em;color:#333}p{font-size:1em;color:#666}
```

## The results and next steps

| | Before | After
| --- | --- | ---
| App size <Badge type="tip" text="↓10%" /> | ~44 MB | ~40 MB
| Entry size <Badge type="tip" text="↓88%" /> | ~1.2 MB      | ~144 kB
| Performance score | 40 ~ 45 | 70 ~ 80

Although there are still things that can be improved, I'm quite happy with the current results. The app is now a bit more efficient and performant, and the fact that I was able to learn a lot of new things a long the way can be considered a huge win.

I will continue to keep an eye on the app's performance and make further optimizations as needed. I also have other plans to improve the app, in terms of development experience and user experience. As usual, with any suggestions or feedback, please feel free to leave a comment on this post or reach out to me via email.
