const DISTRIBUTION_OF_LETTERS = {
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
  const lettersArr = populateLetterArray();

  // a loop that generates 10 random letters
  // after generating a single letter, it is added to the letterBank
  // and deleted off the letterArr for no repeated letters
  const lettersInHand = [];
  for (let i = 0; i < 10; i++) {
    let letterIndex = Math.floor(Math.random() * lettersArr.length);
    lettersInHand.push(lettersArr[letterIndex]);
    lettersArr.splice(letterIndex, 1);
  }
  return lettersInHand;
};

// helper function
// populate lettersArr for fair probability
const populateLetterArray = () => {
  const lettersArr = [];
  for (const [letter, quantity] of Object.entries(DISTRIBUTION_OF_LETTERS)) {
    let counter = 0;
    while (counter < quantity) {
      lettersArr.push(letter);
      counter++;
    }
  }
  return lettersArr;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersInHandObj = createLettersInHandObj(lettersInHand);

  // checks if letter of input is in lettersInHandObj
  // if letter in lettersInHandObj, subtracts occurrences
  for (const letter of input) {
    if (letter in lettersInHandObj) {
      lettersInHandObj[letter]--;
    } else {
      return false;
    }
  }

  // checks if any of the values in lettersInHandObj is less than 0
  for (const key in lettersInHandObj) {
    if (lettersInHandObj[key] < 0) {
      return false;
    }
  }
  return true;
};

// helper function
// populate lettersInHandObj with letter as key and occurrences as values
const createLettersInHandObj = (lettersInHand) => {
  const lettersInHandObj = {};
  for (const letter of lettersInHand) {
    if (letter in lettersInHandObj) {
      lettersInHandObj[letter]++;
    } else {
      lettersInHandObj[letter] = 1;
    }
  }
  return lettersInHandObj;
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

const EXTRA_SCORE_CHART = [7, 8, 9, 10];

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let totalScore = 0;

  // guard clause for empty strings
  if (!word) {
    return totalScore;
  }

  // calculates score for each letter
  for (const letter of word) {
    const letterScore = findLetterScore(letter.toUpperCase());
    totalScore += parseInt(letterScore);
  }

  // checks for word's length for extra points
  if (EXTRA_SCORE_CHART.includes(word.length)) {
    totalScore += 8;
  }

  return totalScore;
};

// helper function
// goes through SCORE_CHART to look for the key (points) based on letter
const findLetterScore = (letter) => {
  const scoreChartKeys = Object.keys(SCORE_CHART);
  const letterScore = scoreChartKeys.find((point) =>
    SCORE_CHART[point].includes(letter)
  );
  return letterScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  const wordScores = createWordsScoreObj(words);

  // finds the highest score in wordScores Object
  const wordsValues = Object.values(wordScores);
  const highestScore = Math.max(...wordsValues);

  // find highest scored words
  const highestScoreWords = findHighestScoreWords(wordScores, highestScore);

  // return word based on highest scored word if there's only one in the array
  // or return the word with 10-letters length
  if (highestScoreWords.length == 1) {
    return {
      score: highestScore,
      word: highestScoreWords[0],
    };
  } else {
    for (const word of highestScoreWords) {
      if (word.length == 10) {
        return {
          score: highestScore,
          word: word,
        };
      }
    }
  }

  // find shortest word length to use it as reference
  let shortestWordLength = findShortestWordLength(highestScoreWords);

  // return shortest word and takes care of other scenario
  for (const word of highestScoreWords) {
    if (word.length == shortestWordLength) {
      return {
        score: highestScore,
        word: word,
      };
    }
  }
};

// helper function
// takes a array of words and returns an object
// with words as keys and scores as values
const createWordsScoreObj = (words) => {
  const wordScores = {};
  for (const word of words) {
    const wordScore = scoreWord(word);
    wordScores[word] = wordScore;
  }
  return wordScores;
};

// helper function
// find highest scored words and returns an array
const findHighestScoreWords = (wordScores, highestScore) => {
  const highestScoreWords = [];
  for (const [word, score] of Object.entries(wordScores)) {
    if (score === highestScore) {
      highestScoreWords.push(word);
    }
  }
  return highestScoreWords;
};

// helper function
// find the shortest word length
const findShortestWordLength = (highestScoreWords) => {
  let shortestWordLength = highestScoreWords[0].length;
  for (const word of highestScoreWords) {
    if (word.length < shortestWordLength) {
      shortestWordLength = word.length;
    }
  }
  return shortestWordLength;
};
