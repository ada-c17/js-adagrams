import {SCORE_CHART, LETTER_POOL} from './constants'

export const drawLetters = () => {
  let letterPool = [];
  for (const [letter, frequency] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < frequency; i++) {
      letterPool.push(letter);
    }
  }

  let userHand = [];
  for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * (letterPool.length - 1));
    const letter = letterPool[index];
    letterPool.splice(index, 1);
    userHand.push(letter);
  }

  return userHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // create a new map with key being letter and value being frequency of what they used
  if (input.length <= 0 || input.length > 10) {
    return false;
  }

  let userLetter = {};
  for (const char of input) {
    if (char in userLetter) {
      userLetter[char] += 1;
    } else {
      userLetter[char] = 1;
    }
  };
  // check if the letter they used is  <= frequency
  let userHand = {};
  lettersInHand.forEach(letter => {
    if (letter in userHand) {
      userHand[letter] += 1;
    } else {
      userHand[letter] = 1;
    }
  });

  for (const [letter, frequency] of Object.entries(userLetter)) {
    if (!(letter in userHand && frequency <= userHand[letter])) {
      return false;
    }
  }
  
  return true;

};

export const scoreWord = (word) => {
  
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
