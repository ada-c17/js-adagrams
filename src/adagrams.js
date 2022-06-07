import { Math } from "core-js";

const letterPool = {
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

const letterScores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

export const drawLetters = () => {
  let letterPoolArray = [];
  for (const [key, value] of Object.entries(letterPool)) {
    const letterNumTimes = Array(value).fill(key);
    letterPoolArray = letterPoolArray.concat(letterNumTimes);
  }
  const lettersSelected = [];
  for (let i = 0; i < 10; i++) {
    let letter =
      letterPoolArray[Math.floor(Math.random() * letterPoolArray.length)];
    lettersSelected.push(letter);
    letterPoolArray.splice(letterPoolArray.indexOf(letter), 1);
  }
  return lettersSelected;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let char of input) {
    const capitalChar = char.toUpperCase();
    if (lettersInHand.includes(capitalChar)) {
      lettersInHand.splice(lettersInHand.indexOf(capitalChar), 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const capitalWord = word.toUpperCase();
  let total = 0;
  if (word.length >= 7) {
    total += 8;
  }
  for (let letter of capitalWord) {
    total += letterScores[letter];
  }
  return total;
};

export const highestScoreFrom = (words) => {
  let highestScoringWord = "";
  let highestScore = 0;
  for (let word of words) {
    const wordScore = scoreWord(word);
    if (wordScore > highestScore) {
      highestScore = wordScore;
      highestScoringWord = word;
    } else if (wordScore === highestScore) {
      if (highestScoringWord.length === 10) {
        continue;
      } else if (word.length === 10) {
        highestScoringWord = word;
      } else if (word.length < highestScoringWord.length) {
        highestScoringWord = word;
      }
    }
  }
  const winningWord = { word: highestScoringWord, score: highestScore };
  return winningWord;
};
