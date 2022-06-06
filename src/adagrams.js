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
  const scoreChart = {A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, 
                V: 4, W: 4, X: 8, Y: 4, Z: 10};
  let score = 0;

  if (!word) {
    return 0;
  }
  
  for (let letter of word) {
      score += scoreChart[letter.toUpperCase()];
  }
  
  if (7 <= word.length && word.length <= 10) {
    score += 8;
    
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
