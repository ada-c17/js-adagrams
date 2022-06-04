import { LETTER_POOL, generateLetters, getRandomLetter } from "helper";

const letterValue = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

export const drawLetters = () => {
  let availableLetters = generateLetters(LETTER_POOL);
  let drawnLetters = [];
  for (let i = 0; i < 10; i++) {
    drawnLetters.push(getRandomLetter(availableLetters));
  }
  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let i = 0; i < input.length; i++) {
    if (!lettersInHand.includes(input[i])) {
      return false;
    }
    lettersInHand.splice(input[i], 1);
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  const upper = word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    score += letterValue[upper[i]];
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  // let bestScore = 0;
  // let bestWord = words[0];
  let best = {
    word: words[0],
    score: 0,
  };
  for (let word of words) {
    let score = scoreWord(word);
    if (score > best.score) {
      best.score = score;
      best.word = word;
    } else if (score == best.score) {
      if (best.word.length == 10) {
        continue;
      } else if (word.length == 10) {
        best.score = score;
        best.word = word;
      } else if (word.length < best.word.length) {
        best.score = score;
        best.word = word;
      }
    }
  }
  return best;
};
