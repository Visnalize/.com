import { SiteConfig } from "vitepress";
import { generateAdsTxt, generateAppAdsTxt } from "../server/ads-txt";

export const runBuildEndScripts = async (siteConfig: SiteConfig) => {
  generateAdsTxt();
  generateAppAdsTxt();
};
