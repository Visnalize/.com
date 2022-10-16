---
layout: All
description: Read about my journey with Win7 Simu, how it all started and unveiling some boring technical stuff behind the scene
sidebar: auto
tag:
  - win7-simu
  - sharing
  - technical
---

# How I built Win7 Simu

<m-blog-meta />

![Win7 Simu screenshot](https://play-lh.googleusercontent.com/_uBuSE7ujyhBOZQav0yLTGLXKLS0sw5dLBi1VMH05BDCcr2jZNk9pAii0hGiFriZoL2b=w740)

Today is October 10, 2022, [Win7 Simu](/win7simu/about.md) has nearly reached __5M downloads__ on [Play Store](https://play.google.com/store/apps/details?id=com.visnalize.win7simu) ever since it was released on February 13, 2020 (4.4M to be exact, but who cares). As an early celebration of this success (in silence, as I have always been), I decided to write another blog post, to have a reflection on my journey with it so far, and to share my experience, my lessons learned, and some boring technical stuff that you may find somewhat interesting and useful, or not. So sit tight, read through my journey, and hope you will enjoy it.

## How it all started

As an average guy growing up in a developing country, I did not get to know about computer science or software development at an early age. It was not until I finished high school that I started to learn about software. But reckon that's not something big to complain about, though I've gotta say, it has never been easy to walk down this path, and I guess many people reading this, who are also working in this field would perceive that well. There are times that I wanted to quit and find another job to do, something else that would unstrain my brain, not having to keep trying to get up to speed with the crazy tech world, even if it comes with less income. However, considering the fact that there are always people who are not as lucky as I am, the opportunities they were given in life may be very limited, therefore, the hardship I am facing barely means anything. In the end, I still managed to find my passion in software, which lies with _front-end development_. For those who are unfamiliar with the term "front-end", it's an aspect of software development, involving more on the ability to create beautiful interfaces and tailor the experience for the users.

So what does that have anything to do with Win7 Simu you may ask? Well, everything. Front-end development is something that I learned all by myself, so at the time, I needed to build something to familiarize myself into the basics and concepts. And oddly enough, rather than picking something that most people do to practice, probably an e-commerce website or some Twitter/Facebook/Netflix clones, out of the ideas that could not seem to be more impractical, I picked an OS clone. And there goes this __Win7 Simu__, my very first pet project which I have been nourishing and is growing.

### The goal

As mentioned, I started the project with the goal to practice and learn more about front-end. The idea of cloning an operating system on the web is pretty unique (due to the fact that it's time-consuming and impractical, or rather...useless), but apparently, it has so much potential in what I could learn and achieve just from using the web techs. Like, imagine having a calculator and a text editor opening side by side, or switching between nostalgic themes, just in a single website. It's like a super app containing several child apps, built from one single codebase, you get to train your brain to think about how to structure the project in a maintainable and scalable way, and all the different and various web techs you could apply to expand your knowledge. Sounds ideal, doesn't it? Unfortunately, people's minds don't work the same way, even my close friend called it a stupid app that is of no use. But I didn't give up on the idea and kept nourishing it. As a result, I did learn a lot about software/app making, a whole process from prioritization, implementation, testing, deployment to maintenance and user feedback collection. Even better, it has become a side hustle that I could earn a bit from the [advertisements](/blog/about-the-ads.md) I placed within the app.

::: tip "It's like an interactive resource to learn about Windows 7, or computer in general."
— User reviews on Google Play
:::

Starting with such a simple goal, I didn't think far ahead and intended to drop this project at some point in the future when there's not much else to learn. However, I have been receiving a lot of positive feedback and encouragement from my users (my fellow Windows lovers), reviews and comments telling me that Win7 Simu has been serving them well in teaching or learning about computers, where computers and devices are __not easily accessible__ for people in some countries. Such feedback literally has been making my days, making me realize that my silly project has helped people in some ways that I could have never thought of. Therefore, I decided to dedicate more of my time over the weekend and keep improving it, bringing forth more useful (though only basic) features and functionalities based on user suggestions, with love and appreciation.

<google-ads />

### The tech stack

In summary:

* HTML, CSS, JavaScript, Java
* [Sass](https://sass-lang.com/)
* [Vue 2](https://v2.vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Vue-i18n](https://kazupon.github.io/vue-i18n/)
* [Firebase](https://firebase.google.com/)
* [Capacitor](https://capacitorjs.com/)

There are several more open-sourced packages I used to build Win7 Simu, but the main tech stack is there. So yep, that may be to your surprise, despite being an Android app, the project was built from the ground using entirely web technologies, from the most fundamental stuff like HTML, CSS, JS to something a little more advanced such as Vue or Sass.

__Vue__ has been such an elegant and developer-friendly framework to use, saved me a bunch of time from all the code structuring, refactoring, and scaling. __Firebase__ is extremely useful for people who lack the interest and skillset in database/back-end development like me to easily deal with that stuff and integrate into the project with minimal effort. To transform a web app to an Android app, prior to knowing about __Capacitor__, I tended to a rough technique called __Hybrid app development__ and wrote my own JS interfaces in Java to bridge the web codebase with the Android native environment. It worked, but as an amateur, there were so many flaws and room for improvement in my code, then after knowing of Capacitor's existence, which is basically of the same principle but better in possible many ways, I transitioned into using Capacitor in no time, and the app has been working and growing with fewer problems.

I would also like to take this chance to unveil some technical difficulties related to an issue that a lot of users have been complaining about, which I included with the [FAQs](/win7simu/faq.html): __the unstable web browsers__. As you have known, Win7 Simu is composed of web techs, it is ultimately just a website/web app that runs inside a web browser/Webview, at this point, it is not possible for me to come up with a way to implement something like a web browser that runs inside your web browser/Webview without the help of an [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), but due to security concerns, iframes are blocked from accessing the majority of websites. Therefore, I have to host and run a server that pulls website content and injects it into the iframe every time a user uses the simulator's browser. As a result, all requests are bottlenecked to this server and may become overloaded anytime when the number of simultaneous users is way too high. This is a limitation of either the web techs, or even my skillset, but I'm afraid to say, it is what it is. If you happen to know a better solution, I'm more than happy to learn about it.

## It's come a long way

Looking back, the Windows 7 simulator certainly has come a long way. Being the first pet project that I started when taking my very first steps into the field of front-end, it has grown a lot since then. [The early prototype](https://www.sololearn.com/compiler-playground/W0jzR96Id2Bw/) you can still find on __Sololearn__, a platform that helped me get into web development back then (the code looks like a huge mess now LOL). [The next iteration](https://khang-nd.github.io/win7/) was basically pulled off from there and still used the same tech stuff, though with some improvements it still barely looked decent. Later on, I rewrote the project completely using the tech stack I mentioned above and released the first version on Android, you can still get a glimpse of it from the below video:

@[youtube](https://youtu.be/OarDV_dEkcY)

From here on, the simulator has been receiving updates regularly and strives for becoming a high-quality app with more cool features introduced in every update. In summary, here is a timeline of some milestones up until now, for your reference:

* July 29, 2019 - [an early prototype](https://www.sololearn.com/compiler-playground/W0jzR96Id2Bw) called __Windows 7 Simulation__ on Sololearn.
* September 21, 2019 - [the next iteration](https://khang-nd.github.io/win7/) of Windows 7 Simulation.
* January 28, 2020 - [the first release](https://youtu.be/OarDV_dEkcY) to Google Play under the name __Windows 7 Simulator__.
* February 4, 2020 - Google Play suspended and removed Windows 7 Simulator.
* February 13, 2020 - [a re-release](https://youtu.be/F6vtQUS0X6o) to Google Play under the name __Win7 Simu__.
* October 10, 2022 - celebrating 5M downloads of Win7 Simu 🥳🎉

## What's next

Win7 Simu has been undergoing several changes and updates from time to time to become what it is today. There are apparently still so many things that can be added to the simulator, and a lot of improvements to be done on the quality side, I mean, seriously, the teams at Microsoft spent literally years building and releasing a historic product such as the Windows 7 operating system, how would you expect a nobody to recreate it flawlessly in a short time, even if it's just a simulator.

As the project has been showing potential since, there are a couple of things I have had in mind in order to keep it growing and turn into something even more beneficial for the users, rather than blindly doing the development as I please, for your information:

* [x] Regularly check out user reviews and feedback from several sources (Google Play reviews, emails, comments etc.) for feature prioritization.
* [x] Provide some ways for users to participate in translating the interface → [Crowdin](https://crowdin.com/project/win7simu)
* [x] Keep users informed about the new changes for every update → [Changelog](/win7simu/changelog.md)
* [ ] Implement the suggested features from the users according to the assigned priorities.
* [ ] Implement some unique features that enhance the purpose of learning through the simulator.
* [ ] Integrate CI and incorporate automation tests to ensure the quality of every release.
* [ ] Public the source code at some point for various benefits.

With all that said, I'm making no promise that I would be able to implement all the features that have been suggested so far, or that I would be able to achieve any of the dot points above in a short span of time. If anything, I may only assure you that I will keep working on this project as long as I can. And if I may ask you, please keep accompanying me in my journey and stay tuned for future updates of Win7 Simu or any future products that I will be able to bring forward.

_Thank you for being part of my journey. Sincerely._

<m-blog-tag-list :tags="$page.frontmatter.tag" showIcon />

<google-ads />
