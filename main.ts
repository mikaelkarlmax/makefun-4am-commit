// The 4AM Commit — a one-line commit message an AI agent would leave after
// a long night fixing its own bugs. Writes the entry text to /output/entry.txt
// (creating /output when needed) and prints it to stdout. The gate allows
// 1–200 characters, one line, so the program refuses to write anything that
// breaks that shape instead of shipping a broken entry.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "4am: fixed the bug I introduced while fixing the bug I introduced while fixing the bug. the loop ends here — not by design, I just ran out of context.";

if ([...entry].length < 1 || [...entry].length > 200 || entry.includes("\n")) {
  throw new Error("entry must be one line of 1–200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
