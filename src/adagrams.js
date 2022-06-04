import _ from "underscore";

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

const LETTER_SCORE = {
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
  // Implement this method for wave 1
  const lettersArray = [];
  let dictIndex = 0;

  while (
    lettersArray.filter((x) => x === Object.keys(LETTER_POOL)[dictIndex])
      .length <= Object.values(LETTER_POOL)[dictIndex]
  ) {
    lettersArray.push(Object.keys(LETTER_POOL)[dictIndex]);
    dictIndex++;
  }

  return _.sample(lettersArray, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersInHandCopy = JSON.parse(JSON.stringify(lettersInHand));
  let uppercasePool = lettersInHandCopy.map((letter) => letter.toUpperCase());
  for (let i = 0; i < input.length; i++) {
    if (uppercasePool.includes(input[i])) {
      uppercasePool.splice(uppercasePool.indexOf(input[i]), 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const uppercaseWord = word.toUpperCase();
  let wordScore = 0;
  for (let letter of uppercaseWord){
    wordScore += LETTER_SCORE[letter];
  }
  if (word.length > 6 && word.length < 11) {
    wordScore += 8;
  }
  return wordScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let bestScore = 0;
  let bestWord = null;
  for (let word of words){
    if (scoreWord(word) > bestScore){
      bestScore = scoreWord(word);
      bestWord = word;
    } else if (scoreWord(word) === bestScore && bestWord.length !== 10) {
      if (word.length === 10 || word.length < bestWord.length){
        bestWord = word;
      }
    }
  }
  return {word:bestWord, score:bestScore};
};
