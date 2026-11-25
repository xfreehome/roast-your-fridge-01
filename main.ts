import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My fridge hums all night like a loyal guard dog, then lets the milk expire in silence — turns out the bodyguard was working for the bacteria all along.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
