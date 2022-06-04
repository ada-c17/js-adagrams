import {SCORE_CHART, LETTER_POOL} from './constants'

export const drawLetters = () => {
  let letterPool = [];
  for (const [letter, frequency] of Object.entries(LETTER_POOL)) {
    for (let i = 0; i < frequency; i++) {
      letterPool.push(letter);
    }
  }

  let userHand = [];
  for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * (letterPool.length - 1));
    const letter = letterPool[index];
    letterPool.splice(index, 1);
    userHand.push(letter);
  }

  return userHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {

  if (input.length <= 0 || input.length > 10) {
    return false;
  }

  let userLetter = {};
  for (const char of input) {
    if (char in userLetter) {
      userLetter[char] += 1;
    } else {
      userLetter[char] = 1;
    }
  };
  
  let userHand = {};
  lettersInHand.forEach(letter => {
    if (letter in userHand) {
      userHand[letter] += 1;
    } else {
      userHand[letter] = 1;
    }
  });

  for (const [letter, frequency] of Object.entries(userLetter)) {
    if (!(letter in userHand && frequency <= userHand[letter])) {
      return false;
    }
  }
  
  return true;

};

export const scoreWord = (word) => {
  let score = 0;

  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  
  let wordUpper = word.toUpperCase();
  
  for (const char of wordUpper) {
    if (char in SCORE_CHART) {
      score += SCORE_CHART[char];
    }
  }

  return score;
};

export const highestScoreFrom = (words) => {
  let maxScore = 0;
  let highScoreWord = null;
  let maxWords = [];

  for (const word of words) {
    const wordScore = scoreWord(word);
    if (wordScore > maxScore) {
      maxScore = wordScore;
      maxWords = [word];
    } else if (wordScore === maxScore) {
      maxWords.push(word);
    }
  }

  highScoreWord = maxWords[0];
  for (const word of maxWords) {
    if (word.length === 10) {
      highScoreWord = word;
      break;
    } else if (word.length < highScoreWord.length) {
      highScoreWord = word;
    }
  }

  return {word: highScoreWord, score: maxScore};

};
