import { heading, info } from "../ui/logger.js";
import { createSpinner } from "../ui/spinner.js";

export async function detectCommand(): Promise<void> {
  heading("🔍 airules detect");

  const spinner = createSpinner("Scanning project...");
  spinner.start();

  // TODO: Run detector
  // TODO: Display results in formatted table

  await new Promise((resolve) => setTimeout(resolve, 500));
  spinner.succeed("Scan complete");

  info("Detection engine not yet implemented");
}
