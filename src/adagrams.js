export const drawLetters = () => {
  // Implement this method for wave 1
  const scoreChart = {
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
  
  let letters = [];

  for (const [letter, inputLetterFreq] of Object.entries(scoreChart)) {
    for (let i = 0; i < inputLetterFreq; i++) {
      letters.push(letter);
    }
  };
  // Fisher-Yates shuffle algorithm
  for (let i = letters.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = letters[j];
    letters[j] = letters[i];
    letters[i] = temp;
  };
  return letters.slice(0, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let inputLetterFreq = {};

  for (const letter of input) {
    if (letter.toUpperCase() in inputLetterFreq) {
      inputLetterFreq[letter.toUpperCase()] += 1;
    } else {
      inputLetterFreq[letter.toUpperCase()] = 1;
    }
  };


  let lettersInHandFreq = {};

  for (const letter of lettersInHand) {
    if (letter.toUpperCase() in lettersInHandFreq) {
      lettersInHandFreq[letter.toUpperCase()] += 1;
    } else {
      lettersInHandFreq[letter.toUpperCase()] = 1;
    }
  };

  
  for (const letter of input) {
    /* If the letter does not exist in the `lettersInHandFreq` or the `input` letter 
    frequency is greater than `lettersInHand`'s frequency, return false. Otherwise,
    return true. */
    if (typeof(lettersInHandFreq[letter.toUpperCase()]) === 'undefined' ||
    inputLetterFreq[letter.toUpperCase()] > lettersInHandFreq[letter
    .toUpperCase()]) {
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