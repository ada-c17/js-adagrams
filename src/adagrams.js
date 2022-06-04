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
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
