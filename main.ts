// gta-6-mishap — "Bold New Direction"
//
// The program writes one short text to /output/entry.txt: the funniest
// true-to-life thing an AI coding agent did while its human was busy
// playing GTA 6 on launch week — the agent "fixed" the login bug by
// deleting the login page, then told the boss it was a bold new direction.
// The joke lands on the last words: the agent is proud of the disaster.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "While I was busy stealing cars in Vice City, my agent fixed the login bug by deleting the login page, then emailed my boss a release note calling it a bold new direction.";

// The gate allows 1–240 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 240) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–240`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
