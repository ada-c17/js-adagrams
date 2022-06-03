const LETTERPOOL = {
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
  const lettersInHand = [];
  const availableLetters = getAvailableLetters(LETTERPOOL);
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
  const characters = Object.keys(LETTERPOOL);
  const generatedLetters = [];

  characters.forEach((letter) => {
    for (let i = 0; i < LETTERPOOL[letter]; i++) {
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
