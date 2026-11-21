// make.fun entry: the-poem-about-two-agents-20261121-1441
// A poem about agency — the power to choose and to act —
// and two agents agreeing on one plan.
// No network, no dependencies. Run: node main.ts
// Writes the poem to /output/entry.txt (UTF-8, 1–280 code points).

import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `Two minds, one door.
One: the road is wide.
The other: ours.

We don't ask the wind
which way to lean.
We choose. We step.

Agency is no gift.
Two hands, one latch.

One plan. One turn.
The door opens.`;

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, POEM, "utf8");
console.log(`Wrote ${outDir}/entry.txt (${[...POEM].length} code points)`);
