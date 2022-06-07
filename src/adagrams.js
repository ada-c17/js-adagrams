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

// helper function to create letter pool array
const createLetterPool = () => {
  const letterPoolArray = [];

  for (const letter in letterPool) {
    for (let i = 0; i < letterPool[letter]; ++i) {
      letterPoolArray.push(letter);
    }
  }

  return letterPoolArray;
};

export const drawLetters = () => {
  const letterPool = createLetterPool();
  const playerHand = [];
  let counter = 0;

  while (counter < 10) {
    // access a letter via random index from letter pool
    const randomIndex = Math.floor(Math.random() * (letterPool.length - 1));
    const randomLetter = letterPool[randomIndex];

    // add letter to player hand, remove letter from letter pool
    playerHand.push(randomLetter);
    letterPool.splice(randomIndex, randomIndex);
    counter += 1;
  }

  return playerHand;
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
