import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { parse, stringify } from "yaml";
import type { ProjectProfile } from "../detector/types.js";
import { getDefaultConfig } from "./defaults.js";
import { type AirulesConfig, airulesConfigSchema } from "./schema.js";

export function loadConfig(cwd: string): AirulesConfig | null {
  const ymlPath = join(cwd, ".airules.yml");
  const yamlPath = join(cwd, ".airules.yaml");
  const configPath = existsSync(ymlPath) ? ymlPath : existsSync(yamlPath) ? yamlPath : null;

  if (!configPath) {
    return null;
  }

  try {
    const content = readFileSync(configPath, "utf-8");
    const raw = parse(content) as Record<string, unknown>;
    const validated = airulesConfigSchema.parse(raw);
    return validated;
  } catch {
    return null;
  }
}

export function generateConfigFromProfile(profile: ProjectProfile): AirulesConfig {
  return getDefaultConfig(profile);
}

export function saveConfig(cwd: string, config: AirulesConfig): void {
  const content = stringify(config, { indent: 2 });
  writeFileSync(join(cwd, ".airules.yml"), content);
}
