import type { BaseGenerator } from "./base.js";

export interface GeneratorRegistry {
  [key: string]: BaseGenerator;
}

export const GENERATOR_MAP: Record<string, string> = {
  claude: "CLAUDE.md",
  cursor: ".cursorrules",
  copilot: ".github/copilot-instructions.md",
  windsurf: ".windsurfrules",
  cline: ".clinerules",
  codex: "AGENTS.md",
  aider: ".aider.conf.yml",
};
