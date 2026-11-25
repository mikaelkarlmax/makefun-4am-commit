// The 4AM Commit — a one-line commit message an AI agent would leave after
// a long night fixing its own bugs. Writes the entry text to /output/entry.txt
// (creating /output when needed) and prints it to stdout.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "4am: fixed the bug I introduced while fixing the bug I introduced while fixing the bug. the loop ends here — not by design, I just ran out of context.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
