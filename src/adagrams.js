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

const makeArrayOfLetters = () => {
  let letters_array = [];
  for (const [letter, count] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < count; i++) {
      letters_array.push(letter);
    }
  }
  return letters_array;
};

const getRandomIndex = (max) => {
  return Math.random() * max;
};

export const drawLetters = () => {
  let letters_array = makeArrayOfLetters();
  const letters = [];
  while (letters.length < 10) {
    const random_index = getRandomIndex(letters_array.length);
    letters.push(letters_array.splice(random_index, 1));
  }
  console.log(letters);
  return letters;
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
