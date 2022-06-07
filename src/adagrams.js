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

// Fisher-Yates algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const drawLetters = () => {
  let letterPool = [];

  for (const letter in LETTER_POOL) {
    for (let freq = 0; freq < LETTER_POOL[letter]; freq++) {
      letterPool.push(letter);
    }
  }
  shuffleArray(letterPool);
  return letterPool.slice(0, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  //copying lettersInHand
  let copyLettersInHand = [...lettersInHand];

  for (const letter of input) {
    if (!copyLettersInHand.includes(letter)) {
      return false;
    } else {
      copyLettersInHand.splice(copyLettersInHand.indexOf(letter), 1);
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
