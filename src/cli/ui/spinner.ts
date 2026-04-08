import ora, { type Ora } from "ora";

const noColor = Boolean(process.env.NO_COLOR);

export function createSpinner(text: string): Ora {
  const spinner = ora({
    text,
    color: "cyan",
  });

  if (noColor) {
    spinner.color = "white" as never;
  }

  return spinner;
}
