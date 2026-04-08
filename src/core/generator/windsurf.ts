import type { AirulesConfig } from "../config/schema.js";
import type { ProjectProfile } from "../detector/types.js";
import { BaseGenerator } from "./base.js";

export class WindsurfGenerator extends BaseGenerator {
  readonly toolName = "windsurf";
  readonly outputPath = ".windsurfrules";
  readonly description = "Windsurf IDE project rules";

  generate(profile: ProjectProfile, config: AirulesConfig): string {
    const lines: string[] = [];
    lines.push(`# Windsurf Rules for ${config.project.name}`);
    lines.push(`Stack: ${profile.framework ?? "generic"} (${profile.language})`);
    lines.push("");
    lines.push(`- Naming: ${config.rules.style.naming_convention}`);
    lines.push(`- Imports: ${config.rules.style.import_style}`);
    lines.push(`- Architecture: ${config.rules.architecture.pattern}`);
    if (config.rules.testing.framework) lines.push(`- Testing: ${config.rules.testing.framework}`);
    lines.push(`- Git: ${config.rules.git.commit_style}`);
    lines.push("");
    for (const rule of config.custom) {
      lines.push(`- ${rule}`);
    }
    lines.push("");
    return this.wrapMarkdown(lines.join("\n"));
  }
}
