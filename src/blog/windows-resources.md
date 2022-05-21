---
layout: SideAds
description: Ways that you can retrieve Windows resources such as wallpapers, icons, audio files etc.
---

# How to get Windows resources

<div class="social">
  <comment-count />
  <social-share />
</div>

In [Win7 Simu](/win7simu/about.md), I use several resources from the Windows operating systems. These resources include the **wallpapers, audio files, and icons**. There is no single source that provides all of these, in fact, to gather up, I have to do a lot of searching, dig through different Windows library files, try several methods, and use a variety of tools for decompiling and conversion. It was not easy, if not time-consuming, and tedious. So here in this blog, I'm documenting some steps and sharing a little bit of how I do it.

::: warning Important Note
All resources you may find from the methods shared in this blog are copyrighted by Microsoft. Please be considerate when using and sharing these resources.
:::

## Searching around

Yes, searching on the internet, that's obviously the first thing to do when you have no idea where to start. Luckily, as a popular operating system, with just a few keywords, we get plenty of results for the wallpapers and icons.

**Wallpapers** are the easiest resource you may find, they are all over the internet. However, to get the best quality ones, there is no other place than directly from Windows itself. In most versions of Windows, the wallpapers are stored in **C:\Windows\Web\Wallpaper**.

**Icons** are a bit tricky, although you can find a few icons as ready-made images on the internet, not all of them are available from the search results. For instance, you may find the My Computer and Recycle Bin icons easily, but not the rest such as a high-quality Calculator icon or the Folder icon... It comes down to a path that I have to dig the Windows library files (**.dll**) using some tools to grab the icons, which I will share in details in the [following section](#extracting-icons-from-dll-files).

For **audio**, I mostly convert the Windows sound videos on YouTube to mp3 format using [this online tool](https://ytmp3.cc/downloader/). Later on, I get to know that you can find the audio collection in **C:\Windows\Media**, all sounds are available in the wav format.

<google-ads />

## Extracting icons from .dll files

Coming to the difficult part with the icons, as I have mentioned above, not all icons you may find easily on the internet, the only way to properly retrieve is extracting them from the .dll files found in **C:\Windows\System32**.

Most of the icons are stored in the following dll files:

* imageres.dll
* shell32.dll
* pifmgr.dll
* accessibilitycpl.dll
* ddores.dll
* moricons.dll
* mmres.dll
* setupapi.dll
* wmploc.dll
* ...and more you may find in [this article](https://www.digitalcitizen.life/where-find-most-windows-10s-native-icons/)

Each dll file is versioned in accordance with the Windows version, and depending on the architecture, some versions of Windows may or may not include certain .dll files. For instance, the imageres.dll is versioned **6.1.7600.16385** in Windows 7 and **10.0.17134.1** in Windows 10, while in Windows XP and earlier versions, they are not available. Therefore, where to look for the icons is varied from Windows to Windows.

:::tip
To grab the right dll file for the Windows version you wish, go to [dll-files.com](https://www.dll-files.com/).
:::

Once you have got a hold of the dll files, the next step is to extract the icons out of them. The tool I have been using for this task is [IconsExtract](https://www.nirsoft.net/utils/iconsext.html) by NirSoft.

![IconsExtract](https://www.nirsoft.net/utils/iconsext.gif)

A so easy-to-use tool that all you need is just providing it with the dll file and the tool will automatically scan for the icons in it and display for you to view and save the icons you desire.

The saved icons are of the .ico format, a format that contains multiple sizes of an icon which might not be convenient in some use cases as it tends to be unreadable and redundant in size. Therefore, I usually convert it to other image formats such as jpg, png, or webp, using [this online tool](https://www.aconvert.com/image/).

## Summary

So to sum up, all the steps and tools to get this job done:

* Wallpapers are located in **C:\Windows\Web\Wallpaper**.
* Audio files are located in **C:\Windows\Media**.
* Icons need to be extracted from dll files located in **C:\Windows\System32**.
  * Dll files for different Windows versions can be found at: [dll-files.com](https://www.dll-files.com/).
  * Suggested tool for extraction: [IconsExtract](https://www.nirsoft.net/utils/iconsext.html).
  * Optionally convert the .ico format to other image formats using [this tool](https://www.aconvert.com/image/).

<google-ads />

<comment-section />
