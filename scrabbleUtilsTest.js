"use strict"; // Don't touch me.

import {
  canConstructWord,
  baseScore,
  possibleWords,
  bestPossibleWords,
} from "./scrabbleUtils.js";

console.assert(
  canConstructWord({ c: 1, f: 2, r: 1, b: 1, a: 1, e: 1 }, "crab"),
  "This error message will print if the test fails"
);

// More tests...
