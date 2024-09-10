import { engines } from "../../package.json";
import semver from "semver";

export function checkEngine(): void {
  const nodeVersion = process.version;
  if (!semver.satisfies(nodeVersion, engines.node)) {
    // eslint-disable-next-line no-console
    console.error(`Node.js version ${nodeVersion} does not satisfy required version ${engines.node}`);
    process.exit(1);
  }
}

checkEngine();
