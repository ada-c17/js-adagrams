const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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
const LETTER_SCORES = {
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
  const hand = [];
  const letterPoolCopy = { ...LETTER_POOL };
  while (hand.length < 10) {
    const num = Math.floor(Math.random() * 26);
    const letter = ALPHABET[num];
    if (letterPoolCopy[letter] > 0) {
      hand.push(letter);
      letterPoolCopy[letter]--;
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersObj = {};
  for (let char of lettersInHand) {
    if (char in lettersObj) {
      lettersObj[char]++;
    } else {
      lettersObj[char] = 1;
    }
  }
  for (let char of input) {
    if (char in lettersObj) {
      lettersObj[char]--;
      if (lettersObj[char] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Need to check word validity?
  let points = 0;
  const inputWord = word.toUpperCase();
  for (let char of inputWord) {
    points += LETTER_SCORES[char];
  }
  if (word.length >= 7) {
    // add 10 into this?
    points += 8;
  }
  return points;
};

export const highestScoreFrom = (words) => {
  // list of objects
  const wordsAndScores = words.map((w) => ({ word: w, score: scoreWord(w) }));
  let highestScore = 0;
  let highestPlay;
  for (let play of wordsAndScores) {
    if (play.score > highestScore) {
      highestScore = play.score;
      highestPlay = play;
    } else if (play.score === highestScore) {
      if (play.word.length === 10 && highestPlay.word.length < 10) {
        highestPlay = play;
      } else if (
        play.word.length < highestPlay.word.length &&
        highestPlay.word.length < 10
      ) {
        highestPlay = play;
      }
    }
  }
  return highestPlay;
};
