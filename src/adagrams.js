const letterDistribution = {
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
  let userHand = []
  let availableLetters = []

  // iterate through object with letter distribution to populate availableLetters array
  for (let letter in letterDistribution) {
    availableLetters = availableLetters.concat(Array(letterDistribution[letter]).fill(letter));
  }

  /*
    build a userHand by looping 10 times, each time choosing a random index
    in the 98 letters in the availableLetters array, and the letter at that index;
    then remove chosen letter from availableLetters array, and add to userHand.
  */
  for (var i = 0; i < 10; i++) {
    var chosenLetterIdx = Math.floor(Math.random() * availableLetters.length)
    // chosenLetter = availableLetters[chosenLetterIdx];
    var chosenLetter = availableLetters.splice(chosenLetterIdx, 1);
    // console.log("chosen Letter", chosenLetter);
    // console.log("index", chosenLetterIdx);
    userHand = userHand.concat(chosenLetter);
  }

  return userHand;
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
