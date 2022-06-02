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
  const letterPointTable = {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  };

  let points = 0;
  word = word.toUpperCase();

  for (const letter of word) {
    points += letterPointTable[letter];
  }

  if (word.length >= 7 && word.length <= 10) {
    points += 8;
  }

  return points;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
