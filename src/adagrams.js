
import { LETTER_POOL } from "constants.js";


export const drawLetters = () => {
  // Implement this method for wave 1
  let letterPoolCopy = {...LETTER_POOL};
  let hand = [];
  while (hand.length < 10) {
    let letter = Object.keys(letterPoolCopy)[Math.floor(Math.random()*Object.keys(letterPoolCopy).length)];
    hand.push(letter);
    letterPoolCopy[letter]--;
    if (letterPoolCopy[letter] === 0) {
      delete letterPoolCopy[letter];
    }
  }
  return hand;
};



export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersInHandCopy = [...lettersInHand];
  const inputArray = Array.from(input);

  if (input.length > 10 || input.length < 1) {
    return false;
  }

  for (const letter of inputArray) {
    if (!lettersInHandCopy.includes(letter)) {
      return false;
    } else {
      const index = lettersInHandCopy.indexOf(letter);
      if (index > -1) {
        lettersInHandCopy.splice(index, 1);
      }
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
