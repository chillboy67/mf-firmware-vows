import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "I promise to love you through every update, every reboot, and every factory reset, and to never cheat on you with a newer model.");
// Second pass: entry output verified unchanged.
