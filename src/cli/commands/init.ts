import chalk from "chalk";
import { generateConfigFromProfile, saveConfig } from "../../core/config/loader.js";
import { detectProject } from "../../core/detector/index.js";
import { generateAll } from "../../core/generator/index.js";
import { error, heading, info, success, warn } from "../ui/logger.js";
import { createSpinner } from "../ui/spinner.js";

interface InitOptions {
  dryRun?: boolean;
  force?: boolean;
  target?: string;
}

export async function initCommand(options: InitOptions): Promise<void> {
  heading("🚀 airules init");

  if (options.dryRun) {
    info("Running in dry-run mode — no files will be written");
  }

  try {
    // Step 1: Detect project
    const spinner = createSpinner("Scanning project...");
    spinner.start();
    const profile = await detectProject(process.cwd());
    spinner.succeed(
      `Detected: ${profile.name} (${profile.language}/${profile.framework ?? "generic"})`,
    );

    // Step 2: Generate config
    const configSpinner = createSpinner("Generating .airules.yml...");
    configSpinner.start();
    const config = generateConfigFromProfile(profile);

    if (!options.dryRun) {
      saveConfig(process.cwd(), config);
    }
    configSpinner.succeed(".airules.yml generated");

    // Step 3: Generate target files
    const genSpinner = createSpinner("Generating AI rules for configured tools...");
    genSpinner.start();
    const results = generateAll(
      profile,
      config,
      process.cwd(),
      options.dryRun,
      options.force,
      options.target,
    );
    genSpinner.succeed(`${results.length} file(s) generated`);

    // Display summary
    console.log("");
    info("Generated files:");
    for (const result of results) {
      console.log(`  ${chalk.green("✔")} ${result.path} (${result.tool})`);
    }
    console.log("");

    if (options.dryRun) {
      warn("Dry run complete. Remove --dry-run to write files.");
    } else {
      success("Setup complete! Edit .airules.yml and run `airules sync` to regenerate.");
    }
  } catch (err: unknown) {
    error(`Failed: ${err instanceof Error ? err.message : String(err)}`);
    process.exitCode = 1;
  }
}
