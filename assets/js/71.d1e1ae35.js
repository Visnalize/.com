(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{509:function(e,t,o){"use strict";o.r(t);var s=o(13),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"how-to-get-windows-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-windows-resources"}},[e._v("#")]),e._v(" How to get Windows resources")]),e._v(" "),t("m-blog-meta"),e._v(" "),t("p",[t("img",{attrs:{src:"https://images.unsplash.com/photo-1624571409108-e9a41746af53?auto=format&fit=crop&w=740&q=80",alt:"Windows OS"}})]),e._v(" "),t("p",[t("em",[e._v("Cover image by Windows via "),t("a",{attrs:{href:"https://unsplash.com/photos/me4HT8AX4Ls",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unsplash"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("In "),t("RouterLink",{attrs:{to:"/win7simu/about.html"}},[e._v("Win7 Simu")]),e._v(", I use several resources from the Windows operating systems. These resources include the "),t("strong",[e._v("wallpapers, audio files, and icons")]),e._v(". There is no single source that provides all of these, in fact, to gather up, I have to do a lot of searching, dig through different Windows library files, try several methods, and use a variety of tools for decompiling and conversion. It was not easy, if not time-consuming, and tedious. So here in this blog, I'm documenting some steps and sharing a little bit of how I do it.")],1),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Important Note")]),e._v(" "),t("p",[e._v("All resources you may find from the methods shared in this blog are copyrighted by Microsoft. Please be considerate when using and sharing these resources.")])]),e._v(" "),t("h2",{attrs:{id:"searching-around"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#searching-around"}},[e._v("#")]),e._v(" Searching around")]),e._v(" "),t("p",[e._v("Yes, searching on the internet, that's obviously the first thing to do when you have no idea where to start. Luckily, as a popular operating system, with just a few keywords, we get plenty of results for the wallpapers and icons.")]),e._v(" "),t("p",[t("strong",[e._v("Wallpapers")]),e._v(" are the easiest resource you may find, they are all over the internet. However, to get the best quality ones, there is no other place than directly from Windows itself. In most versions of Windows, the wallpapers are stored in "),t("strong",[e._v("C:\\Windows\\Web\\Wallpaper")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Icons")]),e._v(" are a bit tricky, although you can find a few icons as ready-made images on the internet, not all of them are available from the search results. For instance, you may find the My Computer and Recycle Bin icons easily, but not the rest such as a high-quality Calculator icon or the Folder icon... It comes down to a path that I have to dig the Windows library files ("),t("strong",[e._v(".dll")]),e._v(") using some tools to grab the icons, which I will share in details in the "),t("a",{attrs:{href:"#extracting-icons-from-dll-files"}},[e._v("following section")]),e._v(".")]),e._v(" "),t("p",[e._v("For "),t("strong",[e._v("audio")]),e._v(", I mostly convert the Windows sound videos on YouTube to mp3 format using "),t("a",{attrs:{href:"https://ytmp3.cc/downloader/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this online tool"),t("OutboundLink")],1),e._v(". Later on, I get to know that you can find the audio collection in "),t("strong",[e._v("C:\\Windows\\Media")]),e._v(", all sounds are available in the wav format.")]),e._v(" "),t("a-google-ad"),e._v(" "),t("h2",{attrs:{id:"extracting-icons-from-dll-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extracting-icons-from-dll-files"}},[e._v("#")]),e._v(" Extracting icons from .dll files")]),e._v(" "),t("p",[e._v("Coming to the difficult part with the icons, as I have mentioned above, not all icons you may find easily on the internet, the only way to properly retrieve is extracting them from the .dll files found in "),t("strong",[e._v("C:\\Windows\\System32")]),e._v(".")]),e._v(" "),t("p",[e._v("Most of the icons are stored in the following dll files:")]),e._v(" "),t("ul",[t("li",[e._v("imageres.dll")]),e._v(" "),t("li",[e._v("shell32.dll")]),e._v(" "),t("li",[e._v("pifmgr.dll")]),e._v(" "),t("li",[e._v("accessibilitycpl.dll")]),e._v(" "),t("li",[e._v("ddores.dll")]),e._v(" "),t("li",[e._v("moricons.dll")]),e._v(" "),t("li",[e._v("mmres.dll")]),e._v(" "),t("li",[e._v("setupapi.dll")]),e._v(" "),t("li",[e._v("wmploc.dll")]),e._v(" "),t("li",[e._v("...and more you may find in "),t("a",{attrs:{href:"https://www.digitalcitizen.life/where-find-most-windows-10s-native-icons/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this article"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("Each dll file is versioned in accordance with the Windows version, and depending on the architecture, some versions of Windows may or may not include certain .dll files. For instance, the imageres.dll is versioned "),t("strong",[e._v("6.1.7600.16385")]),e._v(" in Windows 7 and "),t("strong",[e._v("10.0.17134.1")]),e._v(" in Windows 10, while in Windows XP and earlier versions, they are not available. Therefore, where to look for the icons is varied from Windows to Windows.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("To grab the right dll file for the Windows version you wish, go to "),t("a",{attrs:{href:"https://www.dll-files.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dll-files.com"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("p",[e._v("Once you have got a hold of the dll files, the next step is to extract the icons out of them. The tool I have been using for this task is "),t("a",{attrs:{href:"https://www.nirsoft.net/utils/iconsext.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IconsExtract"),t("OutboundLink")],1),e._v(" by NirSoft.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://www.nirsoft.net/utils/iconsext.gif",alt:"IconsExtract"}})]),e._v(" "),t("p",[e._v("A so easy-to-use tool that all you need is just providing it with the dll file and the tool will automatically scan for the icons in it and display for you to view and save the icons you desire.")]),e._v(" "),t("p",[e._v("The saved icons are of the .ico format, a format that contains multiple sizes of an icon which might not be convenient in some use cases as it tends to be unreadable and redundant in size. Therefore, I usually convert it to other image formats such as jpg, png, or webp, using "),t("a",{attrs:{href:"https://www.aconvert.com/image/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this online tool"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),t("p",[e._v("So to sum up, all the steps and tools to get this job done:")]),e._v(" "),t("ul",[t("li",[e._v("Wallpapers are located in "),t("strong",[e._v("C:\\Windows\\Web\\Wallpaper")]),e._v(".")]),e._v(" "),t("li",[e._v("Audio files are located in "),t("strong",[e._v("C:\\Windows\\Media")]),e._v(".")]),e._v(" "),t("li",[e._v("Icons need to be extracted from dll files located in "),t("strong",[e._v("C:\\Windows\\System32")]),e._v(".\n"),t("ul",[t("li",[e._v("Dll files for different Windows versions can be found at: "),t("a",{attrs:{href:"https://www.dll-files.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dll-files.com"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Suggested tool for extraction: "),t("a",{attrs:{href:"https://www.nirsoft.net/utils/iconsext.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("IconsExtract"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Optionally convert the .ico format to other image formats using "),t("a",{attrs:{href:"https://www.aconvert.com/image/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this tool"),t("OutboundLink")],1),e._v(".")])])])]),e._v(" "),t("m-blog-tag-list",{attrs:{tags:e.$page.frontmatter.tag,showIcon:""}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);