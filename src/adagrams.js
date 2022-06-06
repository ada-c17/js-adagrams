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
  let letter_pool = JSON.parse(JSON.stringify(LETTER_POOL));
  const letters = [];
  while (letters.length < 10) {
    var keys = Object.keys(letter_pool);
    let letter = keys[(keys.length * Math.random()) << 0];
    letters.push(letter);

    letter_pool[letter] -= 1;

    if (letter_pool[letter] === 0) {
      delete letter_pool[letter];
    }
  }
  return letters;
};

const getFrequency = function (anyArray) {
  const letterFreq = {};
  for (let i of anyArray) {
    if (i in letterFreq) {
      letterFreq[i] += 1;
    } else {
      letterFreq[i] = 1;
    }
  }
  return letterFreq;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const inputFreq = getFrequency(input);
  const handFreq = getFrequency(lettersInHand);
  let word = input.toUpperCase();
  for (let letter of word) {
    if (!(letter in handFreq)) {
      return false;
    }
    if (inputFreq[letter] > handFreq[letter]) {
      return false;
    }
  }
  return true;
};

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

export const scoreWord = (word) => {
  let theWord = word.toUpperCase();
  let score = 0;
  for (let letter of theWord) {
    score += scoreDict[letter];
  }
  if (theWord.length >= 7 && theWord.length <= 10) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let bestWord = "";
  for (let word of words) {
    let totalScore = scoreWord(word);
    if (totalScore > highestScore) {
      highestScore = totalScore;
      bestWord = word;
    } else if (totalScore === highestScore) {
      let tempWord = bestWord;
      if (word.length === 10) {
        bestWord = word;
      } else if (tempWord.length === 10) {
        bestWord = bestWord;
      } else if (tempWord.length > word.length) {
        bestWord = word;
      }
      if (tempWord.length === word.length) {
        bestWord = tempWord;
      }
    }
  }
  var theObject = {
    score: highestScore,
    word: bestWord,
  };
  return theObject;
};
