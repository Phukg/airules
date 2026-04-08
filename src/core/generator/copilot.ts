import type { AirulesConfig } from "../config/schema.js";
import type { ProjectProfile } from "../detector/types.js";
import { BaseGenerator } from "./base.js";

export class CopilotGenerator extends BaseGenerator {
  readonly toolName = "copilot";
  readonly outputPath = ".github/copilot-instructions.md";
  readonly description = "GitHub Copilot project instructions";

  generate(profile: ProjectProfile, config: AirulesConfig): string {
    const sections: string[] = [];

    sections.push(`# GitHub Copilot Instructions for ${config.project.name}`);
    sections.push("");

    sections.push("## Project Overview");
    sections.push(
      `This is a ${profile.language} project using ${profile.framework ?? "standard libraries"}.`,
    );
    if (config.project.description) {
      sections.push(`\n${config.project.description}`);
    }
    sections.push("");

    sections.push("## Code Style Guidelines");
    const styleItems: string[] = [];
    styleItems.push(`- **Naming**: ${config.rules.style.naming_convention}`);
    styleItems.push(`- **Imports**: ${config.rules.style.import_style}`);
    styleItems.push(`- **Quotes**: ${config.rules.style.quote_style}`);
    if (config.rules.style.prefer_functional)
      styleItems.push("- Prefer functional programming patterns");
    sections.push(styleItems.join("\n"));
    sections.push("");

    sections.push("## Architecture");
    sections.push(`- Pattern: ${config.rules.architecture.pattern}`);
    if (config.rules.architecture.api_style)
      sections.push(`- API Style: ${config.rules.architecture.api_style}`);
    sections.push("");

    if (config.custom.length > 0) {
      sections.push("## Project-Specific Rules");
      for (const rule of config.custom) {
        sections.push(`- ${rule}`);
      }
      sections.push("");
    }

    return this.wrapMarkdown(sections.join("\n"));
  }
}
