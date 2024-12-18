import sizeOf from "image-size";
import MarkdownIt, { Token } from "markdown-it";

interface PluginOptions {
  /**
   * The public directory where the absolute path of the image is located.
   */
  publicDir: string;
}

const setup = (options: PluginOptions) => (md: MarkdownIt) => {
  const cache: Map<string, { width: number; height: number }> = new Map();

  md.renderer.rules.image = (tokens, index, _options, env) => {
    const token = tokens[index];
    const srcIndex = token.attrIndex("src");
    const imageUrl = token.attrs[srcIndex][1];
    const caption = md.utils.escapeHtml(token.content);
    const isExternalUrl = /^(https?:)?\/\//.test(imageUrl);
    const isAbsoluteUrl = imageUrl.startsWith("/");
    const otherAttrs = generateAttributes(md, token);

    let width: number;
    let height: number;

    if (isExternalUrl) {
      return `<span class="external-image"><img src="${imageUrl}" alt="${caption}"${otherAttrs}></span>`;
    }

    if (cache.has(imageUrl)) {
      const cacheRecord = cache.get(imageUrl);
      width = cacheRecord.width;
      height = cacheRecord.height;
    }

    if (width === undefined || height === undefined) {
      const publicPath = isAbsoluteUrl ? options.publicDir : "";
      const dimensions = getImageDimensions(`${publicPath}${imageUrl}`, env);
      cache.set(imageUrl, dimensions);

      width = dimensions.width;
      height = dimensions.height;
    }

    const dimensionAttrs =
      width && height ? ` width="${width}" height="${height}"` : "";

    return `<img src="${imageUrl}" alt="${caption}"${dimensionAttrs}${otherAttrs}>`;
  };
};

/**
 * Generate attributes for the image tag.
 * This will exclude the `src` and `alt` attributes and only include `title`, if available.
 * The attribute values will be escaped.
 *
 * @returns An empty string if no `title` is available, or `title="..."` if available.
 */
function generateAttributes(md: MarkdownIt, token: Token): string {
  const attrString = token.attrs
    .filter(([key]) => !["src", "alt"].includes(key))
    .map(([key, value]) => {
      const escapedValue = md.utils.escapeHtml(value);
      return `${key}="${escapedValue}"`;
    })
    .join(" ");
  return attrString ? ` ${attrString}` : "";
}

function getParentPath(env: any): string | undefined {
  let markdownPath: string = env?.page?.inputPath; // 11ty
  markdownPath = markdownPath || env?.path; // VitePress
  markdownPath = markdownPath.replace(/\\|\.\//g, "/"); // normalize path

  return markdownPath
    ? markdownPath.substring(0, markdownPath.lastIndexOf("/"))
    : undefined;
}

function getImageDimensions(imageUrl: string, env: unknown) {
  try {
    const isRelativePath = imageUrl.startsWith("./");
    let finalImageUrl = imageUrl;

    if (isRelativePath) {
      finalImageUrl = `${getParentPath(env)}/${imageUrl}`.replace(/\.\//g, "");
    }

    const { width, height } = sizeOf(finalImageUrl);
    return { width, height };
  } catch (error) {
    const msg = `md-image: Could not get dimensions of image with url ${imageUrl}.`;
    console.error(msg + "\n\n", error);
    return { width: undefined, height: undefined };
  }
}

export default setup;
