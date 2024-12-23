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
      "Thanks for bringing back nostalgia memories !! That was my first phone ever so I love it!!!",
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
      "I love this simulator! This app made me feel the best experience of Windows 7! My computer is Windows 10, but no need to downgrade, I will use this app to use Windows 7. It has the cool programs like Games, Internet Explorer, Paint, Notepad, Calculator, Snipping Tool and Windows Media Player, I recommend u to download this!",
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
