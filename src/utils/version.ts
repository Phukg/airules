import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { warn } from "../cli/ui/logger.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function checkForUpdates(): Promise<void> {
  const pkgPath = resolve(__dirname, "../package.json");
  const currentVersion = JSON.parse(readFileSync(pkgPath, "utf-8")).version as string;

  try {
    const resp = await fetch("https://registry.npmjs.org/@tangvu/airules/latest");
    if (!resp.ok) return;
    const data = (await resp.json()) as { version: string };
    const latest = data.version;

    if (latest !== currentVersion) {
      const { default: chalk } = await import("chalk");
      warn(`Update available: ${chalk.dim(currentVersion)} → ${chalk.green(latest)}`);
      console.log("");
    }
  } catch {
    // Network error, skip
  }
}
