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

### Ensure valid audio URLs <Badge text="Essential" type="danger" />

When building games with audio, ensure that the audio URLs are __absolute__ and valid for the audio files to be loaded correctly and played back as expected on Brick 1100.

:::tip Tip
Refer to [this section](./building-game.md#_2-3-game-assets) for an example of how to use audio in your game.
:::

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

### Write clean code <Badge text="Recommended" type="tip" />

"Clean code" is a subjective term, but it generally refers to code that is easy to read, understand, and maintain. To help maintainers review your submission faster, please write clean code.

:::tip Recommended resources

- [Summary of "Clean code"](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29) by Robert C. Martin
- [Naming cheatsheet](https://github.com/kettanaito/naming-cheatsheet)

:::

### Use the Previewer <Badge text="Optional" type="info" />

[The Previewer](./using-previewer.md) helps you see how your app looks and behaves on Brick 1100 prior to publishing. It can help you debug, identify issues, and make improvements to your creation.
