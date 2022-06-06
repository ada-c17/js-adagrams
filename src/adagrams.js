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

const scoreDict = {
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
  const poolList = [];
  for (const [letter, frequency] of Object.entries(letterPool)) {
    for (let i = 0; i < frequency; i++) {
      poolList.push(letter);
    }
  }
  const randomLettersList = [];
  while (randomLettersList.length < 10) {
    let letterIndex = Math.floor(Math.random() * (poolList.length - 1));
    randomLettersList.push(poolList[letterIndex]);
    poolList.splice(letterIndex, 1);
  }
  return randomLettersList;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const copyLettersInHand = lettersInHand.slice(0);
  for (let i = 0; i < input.length; i++) {
    let letter = input[i].toUpperCase();
    if (copyLettersInHand.includes(letter)) {
      const index = copyLettersInHand.indexOf(letter);
      if (index > -1) {
        copyLettersInHand.splice(index, 1);
      }
      console.log(copyLettersInHand);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
