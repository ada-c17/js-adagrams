const LETTER_POOL = [
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "B",
  "B",
  "C",
  "C",
  "D",
  "D",
  "D",
  "D",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "F",
  "F",
  "G",
  "G",
  "G",
  "H",
  "H",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "J",
  "K",
  "L",
  "L",
  "L",
  "L",
  "M",
  "M",
  "N",
  "N",
  "N",
  "N",
  "N",
  "N",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "P",
  "P",
  "Q",
  "R",
  "R",
  "R",
  "R",
  "R",
  "R",
  "S",
  "S",
  "S",
  "S",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "U",
  "U",
  "U",
  "U",
  "V",
  "V",
  "W",
  "W",
  "X",
  "Y",
  "Y",
  "Z",
];

const SCORE_CHART = {
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

export const drawLetters = () => {
  // Implement this method for wave 1
  const tenLetters = [];
  const uniqueIndex = [];
  while (tenLetters.length < 10) {
    let index = Math.floor(Math.random() * LETTER_POOL.length);
    if (!uniqueIndex.includes(index)) {
      uniqueIndex.push(index);
      tenLetters.push(LETTER_POOL[index]);
    }
  }
  return tenLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const userInput = input.toUpperCase().split("");
  const isValid = userInput.every(
    (val) =>
      lettersInHand.includes(val) &&
      userInput.filter((el) => el === val).length <=
        lettersInHand.filter((el) => el === val).length
  );
  return isValid;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let totalPoints = 0;

  const wordList = word.toUpperCase().split("");

  if (wordList.length >= 7) {
    totalPoints += 8;
  }

  wordList.forEach(sumUpPoints);
  function sumUpPoints(item) {
    if (item in SCORE_CHART) {
      totalPoints += SCORE_CHART[item];
    }
  }

  return totalPoints;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const wordsPoints = {};
  const tiedWords = [];
  let maxWord = "";

  words.forEach((element) => {
    wordsPoints[element] = scoreWord(element);
  });

  const highestScore = Math.max(...Object.values(wordsPoints));
  for (var word in wordsPoints) {
    if (wordsPoints[word] === highestScore) {
      tiedWords.push(word);
    }
  }

  for (let word of tiedWords) {
    if (word.length === 10) {
      maxWord = word;
      break;
    }
    maxWord = tiedWords.sort((word1, word2) => word1.length - word2.length)[0];
  }

  return { word: maxWord, score: highestScore };
};
