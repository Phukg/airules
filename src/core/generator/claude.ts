import type { AirulesConfig } from "../config/schema.js";
import type { ProjectProfile } from "../detector/types.js";
import { BaseGenerator } from "./base.js";

export class ClaudeGenerator extends BaseGenerator {
  readonly toolName = "claude";
  readonly outputPath = "CLAUDE.md";
  readonly description = "Claude Code project instructions";

  generate(profile: ProjectProfile, config: AirulesConfig): string {
    const sections: string[] = [];

    // Project Overview
    sections.push(`# Project: ${config.project.name}`);
    if (config.project.description) {
      sections.push(`\n${config.project.description}`);
    }
    sections.push(
      `\n**Stack:** ${profile.framework ?? config.project.stack ?? "Generic"} | **Language:** ${profile.language}`,
    );

    // Tech Stack
    sections.push(this.buildSectionHeader("Tech Stack"));
    const stackRules: string[] = [];
    stackRules.push(`Language: ${profile.language}`);
    if (profile.framework) stackRules.push(`Framework: ${profile.framework}`);
    if (profile.hasTypeScript) stackRules.push("TypeScript enabled");
    if (profile.cssFramework) stackRules.push(`CSS: ${profile.cssFramework}`);
    if (profile.stateManagement) stackRules.push(`State Management: ${profile.stateManagement}`);
    sections.push(this.buildRuleBlock(stackRules));

    // Code Style
    sections.push(this.buildSectionHeader("Code Style"));
    const styleRules: string[] = [];
    styleRules.push(`Naming convention: ${config.rules.style.naming_convention}`);
    styleRules.push(`Import style: ${config.rules.style.import_style}`);
    styleRules.push(`Quote style: ${config.rules.style.quote_style}`);
    if (config.rules.style.prefer_functional)
      styleRules.push("Prefer functional programming patterns over OOP");
    if (config.rules.style.max_file_length)
      styleRules.push(`Max file length: ${config.rules.style.max_file_length} lines`);
    sections.push(this.buildRuleBlock(styleRules));

    // Architecture
    sections.push(this.buildSectionHeader("Architecture"));
    const archRules: string[] = [];
    archRules.push(`Architecture pattern: ${config.rules.architecture.pattern}`);
    if (config.rules.architecture.api_style)
      archRules.push(`API style: ${config.rules.architecture.api_style}`);
    if (config.rules.architecture.state_management)
      archRules.push(`State management: ${config.rules.architecture.state_management}`);
    sections.push(this.buildRuleBlock(archRules));

    // Testing
    if (profile.hasTesting || config.rules.testing.framework) {
      sections.push(this.buildSectionHeader("Testing"));
      const testRules: string[] = [];
      testRules.push(
        `Framework: ${config.rules.testing.framework ?? profile.testingFramework ?? "unknown"}`,
      );
      testRules.push(`Test style: ${config.rules.testing.style}`);
      if (config.rules.testing.min_coverage)
        testRules.push(`Minimum coverage: ${config.rules.testing.min_coverage}%`);
      if (config.rules.testing.require_tests_for.length > 0) {
        testRules.push(`Require tests for: ${config.rules.testing.require_tests_for.join(", ")}`);
      }
      sections.push(this.buildRuleBlock(testRules));
    }

    // Git Conventions
    sections.push(this.buildSectionHeader("Git Conventions"));
    const gitRules: string[] = [];
    gitRules.push(`Commit style: ${config.rules.git.commit_style}`);
    gitRules.push(`Branch pattern: ${config.rules.git.branch_pattern}`);
    if (config.rules.git.require_pr) gitRules.push("Require PR before merging");
    sections.push(this.buildRuleBlock(gitRules));

    // Security
    if (config.rules.security.no_secrets_in_code) {
      sections.push(this.buildSectionHeader("Security"));
      const secRules: string[] = [];
      secRules.push("Never commit secrets, API keys, or credentials");
      if (config.rules.security.sanitize_inputs)
        secRules.push("Always sanitize and validate user inputs");
      if (config.rules.security.prefer_parameterized_queries)
        secRules.push("Use parameterized queries to prevent SQL injection");
      sections.push(this.buildRuleBlock(secRules));
    }

    // Custom Rules
    if (config.custom.length > 0) {
      sections.push(this.buildSectionHeader("Custom Rules"));
      sections.push(this.buildRuleBlock(config.custom));
    }

    return this.wrapMarkdown(sections.join("\n"));
  }
}
