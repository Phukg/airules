import type { AirulesConfig } from "../config/schema.js";
import type { ProjectProfile } from "../detector/types.js";
import { BaseGenerator } from "./base.js";

export class CodexGenerator extends BaseGenerator {
  readonly toolName = "codex";
  readonly outputPath = "AGENTS.md";
  readonly description = "OpenAI Codex agent instructions";

  generate(profile: ProjectProfile, config: AirulesConfig): string {
    const sections: string[] = [];
    sections.push(`# Agent Instructions for ${config.project.name}`);
    sections.push("");
    sections.push(`**Language:** ${profile.language}`);
    if (profile.framework) sections.push(`**Framework:** ${profile.framework}`);
    sections.push("");

    sections.push("## Coding Standards");
    sections.push(`- Naming: ${config.rules.style.naming_convention}`);
    sections.push(`- Imports: ${config.rules.style.import_style}`);
    sections.push(`- Quotes: ${config.rules.style.quote_style}`);
    sections.push("");

    if (config.custom.length > 0) {
      sections.push("## Additional Instructions");
      for (const rule of config.custom) {
        sections.push(`- ${rule}`);
      }
      sections.push("");
    }

    return this.wrapMarkdown(sections.join("\n"));
  }
}
