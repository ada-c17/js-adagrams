// import { random } from "core-js/core/number";

const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

const letterScores = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};



export const drawLetters = () => {
  // Implement this method for wave 1
  const letters = [];
  const freq = {};
  const lKeys = Object.keys(LETTER_POOL);
  while (letters.length < 10) {
    let randomL = lKeys[Math.floor(Math.random()*lKeys.length)];
    if (randomL in freq) {
      if (freq[randomL] < LETTER_POOL[randomL]){
        freq[randomL]+=1;
        letters.push(randomL);
      }
  } else {
      freq[randomL] = 1;
      letters.push[randomL];
  }
  }
return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  for (const letter of input) {
    if (!lettersInHand.includes(letter.toUpperCase())) {
      return false;
    } else {
      lettersInHand.splice(lettersInHand.indexOf(letter), 1);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
