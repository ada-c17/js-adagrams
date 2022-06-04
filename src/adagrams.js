import { LETTER_POOL } from "../test/adagrams.test";

export const drawLetters = () => {
  // Implement this method for wave 1
  let arr = [];

  for (let key in LETTER_POOL) {
      for (let i = 0; i < LETTER_POOL[key]; i++) {
          arr.push(key);
      }
  }

  arr.sort(() => Math.random() - 0.5);

  return arr.slice(0, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
