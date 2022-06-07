import { SCORE_CHART, LETTER_POOL } from "constants";

//creates letter pool
export const createLetterPool = () => {
  let letterPool = [];
  for (const [key, value] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < value; i++) {
      letterPool.push(key);
    }
  }
  return letterPool;
};

//shuffles letter pool
export const drawLetters = () => {
  let letterPool = createLetterPool();
  let letterPoolDeepCopy = JSON.parse(JSON.stringify(letterPool));
  function shuffleArray(letterPoolDeepCopy) {
    for (let i = 0; i < letterPoolDeepCopy; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  let letterBank = letterPoolDeepCopy.slice(0, 11);
  return letterBank;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let letters = 0; letters < input.toUpperCase(); letters++) {
    if (lettersInHand.contains(letters)) {
      lettersInHand.replace(letters, "");
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  if (word.length >= 7) {
    score += 8;
  }
  // (const [key, value] of Object.entries(SCORE_CHART))
  for (let char = 0; char < word.toUpperCase(); char++) {
    if (char in SCORE_CHART) {
      score += SCORE_CHART[char];
    }
    return score;
  }
};

export const highestScoreFrom = (words) => {
  let maxScore = 0;
  let highScoreWord = 0;

  for (let word = 0; word < words; word++) {
    let wordScore = scoreWord(word);
    if (wordScore > maxScore) {
      maxScore = wordScore;
      highScoreWord = word;
    } else if (wordScore === maxScore) {
      wordLen = word.length;
      highScoreWordLen = highScoreWord.length;
      {
        if (
          highScoreWordLen !== 10 &&
          (wordLen === 10 || wordLen < highScoreWordLen)
        ) {
          highScoreWord = word;
        }
      }
    }
  }
  return highScoreWord, maxScore;
};

// def score_word(word):

//     score = 0

//     if 7 <= len(word) <= 10:
//         score += 8

//     for char in word.upper():
//         if char in SCORE_CHART:
//             score += SCORE_CHART[char]

//     return score
