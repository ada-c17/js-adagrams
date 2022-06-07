// import { random } from "core-js/core/number";

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

const letterScores = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};



export const drawLetters = () => {
  // Implement this method for wave 1
  const letters = [];
  const freq = {};
  const lKeys = Object.keys(LETTER_POOL);
  while (letters.length < 10) {
    let randomL = lKeys[Math.floor(Math.random()*lKeys.length)];
    if (randomL in freq) {
      if (freq[randomL] < LETTER_POOL[randomL]){
        freq[randomL]+=1;
        letters.push(randomL);
      }
  } else {
      freq[randomL] = 1;
      letters.push[randomL];
  }
  }
return letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  for (const letter of input) {
    if (!lettersInHand.includes(letter.toUpperCase())) {
      return false;
    } else {
      lettersInHand.splice(lettersInHand.indexOf(letter), 1);
    }
  }
  return true;
};

const chart = {
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
  // Implement this method for wave 3
  let score = 0;
  if (word === undefined) {
    return score;
  }
  word = word.toUpperCase();
  for (const l of word) {
    score += chart[l];
  }
  if (word.length > 6 && word.length < 11) {
    score +=8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let winner = {
    word: "",
    score: 0,
  };
  for (const word of words) {
    let wordScore = scoreWord(word);
    if (wordScore > winner.score) {
        winner.word = word
        winner.score = wordScore;
    }
    if (wordScore === winner.score && word.length>=10) {
      winner.word=word;
      winner.score = wordScore;
      return winner;
  } else if (wordScore === winner.score && word.length < winner.word.length) {
      winner.word = word;
      winner.score = wordScore;
  }
}
return winner;
};
