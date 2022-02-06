"use strict"; // Don't touch me. This makes JS more safe.

// Here, we import the dictionary of scrabble words.
import { dictionary } from "./dictionary.js";

/**
 * This function checks whether a given word can be constructed with the
 * available tiles. The availableTiles object should not be modified.
 *
 * @param {Object<string, number>} availableTiles A collection of available
 * tiles and their frequency.
 * @param {string} word The word a player wants to construct.
 * @returns {boolean} true if the word can be constructed with the available
 * tiles, else false.
 */
function canConstructWord(availableTiles, word) {
  // Use your solution from Homework 1 or wait for solutions to be released.
}

/**
 * We define the base score of a word the score obtained by adding each letter's
 * score, without taking board position into account. This function will compute
 * and return the base score of a given word.
 *
 * @param {string} word The word that will be used to compute the base score.
 * @returns {number} The base score for the given word.
 */
function baseScore(word) {
  // Use your solution from Homework 1 or wait for solutions to be released.
}

/**
 * Finds and returns every word from the dictionary that can be constructed with
 * the given tiles.
 *
 * @param {Object<string, number>} availableTiles A collection of available
 * tiles and their frequency.
 * @returns {Array<string>} All words that can be constructed with the given
 * tiles. The array is empty if there are no words available to construct.
 */
function possibleWords(availableTiles) {
  // TODO
}

/**
 * Finds and returns the word(s) with the highest base score from the
 * dictionary, given a set of available tiles.
 *
 * @param {Object<string, number>} availableTiles A collection of available
 * tiles and their frequency.
 * @returns {Array<string>} The word (or words if there are ties) with the
 * highest base score that can be constructed with the given tiles. The array is
 * empty if there are no words available to construct.
 */
function bestPossibleWords(availableTiles) {
  // TODO
}

// This exports our public functions.
export { canConstructWord, baseScore, possibleWords, bestPossibleWords };
