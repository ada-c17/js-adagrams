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
  const drawn = [];
  const letterFreq = {};
  const letterKeys = Object.keys(letterPool);

  for (let i = 0; i < 10; i++) {
    var randomLetter =
      letterKeys[Math.floor(Math.random() * letterKeys.length)];
    if (randomLetter in letterFreq) {
      if (letterFreq[randomLetter] < letterPool[randomLetter]) {
        letterFreq[randomLetter] += 1;
        drawn.push(randomLetter);
      }
    } else {
      letterFreq[randomLetter] = 1;
      drawn.push(randomLetter);
    }
  }
  return drawn;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const clonedHand = JSON.parse(JSON.stringify(lettersInHand));
  const wordPlayed = input.toUpperCase();

  for (const letter of wordPlayed) {
    let letterIndex = clonedHand.indexOf(letter);
    if (letterIndex > -1) {
      clonedHand.splice(letterIndex, 1);
    } else if (letterIndex === -1) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {};

// export const highestScoreFrom = (words) => {
//   // Implement this method for wave 1
// }:
