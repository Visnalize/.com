import { readFileSync } from "fs";
import matter from "gray-matter";
import { imageSizeFromFile } from "image-size/fromFile";
import { join } from "path";
import { cwd } from "process";
import { PageData, UserConfig } from "vitepress";
import decapitalize from "voca/decapitalize";
import { getLatestVersion } from "../../.content/misc.data";
import { apps } from "../../.content/simulated-apps.data";
import { APP_NAMES, ORIGIN } from "../theme/constants";
import { getAppImage } from "../theme/utils/images";
import { isDevMode } from "../theme/utils/misc";

// https://vitepress.dev/reference/site-config#transformpagedata
export const transformPageData: UserConfig["transformPageData"] = async (
  data: PageData & Record<string, any>
) => {
  // blog listing tag page
  if (data.params?.tag) {
    const { tag } = data.params;
    let title = `Posts with tag "${tag}"`;
    let description = `All posts with tag "${tag}". Discover helpful insights, sharing, tips and tricks on various topics from Visnalize.`;
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
    data.title = title;
    data.description = description;
  }

  if (data.relativePath.match(/simulated/) && data.params?.app) {
    const { app: slug } = data.params;
    const app = apps.find((a) => a.slug === slug);
    const imageUrl = getAppImage(slug);
    if (!app) throw new Error(`App not found: ${slug}`);
    data.title = app.title + " in Win7 Simu";
    data.description =
      data.title + " in Win7 Simu " + decapitalize(app.description);
    data.frontmatter = { ...data.frontmatter, ...app };
    data.frontmatter.image = isDevMode() ? imageUrl : ORIGIN + imageUrl;
    data.frontmatter.imageData = await imageSizeFromFile(
      join(cwd(), "public", imageUrl)
    );
    try {
      const filePath = join(cwd(), ".content", "simulated-apps", slug + ".md");
      data.frontmatter.markdown = readFileSync(filePath, "utf-8");
    } catch (e) {
      // file not available, ignore
    }
  }

  if (data.relativePath.startsWith("notes")) {
    data.frontmatter.aside = false;
    data.frontmatter.social = false;
  }

  if (data.relativePath.match(/testimonials/) && data.params?.app) {
    const app = APP_NAMES[data.params.app];
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
  const { content } = matter.read(data.filePath);

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
    ["meta", { property: "twitter:image", content: metaImage }]
  );
};
