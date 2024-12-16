---
createdAt: 1697189033000
description: From a simple idea, what merely looked like a playful demo on CodePen, but turned into a full-fledged app
tags:
  - brick-1100
  - sharing
  - technical
---

# Turning my CodePen into an actual app

![Brick 1100 play store screenshot](/assets/covers/from-codepen-to-app.png)

::: tip What is CodePen?
For those who don't know, [CodePen](https://codepen.io/) is an online community for testing and showcasing user-created code snippets (mostly from HTML, CSS and JavaScript). It functions as an online code editor and open-source learning environment, where developers can create code snippets, called "pens," and test them.
:::

Some time ago, I created a codepen that replicated the look of an old phone titled [**Nokia 1100**](https://codepen.io/khangnd/pen/abmWpaY).

Turned out people found it interesting somehow as the pen was seen receiving a few interactions. Years later, after gaining more skills, and more experience, I came back to this idea to actually complete it. From a mere silly codepen that was barely functional, it has become a full-fledged app (though still in beta) and made its way to [**Google Play**](https://play.google.com/store/apps/details?id=com.visnalize.brick1100). In this article, I'm happy to share the progress, how and what I used to build it, and let's explore some cool and unique features I have brought out with this app.

## A silly idea that got realized

Software developers are those who tend to look for project ideas where we can challenge ourselves and put our knowledge and skills into practice. Just like the rest, when I first got myself into web dev, I had plentiful ideas of what I could build to learn coding more easily, enrich my portfolio with more useless projects, and dazzle the recruiters to land a fulfilling job. However, a little bit out of the ordinary person I am, I actually wanted to build something cool, something original that not many people had thought of and done, so I came up with the idea of replicating the look of an old phone (whoa, how innovative...) and simulate some of its functionalities (so original...). As a result, we have the "Nokia 1100" codepen above.

At that time, I stopped where I thought was sufficient for a silly idea as it was, even if I wanted to go further, my skills at that point wouldn't allow it, because I was still a NOOB! (though I still am). I just left it there and forgot about it. Sometime later, after having gained some experience working for companies and leveling up myself a bit, I revisited some past projects to see if I could advance any of them with my new abilities. The Nokia simulation was at the top of that list, considering how much traction it gained at the time (maybe not much for you, but that was a lot for a NOOB!). And here we are, a pet project that actually got finished and made it to the public.

## The making process

The idea initiated in codepen was made with pure HTML/CSS/JS as I had just started learning the fundamentals. However, this time, applying the wealth of front-end development knowledge I have earned over the years, I rebuilt the project from scratch, making good use of modern web technologies and frameworks to speed up the development, and ease the feature addition and maintenance process as it grows.

I started spending my free time outside of work hours and weekends to get into it. After about two weeks, I finally made it an MVP (minimum viable product) with most of the [core features covered](../brick1100/changelog.md#_0-0-1-sep-26-2023), sort of. So far, the most prominent stuff that I used to build it:

- **Vue 2.7** - the main framework that empowers its UI.
- **Pinia** - the state management library to handle shared state across components.
- **Vue Router** - the routing library to ease the navigation within the app.
- **Capacitor** - the MVP that helps transition a traditional web app into a mobile app effortlessly.
- And lastly, the most incredible database for managing user data - **localStorage** 😂

There are a few other packages and libraries that enhance the developer experience and contribute to the feature feasibility, e.g several **Capacitor plugins** wiring up certain native mobile features for the app, **dayjs** providing out-of-the-box utils to work with date and time, or **voca** for handy string utils without the needs of reinventing the wheel.

<SponsorAd />

### Breaking down the components

At a high level, the app is composed of the following major building blocks:

![Brick 1100 components](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/65aigdwqjto881os3uax.png)

- The container, which is just a freaking image, is layered below the other components. It also holds the responsibility of resizing the app to adapt to the device/browser window's size.
- The screen plays a vital role in rendering what would be otherwise visible to the users.
- The keypad/numpad is in charge of the interactivity of the whole app. The pattern here is that with the help of Pinia, the keypad/numpad would emit respective global events as the users interact with it and the other components then behave accordingly. It is easily the toughest part that I had to deal with as meticulously as possible, to capture the essence of a nostalgic feeling back when we all still used these pads to operate a phone.

Here's an outlook on how the above design is implemented for your reference:

```html
<template>
  <phone-container>
    <phone-screen :state="state">
      <menu-screen title="Menu" :index="index">
        <menu-select
          class="main"
          :items="items"
          :current="index"
          @[Event.Back]="handleMenuBack"
          @[Event.Select]="handleMenuSelect"
          @[Event.Change]="handleMenuChange"
        />
      </menu-screen>
    </phone-screen>
    <phone-keypad />
    <phone-numpad />
  </phone-container>
</template>
```

A simplified snippet of the keypad/numpad implementation:

```js
// PhoneKeypad.vue

export default {
  data() {
    return {
      startTime: null,
      timer: null,
      isHolding: false,
    };
  },
  computed: mapStores(useKeypadStore),
  methods: {
    clearTimer() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    press(key) {
      if (this.timer) this.clearTimer();

      this.keypadStore.press(key);
      this.startTime = Date.now();
      this.timer = setTimeout(() => this.hold(key), HOLD_TOLERANCE);
    },
    release(key) {
      this.clearTimer();
      if (Date.now() - this.startTime < HOLD_TOLERANCE || this.isHolding) {
        this.keypadStore.release(key);
        this.isHolding = false;
      }
    },
    hold(key) {
      this.isHolding = true;
      this.keypadStore.hold(key);
    },
  },
};

// keypad.js

export const useKeypadStore = defineStore("keypad", {
  state: () => ({ key: null, event: "", _diff: 0 }),
  actions: {
    _set(event, key) {
      this.key = key;
      this.event = event;
      // workaround to observe the keypad interaction,
      // as the key before and after the interaction may be the same key.
      this._diff++;
    },
    press(value) {
      this._set(Gesture.Press, value);
    },
    release(value) {
      this._set(Gesture.Release, value);
    },
    hold(value) {
      this._set(Gesture.Hold, value);
    },
  },
});
```

### Adding some twists

While the project originally aimed to replicate the phone experience faithfully, it also presented an opportunity to add unique twists that, to me, might turn out to be the selling points for the app to be more useful: a collection holder of **mini-games/apps** where newbie devs can also **learn** coding by submitting to this collection.

Due to the simplistic nature of the app and its design, I have a strong belief that it can be perceived as a code playground where people can get their ideas implemented in the rawest form, text-based apps, or apps with pixelated, monotonic graphics. Let's take a look at the simple model below:

![Bridge 1100 model](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cllsehc05yilq0orszfc.png)

Brick 1100 was built in a way that we could easily extend its functionalities with external games/apps. These external games/apps can communicate with Brick 1100 itself back and forth via an interface called Bridge 1100, you can read more about that [in this Github repo](https://github.com/Visnalize/bridge-1100).

It's nothing sort of any kind of innovation (as expected from a noob). Those external apps/games are just being gathered and pulled from [this Github repo](https://github.com/Visnalize/brick-1100-apps). By the time of this article, you can see from that repo, there are only 2 apps available:

- **Pwd Generator** - a simple password generator from a length input.
- **Randomizer** - a simple randomizer app that outputs a random result each time depending on the selected mode.

Both of them are super simple, plain text-based apps that can be completed in no time. However, they were developed using different web techs, with the first one using pure HTML/CSS/JS while the latter using the Mithril.js framework. This gives you the freedom of choice when it comes to the web tech that you want to learn by making and takes relatively little of your time and effort to complete an app idea.

How those apps show up in Brick 1100:

![Brick 1100 online apps](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/53cw2mjrfxzu6dpo0zwo.jpg)

## Final words

Despite how silly and ridiculously simple this project looks, I had a really great time building it and felt super proud to see a pet project that actually came to light and got installed on a few user devices. If it has somehow captured your interest and want to try it out, you can install it from [**Google Play**](https://play.google.com/store/apps/details?id=com.visnalize.brick1100). And feel free to join [our Discord](https://discord.gg/6AQDnZa4Xm) to have some little chit-chat, or if you want to build something on it but getting stuck somewhere, I'm happy to help out there.

And now, if you will excuse me I have an app to develop, and some users to satisfy. Thank you for reading ✌
