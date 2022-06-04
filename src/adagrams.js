export const drawLetters = () => {
  const letterFreq = {
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
  const drawn = [];
  while (drawn.length < 10) {
    let letters = Object.keys(letterFreq);
    let randIndex = Math.floor(Math.random() * letters.length);
    let randLetter = letters[randIndex];
    let remainingLetterValue = letterFreq[randLetter];
    if (remainingLetterValue > 0) {
      drawn.push(randLetter);
      letterFreq[randLetter] -= 1;
    }
  }
  return drawn;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let i = 0; i < input.length; i++) {
    const inputLetter = input[i];
    if (lettersInHand.includes(inputLetter) === true) {
      const letterIndex = lettersInHand.indexOf(inputLetter);
      lettersInHand.splice(letterIndex, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3 ----> forEach
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
