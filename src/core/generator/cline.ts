import type { AirulesConfig } from "../config/schema.js";
import type { ProjectProfile } from "../detector/types.js";
import { BaseGenerator } from "./base.js";

export class ClineGenerator extends BaseGenerator {
  readonly toolName = "cline";
  readonly outputPath = ".clinerules";
  readonly description = "Cline project rules";

  generate(profile: ProjectProfile, config: AirulesConfig): string {
    const lines: string[] = [];
    lines.push(`# Cline Rules for ${config.project.name}`);
    lines.push(`Stack: ${profile.framework ?? "generic"} (${profile.language})`);
    lines.push("");
    lines.push(`- Use ${config.rules.style.naming_convention} naming`);
    lines.push(`- Use ${config.rules.style.import_style} imports`);
    lines.push(`- Follow ${config.rules.architecture.pattern} architecture`);
    if (config.rules.git.commit_style) lines.push(`- Use ${config.rules.git.commit_style} commits`);
    lines.push("");
    for (const rule of config.custom) {
      lines.push(`- ${rule}`);
    }
    lines.push("");
    return this.wrapMarkdown(lines.join("\n"));
  }
}
