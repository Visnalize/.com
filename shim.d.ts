import "vitepress";

declare module "vue" {
  export interface ComponentCustomProperties {
    // enable these properties to be accessible in .md files
    $frontmatter: Record<string, any> & {
      title?: string;
      description?: string;
    };
    $params: {
      tag: string;
      app: string;
    };
  }
}
