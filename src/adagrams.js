// import { LETTER_POOL } from "../test/adagrams.test";
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
  const hand = [];
  const letterBank = [];
  // Build a letterBank array where each letters appearance is accurately weighted
  for (const [key, count] of Object.entries(LETTER_POOL)) {
    const start = letterBank.length;
    letterBank.length += count;
    letterBank.fill(key, start, letterBank.length);
  }
  // Build a hand of ten random strings from the letterBank removing selected letter fom letterBank
  for (let i = 0; i < 10; i++) {
    let temp = Math.floor(Math.random() * letterBank.length);
    hand.push(letterBank[temp]);
    letterBank.splice(temp, 1);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  input = input.toUpperCase();
  let handCopy = [...lettersInHand];
  for (let i = 0; i < input.length; i++) {
    if (!handCopy.includes(input[i])) {
      return false;
    }
    let index = handCopy.indexOf(input[i]);
    handCopy.splice(index, 1);
  }
  return true;
};

export const scoreWord = (word) => {
  word = word.toUpperCase();
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score += LETTER_SCORE[word[i]];
  }
  if (word.length > 6) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  const highestWord = {
    score: 0,
    word: "",
  };
  for (let i = 0; i < words.length; i++) {
    if (scoreWord(words[i]) > highestWord.score) {
      highestWord.score = scoreWord(words[i]);
      highestWord.word = words[i];
    } else if (scoreWord(words[i]) === highestWord.score) {
      if (highestWord.word.length === 10) {
        continue;
      } else if (words[i].length === 10) {
        highestWord.word = words[i];
      } else if (highestWord.word.length > words[i].length) {
        highestWord.word = words[i];
      }
    }
  }
  return highestWord;
};
