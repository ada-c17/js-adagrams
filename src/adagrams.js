const letterPool = {
  A: { quantity: 9, value: 1 },
  B: { quantity: 2, value: 3 },
  C: { quantity: 2, value: 3 },
  D: { quantity: 4, value: 2 },
  E: { quantity: 12, value: 1 },
  F: { quantity: 2, value: 4 },
  G: { quantity: 3, value: 2 },
  H: { quantity: 2, value: 4 },
  I: { quantity: 9, value: 1 },
  J: { quantity: 1, value: 8 },
  K: { quantity: 1, value: 5 },
  L: { quantity: 4, value: 1 },
  M: { quantity: 2, value: 3 },
  N: { quantity: 6, value: 1 },
  O: { quantity: 8, value: 1 },
  P: { quantity: 2, value: 3 },
  Q: { quantity: 1, value: 10 },
  R: { quantity: 6, value: 1 },
  S: { quantity: 4, value: 1 },
  T: { quantity: 6, value: 1 },
  U: { quantity: 4, value: 1 },
  V: { quantity: 2, value: 4 },
  W: { quantity: 2, value: 4 },
  X: { quantity: 1, value: 8 },
  Y: { quantity: 2, value: 4 },
  Z: { quantity: 1, value: 10 },
};

export const drawLetters = () => {
  // Implement this method for wave 1
  const lettersInHand = [];
  const availableLetters = getAvailableLetters(letterPool);
  let count = 0;

  while (count < 10) {
    let letter = getRandomLetter(availableLetters);
    lettersInHand.push(letter);
    count++;
  }
  return lettersInHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  input = input.toUpperCase();
  for (let letter of input) {
    if (!lettersInHand.includes(letter)) {
      return false;
    } else {
      lettersInHand.splice(lettersInHand.indexOf(letter), 1);
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

const getAvailableLetters = (letterData) => {
  const characters = Object.keys(letterPool);
  const generatedLetters = [];

  characters.forEach((letter) => {
    for (let i = 0; i < letterPool[letter].quantity; i++) {
      generatedLetters.push(letter);
    }
  });
  return generatedLetters;
};

const getRandomLetter = (lettersToDraw) => {
  let letterIndex = Math.floor(Math.random() * lettersToDraw.length);
  let randomLetter = lettersToDraw[letterIndex];
  lettersToDraw.splice(letterIndex, 1);

  return randomLetter;
};
