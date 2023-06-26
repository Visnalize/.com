---
layout: BlogPost
description: A simple tool to view and download Windows 7 icon collection.
sidebar: auto
tag:
  - technical
  - tools
---

# Windows 7 icon Viewer/Downloader

<m-blog-meta />

![win7-icons screenshot](/assets/covers/win7-icons-viewer-downloader.jpg)

[Win7 Icons](https://win7icons.visnalize.com/) is simple tool to view and/or download the Windows 7 icon collection.

## How to use

Its usage is pretty straightforward:

* Visit [https://win7icons.visnalize.com](https://win7icons.visnalize.com), you will see just a single window showing a list of icons.
* Icons are grouped into categories, to view icons from each category, select one from the dropdown.
* To download a single icon, select one and click the "Download" button.
* The "Download All" button will navigate you to another page that compresses all the icons from all categories into a `zip` file and download it to your device.

:::tip Tip
The downloaded icons are in `.ico` format, to convert them into other formats for your convenience, you may use [this free online tool](https://www.aconvert.com/image/).
:::

## Technical stuff

Building this tool was fairly prompt, it only took me roughly half a day to complete, as you can see that it just does one small, simple task. If you are interested, the source code is made public and accessible on [Github](https://github.com/Visnalize/win7-icons).

### Github as a CMS

:::tip What's CMS?
Content Management System (CMS for short) is a computer software used to manage the creation and modification of digital content.
— _Wikipedia_
:::

Such a fancy word to use 😂 but that's how I perceive, the approach I used here is to have the icon collection hosted on __Github__. Being a hosting service and version control system itself, we developers can do all sorts of things like creating and modifying the content we upload there, and it also supports the API for us to programmatically achieve those tasks.

Therefore, I picked Github rather than some "overkill" solutions for this simple tool. The categories you see from the dropdown are just in accordance with the folder structure as you can see [here](https://github.com/Visnalize/resources/tree/main/icons/win7), and the icons shown in the tool are also pulled from there. The real magic here is that if I add a missing icon or remove any duplicated ones, the changes are automatically reflected onto the tool.

### The familiar front-end stack

To build the face of the tool, I used [Vue2](https://v2.vuejs.org), the same tech that powers most of my work. To mimic the UI design of Windows 7, I used an open-source CSS framework called [7.css](https://khang-nd.github.io/7.css). And the Github API fetching was done thanks to this [octokit](https://github.com/octokit/rest.js/) library. The building steps are as simple as counting:

1. Create a Vue2 app from a boilerplate:

```sh
npm create vue@2
```

2. Install the package dependencies

```sh
yarn install
yarn add 7.css @octokit/rest
```

3. Lastly, build the components (literally all of the logic is handled in [this component](https://github.com/Visnalize/win7-icons/blob/main/src/components/IconBrowser.vue))

Though I also had some compatibility issues between the __octokit__ library and [Vite](https://vitejs.dev) (a JS bundling tool) and managed to get it resolved, it would be too much of hassle to share about. If you happen to have a similar problem, refer to this [Stackoverflow thread](https://stackoverflow.com/a/73095593/3916702).

In summary, the "so-called" tech stack is:

* Github as a back-end/CMS (laugh the hell out of it 😂)
* Vue2 + 7.css + octokit for front-end
* Vite as the JS bundler.
* The site is hosted using Github Pages.

<m-blog-tag-list :tags="$page.frontmatter.tag" showIcon />
