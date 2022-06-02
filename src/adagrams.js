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

export const drawLetters = () => {
  // Implement this method for wave 1

  let userHand = [];
  let availableLetters = [];

  for (const letter in letterPool) {
    for (let num = 0; num < letterPool[letter]; num++) {
      availableLetters.push(letter);
    }
  }

  while (userHand.length < 10) {
    const letterIndex = Math.floor(Math.random() * availableLetters.length);
    const letterChoice = availableLetters[letterIndex];

    //pop letter from array
    availableLetters.splice(letterIndex, 1);

    //append to userHand
    userHand.push(letterChoice);
  }

  return userHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let userHand = [...lettersInHand];

  for (let letter of input) {
    if (!userHand.includes(letter)) {
      return false;
    } else {
      const letterIndex = userHand.indexOf(letter);
      userHand.splice(letterIndex, 1);
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
