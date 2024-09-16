const alphabet =
  "AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ";

export const availableLetters = {
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

const pickRandomLetter = () =>
  alphabet[Math.floor(Math.random() * alphabet.length)];

const countOcurrences = (value, array) => {
  let count = 0;
  for (let element of array) {
    if (element === value) {
      count++;
    }
  }
  return count;
};

export const drawLetters = () => {
  let letterHand = [];

  while (letterHand.length < 10) {
    const pickedLetter = pickRandomLetter();
    if (
      countOcurrences(pickedLetter, letterHand) <
      availableLetters[pickedLetter][0]
    ) {
      letterHand.push(pickedLetter);
    }
  }
  return letterHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let lettersInHandCopy = [...lettersInHand];
  for (const letter of input.toUpperCase()) {
    if (lettersInHandCopy.includes(letter)) {
      const letterIndex = lettersInHandCopy.indexOf(letter);
      lettersInHandCopy.splice(letterIndex, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  for (const letter of word.toUpperCase()) {
    score += availableLetters[letter][1];
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

const scoresList = (words) => {
  let scores = [];

  for (const word of words) {
    const wordScore = scoreWord(word);
    scores.push(wordScore);
  }

  return scores;
};

const topScoringWords = (words) => {
  let topScoringWords = [];
  const scores = scoresList(words);
  const maxScore = Math.max(...scores);

  for (let i = 0; i < scores.length; ++i) {
    if (scores[i] === maxScore) {
      topScoringWords.push(words[i]);
    }
  }
  return topScoringWords;
};

export const highestScoreFrom = (words) => {
  const topWords = topScoringWords(words);
  const scores = scoresList(words);
  const maxScore = Math.max(...scores);

  let topWord = topWords[0];

  for (const word of topWords) {
    if (word.length === 10) {
      topWord = word;
      break;
    } else if (word.length < topWord.length) {
      topWord = word;
    }
  }

  return { word: topWord, score: maxScore };
};
