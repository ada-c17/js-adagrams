import { letterPool, scoreChart } from "constants";

// helper function to create letter pool array
const createLetterPool = () => {
  const letterPoolArray = [];

  for (const letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; ++i) {
      letterPoolArray.push(letter);
    }
  }

  return letterPoolArray;
};

export const drawLetters = () => {
  const letterPool = createLetterPool();
  const playerHand = [];
  let counter = 0;

  while (counter < 10) {
    // access a letter via random index from letter pool
    const randomIndex = Math.floor(Math.random() * (letterPool.length - 1));
    const randomLetter = letterPool[randomIndex];

    // add letter to player hand, remove letter from letter pool
    playerHand.push(randomLetter);
    letterPool.splice(randomIndex, randomIndex);
    counter += 1;
  }

  return playerHand;
};

export const usesAvailableLetters = (inputWord, lettersInHand) => {
  // check that each character in inputWord exists in lettersInHand
  for (let char of inputWord) {
    if (!lettersInHand.includes(char)) {
      return false;
    } else {
      // remove characters from lettersInHand to maintain accurate letter count
      lettersInHand.splice(
        lettersInHand.indexOf(char),
        lettersInHand.indexOf(char)
      );
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
