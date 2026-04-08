import type { AirulesConfig } from "../config/schema.js";
import type { ProjectProfile } from "../detector/types.js";

export interface GeneratedFile {
  path: string;
  content: string;
}

export abstract class BaseGenerator {
  abstract readonly toolName: string;
  abstract readonly outputPath: string;
  abstract readonly description: string;

  abstract generate(profile: ProjectProfile, config: AirulesConfig): string;

  protected buildSectionHeader(title: string): string {
    return `\n## ${title}\n`;
  }

  protected buildRuleBlock(rules: string[]): string {
    return rules.map((rule) => `- ${rule}`).join("\n");
  }

  protected wrapMarkdown(content: string): string {
    return `${content.trim()}\n`;
  }
}
