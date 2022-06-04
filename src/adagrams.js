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
  let currentLetterPool = makeLetterPool();
  let hand = [];
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
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
