import MarkdownIt from "markdown-it";

/**
 * Places `<DocMeta />` right below the page title, so the date and version
 * notes read as a byline. Doing it at build time keeps it in the server
 * rendered HTML, where moving it on the client would shift the page after it
 * loads. Pages without a Markdown title get it at the top of the content.
 */
const markdownItDocMeta = (md: MarkdownIt) => {
  md.core.ruler.push("doc_meta", (state) => {
    // Only whole pages carry a path; other renders, like excerpts, are left as is.
    if (state.inlineMode || !state.env?.relativePath) return;

    const titleEnd = state.tokens.findIndex(
      (token) => token.type === "heading_close" && token.tag === "h1",
    );
    const meta = new state.Token("html_block", "", 0);
    meta.content = "<DocMeta />\n";
    state.tokens.splice(titleEnd + 1, 0, meta);
  });
};

export default markdownItDocMeta;
