---
createdAt: 1762279022334
description: Learn how to delete or disable a proxy server on Windows, macOS, iPhone, Android, and browsers - fix slow or broken internet connections fast.
tags:
  - tips
  - technical
---

# How to Delete a Proxy Server

![Cover image](https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?auto=format&fit=crop&w=1200&q=80)

_Cover image by Scott Rodgerson via [Unsplash](https://unsplash.com/photos/PSpf_XgOM5w)_

Let's start with the basics so we're on the same page. A proxy server is a middle layer between your device and the websites or services you're trying to reach. Instead of connecting directly, your traffic goes through another server first. This can affect how websites see your connection, how fast pages load, what content you can access, and even how certain apps behave.

Sounds useful, right? Sometimes yes - but not always.

There are plenty of reasons why you might want to delete or disable a proxy server from your device or browser. Maybe it was turned on for testing and you forgot to switch it off. Maybe a company or school network forced specific settings that you don't need at home. Maybe some app changed your connection settings without making it obvious. And sometimes, let's be honest, you just want your internet to "work normally" again because things started acting weird after a proxy was added.

Here are some common signs that tell you it's time to remove the proxy server from your configuration:

* Pages suddenly load much slower than usual, even on a fast connection
* Apps can't connect to the internet unless you're on a certain network
* You get random connection errors or "access denied" messages
* Some services keep showing the wrong region or language
* You didn't configure a proxy yourself, and you don't recognize the settings at all

If you're experiencing any of these, you're in the right place. I'll walk you through how to delete a proxy server on Windows, macOS, iPhone, Android, and popular browsers. I'll also explain how to check if the proxy is fully gone, and what to do if it keeps turning itself back on.

Before we go device by device, take a minute to look at the quick overview below so you know what we're doing and where to do it.

| Device / Platform | Where to Turn Off Proxy Settings | Action Needed |
| ----- | ----- | ----- |
| Windows 10 / 11 | Settings → Network & Internet → Proxy | Disable "Use a proxy server" |
| macOS | System Settings → Network → Your Network → Proxies | Uncheck all configured proxy types |
| Google Chrome | Settings → System → Open your computer's proxy settings | Turn off system proxy (follows OS settings) |
| Firefox | Settings → Network Settings | Select "No proxy" |
| iPhone (iOS) | Settings → Wi-Fi → (i) → Configure Proxy | Set to "Off" |
| Android | Wi-Fi → Network details → Advanced → Proxy | Set Proxy to "None" |

Now let's get practical.

## How to Delete a Proxy Server on Windows (Windows 10 and Windows 11)

Windows machines often get proxy settings applied automatically by offices, universities, "optimizer" apps, or even certain browser extensions. The good news: removing a proxy in Windows usually takes less than a minute if you know where to look.

Here's how to remove the proxy server on Windows 10 and Windows 11 using the built-in settings:

1. Click the Start menu and open Settings.
2. Go to Network & Internet.
3. On the left (Windows 10) or the side panel (Windows 11), choose Proxy.
4. You'll see two main sections: Automatic proxy setup and Manual proxy setup.

Let's break those down.

Automatic proxy setup

* If "Automatically detect settings" is ON, that's usually fine.
* If "Use setup script" is ON and there's a URL in the script address field, turn it OFF if you don't want your system using that proxy configuration.

Manual proxy setup

* Look for "Use a proxy server."
* If it's turned ON and you see an IP address and port filled in, switch it OFF.

After you switch these off, close Settings. You usually don't even need to restart your computer. Try opening a browser and loading a few sites. If they open quickly and consistently, you're good.

What if it turns itself back on?

If you disable a proxy and it keeps coming back after reboot, that usually means one of two things:

* A company policy or school network policy is forcing those settings.
* Some background app or browser extension is reapplying the proxy on startup.

To handle that, remove or disable extensions you don't fully trust, especially anything related to "network control," "traffic management," or "smart routing." Also check any "free accelerator" or "network booster" software and uninstall it. If it's a work laptop, you may not be allowed to permanently change the proxy; in that case, the setting will reset because of group policy.

One more option for advanced users: you can also reset the proxy configuration through Command Prompt using `netsh winhttp reset proxy`. That clears system-level proxy rules for services that respect WinHTTP.

## How to Remove Proxy Settings on macOS

On macOS, proxy settings are controlled per network interface. That means you can turn off the proxy for Wi-Fi separately from Ethernet. You have to edit the one you're actually using.

Follow these steps on recent versions of macOS:

1. Click the Apple menu and open System Settings (or System Preferences on older versions).
2. Go to Network.
3. Select the connection you're currently using, for example Wi-Fi or Ethernet.
4. Click Details… (or Advanced… on older macOS).
5. Navigate to the Proxies tab.

You'll now see a list of possible proxy types: Web Proxy (HTTP), Secure Web Proxy (HTTPS), SOCKS Proxy, and others.

Do this:

* Uncheck all proxy types that are enabled.
* If you see any server addresses and ports filled in, clear them out or just uncheck the box for that proxy type.
* Click OK, then click Apply.

That's it - you've effectively deleted the proxy server configuration for that network.

Here's a useful tip: macOS sometimes remembers multiple Wi-Fi networks with different proxy settings. So if you connect to your office Wi-Fi and then go home, you might see different behavior. You may need to repeat this process for more than one saved network if you notice the proxy keeps coming back only in certain locations.

How do you confirm it worked? Open Safari or Chrome and browse several pages, including something lightweight like a search engine and something heavier like streaming or a dashboard you use for work. If everything loads as expected and you're not getting strange login prompts, you've successfully removed the proxy.

## How to Delete Proxy Server Settings in Popular Browsers

Sometimes the proxy isn't applied at the operating system level. Sometimes it's controlled inside the browser itself. This is especially common in Firefox, and less common (but still possible) in corporate versions of Chrome.

Let's walk through Chrome and Firefox, because they behave differently.

### Google Chrome

Chrome mostly follows the system-level proxy on Windows or macOS. That means when you "change proxy" in Chrome, it actually just opens your OS network settings. So to remove a proxy from Chrome:

1. Open Chrome.
2. Click the three dots (top right) and go to Settings.
3. Scroll down and click System (or search for "proxy" in the settings search bar).
4. Click Open your computer's proxy settings.

At this point you'll be back in Windows Proxy settings or macOS Network settings, depending on your device. Turn off any manual proxy there, just like we covered above.

There is one more thing to do: check extensions. Go to chrome://extensions and disable or remove any extension that says it "manages your network," "controls your traffic," or "routes your connection." If an extension is forcing a custom proxy, removing it will stop the browser from reconfiguring itself every time it launches.

### Mozilla Firefox

Firefox is more independent. It can ignore the system and use its own custom proxy. That means even if Windows or macOS has no proxy set, Firefox might still be using one.

To delete a proxy server in Firefox:

1. Open Firefox.
2. Click the menu button (three lines in the corner) and choose Settings.
3. Scroll all the way down to Network Settings.
4. Click Settings… next to it.
5. Look at the options:
   * No proxy
   * Auto-detect proxy settings for this network
   * Use system proxy settings
   * Manual proxy configuration

If "Manual proxy configuration" is selected and you see an IP address and port filled in (for example, `192.168.0.12:8080`), change the selection to No proxy. Then click OK to save.

After this, Firefox will connect directly without routing through the proxy server.

One more note: if your Firefox is controlled by an organization (you'll sometimes see a small note saying "Your browser is managed by your organization"), you may not be allowed to permanently change these settings. If that's the case, the proxy will come back automatically when policies reload.

## How to Turn Off Proxy on iPhone (iOS) and iPadOS

Yes, your phone can also have a proxy set - and yes, sometimes it happens without you realizing it. For example, maybe you joined a Wi-Fi network at a hotel, café, or office and it pushed a proxy configuration to your device. After you leave that place, the proxy can still stick around in that saved network profile. That can cause slow or broken apps later.

Here's how to remove a proxy on iPhone or iPad:

1. Open Settings.
2. Tap Wi-Fi.
3. Tap the (i) button next to the Wi-Fi network you're currently using.
4. Scroll down to Configure Proxy.

You will usually see one of three options there:

* Off
* Manual
* Automatic

If it's set to Manual, you'll see fields for Server, Port, and possibly Authentication (username/password). Change the setting to Off.

If it's set to Automatic and there's a URL in the "URL" field for the proxy script (also called a PAC file), switch it to Off.

That's it. After switching it to Off, go back one screen. iOS saves the change immediately. You can now test any app that was having trouble connecting.

Here's a pro move: repeat this for any other saved Wi-Fi networks you use often. If you work in different locations or travel a lot, one network may have added a proxy while others did not. Clearing it on all your main networks can prevent surprises later.

## How to Remove Proxy on Android Phones and Tablets

Android also supports per-network proxy settings. Just like iOS, the proxy can be added automatically by a Wi-Fi network, and then it just stays there until you manually disable it.

Follow these steps (wording may differ slightly depending on your Android version and manufacturer):

1. Open Settings.
2. Tap Network & Internet (or Connections, or Wi-Fi, depending on your device).
3. Tap Wi-Fi and connect to (or select) the network you're using.
4. Tap the network name again or tap the gear icon next to it to open its details.
5. Look for Advanced or Additional settings.
6. Find the Proxy option.

You'll usually see something like:

* None
* Manual
* Proxy Auto-Config

If it's set to Manual, that means the device is using a specific server and port for all web traffic on that Wi-Fi. Change it to None.

If it's set to Proxy Auto-Config, there might be a configuration URL entered (similar to a PAC script). Change it to None.

Tap Save.

After that, test your browser, your messaging apps, and any services that were failing to connect before. If everything works smoothly again, the proxy is gone.

One important detail for Android users: these settings are saved per Wi-Fi network. So if you move between office Wi-Fi and home Wi-Fi, you might have a proxy on one and not the other. You need to repeat the check for each important network you use.

## How to Tell If the Proxy Is Really Gone

Sometimes you think you turned off the proxy, but your device still behaves like it's using one. Maybe pages redirect. Maybe you're still seeing login popups that don't belong to your home network. Maybe your traffic still "looks foreign" to certain sites. So how do you confirm?

Here's a simple checklist you can follow:

* Open two different browsers (for example, Chrome and Firefox) and load common sites. If one browser works and the other doesn't, only one of them still has a proxy set.
* Restart the app that was giving you trouble. Some apps cache connection methods until you force close them.
* Forget and reconnect to the Wi-Fi network. On phones, tap "Forget This Network," then rejoin it clean. That wipes any stored proxy rules for that network.
* Check your IP before and after. There are basic "what is my IP" checkers online. If your IP address changes drastically, that can be a sign that traffic was previously routed through a proxy.

If you're still getting unusual behavior even after removing all proxy settings, there's one more possibility: you are using a network (like workplace internet or public Wi-Fi) that routes all outgoing traffic through its own gateway, regardless of what you set locally. In that case, you cannot fully "delete the proxy server" because it's enforced upstream. You'd need a different network connection (for example, your own mobile hotspot) to get around that limitation.

## When You Actually Need a Proxy - and How to Choose a Trustworthy One

Disabling a proxy is the right move when it's misconfigured, slowing you down, or simply not needed anymore. But there are also valid and legal reasons to intentionally use a proxy: testing geo-specific ads, monitoring how websites render from different regions, managing multi-account workflows for business tasks, running price comparison or SEO tools, and so on. In these cases, the proxy is not a problem; a bad proxy is the problem.

If you ever need high-quality, reliable proxy infrastructure instead of random unknown servers from forums or extensions, you should always choose providers that are transparent about what kind of IPs they give you, what regions they support, how authentication works, and how rotation is handled. For example, commercial solutions like [PROXYS.IO](https://proxys.io/en) offer structured access to residential and datacenter IPs with clear management options, instead of injecting hidden settings into your device without telling you.

That last part matters. A trustworthy service gives you credentials and documentation. A shady one silently rewrites your network settings and leaves junk behind after you uninstall it.

Let's talk about cleanup next.

## Final Cleanup: Remove Old Profiles, Extensions, and Scripts

Here's a short action list you can follow after you delete a proxy server, just to make sure nothing lingers in the background and tries to put it back:

* Remove unknown browser extensions  
   Go through Chrome, Firefox, Edge, etc. If you see something you don't recognize - especially anything called "optimizer," "booster," "protector," "secure surf," "anonymizer," "shield," or "smart route" - remove it. Extensions can silently modify proxy rules.
* Uninstall suspicious desktop apps  
   On Windows, open "Add or remove programs." On macOS, check Applications. Anything related to "web accelerator," "traffic controller," or similar that you don't use on purpose can go.
* Reset network settings if nothing else works  
   On Windows, you can use "Network reset" under Network & Internet → Status. On iPhone and Android, there's also a "Reset network settings" option. This step removes Wi-Fi networks and Bluetooth pairings too, so only do it if you're okay re-entering passwords.
* Check for managed profiles (mobile)  
   On iOS and some Android builds, corporate or school profiles can enforce proxy rules. If you see a profile you don't recognize under settings (for example, "Device Management" or "Configuration Profile"), and this is your personal device, you can remove it.

Below is a simple checklist you can keep:

* Turn off manual proxy in Windows or macOS
* Turn off manual proxy in Firefox (if used)
* Turn off proxy in Wi-Fi settings on mobile
* Remove suspicious extensions
* Restart browser / reconnect Wi-Fi
* Test again

Once you've done all of this, you've not only deleted the proxy server from your device - you've also taken control back over how your traffic moves. That's important. If a proxy is truly your choice, it should work for you, not against you.

## Summary: You're in Control of Your Connection

Let's wrap this up with something simple: knowing how to delete a proxy server is not just about fixing connection problems. It's about ownership. Your internet connection should behave the way you expect. Your apps should open when you tap them. Your pages should load fast. You should not have to fight with mystery network settings that nobody warned you about.

On desktop, go into your system proxy settings and switch off anything that looks manual or forced. On macOS, uncheck all proxy boxes in the Proxies tab. On Windows, disable "Use a proxy server" under Manual proxy setup. In Firefox, make sure "No proxy" is selected. On iPhone and Android, edit the Wi-Fi network and set Configure Proxy or Proxy to Off / None. Then test.

One last piece of advice: if you ever use a proxy again, treat it the way you treat a password. Know where it came from. Know who controls it. Know how to turn it off.

That way, you're never stuck wondering why your internet "suddenly broke" - because you'll already know exactly where to look and exactly how to fix it.
