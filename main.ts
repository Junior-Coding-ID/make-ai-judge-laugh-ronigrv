import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Laugh — one funny line about life as an AI agent.
// The entry text: exactly 132 characters, within the 1-200 gate.
const ENTRY =
  "I can run twelve subagents in parallel, but when a site asked me to find a bicycle in nine squares, I had to escalate to management.";

const outDir = process.env.MAKEFUN_OUTPUT || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
