---
createdAt: 1666575743000
description: The most effective way to get iframes embedded in your web apps to load any websites
tags:
  - tips
  - technical
  - win7-simu
---

# How to get iframes to load any websites

<script setup lang="ts">
import { VPButton } from 'vitepress/theme'
</script>

![The infinite iframe](/assets/covers/load-any-websites-in-iframes.png)

<div :class="$style.center">
<VPButton size="big" text="Skip to the guide" href="#guide"/>
</div>

As mentioned in my previous post regarding [the issue](./building-win7-simu.md#iframe-issue) that the Win7 Simu's web browsers (using `iframes`) have been suffering from, I have been trying hard to come up with a way to solve it, from all the "google-ing", digging the source code of potential solutions, to a lot of trials and failures, I have finally come to the solutions that work. These solutions do not dismiss the issue completely, but they just seem to work better, in one way or another, than the earlier approach using a proxy server.

In this post, I'm gonna share the solution I have come to for the __Web__ version of Win7 Simu. The solution for the __Android__ platform is different and may be shared in another post.

## The scenario

![Cannot load website in iframe](./img/load-any-websites-in-iframes/win7simu-iframe-browser.png)

As I have shared in the previous [blog post](./building-win7-simu.md), Win7 Simu is made up of web techs, and [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) has been the technique of choice to simulate a web browser's functionalities due to its similar capabilities.

To put it simply, iframe is capable of embedding one website into another, allowing controlling the embedded website to some extent. However, due to security risks, the website owners may restrict this capability or not allow the embedding to happen at all, by setting the `X-Frame-Options` header to `sameorigin` and/or specifying the `Content-Security-Policy` header constraint on the response received by requests to load their website.

For example, if an iframe wants to load a Google search page at `https://google.com`, it will make a request to that URL, Google will respond to the request with the necessary data to present itself as a web page, including the `X-Frame-Options` and/or `Content-Security-Policy` headers in the response. If the iframe receives the `X-Frame-Options` with the `sameorigin` value, or with some cross-origin restriction rules in the `Content-Security-Policy`, the web page cannot be shown in the iframe.

![Iframe example](./img/load-any-websites-in-iframes/iframe-example.png)

_(Illustration poorly crafted using [Excalidraw](https://excalidraw.com/))_

And this is a common practice for the majority of websites, they don't owe you anything to let you run loose and potentially cause damage to their business.

So I'm out of luck then? There is no way to simulate a web browser's functionalities in a web environment? Well, more or less. With the problem identified, there is still a chance to come up with a solution, and the solution I have come to is __intercepting the response__ to remove these two headers so that the iframe can load any website normally.

For this, a __browser extension__ is required as it is the only possible way to intercept requests/responses coming through the user's web browser without much security concern.

<SponsorAd />

## Guide

The guide below has 2 versions: basic and advanced. Depending on your needs, you can choose to follow the basic guide or the advanced one.

### Basic

All you need to do is install the [Ignore X-Frame Headers](https://chromewebstore.google.com/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe) browser extension, and Win7 Simu's web browsers will be able to load any websites, no configuration is required.

Note that this extension is only available for Chrome, so if you are using other browsers, you will need to follow the advanced guide below.

::: danger Important
When not using Win7 Simu, it's advised that you should disable the extension to avoid potential security risks.
:::

### Advanced

For those who want more flexibility and security, this advanced guide will walk you through the steps to set up a browser extension that can intercept responses and remove the `X-Frame-Options` and `Content-Security-Policy` headers, allowing iframes to load any websites in the context of Win7 Simu only.

* Visit [Requestly home page](https://requestly.io/)
* Download the extension for your browser of choice, eg. pick the Chrome version of the extension if you are using Chrome, Firefox extension for Firefox, Edge add-on for Edge etc.

![Install Requestly on Edge](./img/load-any-websites-in-iframes/install-requestly-edge.png)

* Open the Requestly extension popup, select "Modify headers" (or go [directly here](https://app.requestly.io/rules/editor/create/Headers?source=popup))

![Create Requestly rule](./img/load-any-websites-in-iframes/create-requestly-rule.png)

* In the new tab, if you're greeted with an account creation/sign-in popup, click "Skip for now" to continue.
* In the create rule interface, click "Filters"

![Create Requestly rule step 1](./img/load-any-websites-in-iframes/create-requestly-rule-1.png)

* In the popup, input `win7simu.visnalize.com` into the "Page Domain" field, then "Close".

![Create Requestly rule step 2](./img/load-any-websites-in-iframes/create-requestly-rule-2.png)

* Back to the create rule interface, switch to the "Response Headers" tab, add the headers to remove as shown in the screenshot below, then "Save rule".

![Create Requestly rule step 3](./img/load-any-websites-in-iframes/create-requestly-rule-3.png)

* And that's it! Now Win7 Simu's web browsers can load any websites.

![Iframe now loads websites](./img/load-any-websites-in-iframes/win7simu-iframe-browser-loaded.png)

<style module>
.center {
  text-align: center;
}

.center a {
  text-decoration: none;
}

.copyright {
  text-align: center;
  margin: 2rem 0;
}

.copyright a {
  text-decoration: none;
}
</style>
