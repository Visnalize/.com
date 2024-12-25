import { readFileSync, writeFileSync } from "fs";

const cache = {
  init(key: string) {
    return process.cwd() + `/.content/${key}.data.cache`;
  },

  read(cacheFile: string) {
    try {
      const content = readFileSync(cacheFile, "utf-8");
      console.info("Loaded data from cache: " + cacheFile);
      return JSON.parse(content.toString());
    } catch (e) {
      console.info("No cache found for: " + cacheFile);
      return null;
    }
  },

  write(cacheFile: string, data: any) {
    console.info("Writing data to cache: " + cacheFile);
    writeFileSync(cacheFile, JSON.stringify(data));
  },
};

export default cache;
