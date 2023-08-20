---
layout: BlogPost
description: The open-source UI library that powers Win7 Simu behind the scenes.
sidebar: auto
tag:
  - technical
  - tools
---

# Introducing Win7 UI

<m-blog-meta />

![Win7 UI screenshot](/assets/covers/win7-ui-hero.jpg)

In this post, let's talk about some more boring technical stuff as I bring in the spotlight an open-source project that I have recently finished: [Win7 UI](https://win7ui.visnalize.com/).

## The introduction

__Win7 UI__ is the component library that powers [Win7 Simu](../win7simu/about.md). It is built on top of [7.css](https://khang-nd.github.io/7.css/), a CSS-only framework that brings back the nostalgic design of Windows 7 to the web, and [Vue 2](https://v2.vuejs.org/), the familiar yet powerful JS framework that has been fueling several of my projects. Win7 UI is designed with simplicity and extensibility in mind:

- Just a few setup steps and all the components are ready to use in your Vue project.
- Component usage is kept as simple as possible, with only essential props and events, and inheriting the default behavior of HTML elements whereas applicable.
- All components are prefixed with `winui-` to be easily distinguished and identified throughout your codebase.
- Styling customization is made easy with each component having its own CSS class to be overridden.
- A full-on documentation with examples and code snippets provided for each component is meticulously crafted to help you get started quickly.

Check out the [installation guide](https://win7ui.visnalize.com/guide/#installation) to get started with the component library.

## Technical stuff in-depth

:::tip Tip
The project is __open-source__, you can check out the [source code](https://github.com/visnalize/win7-ui) to see the entire project structure.
:::

To put it simply, the project is structured as follows:

```{2,8}
win7-ui
├── docs/
│   ├── src/
│   │   ├── .vuepress/
│   │   ├── components/
│   │   ├── index.md
|   |   └── ...
│   └── package.json
├── src/
│   ├── components/
│   ├── index.js
│   └── ...
├── package.json
└── ...
```

The project comprises of two main parts: the component library (the __`src`__ folder) and the documentation site (the __`docs`__ folder).

### The component library

The component library is built to support Vue 2 projects (mainly due to the fact Vue 2 is Win7 Simu's [framework of choice](./building-win7-simu.md#the-tech-stack) 😜) with [Vite](https://vitejs.dev/) as the build tool/bundler.

The `src` folder where the component library resides is rather straightforward, with the `components` folder containing all the components and the `index.js` file exporting all the components as a plugin. The `index.js` file is also where the components are registered globally, so you can use them anywhere in your Vue project without having to import them.

Each component is a single-file component that adds some extra styles and behaviors on top of the base HTML element and styling provided by the [7.css](https://khang-nd.github.io/7.css/) framework. For example, the `<winui-button>` component is just a `<button>` element with the 7.css button styles imported via `7.css/dist/gui/button.css`, and some cherries on top such as: a `.winui-button` class to allow easy customization, extra styles that are not available from 7.css yet, and some event handlers to make the component more interactive.

### The documentation site

The documentation site is built with [VuePress](https://vuepress.vuejs.org/), and is hosted on [GitHub Pages](https://pages.github.com/) (just like this site, a wonderful option for broke developers like me 😂).

The `docs` folder is where the documentation site resides. The `src` folder within contains the main content of the site, with the `index.md` file as the homepage, and the nesting folders other than `.vuepress` match the URL structure of the site.

The `components` folder provides the documentation for every component available in the library, with the code snippets and live demo pulled out of the respective files from `.vuepress/components/Demo`.

## What to expect in the future

You should have noticed that a lot of components are still missing from the library, and that's because I have only added the ones that are used in Win7 Simu. I will be adding more components to the library as Win7 Simu needs. Or if you have any suggestions for new components, feel free to [open an issue](https://github.com/Visnalize/win7-ui/issues) and I will consider adding them to the library.

Thanks for reading, and I hope you enjoy using __Win7 UI__ in your projects! ✌️

<m-blog-tag-list :tags="$page.frontmatter.tag" showIcon />
