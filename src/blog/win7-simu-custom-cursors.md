---
layout: BlogPost
description: Deep dive into how custom cursors are implemented in Win7 Simu.
sidebar: auto
tag:
  - sharing
  - win7-simu
  - technical
---

# Implementing custom cursors in Win7 Simu

<m-blog-meta />

![Win7 Simu mouse settings](/assets/covers/win7-simu-custom-cursors.jpg)

_The mouse settings window captured with the simulated [Snipping Tool](../win7simu/simulated/snipping.md) in Win7 Simu_

We are back with another technical post on Win7 Simu! This time, let's dive into how the mouse cursors are implemented in a web project like [Win7 Simu](../win7simu/about.md), the challenges faced, and some caveats to keep in mind. Hopefully, this post will also be useful for those working on a custom cursor implementation in their web projects. Let's get started!

## The idea

As a simulator, Win7 Simu aims to provide an experience as close to the actual Windows 7 as possible. This includes the mouse settings, which allows users to customize the cursor in the [Control Panel](../win7simu/simulated/cpanel.md). However, due to the limitations of web techs, and the fact that Win7 Simu also runs on mobile devices, the implementation of custom cursors requires some creativity and compromises to achieve a shared experience across all platforms.

At a high level, the custom cursor implementation for Win7 Simu as a web project involves the following considerations:

- The availability of the cursor images: the cursor requires instant switching between different images upon user interaction with the elements on the page. This means all the cursor images need to be preloaded and ready to be used at any time.
- A dummy presentation of the custom cursor: the actual mouse cursor is hidden and the cursor images are rendered on a dummy element that follows the actual mouse cursor/touch position on the screen. This ensures the custom cursor's behavior is consistent across different platforms and avoid the unnecessity of handling the implementation deviations.
- Keeping track of the custom cursor: the cursor state needs to be tracked and updated based on the user interaction with the elements on the page. This is done from the code logic and has to be efficient to avoid any performance issues.

## The implementation

If Win7 Simu were not developed for mobile devices, the custom cursor implementation would be as simple as 1 single line of CSS to change the cursor image on the actual mouse cursor.

## The future

<m-blog-tag-list :tags="$page.frontmatter.tag" showIcon />
