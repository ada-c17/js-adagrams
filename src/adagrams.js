const createLetterPoolArray = () => {
  const letterQuantities = {
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
  let letterPoolArray = [];
  for (const [letter, quantity] of Object.entries(letterQuantities)) {
    for (let i = 0; i < quantity; i++) {
      letterPoolArray.push(letter);
    }
  }
  return letterPoolArray;
};

const getRandomIndex = (arrayLength) => {
  return Math.floor(Math.random() * arrayLength);
};

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterPoolArray = createLetterPoolArray();
  let currentHand = [];
  for (let i = 0; i < 10; i++) {
    const drawnIndex = getRandomIndex(letterPoolArray.length);
    currentHand.push(letterPoolArray[drawnIndex]);
    letterPoolArray.splice(drawnIndex, 1);
  }
  return currentHand;
};

// Helper functions for counting instances
const countArray = (array, value) => {
  let count = 0;

  array.forEach((item) => {
    if (item === value) {
      count++;
    }
  });

  return count;
};

const countString = (string, value) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === value) {
      count++;
    }
  }
  return count;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const upperInput = input.toUpperCase();
  const letters = new Set(upperInput);

  for (let letter of letters) {
    const inputCount = countString(upperInput, letter);
    const handCount = countArray(lettersInHand, letter);
    if (handCount < inputCount) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let result = 0;
  if (word !== '') {
    const letterScores = {
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
    for (let letter of word) {
      if (letter.match(/^[0-9A-Za-z]+$/) !== null) {
        result += letterScores[letter.toUpperCase()];
      }
    }
    if (7 <= word.length && word.length <= 10) {
      result += 8;
    }
  }
  return result;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
