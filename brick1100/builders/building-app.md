---
description: Step-by-step guide to building a simple Password Generator app and running it on Brick 1100.
---

# Building an app for Brick 1100

:::tip Note
It is recommended to read the [Introduction](../builders.md) first to understand the background of Brick 1100, how it works, and the related tools before continuing with this guide.
:::

In this guide, let's build a simple __Password Generator__ app and get it running on [Brick 1100](../about.md).

This Password Generator app will generate a random password based on the user's input for the length of the password (maximum 30 characters). Below is a preview of the final app:

<video playsinline autoplay loop muted controls :class="$style.video">
    <source src="./img/pwd-generator.mp4" type="video/mp4">
</video>

<SponsorAd />

## 1. Setup

### 1.1. Tool

- Install [Visual Studio Code](https://code.visualstudio.com/) on your device.
  - This is the recommended code editor for this guide.
- Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server) extension in Visual Studio Code.
  - This extension will help you to run your app locally and see the changes in real-time.
- After the above steps, you should see a `Go Live` button at the bottom right corner of Visual Studio Code.

![Go live button](./img/live-server.png)

### 1.2. Codebase

- Create a [GitHub](https://github.com/) account if you don't have one.
- Fork the [Brick 1100 Apps](https://github.com/Visnalize/brick-1100-apps) directory repository to your account.
  - This repository contains the source code of all apps built for Brick 1100. Your app will be added to this repository upon completion.

![Fork repo](./img/fork-repo.png)

- Clone the forked repository to your Visual Studio Code:
  - Copy the repository URL as shown in the below screenshot.
  ![Clone repo](./img/clone-repo.png)
  - In Visual Studio Code, open the terminal (select `View > Terminal` from the menu or press <code>Ctrl + `</code>) and run the following command:

    ```bash
    git clone <repo_url>
    ```

  - Replace `<repo_url>` with the copied URL, e.g. `https://github.com/<username>/brick-1100-apps.git`.

- Once the repository is cloned, you will see the source code in your Visual Studio Code.

<SponsorAd />

## 2. Build

- In your Visual Studio Code, create a new folder named `pwd-generator` inside the `brick-1100-apps` folder. This folder will contain the source code of the Password Generator app.

:::tip Note
The repository already has a `pwd-generator` example, made with the same code as this guide. To follow along, you can delete it first, or give your folder another name, e.g. `my-pwd-generator`.
:::

- Start the Live Server by selecting the `pwd-generator` folder, right-clicking, and selecting `Open with Five Server (root)`.

![Open with Five Server](./img/run-server.png)

- A new browser tab with the URL `http://127.0.0.1:5500` will open, now every change you make to this folder will be reflected in real-time.

### 2.1. App structure (HTML file)

- Create an `index.html` file inside the `pwd-generator` folder with the below content:

```html:line-numbers {6,7,8,12}
<!DOCTYPE html>
<html>

<head>
    <title>Password Generator</title>
    <link rel="stylesheet" href="https://unpkg.com/bridge-1100/dist/index.css">
    <link rel="stylesheet" href="https://unpkg.com/bridge-1100/dist/font.css">
    <link rel="stylesheet" href="https://unpkg.com/bridge-1100/dist/ui.css">
</head>

<body>
    <script src="https://unpkg.com/bridge-1100/dist/index.umd.js"></script>
    <script src="script.js"></script>
</body>

</html>
```

- The `<body>` has no screens in it. The app uses the ready-made screens of `bridge.ui`, which we open from the JS file. The app consists of two screens:
  1. The first screen is for the user to input the length of the password.
  2. The second screen displays the generated password.
- Note the highlighted lines:
  - Line 6 and 7: these are links to the [Bridge 1100](../builders.md#bridge-1100) CSS and fonts files, they help enforce your app's interface to fit seamlessly with Brick 1100's monochrome visual.
  - Line 8: this is a link to the CSS file of the ready-made screens.
  - Line 12: this is a link to the Bridge 1100 JavaScript file, it helps bridge the communication between your app and Brick 1100.

:::danger [Best practice](./best-practices.md)
__Bridge 1100__ should be used in your app to maintain the visual consistency of your app with Brick 1100 and to ensure the app works correctly without having to invent the communication logic between your app and Brick 1100.
:::

### 2.2. App logic (JS file)

- Create a `script.js` file inside the `pwd-generator` folder. In this file, we will write the logic for the Password Generator app.
- First, we get the ready-made screens from [Bridge 1100](../builders.md#bridge-1100), and define the character set and the maximum password length:

```js
var ui = window.bridge.ui;

var charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
var MAX_LENGTH = 30;
```

- The `stop` function sends a message to Brick 1100 to close the app:

```js
function stop() {
  window.bridge.send(window.parent, { event: "stop" });
}
```

- The `generatePassword` function builds a random password of the given length. It uses the browser's secure random numbers (`window.crypto`), because `Math.random` is not made for passwords:

```js
function randomIndex(max) {
  var limit = 256 - (256 % max);
  var byte = new Uint8Array(1);
  do {
    window.crypto.getRandomValues(byte);
  } while (byte[0] >= limit);
  return byte[0] % max;
}

function generatePassword(length) {
  var password = "";
  for (var i = 0; i < length; i++) {
    password += charset.charAt(randomIndex(charset.length));
  }
  return password;
}
```

- Finally, we open the first screen with `ui.number`, and show the password with `ui.text`:

```js
ui.number({
  title: "Password length",
  maxLength: 2,
  action: "Generate",
  onDone: function (value) {
    var length = parseInt(value, 10);
    if (!length || length > MAX_LENGTH) {
      return ui.result({ type: "fail", message: "Out of range" });
    }
    ui.text({ title: "Your password", text: generatePassword(length), onDone: stop });
  },
  onBack: stop,
});
```

- Let's break down the above implementation:
  - `ui.number` opens a number input screen. The user types the length with the number keys. `maxLength: 2` limits the input to 2 digits, and `action` sets the label at the bottom of the screen.
  - When the user presses the _OK_ key, `onDone` is called with the input as a string.
  - If the length is empty or more than 30, `ui.result` shows a "fail" message. It closes by itself after a moment, and the user is back on the input screen.
  - Otherwise, `ui.text` opens on top with the password. When the user presses _OK_ on it, the app calls the `stop` function.
  - When the user presses the _Clear_ key, the input is reduced by 1 digit. If the input is empty, `onBack` is called and the app calls the `stop` function.
  - The ready-made screens handle the keys for you. For all options, refer to the [Bridge 1100 documentation](https://github.com/Visnalize/bridge-1100#-screens).

- Putting it all together, the `script.js` file should look like this:

:::details Click to open

```js
var ui = window.bridge.ui;

var charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
var MAX_LENGTH = 30;

function stop() {
  window.bridge.send(window.parent, { event: "stop" });
}

function randomIndex(max) {
  var limit = 256 - (256 % max);
  var byte = new Uint8Array(1);
  do {
    window.crypto.getRandomValues(byte);
  } while (byte[0] >= limit);
  return byte[0] % max;
}

function generatePassword(length) {
  var password = "";
  for (var i = 0; i < length; i++) {
    password += charset.charAt(randomIndex(charset.length));
  }
  return password;
}

ui.number({
  title: "Password length",
  maxLength: 2,
  action: "Generate",
  onDone: function (value) {
    var length = parseInt(value, 10);
    if (!length || length > MAX_LENGTH) {
      return ui.result({ type: "fail", message: "Out of range" });
    }
    ui.text({ title: "Your password", text: generatePassword(length), onDone: stop });
  },
  onBack: stop,
});
```

:::

:::tip Good to know

- To close the app with an error, send `stop` with an `error` message. Brick 1100 then shows the message as an error:

  ```js
  window.bridge.send(window.parent, { event: "stop", data: { error: "Out of range" } });
  ```

- To draw your own screens, listen to the keys with `window.bridge.on("keypress", ...)` and `window.bridge.on("numpress", ...)`. See the [Building a game](./building-game.md) guide and the `example.html` file in the repository. While a `bridge.ui` screen is open, it takes every key, and your own key callbacks are not called.
- Online apps cannot play sound. See [where your creation runs](../builders.md#where-your-creation-runs).

:::

:::tip [Best practice](./best-practices.md)
When writing app logic with JS, it is recommended to use the __ES5 syntax__ to ensure your app works on a wider range of devices, especially older devices that may not have the latest JavaScript features.
:::

<SponsorAd />

### 2.3. App styling

- This app does not need a CSS file. `ui.css` already styles every ready-made screen.
- If you draw your own screens, create a `style.css` file and link it in `index.html`. Keep these in mind:
  - The screen is `100vh` tall, so size everything in `vh`.
  - For colors, use `var(--foreground)` (the light screen color) and `var(--background)` (the dark pixel color) instead of fixed colors. They follow the phone's color and night mode.

:::danger [Best practice](./best-practices.md)
Ensure your app's styling is __consistent__ with Brick 1100's visual as much as possible. This decides whether your app will be accepted or rejected during the review process.
:::

### 2.4. Preview your app <Badge text="optional" type="info" />

> _See main guide: [Using Brick 1100 Previewer](./using-previewer.md)_

## 3. Publish

### 3.1. Commit and push

- In your Visual Studio Code, switch to the Source Control view on the left sidebar.
- Stage all changes by clicking the `+` button next to the files.
- Write a concise commit message in the text box and click the `Commit` button.

![Commit app source code](./img/commit.png)

### 3.2. Open a pull request

- Open your forked repository on GitHub from step 1.2.
- Click `Contribute > Open pull request`. This will create a pull request to merge your changes into the directory repository.

![Open pull request](./img/open-pr.png)

- On the pull request page, you can also preview your app again with the Netlify preview deployment link provided.
  - Note: append your app's folder path in the preview URL to access it, e.g. `https://deploy-preview-2--brick1100-apps.netlify.app/pwd-generator/`.

![Pull request page](./img/pr-page.png)

- 🎉 And that's it! Your app is now ready for review and will be available on Brick 1100 immediately once approved.

<style module>
.video {
  max-width: 200px;
  margin: auto;
}
</style>
