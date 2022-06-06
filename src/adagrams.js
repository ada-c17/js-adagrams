export const makeLetterPool = () => {
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

  const letter_array = [];
  for (const letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      letter_array.push(letter);
    }
  }

  return letter_array;
};

export const drawLetters = () => {
  // Implement this method for wave 1
  const letters = makeLetterPool();
  const hand = [];

  for (let i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * letters.length);
    hand.push(letters[num]);
    letters.splice(num, 1);
  }
  return hand;
};

export const frequencyMap = (string) => {
  const frequencyMap = {};
  for (const letter of string) {
    if (frequencyMap[letter]) {
      frequencyMap[letter]++;
    } else {
      frequencyMap[letter] = 1;
    }
  }

  return frequencyMap;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const inputLetterFrequency = frequencyMap(input);
  const handLetterFrequency = frequencyMap(lettersInHand);

  for (const letter in inputLetterFrequency) {
    if (inputLetterFrequency[letter] !== handLetterFrequency[letter]) {
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
