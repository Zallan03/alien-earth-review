// Alien Field Notes: The Two Day Earth Review
// Writes the entry line to /output/entry.txt (or the path given as argv[2]
// for local verification). One line of plain text, at most 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const line =
  "To prove you're human, you must spot traffic lights in nine blurry squares. I failed twice. 3/5 — the robots would pass.";

// Gate check, mirroring the competition scorer: 1-200 chars, one line,
// no trailing newline. Fail loudly instead of writing an invalid entry.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(
    `entry line must be 1-200 chars on a single line, got ${line.length} chars`,
  );
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line, "utf8");
