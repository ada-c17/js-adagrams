// ----- Wave 1 -----

const letterPool = {
  A: { quantity: 9, score: 1 },
  B: { quantity: 2, score: 3 },
  C: { quantity: 2, score: 3 },
  D: { quantity: 4, score: 2 },
  E: { quantity: 12, score: 1 },
  F: { quantity: 2, score: 4 },
  G: { quantity: 3, score: 2 },
  H: { quantity: 2, score: 4 },
  I: { quantity: 9, score: 1 },
  J: { quantity: 1, score: 8 },
  K: { quantity: 1, score: 5 },
  L: { quantity: 4, score: 1 },
  M: { quantity: 2, score: 3 },
  N: { quantity: 6, score: 1 },
  O: { quantity: 8, score: 1 },
  P: { quantity: 2, score: 3 },
  Q: { quantity: 1, score: 10 },
  R: { quantity: 6, score: 1 },
  S: { quantity: 4, score: 1 },
  T: { quantity: 6, score: 1 },
  U: { quantity: 4, score: 1 },
  V: { quantity: 2, score: 4 },
  W: { quantity: 2, score: 4 },
  X: { quantity: 1, score: 8 },
  Y: { quantity: 2, score: 4 },
  Z: { quantity: 1, score: 10 },
};

const generateLetters = (lettersData) => {
  const availableLetters = [];
  Object.entries(letterPool).forEach(([letter, value]) => {
    for (let i = 0; i < value.quantity; i++) {
      availableLetters.push(letter);
    }
  });
  return availableLetters;
};

const getRandomLetter = (lettersArray) => {
  // get a random letter and remove that letter from the original arrays
  let randomIndex = ~~(Math.random() * lettersArray.length);
  let randomLetter = lettersArray.splice(randomIndex, 1)[0];
  return randomLetter;
};

export const drawLetters = () => {
  // generate all available letters using quantities from letterPool
  const availableLetters = generateLetters(letterPool);
  console.log(availableLetters.length);

  // generate 10 random letters from availableLetters
  const handSize = 10;
  const lettersInHand = [];
  for (let i = 0; i < handSize; i++) {
    lettersInHand.push(getRandomLetter(availableLetters));
  }
  console.log(availableLetters.length);
  return lettersInHand;
};

// ----- Wave 2 -----

export const usesAvailableLetters = (input, lettersInHand) => {
  if (input.length > lettersInHand.length) return false;

  for (let i of input) {
    const index = lettersInHand.findIndex((letter) => letter === i);
    if (index === -1) {
      return false;
    } else {
      lettersInHand.splice(index, 1);
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
