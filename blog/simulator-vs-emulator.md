---
createdAt: 1708488145000
description: Understand the differences between simulators and emulators, what they mean for Win7 Simu.
tags:
  - tips
  - sharing
  - win7-simu
---

# Simulators and Emulators: What's the difference?

![Simulators vs Emulators](/assets/covers/simulators-vs-emulators.png)

Oftentimes, I get asked to implement in [Win7 Simu](../win7simu/about.md) the capability to run Windows executable programs. This is one of the most common requests, and sometimes, the app even gets low ratings just because people are confused about the difference between a simulator and an emulator. Therefore, in this article, the differences between the two will be explained and what they mean in the context of Win7 Simu.

## What is an Emulator?

::: tip Definition
An emulator can _replace_ the original for real use.
:::

* You can play GameBoy games on a computer using a GameBoy emulator, e.g. VisualBoyAdvance, mGBA.
* You can run Android apps on a computer using an Android emulator, e.g. BlueStacks, Genymotion.
* You can run Windows programs on a Mac device using a Windows emulator, e.g. Parallels Desktop, VMware.
* You can test websites on different devices using a browser emulator, e.g. BrowserStack, LambdaTest.

In other words, with an emulator, you can run or use the original software on different devices or platforms, with the behavior and performance nearly identical to the original.

## What is a Simulator?

::: tip Definition
A simulator is a _model_ for study and analysis.
:::

* You can simulate the flight of an airplane using a flight simulator, e.g. Microsoft Flight Simulator, X-Plane.
* You can simulate the behavior of a circuit using a circuit simulator, e.g. LTspice, TINA-TI.
* You can simulate the behavior of a robot using a robot simulator, e.g. Webots, Gazebo.

In other words, a simulator aims to provide a similar environment to the original, mainly for study, training and analysis purposes.

## What about Win7 Simu?

Win7 Simu, as the name suggests, is a __simulator__. It only simulates the Windows 7 environment by providing a similar look and feel. It is not capable of running Windows executable programs. This is because Win7 Simu is built using [web techs](./building-win7-simu.md#the-tech-stack), which can only mimic the functionality and behavior of the system to a certain extent.

What you can do with Win7 Simu is entirely up to the web techs it uses (and of course, my skillset). For example, File Explorer in Win7 Simu relies on the [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), Paint is implemented with the capabilities of the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API), Chrome/Internet Explorer is powered by [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) with some flawed workarounds, etc.

----

In conclusion, I hope the article has clarified the differences between simulators and emulators in an easy-to-understand way, and that you now have a better understanding of what Win7 Simu should be capable of. If you have any questions or suggestions, feel free to leave a comment below.
