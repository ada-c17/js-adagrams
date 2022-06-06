// Following AirBnB's capital const rules on naming this
const LETTER_QUANTITY_CHART = {
  A: 9,
  N: 6,
  B: 2,
  O: 8,
  C: 2,
  P: 2,
  D: 4,
  Q: 1,
  E: 12,
  R: 6,
  F: 2,
  S: 4,
  G: 3,
  T: 6,
  H: 2,
  U: 4,
  I: 9,
  V: 2,
  J: 1,
  W: 2,
  K: 1,
  X: 1,
  L: 4,
  Y: 2,
  M: 2,
  Z: 1,
};

export const drawLetters = () => {
  // Implement this method for wave 1
  // populate letterArr with the letters for fair probability
  const letterArr = [];
  for (const [letter, quantity] of Object.entries(LETTER_QUANTITY_CHART)) {
    let counter = 0;
    while (counter < quantity) {
      letterArr.push(letter);
      counter++;
    }
  }

  // a loop that generates 10 random letters
  // after generating a single letter, it is added to the letterBank
  // and deleted off the letterArr for no repeated elements
  const letterBank = [];
  for (let i = 0; i < 10; i++) {
    let letterIndex = Math.floor(Math.random() * letterArr.length);
    letterBank.push(letterArr[letterIndex]);
    letterArr.splice(letterIndex, 1);
  }
  return letterBank;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // populate lettersInHandObj with keys/values
  const lettersInHandObj = {};
  for (const letter of lettersInHand) {
    if (letter in lettersInHandObj) {
      lettersInHandObj[letter]++;
    } else {
      lettersInHandObj[letter] = 1;
    }
  }

  // checks if letter of the input is in the lettersInHandObj
  // if so, subtracts 1 from the value
  // if not found at all, return false
  for (const letter of input) {
    if (letter in lettersInHandObj) {
      lettersInHandObj[letter]--;
    } else {
      return false;
    }
  }

  // checks if any of the values in lettersInHandObj less than 0
  for (const key in lettersInHandObj) {
    if (lettersInHandObj[key] < 0) {
      return false;
    }
  }
  return true;
};

const SCORE_CHART = {
  1: ['A', 'I', 'E', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const extraScoreChart = [7, 8, 9, 10];
  let totalScore = 0;

  if (!word) {
    return totalScore;
  }

  const scoreChartKeys = Object.keys(SCORE_CHART);

  for (const letter of word) {
    const score = scoreChartKeys.find((key) =>
      SCORE_CHART[key].includes(letter.toUpperCase())
    );
    totalScore += parseInt(score);
  }

  if (extraScoreChart.includes(word.length)) {
    totalScore += 8;
  }

  return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const wordScores = {};

  for (const word of words) {
    const wordScore = scoreWord(word);
    wordScores[word] = wordScore;
  }

  const wordsValues = Object.values(wordScores);
  const highestScore = Math.max(...wordsValues);

  const highestScoreWords = [];
  for (const [word, score] of Object.entries(wordScores)) {
    if (score === highestScore) {
      highestScoreWords.push(word);
    }
  }

  const highestScoreResult = {};
  if (highestScoreWords.length == 1) {
    highestScoreResult['score'] = highestScore;
    highestScoreResult['word'] = highestScoreWords[0];
    return highestScoreResult;
  } else {
    for (const word of highestScoreWords) {
      if (word.length == 10) {
        highestScoreResult['score'] = highestScore;
        highestScoreResult['word'] = word;
        return highestScoreResult;
      }
    }
  }

  let shortestWordLength = highestScoreWords[0].length;
  for (const word of highestScoreWords) {
    if (word.length < shortestWordLength) {
      shortestWordLength = word.length;
    }
  }

  for (const word of highestScoreWords) {
    if (word.length == shortestWordLength) {
      highestScoreResult['score'] = highestScore;
      highestScoreResult['word'] = word;
      return highestScoreResult;
    }
  }
};
