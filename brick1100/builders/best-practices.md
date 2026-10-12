---
description: Best practices to follow when building games and apps for Brick 1100, covering security, design consistency, and compatibility.
---

# Best practices

This is a list of best practices to follow when building games/apps for [Brick 1100](../about.md). They ensure your creation is secure, has a consistent design with Brick 1100, provides good compatibility, and most importantly, helps the maintainers review and approve your submission faster.

## Categories

- <Badge text="Essential" type="danger" />: These practices are essential and must be followed for your creation to be approved.
- <Badge text="Recommended" type="tip" />: These practices are recommended to be followed to ensure good quality and compatibility.
- <Badge text="Optional" type="info" />: These practices are optional but can help enhance your development experience.

<SponsorAd />

## List of best practices

### Use Bridge 1100 <Badge text="Essential" type="danger" />

[Bridge 1100](../builders.md#bridge-1100) provides reusable elements you can use in your creation, such as styling, fonts, and the logic to interact with Brick 1100. It helps you build faster and enforce consistency with Brick 1100.

### Ensure consistent design <Badge text="Essential" type="danger" />

Bridge 1100 provides the necessary means in most cases, although you may need to manually adjust your styles to make your creation fit Brick 1100's design in some cases. Make sure your creation looks and feels like it belongs on Brick 1100.

For colors, use the CSS variables that Brick 1100 sets on load, instead of fixed colors. They follow the phone's color, the night mode, and the screen when it dims:

- `var(--foreground)`: the light screen color (the LCD green).
- `var(--background)`: the dark pixel color.

The names may feel reversed. For example, a selected row uses `background: var(--background); color: var(--foreground);`.

:::warning Note
The old variables `--c-green`, `--c-black`, `--c-black-alpha`, and `--c-trans` were removed in Bridge 1100 version 1.3.0. Replace them with `--foreground` and `--background`.
:::

### Use the ready-made screens <Badge text="Recommended" type="tip" />

`bridge.ui` gives you screens that look and work like the phone's own: `ui.list`, `ui.text`, `ui.confirm`, `ui.result`, `ui.number`, and `ui.loading`. Use them for menus, messages, and inputs, so your creation feels like part of the phone and you write less key handling. Add `https://unpkg.com/bridge-1100/dist/ui.css` to use them.

:::tip Tip
See the [Building an app](./building-app.md) guide and the [Bridge 1100 documentation](https://github.com/Visnalize/bridge-1100#-screens) for details.
:::

### Ensure valid audio URLs <Badge text="Essential" type="danger" />

When building games with audio, ensure that the audio URLs are __absolute__ and valid for the audio files to be loaded correctly and played back as expected on Brick 1100.

Sound works in Online games and in the Previewer only. Online apps do not play sound.

:::tip Tip
Refer to [this section](./building-game.md#_2-3-game-assets) for an example of how to use audio in your game.
:::

### Prefix your storage keys <Badge text="Recommended" type="tip" />

All apps share one website, and all games share another. This means they also share the same `localStorage`. Start every key with your folder name, so your data does not mix with other creations:

```js
// Instead of:
localStorage.setItem("score", 10);

// Write:
localStorage.setItem("my-game:score", 10);
```

### Use ES5 syntax <Badge text="Recommended" type="tip" />

Brick 1100 relies on WebView to work. On older devices, ES6 or newer syntax may not be well-supported. To ensure compatibility with a wider range of devices, use ES5 syntax.

:::details Some common ES6+ features to avoid

- Variable declaration

```js
// Instead of:
let x = 5;
const y = 10;

// Write:
var x = 5;
var y = 10;
```

- Arrow function

```js
// Instead of:
const add = (a, b) => a + b;

// Write:
function add(a, b) {
  return a + b;
}
```

- Template literal

```js
// Instead of:
const message = `Hello, ${name}!`;

// Write:
var message = 'Hello, ' + name + '!';
```

- Destructuring

```js
// Instead of:
const { x, y } = point;

// Write:
var x = point.x;
var y = point.y;
```

- Class

```js
// Instead of:
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

// Write:
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log('Hello, ' + this.name + '!');
};
```

:::

:::tip Tip
You can use this preconfigured [ESLint Playground](https://eslint.org/play/#eyJ0ZXh0IjoiLyogZXNsaW50IHF1b3RlczogW1wiZXJyb3JcIiwgXCJkb3VibGVcIl0gKi9cbmNvbnN0IGEgPSAnYic7Iiwib3B0aW9ucyI6eyJlbnYiOnt9LCJwYXJzZXJPcHRpb25zIjp7ImVjbWFGZWF0dXJlcyI6e30sImVjbWFWZXJzaW9uIjo1LCJzb3VyY2VUeXBlIjoic2NyaXB0In0sInJ1bGVzIjp7fX19) to check your code for ES5 compatibility.
:::

### Listen to each event once <Badge text="Recommended" type="tip" />

`bridge.on` keeps only one callback for each event. If you call `bridge.on` again for the same event, the new callback runs twice for each key. Call `bridge.off` first if you need to change the callback:

```js
window.bridge.off("keypress");
window.bridge.on("keypress", handleMenuKeys);
```

A simpler way is to call `bridge.on` once, and check the state of your creation inside the callback.

### Write clean code <Badge text="Recommended" type="tip" />

"Clean code" is a subjective term, but it generally refers to code that is easy to read, understand, and maintain. To help maintainers review your submission faster, please write clean code.

:::tip Recommended resources

- [Summary of "Clean code"](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29) by Robert C. Martin
- [Naming cheatsheet](https://github.com/kettanaito/naming-cheatsheet)

:::

### Use the Previewer <Badge text="Optional" type="info" />

[The Previewer](./using-previewer.md) helps you see how your app looks and behaves on Brick 1100 prior to publishing. It can help you debug, identify issues, and make improvements to your creation.
