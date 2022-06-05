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
const POINT_SCALE = {
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

// Question: how to make this more efficient than nested loops?
const makePoolOfLetters = () => {
  let poolOfLetters = [];
  for (const [letter, count] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < count; i++) {
      poolOfLetters.push(letter);
    }
  }
  return poolOfLetters;
};

const shuffleLetterPool = () => {
  let poolOfLetters = makePoolOfLetters();
  // Fisher Yates shuffle
  for (let i = poolOfLetters.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = poolOfLetters[i];
    poolOfLetters[i] = poolOfLetters[j];
    poolOfLetters[j] = k;
  }
  return poolOfLetters;
};

// Question: I first tried generating a random index, then removing that index from the letter pool
// and adding it to my hand - but couldn't figure out how to remove array elem at index
export const drawLetters = () => {
  let shuffledLetters = shuffleLetterPool();
  let letterHand = [];
  while (letterHand.length < 10) {
    letterHand.push(shuffledLetters.pop());
  }
  return letterHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let availableLetters = {};
  for (let letter of lettersInHand) {
    if (letter in availableLetters) {
      availableLetters[letter] += 1;
    } else {
      availableLetters[letter] = 1;
    }
  }

  for (const letter of input) {
    if (letter in availableLetters) {
      availableLetters[letter] -= 1;
    } else {
      return false;
    }
  }

  for (const letter in availableLetters) {
    if (availableLetters[letter] < 0) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let total = 0;
  for (const letter of word) {
    total += POINT_SCALE[letter.toUpperCase()];
  }
  if (word.length >= 7) {
    total += 8;
  }
  return total;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
