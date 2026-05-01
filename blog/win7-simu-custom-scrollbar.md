---
createdAt: 1777571046864
description: How we created a cross-platform custom scrollbar for Win7 Simu, the technical details, and some caveats to keep in mind.
tags:
  - sharing
  - win7-simu
  - technical
---

# Implementing a custom scrollbar in Win7 Simu

![Win7 Simu scrollbar settings](/assets/covers/win7-simu-custom-scrollbar.png)

_The custom scrollbar in different OS themes_

Finally got the time to write and share about some more technical details of [Win7 Simu](../win7simu/about.md)! Since version [4.2.0](../win7simu/changelog.md#_4-2-0-april-22-2026), we have added a custom scrollbar to Win7 Simu. In this post, let's dive into how the custom scrollbar was done. Hopefully, you will find it useful if you are looking to implement something similar in your project, and also get a better understanding of the technical challenges and caveats behind it. Let's get started!

## The need for a custom scrollbar

Being a simulator of Windows 7, one of the key goals of Win7 Simu is to provide an authentic and faithful experience of using Windows 7. Having a custom scrollbar that closely resembles the one in Windows 7 is essential to achieving this goal.

Additionally, with the ability to switch between different OS themes provided by Win7 Simu, and the fact that different browsers (Chrome, Firefox, Safari, Edge, etc.) and platforms have their own default scrollbar styles, a custom scrollbar allows us to freely customize the styling of the scrollbar to match the desired theme while maintaining cross-platform consistency in the appearance and behavior of the scrollbar.

Just the above reasons are already enough for us to implement the custom scrollbar, but as we progressed with the implementation, we also found that it can help us circumvent some issues we have with the native scrollbar, and provide a better user experience for users using touch devices, which is a worthwhile bonus!

## The implementation

## Caveats, improvements, and future work

As happy as we are to have the custom scrollbar implemented and working to provide a better experience for users, we also want to be transparent about some caveats and limitations, and share some thoughts on potential improvements and future work.

As you can see from the implementation details above, implementing a custom scrollbar is not a trivial task, and it does add some complexity to the DOM structure and maintenance of the codebase. We need to carefully manage the state and synchronization between the custom scrollbar and the content it controls, which can be error-prone and require extra care in future updates and maintenance.

The extra DOM elements and event listeners needed for the custom scrollbar can also have performance implications, especially on lower-end devices. We need to monitor user feedback and performance metrics to ensure the custom scrollbar is not causing significant performance issues, and optimize the implementation as needed.

And with the reliance on modern web APIs such as `ResizeObserver` and `MutationObserver`, unfortuntately, there is no way to support older browsers or WebView versions that do not have support for these APIs, which means users on those platforms will not be able to experience the custom scrollbar. It is a trade-off we have to make in order to provide the best experience for the majority of users, but it is still something we want to be transparent about.

With that said, having the custom scrollbar implemented opens up a lot of possibilities for future improvements and features. For example, we can incorporate more customization options for the scrollbar into [Theme Studio](../win7simu/themestudio.md), allowing users to further personalize their experience. We can also provide additional advanced settings for the scrollbar, such as adjusting the scroll speed, enabling/disabling smooth scrolling, and more.
