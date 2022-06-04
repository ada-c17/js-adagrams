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

const SCORE_CHART = {
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

const makeLetterPool = () => {
  let newLetterPool = [];
  // make a list of letters, each letter occurs as many time as indicated in the object LETTER_POOL
  for (const letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      newLetterPool.push(letter);
    }
  }
  return newLetterPool;
};

export const drawLetters = () => {
  const currentLetterPool = makeLetterPool();
  const hand = [];
  for (let i = 0; i < 10; i++) {
    // randomly pick an element letter pool, add to hand, and remove from pool
    let random_index = Math.floor(Math.random() * currentLetterPool.length);
    let letter = currentLetterPool[random_index];
    hand.push(letter);
    currentLetterPool.splice(random_index, 1);
  }

  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // if letter is in hand (calling indexOf() gives a value of 0 or higher), remove it. if not, return false.
  for (let i = 0; i < input.length; i++) {
    let letterIndex = lettersInHand.indexOf(input[i]);
    if (letterIndex >= 0) {
      lettersInHand.splice(letterIndex, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const inputWord = word.toUpperCase();
  let score = 0;

  for (let i = 0; i < inputWord.length; i++) {
    score += SCORE_CHART[inputWord[i]];
  }

  if (inputWord.length > 6) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
