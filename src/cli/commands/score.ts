import { heading, info } from "../ui/logger.js";
import { createSpinner } from "../ui/spinner.js";

interface ScoreOptions {
  json?: boolean;
}

export async function scoreCommand(_options: ScoreOptions): Promise<void> {
  heading("🏆 airules score");

  const spinner = createSpinner("Analyzing rules...");
  spinner.start();

  // TODO: Load .airules.yml
  // TODO: Run scorer
  // TODO: Display beautiful score card

  await new Promise((resolve) => setTimeout(resolve, 500));
  spinner.succeed("Analysis complete");

  info("Score card UI not yet implemented");
}
