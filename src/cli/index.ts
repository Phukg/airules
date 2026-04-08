#!/usr/bin/env node

import { Command } from "commander";
import { detectCommand } from "./commands/detect.js";
import { initCommand } from "./commands/init.js";
import { scoreCommand } from "./commands/score.js";
import { syncCommand } from "./commands/sync.js";

export function cli(): void {
  const program = new Command();

  program
    .name("airules")
    .description("One config to rule them all. Generate & sync AI coding rules across every tool.")
    .version("0.1.0");

  program
    .command("init")
    .description("Scan project and generate AI coding rules for all configured tools")
    .option("--dry-run", "Preview changes without writing files")
    .option("--force", "Overwrite existing files without prompting")
    .option("--target <tool>", "Generate rules for a specific tool only")
    .action(initCommand);

  program
    .command("sync")
    .description("Re-generate all target files from .airules.yml")
    .option("--detect", "Re-detect project before generating")
    .option("--dry-run", "Preview changes without writing files")
    .option("--force", "Overwrite existing files without prompting")
    .option("--target <tool>", "Generate rules for a specific tool only")
    .option("--watch", "Watch .airules.yml for changes and auto-sync")
    .action(syncCommand);

  program
    .command("score")
    .description("Score the quality of your AI coding rules")
    .option("--json", "Output score as JSON (for CI integration)")
    .action(scoreCommand);

  program
    .command("detect")
    .description("Detect and display project tech stack")
    .action(detectCommand);

  program.parse();
}

cli();
