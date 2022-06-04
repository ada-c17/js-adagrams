const LETTER_VALS = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

const LETTER_FREQ = {
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
  let letterPool = [];
  for (const letter in LETTER_FREQ) {
    for (let i = 0; i < LETTER_FREQ[letter]; i++) {
      letterPool.push(letter);
    }
  }
  const hand = [];
  while (hand.length < 10) {
    const randomIdx = Math.floor(Math.random() * letterPool.length);
    const randomLetter = letterPool[randomIdx];
    letterPool.splice(randomIdx, 1);
    hand.push(randomLetter);
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const lettersFreq = {};
  for (const letter of lettersInHand) {
    if (letter in lettersFreq) {
      lettersFreq[letter] += 1;
    } else {
      lettersFreq[letter] = 1;
    }
  }
  if (input.length > lettersInHand) {
    return false;
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] in lettersFreq && lettersFreq[input[i]] > 0) {
      lettersFreq[input[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  if (!word) {
    return score;
  }
  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toUpperCase();
    score += LETTER_VALS[letter];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
