const letterFreqAndScore = {
  A: [9, 1],
  B: [2, 3],
  C: [2, 3],
  D: [4, 2],
  E: [12, 1],
  F: [2, 4],
  G: [3, 2],
  H: [2, 4],
  I: [9, 1],
  J: [1, 8],
  K: [1, 5],
  L: [4, 1],
  M: [2, 3],
  N: [6, 1],
  O: [8, 1],
  P: [2, 3],
  Q: [1, 10],
  R: [6, 1],
  S: [4, 1],
  T: [6, 1],
  U: [4, 1],
  V: [2, 4],
  W: [2, 4],
  X: [1, 8],
  Y: [2, 4],
  Z: [1, 10],
};

export const drawLetters = () => {
  // Implement this method for wave 1
  let letterList = [];
  let returnedLetters = [];

  for (const [letter, number] of Object.entries(letterFreqAndScore)) {
    for (let i = 0; i < number[0]; i++) {
      letterList.push(letter);
    }
  }

  while (returnedLetters.length < 10) {
    let currentLetter =
      letterList[Math.floor(Math.random() * letterList.length)];
    returnedLetters.push(currentLetter);
    for (let i = 0; i < letterList.length; i++) {
      if (letterList[i] === currentLetter) {
        letterList.splice(i, 1);
        {
          break;
        }
      }
    }
  }

  return returnedLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let letterDict = {};

  for (const letter of lettersInHand) {
    if (letterDict.hasOwnProperty(letter.toUpperCase())) {
      letterDict[letter] += 1;
    } else {
      letterDict[letter] = 1;
    }
  }

  for (const letter of input) {
    if (letterDict[letter] > 0) {
      letterDict[letter] -= 1;
    } else {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;

  for (const letter of word) {
    score += letterFreqAndScore[letter.toUpperCase()][1];
  }
  if (word.length > 6) {
    score += 8;
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
