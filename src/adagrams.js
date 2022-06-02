import { letterPool, generateLetters, getRandomLetter } from "./helper";

// ----- Wave 1 -----

export const drawLetters = () => {
  // generate all available letters using quantities from letterPool
  const availableLetters = generateLetters(letterPool);

  // generate 10 random letters from availableLetters
  const handSize = 10;
  const lettersInHand = [];
  for (let i = 0; i < handSize; i++) {
    lettersInHand.push(getRandomLetter(availableLetters));
  }
  return lettersInHand;
};

// ----- Wave 2 -----

export const usesAvailableLetters = (input, lettersInHand) => {
  if (input.length > lettersInHand.length) return false;

  for (let i of input) {
    const index = lettersInHand.findIndex((letter) => letter === i);
    if (index === -1) {
      return false;
    } else {
      lettersInHand.splice(index, 1);
    }
  }
  return true;
};

// ----- Wave 3 -----

export const scoreWord = (word) => {
  if (!word) return 0;

  word = word.toUpperCase();

  let score = [...word].reduce((prev, current) => {
    return prev + letterPool[current].score;
  }, 0);

  return word.length < 7 ? score : score + 8;
};

// ----- Wave 4 -----
export const highestScoreFrom = (words) => {
  const wordScores = words.map((word) => ({
    word: word,
    score: scoreWord(word),
  }));
  let result = wordScores.reduce((prev, current) => {
    if (prev.score > current.score) {
      return prev;
    } else if (prev.score == current.score) {
      if (prev.word.length === 10) {
        return prev;
      } else if (current.word.length === 10) {
        return current;
      } else if (prev.word.length <= current.word.length) {
        return prev;
      } else {
        return current;
      }
    } else {
      return current;
    }
  });
  return result;
};
