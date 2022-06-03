export const drawLetters = () => {
  // Implement this method for wave 1
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
  const letterList = [];
  for (const letter in letterPool) {
    let repeatNum = letterPool[letter];
    for (let i = 0; i < repeatNum; i++) {
      letterList.push(letter);
    }
  }
  console.log(letterList);

  const newLetterList = [];
  const countDict = {};

  let numLetters = 0;
  while (numLetters < 10) {
    let ri = Math.floor(Math.random() * letterList.length);
    let letter = letterList[ri];
    if (letter in countDict) {
      if (countDict[letter] < letterPool[letter]) {
        countDict[letter] += 1;
        newLetterList.push(letter);
        numLetters += 1;
      }
    } else {
      countDict[letter] = 1;
      newLetterList.push(letter);
      numLetters += 1;
    }
  }
  return newLetterList;
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
