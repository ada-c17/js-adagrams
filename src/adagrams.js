import { letterPool, scoreChart } from "./letters";

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterOptions = [];

  for (const [letter, frequency] of Object.entries(letterPool)) {
    for (let i = 0; i < frequency; i++) {
      letterOptions.push(letter);
    }
  }

  let userLetters = []; //This was origianlly done with a deepcopy method in python
  while (userLetters.length < 10) {
    const letter_index = Math.floor(Math.random() * letterOptions.length);
    const letter_draw = letterOptions[letter_index];
    letterOptions.splice(letter_index, 1);
    userLetters.push(letter_draw);
  }
  return userLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  // Start with a guard clause:
  if (input.length <= 0 || input.length > 10) {
    return false;
  }

  for (let letter of input.toUpperCase()) {
    if (lettersInHand.includes(letter)) {
      lettersInHand.splice(lettersInHand.indexOf(letter), 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  word = word.toUpperCase();
  let score = 0;
  let wordLength = word.length;

  if (word === "") {
    return 0;
  } else if (wordLength >= 7) {
    score += 8;
  }

  for (let letter of word) {
    score += scoreChart[letter];
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let bestWordList = [];
  let bestWord = "";
  let wordScoreMap = {};
  let values = Object.values(wordScoreMap);
  let highestWordScore = Math.max(...values);

  for (let word of words) {
    let wordScore = scoreWord(word);
    if (wordScore > highestWordScore) {
      highestWordScore = wordScore;
      bestWord = word;
    } else if (wordScore == highestWordScore) {
      if (bestWord.length === 10) {
        continue;
      } else if (word.length === 10) {
        bestWord = word;
      } else if (bestWord.length > word.length) {
        bestWord = word;
      }
    }
  }
  const winningWord = { word: bestWord, score: highestWordScore };
  return winningWord;
};
