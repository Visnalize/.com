import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { cwd } from "process";

const GOOGLE_ADS_TXT = `google.com, pub-5904323684803247, DIRECT, f08c47fec0942fa0`;

const VITEPRESS_OUT_DIR = join(cwd(), ".vitepress", "dist");
const APP_ADS_DIR = join(cwd(), ".vitepress", "server", "app-ads");
const APP_ADS_FILES = ["applovin.txt", "liftoff.txt", "unity.txt"];

export const generateAdsTxt = async () => {
  console.log("Generating ads.txt");
  let adsTxtValue = GOOGLE_ADS_TXT;
  try {
    const data = await fetch(
      "https://ads.themoneytizer.com/ads_txt.php?site_id=127550&id=117816",
    );
    const text = await data.text();
    adsTxtValue += "\n" + text;
    writeFileSync(join(VITEPRESS_OUT_DIR, "ads.txt"), adsTxtValue);
  } catch (error) {
    console.error("Error fetching ads.txt", error);
  }
};

export const generateAppAdsTxt = () => {
  console.log("Generating app-ads.txt");
  const appAdsTxtValue = [
    GOOGLE_ADS_TXT,
    ...APP_ADS_FILES.map((file) => readFileSync(join(APP_ADS_DIR, file), "utf8")),
  ].join("\n");
  writeFileSync(join(VITEPRESS_OUT_DIR, "app-ads.txt"), appAdsTxtValue);
};
