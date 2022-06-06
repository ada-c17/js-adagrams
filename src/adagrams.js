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
    // random number between 0 - 25 (inclusive)
    const index = Math.floor(Math.random() * 26);
    const letter = ALPHABET[index];
    // add letter to user's hand only if available
    if (letterPoolCopy[letter] > 0) {
      hand.push(letter);
      letterPoolCopy[letter]--;
    }
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // check length of lettersInHand?

  // object holiding count of available letters for user
  const lettersObj = {};
  for (let char of lettersInHand) {
    if (char in lettersObj) {
      lettersObj[char]++;
    } else {
      lettersObj[char] = 1;
    }
  }

  // subtract from count of available letters based on input
  for (let char of input) {
    if (char in lettersObj) {
      lettersObj[char]--;
      if (lettersObj[char] < 0) {
        // used too many of one letter
        return false;
      }
    } else {
      // used letter not in hand
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
  if (word.length >= 7 && word.length <= 10) {
    points += 8;
  }
  return points;
};

export const highestScoreFrom = (words) => {
  // object for each word in list
  // Could calculate the score in the for loop, but wanted to practice map
  const wordsAndScores = words.map((w) => ({ word: w, score: scoreWord(w) }));

  let highestScore = 0;
  let bestWord;
  for (let currWord of wordsAndScores) {
    // set new high score
    if (currWord.score > highestScore) {
      highestScore = currWord.score;
      bestWord = currWord;

      // tied high score
    } else if (currWord.score === highestScore && bestWord.word.length < 10) {
      // order of precedence for ties
      // 1: first ten letter word
      if (currWord.word.length === 10) {
        bestWord = currWord;
      }
      // 2: first shortest word, if no word is 10 letters
      else if (currWord.word.length < bestWord.word.length) {
        bestWord = currWord;
      }
    }
  }
  return bestWord;
};
