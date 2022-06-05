const letterPool = {
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

const makeLetterArr = (letterObj) => {
  let letterArr = [];
  for (const letter in letterObj) {
    let subArr = Array(letterObj[letter]).fill(letter);
    letterArr = letterArr.concat(subArr);
  }
  return letterArr;
};

export const drawLetters = () => {
  const letters = { ...letterPool };
  const letterArr = makeLetterArr(letters);
  const hand = [];

  do {
    let index = Math.floor(Math.random() * (letterArr.length - 1));
    let chosenLetter = letterArr[index];
    letters[chosenLetter] -= 1;
    if (letters[chosenLetter] >= 0) {
      hand.push(chosenLetter);
    }
  } while (hand.length < 10);
  return hand;
};

const letterFreq = (entity) => {
  const letterCount = {};
  for (let letter of entity) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const handCount = letterFreq(lettersInHand);
  const inputCount = letterFreq(input);
  for (let letter in inputCount) {
    if (inputCount[letter] > handCount[letter] || !handCount[letter]) {
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
  for (let letter of word.toUpperCase()) {
    score += letterScores[letter];
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let bestWord = "";
  let bestScore = 0;
  /* Compare score of current word, with score of previous word
  If score is larger, reassign value of bestScore & bestWord
  If the scores are the same, compare their length
    If their lengths are the same, then do not reassign best word/score
    If the length of new word is 10, then reassign value of best word/score,
    but only if it is the first word to have a length of 10
    Otherwise, choose the shortest word */
  for (let word of words) {
    let currScore = scoreWord(word);
    if (currScore > bestScore) {
      bestScore = currScore;
      bestWord = word;
    } else if (currScore == bestScore) {
      if (
        (word.length === 10 && word.length !== bestWord.length) ||
        (word.length < bestWord.length && bestWord.length !== 10)
      ) {
        bestWord = word;
      }
    }
  }
  return { word: bestWord, score: bestScore };
};
