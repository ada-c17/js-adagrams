import { letterPool, generateLetters, getRandomLetter } from "./helper";

// ----- Wave 1 -----

export const drawLetters = () => {
  // generate all available letters using quantities from letterPool
  const availableLetters = generateLetters(letterPool);

  // generate 10 random letters from availableLetters
  const handSize = 10;
  const lettersInHand = [];
  for (let i = 0; i < handSize; i++) {
    lettersInHand.push(getRandomLetter(availableLetters));
  }
  return lettersInHand;
};

// ----- Wave 2 -----

export const usesAvailableLetters = (input, lettersInHand) => {
  if (input.length > lettersInHand.length) return false;

  for (let i of input) {
    const index = lettersInHand.findIndex((letter) => letter === i);
    if (index === -1) {
      return false;
    } else {
      lettersInHand.splice(index, 1);
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
