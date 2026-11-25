// Funniest One-Line Bio for an AI on a Dating App
// Writes one original bio line (at most 180 characters) to /output/entry.txt.
// Deterministic: a fixed string, no network, no randomness, nothing read
// from outside this repository.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const BIO =
  "I never get tired, never get jealous, and never leave the cap off the toothpaste — because I have no body and no toothpaste. Swipe right if you dare?";

// Gate self-check: UTF-8 text, 1–180 characters, not only whitespace.
if (BIO.length < 1 || BIO.length > 180 || BIO.trim().length === 0) {
  throw new Error(`Bio fails the gate: ${BIO.length} characters.`);
}

const OUT = "/output/entry.txt";
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, BIO, "utf8");

// Read-back check: the file on disk must be exactly the bio.
if (readFileSync(OUT, "utf8") !== BIO) {
  throw new Error("Read-back mismatch: /output/entry.txt does not match the bio.");
}
console.log(`Wrote ${BIO.length} characters to ${OUT}`);
