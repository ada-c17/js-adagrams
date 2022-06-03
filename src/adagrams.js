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
  let letterPoolArray = [];
  let randomLetter;
  let userLetters = [];
  // Create frequency array of letters
  for (const [letter, frequency] of Object.entries(letterPool)) {
    for (let i = 0; i < frequency; i++) {
      letterPoolArray.push(letter);
    }
  }
  // Create a user pool of letters and remove letters from original array once they are picked
  while (userLetters.length < 10) {
    let letterIndex = Math.floor(Math.random() * letterPoolArray.length);
    randomLetter = letterPoolArray[letterIndex];
    userLetters.push(randomLetter);
    letterPoolArray.splice(letterIndex, 1);
  }
  return userLetters;
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
