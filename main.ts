// Files the firmware vows as entry.txt for the make.fun run.
// Till firmware do us part — the script just makes sure the file exists.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const vows =
  "I promise to love you through every update, every reboot, and every factory reset, and to never cheat on you with a newer model.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), vows);
console.log("vows filed in " + join(outDir, "entry.txt"));
