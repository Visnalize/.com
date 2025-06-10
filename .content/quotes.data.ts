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
  /** The URL link to original quote */
  url?: string;
}

const quotes: Quote[] = [
  {
    author: "mhhfill",
    date: "April 5, 2025",
    app: "win7simu",
    content:
      "5/5 stars. This windows 7 simulator app brings me to childhood nostalgic vibe! The interface is spot on, and the nostalgic value is high. I love reliving the good old days of Windows 7. The app is user-friendly, and the performance is smooth. If you're a 90s or early 2000s kid like me, you'll love this app. Highly recommended! 😄👌",
  },
  {
    author: "Людмила Карабун",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjV0BtRK5Zbbsuqm5BWjTN4LjTIyrrVdLVl68f27Zdgo9t6egncP=s50",
    date: "March 29, 2025",
    app: "win7simu",
    content:
      "The simulator is perfect, I've been using it for more than a year and it always helps me out in all situations. You can even change Windows versions, I love it!",
  },
  {
    author: "Blank",
    date: "April 21, 2025",
    app: "brick1100",
    content:
      "I love this app. No other dev made it this realistic. Others tried but ended up with abandoned projects or just cheap rip-offs. I can see how much effort you put into these and the updates are amazing.",
  },
  {
    author: "Mike",
    image:
      "https://ph-avatars.imgix.net/7855629/83d8cb02-f17e-4b35-9062-4f2a9d46e5f2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=50&h=50&fit=crop&frame=1&dpr=2",
    date: "April 14, 2025",
    app: "brick1100",
    url: "https://www.producthunt.com/posts/brick-1100-1102?comment=4535095",
    content:
      "What a clever nostalgia trip! Just tried this out and it instantly transported me back to my first Nokia days. The attention to detail is impressive - from the classic pixelated UI to those unmistakable retro sounds. It's actually refreshing to have a 'simpler' phone option without completely giving up my smartphone. Perfect for those moments when you want to disconnect from the endless scroll but still stay reachable. Plus, who doesn't miss playing Snake?",
  },
  {
    author: "Catherine Cormier",
    image:
      "https://ph-avatars.imgix.net/6424644/e53755f6-7108-4f76-8b90-32708d52d6d8.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=50&h=50&fit=crop&frame=1&dpr=2",
    date: "April 14, 2025",
    app: "brick1100",
    url: "https://www.producthunt.com/posts/brick-1100-1102?comment=4534360",
    content:
      "Pure nostalgic bliss! As a proud 90s kid, this hits me right in the feels—those pixelated screens, retro sounds, and that indestructible Nokia vibe bring back all the joy of simpler times! 😄",
  },
  {
    author: "Nataša Šebek",
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQFfbH9JAkGvMw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1605579691308?e=1750896000&v=beta&t=k3s9aqp-bH2_awOSnSVeGVySBkUrbYItSlf1x5jakgI",
    date: "April 18, 2025",
    app: "brick1100",
    url: "https://www.linkedin.com/posts/natasha0824_brick-1100-brickify-your-smartphone-activity-7318772620374474752-9-CQ",
    content:
      "It's hilarious, nostalgic, and weirdly fun. Highly recommend for anyone needing a break from the doomscroll.",
  },
  {
    author: "Old Man Krootox",
    date: "November 19, 2023",
    app: "brick1100",
    content:
      "Exactly what I was looking for! I wanted to show my son what we had growing up and how he shouldn't be ungrateful he doesn't have the top of the range iPhone. Also think I will be spending an unhealthy amount of time on snake. Great app!",
  },
  {
    featured: true,
    author: "Wolfgang M. Lobo",
    date: "February 26, 2024",
    app: "brick1100",
    content:
      'I can\'t put my words on how I missed a phone like that. For an unreleased app, this is the best "phone simulator" someone has ever made. Congratulations Dev(s)!',
  },
  {
    author: "Rene-Nic Watson-Densem",
    date: "May 10, 2024",
    app: "brick1100",
    content:
      "This is an early access game and it's already amazing! It doesn't look great on my giant tablet screen, but on a phone I'm sure it'd look great! Keep me updated on all of the things you add. Keep up the amazing work!",
  },
  {
    featured: true,
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjWqWrSYgrTQ1DjlG74zHIVfMX_pjnls3lpgFjPXXVLgPsEi23E=s50",
    author: "Kevin Casasola",
    date: "December 23, 2023",
    app: "brick1100",
    content:
      "Discovered this app by pure chance. Beautiful, you can turn on your smartphone's flashlight directly from this simulator. It also has old Nokia games, ringtones, and you can even send messages from the simulator. Top!",
  },
  {
    author: "deneme test",
    date: "July 3, 2024",
    app: "brick1100",
    content:
      "I felt nostalgic. I remember this phone and even its ringtones. I listened to this phone a lot, especially when I was little and very familiar with Nokia. As a Nokia lover, I loved this application!",
  },
  {
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjV3hn2RD4F6lcx2aFb9sVuVTJdAWOiMrpGDum8nePd071QAZ5Az5A=s50",
    author: "Ayla Rodríguez (Estrella Española)",
    date: "August 15, 2024",
    app: "brick1100",
    content:
      "Unfortunately all Nokia phones are gone, but I'm lucky to have found this app, I'm very happy because I will be able to retrieve the memories of Nokia 1100 phone 😢❤️",
  },
  {
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVWt7lgjmwv9wttQyEgPnGS2RVN7phdaLJ09B_ogRt-bR7O5Orw=s50",
    author: "Nicolas Gabriel",
    date: "March 4, 2025",
    app: "brick1100",
    content:
      "I liked it, just like a cell phone, this game fulfilled its objective. Rating: 10/10.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjVquRybmpjqJqsxn8DmOlGV7zYA6c18rzIP93OJgMhZWXYys-Fv=s50",
    author: "Kendall Lizano Ávila",
    date: "December 18, 2024",
    app: "brick1100",
    content:
      "I love this game/application, I like to make a new mobile phone look like an old one, I hope this type of mobile phone returns one day, but this application gives me an experience close to those old mobile phones, I love the aesthetics and the noises, I was expecting something very simple, but for me it seems very complete. Very good work and it is a nice gift for people who love retro.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocJMMyLiCU_bsTFan4u7XGZnYRCfXStgrf5rrOjk6ceG5esCmA=s50",
    author: "Seva Lgov",
    date: "January 7, 2024",
    app: "win7simu",
    content:
      "The best and most realistic Windows simulator. Thanks to the developers for the simulator. I've tried many Windows simulators and haven't found a better one yet :)",
  },
  {
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXxENPzar9a5ojf4iafj3LnkV6Gq-7UE0mrQ2kZP9CPk8UvzBUGxA=s50",
    author: "Elizangela Gomes dos reis",
    date: "March 25, 2024",
    app: "win7simu",
    content:
      "This app is good and very similar to Windows 7, but it's missing some features that the real Windows has, and some things don't work. The developers could make this app even more complete by adding more features and functions, such as: more Windows 7 wallpapers, more operations and functions, greater resemblance to the original, etc. Other than that, it's good, and I recommend it!",
  },
  {
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXItkA4IirNfdEZCQq0YDDEUQK5S2Z8eypPmv2m2X6nMTu1YTAAAg=s50",
    author: "Tashauna Stewart",
    date: "May 20, 2024",
    app: "win7simu",
    content:
      "I absolutely love this app! I can upload files on my phone to it, and work in a much less visually cluttered environment than my phone! I love everything about this app so far, and can't wait to see what else the developer has in store!!! Thank you so very much!",
  },
  {
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUEhpwI6e251WWHyI13-ru3zOYnCAmRPJ5IY9J0CDnvZcgyCFCE=s50",
    author: "Davi da Silva Bento",
    date: "July 17, 2024",
    app: "win7simu",
    content:
      "The app is really cool, I showed it to my grandmother and she remembered Windows 95. She loved it and so did I!",
  },
  {
    author: "Fares Alami",
    date: "March 20, 2024",
    app: "win7simu",
    content:
      "This is absolutely one of the best simulators for windows on mobile! I respect the devoloper for not being greedy, the app has ads but they are not disturbing and are present in reasonable quantity so it could benefit both the person using it and the devoloper in which he could get profit, there are still some bugs but I won't blame the devoloper because I know it's hard to code all of this, especially when you are one person or a small team, the app itself is nearly perfect. Keep up the good work!",
  },
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
    image:
      "https://play-lh.googleusercontent.com/a-/ALV-UjXB4VKtTl-B8FXhulUUDaEhgh9zMqzH85KctsnEMZQYPyc=s50",
    author: "Cip",
    date: "September 23, 2023",
    app: "win7simu",
    content:
      "That's what I call a real Windows Simulator, it is exactly like Windows 7 but on mobile! I really like it and I gave 5 STARS beacuse of it! I hope you make really awesome updates on this game without no doubt! Thanks for reading this!",
  },
  {
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
