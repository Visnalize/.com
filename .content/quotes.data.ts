import { defineLoader } from "vitepress";
import { App } from "../.vitepress/theme/utils/types";

export interface Quote {
  /** The related app */
  app: App;
  /** The image of the author, fallback to a generated avatar */
  image?: string;
  /** The authors' name */
  author: string;
  /** The content of the quote */
  content: string;
  /** The date of the quote */
  date: string;
  /** Featured on the home page */
  featured?: boolean;
}

const quotes: Quote[] = [
  {
    author: "Ian Martinez",
    date: "January 1, 2025",
    app: "win7simu",
    content:
      "Thank you for creating this amazing experience for Windows 7 enthusiasts. I'm excited to see how this project evolves.",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjXLmTtoPW0sRMoI54SkWWdQQ5_nQ8hXhCPf0pY8kSMqSEwsdvgv=s50",
    author: "Kevin Calderón",
    date: "December 20, 2024",
    app: "win7simu",
    content:
      "It is the best Windows simulator since it looks the same as the original Windows, you can change the appearance to that of other versions of Windows, although it has ads that are very few, it deserves 5 stars, I recommend it.",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjUHSeoy0IOvARsGBPJ_sJaRPy_CJ4vbuSRRph1TaveOUHpIvQAE=s50",
    author: "Ekaterina Koroleva",
    date: "December 15, 2024",
    app: "win7simu",
    content:
      "Sooooo cool app. It's cool to have a computer on your phone. This also works without the Internet!",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjVOdFLiu1V44Sd7nO5zx4pQDpGAO_qkWeEozTsK_ZU8a-fO2AA=s50",
    author: "Álvaro Almeida",
    date: "December 14, 2024",
    app: "win7simu",
    content:
      "I'm simply amazed because of the excellence of this application, I downloaded it to try to find out how to use a computer, I know the basics hehe but I can't download an image from the gallery in the application, I really loved this application and if it's already good too can improve further, I also wanted to ask to improve the experience of people who have never used computers or who have difficulty using a regular computer. I loved this app, congratulations on the great potential of the app.",
  },
  {
    author: "Екатерина Астрид",
    date: "December 13, 2024",
    app: "win7simu",
    content:
      "The application is amazing, including launching the paint browser and so on, even the start menu is there, it's just amazing, including it can be downloaded to any device and I'm writing from a tablet, yes, I installed this application on my tablet and my applications and games are also here.",
  },
  {
    author: "Mr_Nazar",
    date: "November 28, 2024",
    app: "win7simu",
    content:
      "I'm shocked, just how did you do it! The best app for all Windows, etc., even games. Cool app! Respect to the creator and thanks for the simulator.",
  },
  {
    author: "Maria Jose Cano Rodriguez",
    date: "January 27, 2024",
    app: "win7simu",
    content:
      "I love that I have never had a computer so good to play and experiment with. And the content inside looks very real. Thank you.",
  },
  {
    author: "João Gabriel",
    date: "January 27, 2024",
    app: "win7simu",
    content:
      "I loved it! I wanted to buy a computer but I didn't have the money, so to make ends meet I downloaded this one and I loved it! Congratulations!",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjVatkKK3cHiwnvwRcalrikA2niCYC8Ajq64kjFXsn5BHZqqrwwD=s50",
    author: "Sergio Francisco",
    date: "November 29, 2023",
    app: "win7simu",
    content:
      "I haven't tested it in depth, but as little as I've used the app, I can already say that it's one of the best I've used... Topp, the experience has been incredibly wonderful. I don't think I'll be disappointed from what little I could observe, it's a 10. If there are changes to the point where I regret it, I'll change this review.",
  },
  {
    author: "Nester Animator",
    date: "December 9, 2023",
    app: "win7simu",
    content:
      "Top simulator! While competitors post a photo of their desktop, this person did everything so well that even I didn't expect it. For those who want to install .exe, .msi applications on it, guys, this is a SIMULATOR, not an EMULATOR, before downloading, read the description or look on the Internet what a simulator/emulator is.",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjWojRnq9lEdED368z2eB2HeBamkido6HUJFQxmmuq-eVpxWgQ-5=s50",
    author: "Soviet Gamer621",
    date: "December 12, 2022",
    app: "win7simu",
    content:
      "I've been using this app for a while now and it's actually really well-made compared to other simulators I've seen and I can tell there's been a lot of effort put into it. Overall, this is a great app, would recommend. Keep up the good work.",
  },
  {
    featured: true,
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjXB4VKtTl-B8FXhulUUDaEhgh9zMqzH85KctsnEMZQYPyc=s50",
    author: "Cip",
    date: "September 23, 2023",
    app: "win7simu",
    content:
      "That's what I call a real Windows Simulator, it is exactly like Windows 7 but on mobile! I really like it and I gave 5 STARS beacuse of it! I hope you make really awesome updates on this game without no doubt! Thanks for reading this!",
  },
  {
    featured: true,
    author: "lucashenriquelamb",
    date: "October 7, 2024",
    app: "brick1100",
    content:
      "Thanks for bringing back nostalgia memories!! That was my first phone ever so I love it!!!",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjWVVLDM1Y-EkHO1LCy1URPuVG_6jO1YKcHagc6Ck5TvDCY=s50",
    author: "Holy Relic",
    date: "December 12, 2023",
    app: "win7simu",
    content:
      "You guys are friggin geniuses!! It's one of the best app I ever downloaded. It really feels like i have a pocket computer! You can even search Google with internet and it actually works! Good job guys, keep it up! Something is still missing though, but hey I liked it a lot! Thank you!",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/a/ACg8ocKaurBBx2OIYBSoOOKZ5hoAzX1VkfgXhGJyPLdB_HND=s50",
    author: "Anushka Tamil",
    date: "December 20, 2023",
    app: "win7simu",
    content:
      "It's really awesome! I did not expect this! Even a computer will lose. Thanks for providing a great application",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjUgQwkh_0gQN_vXMGCh9_2vvnWTQ2_BznSYlOK4lNZpDKk=s50",
    author: ":/",
    date: "November 25, 2023",
    app: "win7simu",
    content:
      "I used to have a Windows 7 computer that my mom would work on and ever since I've been sad to see it go. But this, this has brought this nostalgia back to me simply as a mini computer in my pocket. I recommend this app if you like Windows 7",
  },
  {
    featured: true,
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjV7c71QQ1XkrJlnWZl7hzOqvajsFWmWUUum2rSYmunD5Vo=s50",
    author: "Aldree Syafiq",
    date: "March 24, 2023",
    app: "win7simu",
    content:
      "Best Windows Simulator ever! If you want to change from a phone to a PC then this app is for you. It has more than just Windows 7, it also has Win8, Win8.1, WinXp, Win11, Win10, WinVista, Win95, Win3.1, Win2000, and MacOS. There are ads but they don't really pop out too often which makes things better. There are some features that requires ads to unlock but its ok. In overall, 10/10.",
  },
  {
    featured: true,
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjXbYQwGITwYMZ6Qp032fAolpeeiolVEZDtx7jB0IVlS8A=s50",
    author: "Leox",
    date: "January 14, 2022",
    app: "win7simu",
    content:
      'Omg! It works!!! Thank you so much for bringing our childhood memories back! I really like the game "Purble Place". A huge respect for giving us strong nostalgia vibes about our childhood so much!. Thank you so much guys~!',
  },
  {
    featured: true,
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjVdAXU2dB_gSdXh1xnHhR6U_vW6bzibXPnU_rWBe1paAbc=s50",
    author: "The Gaelic gladiator",
    date: "December 16, 2021",
    app: "win7simu",
    content:
      "I actually posted a review on this about a year back but the app has changed a lot it's gone from 4* - 5* originally it was very minimal and you couldn't really do anything but now it's full of features and the themes are brilliant in fact you should just call it windows simulator cause with just the click of a button you have a different windows version.",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjUQK3pNlNqOycbRStQThmjHxaoYfUcvWPpT0PTvx9hPgX4=s50",
    author: "Jephe Mendoza",
    date: "August 20, 2021",
    app: "win7simu",
    content:
      "I absolutely love this game. Nice animations, good amount of programs, able to play .mp4 files, 2 browsers, and the childhood games!",
  },
  {
    featured: true,
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjVwH0ozTDkOMR1kNBxQ8QUBB8yCtQSzJhcZMGp8YSLo8B0=s50",
    author: "Railey Dean Tiamson",
    date: "November 7, 2020",
    app: "win7simu",
    content:
      "I love this simulator! This app made me feel the best experience of Windows 7! My computer is Windows 10, but no need to downgrade, I will use this app to use Windows 7. It has the cool programs like Games, Internet Explorer, Paint, Notepad, Calculator, Snipping Tool and Windows Media Player, I recommend everyone to download!",
  },
];

declare const data: Quote[];

export { data };

export default defineLoader({
  load() {
    return quotes
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
      .map((quote) => ({
        ...quote,
        image:
          quote.image ||
          `https://ui-avatars.com/api/?name=${quote.author}&bold=true`,
      }));
  },
});
