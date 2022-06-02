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

const scoreChart = {
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

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

export const drawLetters = () => {
  let letterList = [];

  for (const key in letterPool) {
    letterList = letterList.concat(Array(letterPool[key]).fill(key));
  }

  shuffle(letterList);

  const output = letterList.slice(0, 10);

  return output;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const inputUpper = input.toUpperCase();
  let obj = new Map();

  lettersInHand.forEach((e) => {
    if (obj.has(e)) {
      obj.set(e, obj.get(e) + 1);
    } else {
      obj.set(e, 1);
    }
  });

  for (const char of inputUpper) {
    if (!obj.has(char)) {
      return false;
    } else {
      obj.set(char, obj.get(char) - 1);
    }
    if (obj.get(char) < 0) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;

  for (const char of word.toUpperCase()) {
    score += scoreChart[char];
  }

  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let maxScore = 0;
  let maxWord = null;

  for (let i = 0; i < words.length; i++) {
    const currentScore = scoreWord(words[i]);
    if (currentScore > maxScore) {
      maxScore = currentScore;
      maxWord = words[i];
    } else if (currentScore == maxScore && maxWord.length != 10) {
      if (words[i].length < maxWord.length || words[i].length == 10) {
        maxWord = words[i];
      }
    }
  }
  const result = {
    word: maxWord,
    score: maxScore,
  };

  return result;
};
