import { forEach, map } from "core-js/core/array";

const makeLetterDataset = () => {
  const letterDataset = [
    { letter: "A", count: 9, score: 1 },
    { letter: "B", count: 2, score: 3 },
    { letter: "C", count: 2, score: 3 },
    { letter: "D", count: 4, score: 2 },
    { letter: "E", count: 12, score: 1 },
    { letter: "F", count: 2, score: 4 },
    { letter: "G", count: 3, score: 2 },
    { letter: "H", count: 2, score: 4 },
    { letter: "I", count: 9, score: 1 },
    { letter: "J", count: 1, score: 8 },
    { letter: "K", count: 1, score: 5 },
    { letter: "L", count: 4, score: 1 },
    { letter: "M", count: 2, score: 3 },
    { letter: "N", count: 6, score: 1 },
    { letter: "O", count: 8, score: 1 },
    { letter: "P", count: 2, score: 3 },
    { letter: "Q", count: 1, score: 10 },
    { letter: "R", count: 6, score: 1 },
    { letter: "S", count: 4, score: 1 },
    { letter: "T", count: 6, score: 1 },
    { letter: "U", count: 4, score: 1 },
    { letter: "V", count: 2, score: 4 },
    { letter: "W", count: 2, score: 4 },
    { letter: "X", count: 1, score: 8 },
    { letter: "Y", count: 2, score: 4 },
    { letter: "Z", count: 1, score: 10 },
  ];
  return letterDataset;
};

const makeScoreTable = () => {
  const letterDataset = makeLetterDataset();
  const scoreMap = new Map();
  for (const data of letterDataset) {
    scoreMap.set(data.letter, data.score);
  }
  return scoreMap;
};

export const drawLetters = () => {
  // Implement this method for wave 1
  const letterDataset = makeLetterDataset();
  const hand = [];
  let i = 0;
  while (i < 10) {
    const letterIndex = Math.floor(Math.random() * 26);
    if (letterDataset[letterIndex].count > 0) {
      hand.push(letterDataset[letterIndex].letter);
      letterDataset[letterIndex].count -= 1;
      ++i;
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const handMap = new Map();
  for (const letter of lettersInHand) {
    handMap.set(letter, (handMap.get(letter) || 0) + 1);
  }
  const wordMap = new Map();
  for (const char of Array.from(input)) {
    if (!handMap.has(char)) {
      return false;
    }
    wordMap.set(char, (wordMap.get(char) || 0) + 1);
    if (wordMap.get(char) > handMap.get(char)) {
      return false;
    }
  }
  return true;
};

// input = Array.from(input);
// return input.some(lettersInHand.includes);

export const scoreWord = (word) => {
  // Implement this method for wave 3

  const scoreTable = makeScoreTable();
  let wordScore = 0;
  if (!word) return wordScore;
  if (word.length >= 7) wordScore += 8;
  for (const letter of word.toUpperCase()) {
    const score = scoreTable.get(letter);
    wordScore += score;
  }
  return wordScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let highestWord = null;
  let highestScore = 0;
  const makeWinner = (word, score) => ({ word, score });
  wordScoreMap = new Map();
  words.forEach((word) => {
    wordScoreMap.set(word, scoreWord(word));
    if (wordScoreMap.get(word) > highestScore) {
      highestWord = word;
      highestScore = wordScoreMap.get(word);
    }
    if (highestWord.length === 10) {
      return makeWinner(highestWord, highestScore);
    }
  });
  for (const word of words) {
    if (wordScoreMap.get(word) === highestScore && word !== highestWord) {
      if (word.length === 10 || word.length < highestWord.length) {
        return makeWinner(word, highestScore);
      }
    }
  }
  return makeWinner(highestWord, highestScore);
};
