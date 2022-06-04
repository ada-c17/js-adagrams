//Get an array of letters, where every letter repeats depending on its frequency

// import { splice } from "core-js/core/array";

// can be done by hand (actually it would take less time)
export const buildArrayLetters = function (letterDistribution) {
  const lettersList = [];
  for (const letter in letterDistribution) {
    while (letterDistribution[letter] > 0) {
      lettersList.push(letter);
      letterDistribution[letter] = letterDistribution[letter] - 1;
    }
  }
  return lettersList;
};

// get ten random elements from a given array and return an array with
// those ten elements
export const getTenRandom = function (listOfLetters) {
  const randomLetters = [];
  for (let i = 0; i < 10; i++) {
    let randomIndex = [Math.floor(Math.random() * listOfLetters.length)];
    randomLetters.push(listOfLetters[randomIndex]);
    listOfLetters.splice(randomIndex, 1);
  }
  return randomLetters;
};

export const drawLetters = () => {
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
  const freqLetters = buildArrayLetters(letterDistribution);
  const lettersDraw = getTenRandom(freqLetters);
  return lettersDraw;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const wordArray = input.split("");
  for (let i = 0; i < wordArray.length; i++) {
    if (lettersInHand.includes(wordArray[i]) === false) {
      return false;
    } else {
      lettersInHand.splice(lettersInHand.indexOf(wordArray[i]), 1);
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
