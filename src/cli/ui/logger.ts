import chalk from "chalk";

export function info(message: string): void {
  console.log(chalk.blue("ℹ"), chalk.blue(message));
}

export function success(message: string): void {
  console.log(chalk.green("✔"), chalk.green(message));
}

export function warn(message: string): void {
  console.log(chalk.yellow("⚠"), chalk.yellow(message));
}

export function error(message: string): void {
  console.log(chalk.red("✖"), chalk.red(message));
}

export function heading(message: string): void {
  console.log("");
  console.log(chalk.bold.cyan(message));
  console.log("");
}

export function dim(message: string): void {
  console.log(chalk.dim(message));
}
