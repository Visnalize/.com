import { getAppData } from "../../.content/apps.data";
import MarkdownIt from "markdown-it";
import { APP_NAMES, ORIGIN } from "../theme/constants";
import { App } from "../theme/utils/types";

const md = new MarkdownIt();

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Visnalize",
  url: ORIGIN,
  logo: `${ORIGIN}/logo.svg`,
  sameAs: [
    "https://play.google.com/store/apps/dev?id=7119371547095400132",
    "https://apps.apple.com/us/developer/khang-nguyen/id1758113756",
    "https://www.youtube.com/@visnalize",
    "https://github.com/Visnalize",
    "https://x.com/visnalize",
    "https://bsky.app/profile/visnalize.com",
    "https://www.instagram.com/visnalize",
  ],
};

function toTitleCase(slug: string) {
  if (slug in APP_NAMES) return APP_NAMES[slug as App];
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getBreadcrumbSchema(
  transformedPath: string,
  pageTitle: string,
) {
  const segments = transformedPath.split("/").filter(Boolean);
  if (!segments.length) return undefined;

  let path = "";
  const items = [
    { name: "Home", item: `${ORIGIN}/` },
    ...segments.map((segment, index) => {
      path += `/${segment}`;
      const isLast = index === segments.length - 1;
      return {
        name: isLast ? pageTitle : toTitleCase(segment),
        item: `${ORIGIN}${path}/`,
      };
    }),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function getBlogPostingSchema(options: {
  title: string;
  description: string;
  canonicalUrl: string;
  image: string;
  createdAt: number;
  lastUpdated?: number;
}) {
  const { title, description, canonicalUrl, image, createdAt, lastUpdated } =
    options;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image,
    url: canonicalUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    datePublished: new Date(createdAt).toISOString(),
    dateModified: new Date(lastUpdated || createdAt).toISOString(),
    author: { "@type": "Organization", name: "Visnalize", url: ORIGIN },
    publisher: {
      "@type": "Organization",
      name: "Visnalize",
      logo: { "@type": "ImageObject", url: `${ORIGIN}/logo.svg` },
    },
  };
}

export async function getAppSchema(
  app: App,
  canonicalUrl: string,
  image: string,
) {
  const appData = await getAppData();
  const stats = appData[app]?.universal;
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_NAMES[app],
    url: canonicalUrl,
    image,
    applicationCategory: stats?.genre || "EntertainmentApplication",
    operatingSystem: app === "win7simu" ? "Android, Web" : "Android, iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: stats?.currency || "USD",
    },
    publisher: { "@type": "Organization", name: "Visnalize", url: ORIGIN },
  };

  if (stats?.ratings) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: stats.score,
      ratingCount: stats.ratings,
      bestRating: "5",
      worstRating: "1",
    };
  }

  return schema;
}

export function getFaqSchema(content: string) {
  const items: { question: string; answer: string }[] = [];
  let currentQuestion: string | undefined;
  let currentAnswerLines: string[] = [];

  const flush = () => {
    if (currentQuestion && currentAnswerLines.length) {
      const answer = md.render(currentAnswerLines.join("\n").trim());
      if (answer) items.push({ question: currentQuestion, answer });
    }
    currentQuestion = undefined;
    currentAnswerLines = [];
  };

  for (const line of content.split("\n")) {
    const questionMatch = line.match(/^### (.+)/);
    if (questionMatch) {
      flush();
      currentQuestion = questionMatch[1].trim();
      continue;
    }
    if (/^## /.test(line)) {
      flush();
      continue;
    }
    if (currentQuestion) currentAnswerLines.push(line);
  }
  flush();

  if (!items.length) return undefined;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
