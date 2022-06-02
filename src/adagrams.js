const LETTERS = {
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

const SCORE_CHART = {
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
  let chars = [];
  for (let char in LETTERS) {
    let repeat = LETTERS[char];
    while (repeat > 0) {
      chars.push(char);
      repeat -= 1;
    }
  }
  let hand = [];
  while (hand.length < 10) {
    let rand_letter = chars[Math.floor(Math.random() * chars.length)];

    if (chars.includes(rand_letter)) {
      hand.push(rand_letter);
      chars.splice(chars.indexOf(rand_letter), 1);
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let i = 0; i < input.length; i++) {
    if (!lettersInHand.includes(input[i])) {
      return false;
    } else {
      lettersInHand.splice(lettersInHand.indexOf(input[i]), 1);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  if (word.length >= 7 && word.length <= 10) {
    score = 8;
  }
  for (let i = 0; i < word.length; i++) {
    score += SCORE_CHART[word[i].toUpperCase()];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
