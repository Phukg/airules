import chalk from "chalk";

export function printBanner(): void {
  const lines = [
    chalk.cyan.bold("╔══════════════════════════════════════════╗"),
    chalk.cyan.bold("║") +
      chalk.bold.white("        🎯 airules v1.0.0        ") +
      chalk.cyan.bold("║"),
    chalk.cyan.bold("║") +
      chalk.gray("  One config to rule them all.       ") +
      chalk.cyan.bold("║"),
    chalk.cyan.bold("║") +
      chalk.gray("  Generate & sync AI coding rules    ") +
      chalk.cyan.bold("║"),
    chalk.cyan.bold("╚══════════════════════════════════════════╝"),
    "",
    chalk.dim("  Run `airules init` to get started"),
    chalk.dim("  Run `airules --help` for all commands"),
    "",
  ];
  console.log(lines.join("\n"));
}
