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
  let wordUpper = input.toUpperCase();

  for (let letter of wordUpper) {
    let count1 = 0;
    let count2 = 0;

    count1 = 0;
    for (let letter2 of wordUpper) {
      if (letter2 === letter) {
        count1++;
      }
    }

    count2 = 0;
    for (let letter2 of lettersInHand) {
      if (letter2 === letter) {
        count2++;
      }
    }

    if (count1 > count2) {
      return false;
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
