const letterQuantityData = {
  A: 9,
  N: 6,
  B: 2,
  O: 8,
  C: 2,
  P: 2,
  D: 4,
  Q: 1,
  E: 12,
  R: 6,
  F: 2,
  S: 4,
  G: 3,
  T: 6,
  H: 2,
  U: 4,
  I: 9,
  V: 2,
  J: 1,
  W: 2,
  K: 1,
  X: 1,
  L: 4,
  Y: 2,
  M: 2,
  Z: 1,
};

export const drawLetters = () => {
  // Implement this method for wave 1
  // populate letterArr with the letters for fair probability
  const letterArr = [];
  for (const [letter, quantity] of Object.entries(letterQuantityData)) {
    let counter = 0;
    while (counter < quantity) {
      letterArr.push(letter);
      counter++;
    }
  }

  // a loop that generates 10 random letters
  // after generating a single letter, it is added to the letterBank
  // and deleted off the letterArr for no repeated elements
  const letterBank = [];
  for (let i = 0; i < 10; i++) {
    let letterIndex = Math.floor(Math.random() * letterArr.length);
    letterBank.push(letterArr[letterIndex]);
    letterArr.splice(letterIndex, 1);
  }
  return letterBank;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
