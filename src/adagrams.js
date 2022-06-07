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

export const drawLetters = () => {
  // Implement this method for wave 1
  let objCopy = { ...LETTER_POOL };
  const letters = [];
  while (letters.length < 10) {
    let letter =
      Object.keys(objCopy)[
        Math.floor(Math.random() * Object.keys(objCopy).length)
      ];
    letters.push(letter);
    objCopy[letter]--;
    if (objCopy[letter] === 0) {
      delete objCopy[letter];
    }
  }
  return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const freqCounter = {};
  for (const letter of lettersInHand) {
    if (freqCounter[letter]) {
      freqCounter[letter]++;
    } else {
      freqCounter[letter] = 1;
    }
  }
  for (const letter of input) {
    if (!freqCounter[letter]) {
      return false;
    } else {
      freqCounter[letter]--;
      if (freqCounter[letter] === 0) {
        delete freqCounter[letter];
      }
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const scoreDict = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
  };
  const make_upper = word.toUpperCase();
  let score = 0;
  for (const letter of make_upper) {
    score += scoreDict[letter];
  }
  if (word.length >= 7 && word.length <= 11) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let score = 0;
  let word = "";
  for (let eachWord of words) {
    let totalScore = scoreWord(eachWord);
    if (totalScore > score) {
      score = totalScore;
      word = eachWord;
    } else if (totalScore === score) {
      let tempWord = word;
      if (eachWord.length === 10) {
        word = eachWord;
      } else if (tempWord.length === 10) {
        word = word;
      } else if (tempWord.length > eachWord.length) {
        word = eachWord;
      }
      if (tempWord.length === word.length) {
        word = tempWord;
      }
    }
  }
  const scoreObject = { score, word };
  return scoreObject;
};
