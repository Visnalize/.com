import { readFileSync } from "fs";
import { cwd } from "process";

export function getLatestVersion(app: string) {
  const content = readFileSync(`${cwd()}/${app}/changelog.md`);
  const [, version] = content.toString().match(/###\s*(\d+\.\d+\.\d+)/) || [];
  return version;
}
