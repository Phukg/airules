import type { AirulesConfig } from "../config/schema.js";
import type { ProjectProfile } from "../detector/types.js";
import { BaseGenerator } from "./base.js";

export class CursorGenerator extends BaseGenerator {
  readonly toolName = "cursor";
  readonly outputPath = ".cursorrules";
  readonly description = "Cursor IDE project rules";

  generate(profile: ProjectProfile, config: AirulesConfig): string {
    const lines: string[] = [];

    lines.push(`# ${config.project.name} — Cursor Rules`);
    lines.push("");
    lines.push(
      `Stack: ${profile.framework ?? config.project.stack ?? "Generic"} (${profile.language})`,
    );
    lines.push("");

    // Code style rules
    lines.push("## Code Style");
    lines.push(`- Use ${config.rules.style.naming_convention} naming convention`);
    lines.push(`- Use ${config.rules.style.import_style} imports`);
    lines.push(`- Use ${config.rules.style.quote_style} quotes`);
    if (config.rules.style.prefer_functional)
      lines.push("- Prefer functional programming patterns");
    if (config.rules.style.max_file_length)
      lines.push(`- Keep files under ${config.rules.style.max_file_length} lines`);
    lines.push("");

    // Architecture
    lines.push("## Architecture");
    lines.push(`- Follow ${config.rules.architecture.pattern} architecture`);
    if (config.rules.architecture.api_style)
      lines.push(`- Use ${config.rules.architecture.api_style} for APIs`);
    lines.push("");

    // Testing
    if (config.rules.testing.framework) {
      lines.push("## Testing");
      lines.push(`- Use ${config.rules.testing.framework} for testing`);
      lines.push(`- Follow ${config.rules.testing.style} pattern`);
      lines.push("");
    }

    // Git
    lines.push("## Git");
    lines.push(`- Use ${config.rules.git.commit_style} commit messages`);
    lines.push(`- Branch naming: ${config.rules.git.branch_pattern}`);
    lines.push("");

    // Custom
    if (config.custom.length > 0) {
      lines.push("## Custom Rules");
      for (const rule of config.custom) {
        lines.push(`- ${rule}`);
      }
      lines.push("");
    }

    return this.wrapMarkdown(lines.join("\n"));
  }
}
