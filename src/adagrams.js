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

const LETTER_VALUES = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

const LONG_WORD_BONUS = 8;
const LONG_WORD_RANGE = [7, 8, 9, 10];

export const drawLetters = () => {
  // shuffle LETTER_POOL array
  const shuffled = LETTER_POOL.sort(() => 0.5 - Math.random());
  // slice the first 10 letters of shuffled array to create hand
  let hand = shuffled.slice(0, 10);
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let hand = lettersInHand;
  let word = input.toUpperCase();
  for (const letter of word) {
    if (hand.includes(letter)) {
      hand.splice(letter, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let score = 0;
  let input = word.toUpperCase();
  for (const letter of input) {
    if (LETTER_VALUES[letter]) {
      score += LETTER_VALUES[letter];
    }
  }
  if (LONG_WORD_RANGE.includes(input.length)) {
    score += LONG_WORD_BONUS;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let highestScore = 0;
  let winner = {
    word: "",
    score: 0,
  };
  // iterate through each word in words
  for (let i = 0; i < words.length; i++) {
    // get the score of the current word (words[i])
    let score = scoreWord(words[i]);
    // if the score is higher than the highestScore
    if (score > highestScore) {
      // update the winner object with word and score
      (winner.word = words[i]), (winner.score = score);
      // update the highestScore
      highestScore = score;
    }
  }
  return winner;
};
