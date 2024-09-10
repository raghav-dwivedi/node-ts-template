import chalk from "chalk";

export default class Logging {
  public static info = (args: unknown): void => {
    // eslint-disable-next-line no-console
    console.log(
      chalk.blue(`
[${new Date().toLocaleString()}]
[Log]:`),
      Logging.formatArgs(args, chalk.blueBright),
    );
  };

  public static warn = (args: unknown): void => {
    // eslint-disable-next-line no-console
    console.log(
      chalk.yellow(`
[${new Date().toLocaleString()}]
[Warn]:`),
      Logging.formatArgs(args, chalk.yellowBright),
    );
  };

  public static error = (args: unknown): void => {
    // eslint-disable-next-line no-console
    console.log(
      chalk.red(`
[${new Date().toLocaleString()}]
[Error]:`),
      Logging.formatArgs(args, chalk.redBright),
    );
  };

  public static log = (args: unknown): void => {
    // eslint-disable-next-line no-console
    console.log(
      chalk.green(`
[${new Date().toLocaleString()}]
[Log]:`),
      Logging.formatArgs(args, chalk.greenBright),
    );
  };

  // eslint-disable-next-line no-unused-vars
  private static formatArgs(args: unknown, colorFn: (msg: string) => string): string | unknown {
    return typeof args === "string" ? colorFn(args) : args;
  }
}
