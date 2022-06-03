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

const makeLetterArr = (letterObj) => {
  let letterArr = [];
  for (const letter in letterObj) {
    let subArr = Array(letterObj[letter]).fill(letter);
    letterArr = letterArr.concat(subArr);
  }
  return letterArr;
};

export const drawLetters = () => {
  // Implement this method for wave 1
  const letters = { ...letterPool };
  const letterArr = makeLetterArr(letters);
  const hand = [];

  do {
    let index = Math.floor(Math.random() * (letterArr.length - 1));
    let chosenLetter = letterArr[index];
    letters[chosenLetter] -= 1;
    if (letters[chosenLetter] >= 0) {
      hand.push(chosenLetter);
    }
  } while (hand.length < 10);
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
