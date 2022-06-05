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
  for (let i = 0; i < input.length; i++) {
    if (!lettersInHand.includes(input[i])) {
      return false;
    }
    let index = lettersInHand.indexOf(input[i]);
    lettersInHand.splice(index, 1);
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
