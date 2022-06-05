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

const makeLetterArray = function (letterDict) {
  let letterArray = [];
  for (const letter in letterDict) {
    for (let i = 0; i < letterDict[letter]; i++) {
      letterArray.push(letter);
    }
  }
  return letterArray;
}


export const drawLetters = () => {
  const drawnLetters = []
  const letterArray = makeLetterArray(LETTER_POOL);
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * letterArray.length);
    drawnLetters.push(letterArray[randomIndex]);
    letterArray.splice(randomIndex, 1);
  }
  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let i = 0; i < input.length; i++) {
    const targetLetter = input.charAt(i).toUpperCase();
    if (lettersInHand.includes(targetLetter)) {
      const charIndex = lettersInHand.indexOf(targetLetter);
      lettersInHand.splice(charIndex, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const letterValues = {
    "AEIOULNRST":1,
    "DG":2,
    "BCMP":3,
    "FHVWY":4,
    "K":5,
    "JX":8,
    "QZ":10,
  };
  let score = 0;

  for (let charIndex = 0; charIndex < word.length; charIndex++) {
    for (const letterGroup in letterValues) {
      if (letterGroup.includes(word.charAt(charIndex).toUpperCase())) {
        score += letterValues[letterGroup];
      }
    }
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score
};
export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
