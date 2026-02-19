---
createdAt: 1771462045465
description: Exploring the idea of making Win7 Simu a launcher app, and why it's not a feasible direction for the project.
tags:
  - win7-simu
  - technical
  - sharing
---

# Can you make Win7 Simu a launcher app?

![Cover image](/assets/covers/win7-simu-as-launcher.jpg)

This is one of the questions that I get asked a lot for [Win7 Simu](../win7simu/about.md). Too often, in fact, that I have to write this article to just answer it once and for all.

The answer is: __I can, but I won't__. And I'm going to explain why, giving you lengthy reasons and insights.

## What's a launcher/home screen app?

A launcher app, also known as a home screen app, is a kind of app exclusive to Android devices that replaces the default home screen of the device. It provides a custom interface for users to access their apps, widgets, and settings.

Launcher apps can offer various features such as customizable layouts, themes, and gestures. They allow users to personalize their Android experience and often provide additional functionality compared to the default launcher.

## Why there won't be a launcher version of Win7 Simu?

### Technical limitations

I mentioned years ago in a [previous article](./building-win7-simu.md#the-tech-stack) that Win7 Simu is built mostly using web technologies, such as HTML, CSS, and JavaScript, and this is still the case to this day. The app is essentially a web app that runs in a web view, which is a component that allows displaying web content within a native app. This means Win7 Simu relies heavily on the capabilities of the web view and the underlying web technologies.

While it is technically possible to create a launcher app using web view, it would require a lot of time and effort to optimize the app for that purpose. The app would need to be redesigned and restructured to fit the launcher paradigm, especially in terms of performance and user experience. In my perspective, a launcher app should be lightweight, smooth, and snappy, which is not something that can be easily achieved with a web view-based app like Win7 Simu.

You might be wondering why I don't just rewrite the app using native Android development tools, such as Java or Kotlin. The reason is that it would be a massive undertaking that would require a complete overhaul of the app's codebase and architecture, something that is not feasible given the team size and resources available for the project. It would also mean losing the cross-platform compatibility that web technologies provide, which is one of the key advantages of using web technologies in the first place.

### Business perspective

If technical considerations were to be ignored, there are also "business" reasons why I wouldn't want to make a launcher version of Win7 Simu.

Firstly, creating a launcher app would require a significant amount of time that could be better spent on improving the existing app and adding new features that align with the original vision of Win7 Simu. The app already has a clear identity, purpose, and a dedicated user base that appreciates it for what it is. Changing the core functionality of the app to fit a launcher paradigm, or branching it off into a separate launcher app, would dilute the brand and potentially alienate the existing user base. It would also create confusion among users about what the app is and what it offers, which could lead to a loss of interest and engagement.

Secondly, the market for launcher apps is already saturated with many established players that have been around for years and have a loyal user base. Competing in this market is extremely challenging, especially for the nature of Win7 Simu, which is more of a niche product that appeals to a specific audience that enjoys the nostalgia and aesthetics of Windows 7. It would be difficult to gain traction, visibility and user adoption in such market.

Thirdly, as mentioned above, either making Win7 Simu a launcher app or branching it off into a completely separate launcher app would consume a lot of resources for so little return on investment. A launcher app would require constant updates and maintenance to keep up with the latest Android versions and device compatibility, user expectations, and security concerns, all while not generating any meaningful revenue or growth for the project. This is something that I can totally foresee happening, and it's not a risk that I'm willing to take. We're passionate about creating a fun and nostalgic experience for our users, but we also need to be mindful of our resources and priorities as a small indie team.

## Conclusion

The idea of making Win7 Simu a launcher app is intriguing and definitely has its appeal, especially for users who want to fully immerse themselves in the nostalgic Windows 7 experience on their beloved Android devices, and I appreciate the enthusiasm and support from our community. However, we have to be realistic about the technical and business implications of such a move, and I believe that it's not the right direction for the project at this time.

Ultimately, our focus remains on improving the existing app, tailoring it to the needs and preferences of our users, and exploring new features that align with the vision of Win7 Simu. We hope that you, our users, will continue to enjoy the app as it is, and we welcome any feedback and suggestions for how we can make it even better in the future.

_P.S._ Below is an old video of the early version of Win7 Simu working in portrait mode, which is a basic requirement for a launcher app, but was later removed due to several technical and design reasons.

@[youtube](https://youtu.be/OarDV_dEkcY)
