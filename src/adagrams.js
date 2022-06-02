export const drawLetters = () => {
  // Implement this method for wave 1
  const LETTER_POOL = {
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
  const allLetters = [];
  for (var element in LETTER_POOL) {
    const freqLetter = LETTER_POOL[element];

    for (let step = 0; step < freqLetter; step++) {
      allLetters.push(element);
    }
  }

  const listOfstrings = [];

  while (listOfstrings.length < 10) {
    const randomIndex = Math.floor(Math.random() * allLetters.length);
    const selectedLetter = allLetters[randomIndex];
    listOfstrings.push(selectedLetter);
    allLetters.splice(randomIndex, 1);
  }
  return listOfstrings;
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
