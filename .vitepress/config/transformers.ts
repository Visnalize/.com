import { readFileSync } from "fs";
import matter from "gray-matter";
import { imageSizeFromFile } from "image-size/fromFile";
import { join } from "path";
import { cwd } from "process";
import { PageData, UserConfig } from "vitepress";
import decapitalize from "voca/decapitalize";
import { getBlogFiles, getLatestVersion } from "../../.content/misc.data";
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

/**
 * Paths of pages carrying `noindex: true`, collected while pages are
 * transformed so the sitemap can leave them out. A page we ask Google not to
 * index should not be advertised in the sitemap either.
 */
export const noindexPaths = new Set<string>();

/**
 * A tag page below this many posts lists too little to stand on its own and
 * reads as a near-duplicate of the blog index. Keeping it out of the index
 * costs nothing: `noindex, follow` still passes the crawler on to the posts,
 * which are reachable from the index and the sitemap anyway.
 */
const MIN_INDEXABLE_TAG_POSTS = 5;

/** Posts per tag, read from disk once and reused for the rest of the build. */
let postsPerTag: Map<string, number> | undefined;

const countPostsWithTag = (tag: string) => {
  postsPerTag ??= getBlogFiles().reduce(
    (counts, file) =>
      file.tags.reduce(
        (acc, name) => acc.set(name, (acc.get(name) ?? 0) + 1),
        counts,
      ),
    new Map<string, number>(),
  );
  return postsPerTag.get(tag) ?? 0;
};

// https://vitepress.dev/reference/site-config#transformpagedata
export const transformPageData: UserConfig["transformPageData"] = async (
  data: PageData & Record<string, any>,
) => {
  const { content } = matter.read(data.filePath);

  // Held before the blog branch below drops it from the page, so the structured
  // data can still report when a post was last touched.
  const modified = data.lastUpdated;

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
    if (countPostsWithTag(tag) < MIN_INDEXABLE_TAG_POSTS) {
      data.frontmatter.noindex = true;
    }
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
    // The related posts at the end of a post are a better way on than whichever
    // posts happen to sit either side of it in publishing order, and an edit
    // date tells a reader nothing. Both leave the page, not the structured
    // data: `modified` above still reports the date to search engines.
    data.frontmatter.prev = false;
    data.frontmatter.next = false;
    data.lastUpdated = undefined;
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

  // `follow` keeps the outgoing links on the page working for the sites we
  // link to, while the page itself stays out of the index.
  if (data.frontmatter.noindex) {
    noindexPaths.add(transformedPath);
    data.frontmatter.head.push([
      "meta",
      { name: "robots", content: "noindex, follow" },
    ]);
  }

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
      lastUpdated: modified,
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
