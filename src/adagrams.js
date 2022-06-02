export const drawLetters = () => {
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

  const letterPool = [];
  const drawnLetters = [];

  for (const letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      letterPool.push(letter);
    }
  }

  for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * letterPool.length);
    const letter = letterPool[index];
    drawnLetters.push(letter);
    letterPool.splice(index, 1);
  }

  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();

  const lettersInHandCopy = lettersInHand.map((x) => x);

  for (const letter of word) {
    if (lettersInHandCopy.includes(letter)) {
      const index = lettersInHandCopy.indexOf(letter);
      lettersInHandCopy.splice(index, 1);
    } else {
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
