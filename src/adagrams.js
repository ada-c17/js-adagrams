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

export const drawLetters = () => {
  const res = [];
  const LEETERS_COPY = JSON.parse(JSON.stringify(LETTER_POOL)); // Deep Copy
  for (let i = 0; i < 10; i++) {
    let idx = Math.floor(
      Math.random() * (Object.keys(LEETERS_COPY).length - 1) // random index
    );
    let letter = Object.keys(LEETERS_COPY)[idx];
    res.push(letter); // O(1)
    LEETERS_COPY[letter]--;
    if (LEETERS_COPY[letter] === 0) {
      delete LEETERS_COPY[letter]; // O(1)
    }
  }
  return res;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  if (!input || input.length > 10) {
    return false;
  }

  const availableLetters = {};
  for (let letter of lettersInHand) {
    if (letter in availableLetters) {
      availableLetters[letter]++;
    } else {
      availableLetters[letter] = 1;
    }
  }

  for (let letter of input) {
    if (
      availableLetters[letter] === undefined ||
      availableLetters[letter] === 0
    ) {
      return false;
    } else {
      availableLetters[letter]--;
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
