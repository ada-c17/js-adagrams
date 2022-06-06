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

// const SCORES = {
//   1: ['A','E','O','U','L','N','R','S','T'],
//   2: ['D','G'],
//   3: ['B','C','M','P'],
//   4: ['F','H','V','W','Y'],
//   5: ['K'],
//   8: ['J','X'],
//   10: ['Q','Z'],
// };

const SCORES = {
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
  const lettersCopy = { ...LETTERS };
  const hand = [];
  const letterArr = Object.keys(lettersCopy);
  for (let i = 0; i < 10; i++) {
    const letter = letterArr[Math.floor(Math.random() * letterArr.length)];

    if (lettersCopy[letter] > 0) {
      lettersCopy[letter] -= 1;
      hand.push(letter);
    } else {
      i -= 1;
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  for (let i = 0; i < input.length; i++) {
    if (lettersInHand.includes(input[i])) {
      let letterIndex = lettersInHand.indexOf(input[i]);
      lettersInHand.splice(letterIndex, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  if (word.length < 1) {
    return 0;
  }
  let score = 0;
  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  for (let i = 0; i < word.length; i++) {
    let letterScore = SCORES[word[i].toUpperCase()];
    score += letterScore;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
