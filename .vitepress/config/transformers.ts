import { readFileSync } from "fs";
import matter from "gray-matter";
import { imageSizeFromFile } from "image-size/fromFile";
import { join } from "path";
import { cwd } from "process";
import { PageData, UserConfig } from "vitepress";
import decapitalize from "voca/decapitalize";
import { getLatestVersion } from "../../.content/misc.data";
import { apps } from "../../.content/simulated-apps.data";
import { themes } from "../../.content/themes.data";
import { APP_NAMES, ORIGIN } from "../theme/constants";
import { getAppImage, getThemeImage } from "../theme/utils/images";
import { isDevMode } from "../theme/utils/misc";
import { markdownToPlainText, previewText } from "../theme/utils/strings";
import { App } from "../theme/utils/types";
import {
  getAppSchema,
  getBlogPostingSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from "./schema";

// https://vitepress.dev/reference/site-config#transformpagedata
export const transformPageData: UserConfig["transformPageData"] = async (
  data: PageData & Record<string, any>,
) => {
  const { content } = matter.read(data.filePath);

  // blog listing paginated page (non-tag)
  if (data.params?.page && !data.params?.tag) {
    const page = data.params.page;
    data.title = `News and sharing - Page ${page}`;
    data.description = `Page ${page} of our blog. Helpful insights, sharing, tips and tricks on various topics from Visnalize.`;
  }

  // blog listing tag page
  if (data.params?.tag) {
    const { tag } = data.params;
    const page = data.params.page;
    let title = `Posts with tag "${tag}"`;
    let description = `All posts with tag '${tag}'. Discover helpful insights, sharing, tips and tricks on various topics from Visnalize.`;
    if (tag === "sponsor") {
      title = "Sponsor posts";
      description =
        "Sharing, updates, thoughts, and insights from our sponsors. Don't forget to check out their products and services.";
    }
    if (tag === "news") {
      title = "News and updates";
      description =
        "Catch up on the latest news, updates, and announcements, including important changes, major releases, and more.";
    }
    if (page) {
      title += ` - Page ${page}`;
      description = `Page ${page}. ${description}`;
    }
    data.title = title;
    data.description = description;
  }

  if (data.relativePath.match(/simulated/) && data.params?.app) {
    const { app: slug } = data.params;
    const app = apps.find((a) => a.slug === slug);
    const imageUrl = getAppImage(slug);
    if (!app) throw new Error(`App not found: ${slug}`);
    data.title = app.title + " in Win7 Simu";
    data.description = previewText(
      data.title + " " + decapitalize(app.description),
      155,
    );
    data.frontmatter = { ...data.frontmatter, ...app };
    data.frontmatter.image = isDevMode() ? imageUrl : ORIGIN + imageUrl;
    data.frontmatter.imageData = await imageSizeFromFile(
      join(cwd(), "public", imageUrl),
    );
    try {
      const filePath = join(cwd(), ".content", "simulated-apps", slug + ".md");
      data.frontmatter.markdown = readFileSync(filePath, "utf-8");
    } catch (e) {
      // file not available, ignore
    }
  }

  if (data.relativePath.match(/themes/) && data.params?.theme) {
    const { theme: slug } = data.params;
    const themeData = themes.find((t) => t.slug === slug);
    if (!themeData) throw new Error(`Theme not found: ${slug}`);
    const imageUrl = getThemeImage(themeData.id);
    data.title = themeData.title + " theme in Win7 Simu";
    data.description = `Explore the aesthetics and functionality exclusive to the ${themeData.title} theme in Win7 Simu.`;
    data.frontmatter = { ...data.frontmatter, ...themeData };
    data.frontmatter.image = isDevMode() ? imageUrl : ORIGIN + imageUrl;
    data.frontmatter.imageData = await imageSizeFromFile(
      join(cwd(), "public", imageUrl),
    );
  }

  if (data.relativePath.startsWith("notes")) {
    data.frontmatter.aside = false;
    data.frontmatter.social = false;
    if (!data.frontmatter.description) {
      data.description = previewText(markdownToPlainText(content), 155);
    }
  }

  if (data.relativePath.match(/testimonials/) && data.params?.app) {
    const app = APP_NAMES[data.params.app as App];
    data.title = "Wall of love - Testimonials for " + app;
    data.description = `See what users have to say about ${app}. Share your love for retro apps too!`;
  }

  if (data.relativePath.match(/(win7simu|brick1100)\/about/)) {
    const [app] = data.relativePath.split("/");
    data.frontmatter.appVersion = getLatestVersion(app);
  }

  if (data.relativePath.startsWith("blog")) {
    data.frontmatter.sidebar = false;
  }

  const transformedPath = data.relativePath.replace(/((index)?\.md)$/, "");
  const canonicalUrl = `${ORIGIN}/${transformedPath}`;

  let ogImage =
    data.frontmatter.image || content.match(/!\[.*?\]\((.*?)\)/)?.[1];
  ogImage = ogImage?.startsWith(".") ? undefined : ogImage;
  ogImage = ogImage?.startsWith("/") ? ORIGIN + ogImage : ogImage;

  const metaImage = ogImage || ORIGIN + "/assets/visnalize-og.png";

  data.frontmatter.head ??= [];
  data.frontmatter.head.push(
    ["link", { rel: "canonical", href: canonicalUrl }],
    ["meta", { name: "title", content: data.title }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: canonicalUrl }],
    ["meta", { property: "og:title", content: data.title }],
    ["meta", { property: "og:description", content: data.description }],
    ["meta", { property: "og:image", content: metaImage }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:url", content: canonicalUrl }],
    ["meta", { property: "twitter:title", content: data.title }],
    ["meta", { property: "twitter:description", content: data.description }],
    ["meta", { property: "twitter:image", content: metaImage }],
  );

  // Structured data (JSON-LD) ------------------------------------------------
  const breadcrumbSchema = getBreadcrumbSchema(transformedPath, data.title);
  if (breadcrumbSchema) {
    data.frontmatter.head.push([
      "script",
      { type: "application/ld+json" },
      JSON.stringify(breadcrumbSchema),
    ]);
  }

  if (data.relativePath.startsWith("blog/") && data.frontmatter.createdAt) {
    const blogSchema = getBlogPostingSchema({
      title: data.title,
      description: data.description,
      canonicalUrl,
      image: metaImage,
      createdAt: data.frontmatter.createdAt,
      lastUpdated: data.lastUpdated,
    });
    data.frontmatter.head.push([
      "script",
      { type: "application/ld+json" },
      JSON.stringify(blogSchema),
    ]);
  }

  if (data.relativePath.match(/^(win7simu|brick1100)\/about\.md$/)) {
    const [app] = data.relativePath.split("/") as [App];
    const appSchema = await getAppSchema(app, canonicalUrl, metaImage);
    data.frontmatter.head.push([
      "script",
      { type: "application/ld+json" },
      JSON.stringify(appSchema),
    ]);
  }

  const faqPages = [
    "win7simu/faq.md",
    "win7simu/alternatives.md",
    "brick1100/alternatives.md",
  ];
  if (faqPages.includes(data.relativePath)) {
    const faqSchema = getFaqSchema(content);
    if (faqSchema) {
      data.frontmatter.head.push([
        "script",
        { type: "application/ld+json" },
        JSON.stringify(faqSchema),
      ]);
    }
  }
};
