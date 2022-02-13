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

// Public Slack Tests

let abcdefg_words = [// collected via: http://www.allscrabblewords.com/unscramble/abcdefg although there were some not present in dictionary.js - I found those, verified they don't exist in the dictionary, removed them from this list and added the only word that exists in the dictionary but not on the website: 'fag'
  'badge','cadge','caged','decaf','faced','fadge','abed','aced','aged','bade','bead','cade','cafe','cage','dace','deaf','egad','face','fade','gaed','ace','age','bad','bag','bed','beg','cab','cad','dab','dag','deb','fad','fag','fed','gab','gad','gae','ged','ab','ad','ae','ag','ba','be','de','ed','ef','fa'
];
let pw_abcdefg_results = possibleWords({'a':1,'b':1,'c':1,'d':1,'e':1,'f':1,'g':1});
console.assert(abcdefg_words.every(word => pw_abcdefg_results.includes(word)), "possibleWords failed to find all possible words given the letters 'abcdefg'");

let all_2letter_words = [// collected via: dictionary.filter(word => word.length === 2)
  "aa","ab","ad","ae","ag","ah","ai","al","am","an","ar","as","at","aw","ax","ay","ba","be","bi","bo","by","de","do","ed","ef","eh","el","em","en","er","es","et","ex","fa","go","ha","he","hi","hm","ho","id","if","in","is","it","jo","ka","la","li","lo","ma","me","mi","mm","mo","mu","my","na","ne","no","nu","od","oe","of","oh","om","on","op","or","os","ow","ox","oy","pa","pe","pi","re","sh","si","so","ta","ti","to","uh","um","un","up","us","ut","we","wo","xi","xu","ya","ye","yo"
];
let pw_2letter_results = possibleWords({'*':2});
console.assert(all_2letter_words.every(word => pw_2letter_results.includes(word)), "possibleWords failed to find all possible 2 letter words given only 2 wild cards");


let bpw_results1 = bestPossibleWords({'a':1,'m':2,'u':2,'t':1,'q':1,'k':1});
console.assert(bpw_results1.length === 1 && bpw_results1[0] === 'kumquat', "bestPossibleWords failed to find the best possible word: 'kumquat'");

let bpw_q_i_2WC = [ // checked via: https://scrabblewordfinder.org/solver - the only words worth the same amount that are not in dictionary,js are 'qi' and 'qadi'
  'qaid','quai','quid','quin','quip','quit','quiz'
];
let bpw_results2 = bestPossibleWords({'q':1, 'i':1, '*':2});
console.assert(bpw_q_i_2WC.every(word => bpw_results2.includes(word)), "bestPossibleWords failed to find the best possible words given 2 wildcards");

// My Four Tests

console.assert(possibleWords({'*': 2}).length === bestPossibleWords({'*': 2}).length, "Error in checking for * in word");
console.assert(bestPossibleWords({a: 1}).length === 0, "Not a word from dictionary");

let myResults1 = bestPossibleWords({c: 1, a: 1, t: 1});
let myResults2 = possibleWords({c: 1, a: 1, t: 1});

console.assert(myResults1[0] === "act" && myResults1[1] === "cat", "Not best wording");
console.assert(myResults1.length !== myResults2.length, "myResults1 should be lenth 2 and myResults2 should be length 4");
