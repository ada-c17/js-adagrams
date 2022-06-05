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
  // Implement this method for wave 1
  let objCopy = { ...LETTER_POOL };
  const letters = [];
  while (letters.length < 10) {
    let letter =
      Object.keys(objCopy)[
        Math.floor(Math.random() * Object.keys(objCopy).length)
      ];
    letters.push(letter);
    objCopy[letter]--;
    if (objCopy[letter] === 0) {
      delete objCopy[letter];
    }
  }
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const freqCounter = {};
  for (const letter of lettersInHand) {
    if (freqCounter[letter]) {
      freqCounter[letter]++;
    } else {
      freqCounter[letter] = 1;
    }
  }
  for (const letter of input) {
    if (!freqCounter[letter]) {
      return false;
    } else {
      freqCounter[letter]--;
      if (freqCounter[letter] === 0) {
        delete freqCounter[letter];
      }
      // if (input[letter] === freqCounter) {
      //   return true;
      // }
    }
  }
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
