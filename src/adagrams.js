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

/**
  input: none
  output: return list of 10 strings, 1 letter each
  frequency of each letter cannot exceed the value of 
  each letter in the LETTER_POOL
*/
export const drawLetters = () => {
  const drawn = [];
  const letterFreq = {};
  const letterKeys = Object.keys(LETTER_POOL);

  while (drawn.length < 10) {
    var randomLetter =
      letterKeys[Math.floor(Math.random() * letterKeys.length)];
    if (randomLetter in letterFreq) {
      if (letterFreq[randomLetter] < LETTER_POOL[randomLetter]) {
        letterFreq[randomLetter] += 1;
        drawn.push(randomLetter);
      }
    } else {
      letterFreq[randomLetter] = 1;
      drawn.push(randomLetter);
    }
  }
  return drawn;
};

/** 
  input: word (a string) and hand (a list of strings, one char each)
  output: Returns True if each char is uniquely in hand. Returns
  False otherwise or if char in word is not in hand.
*/
export const usesAvailableLetters = (input, lettersInHand) => {
  const clonedHand = JSON.parse(JSON.stringify(lettersInHand));
  const wordPlayed = input.toUpperCase();

  for (const letter of wordPlayed) {
    let letterIndex = clonedHand.indexOf(letter);
    if (letterIndex > -1) {
      clonedHand.splice(letterIndex, 1);
    } else if (letterIndex === -1) {
      return false;
    }
  }
  return true;
};

/** 
  input: word (a string of characters)
  output: Returns a total score based on the value of each char in
  word, as defined in LETTER_SCORES. Words between 7 and 10 
  char score an extra 8 points. 
*/
export const scoreWord = (word) => {
  let score = 0;
  const wordPlayed = word.toUpperCase();

  for (const letter of wordPlayed) {
    for (const [key, value] of Object.entries(letterScores)) {
      if (value.includes(letter)) {
        score += parseInt(key);
      }
    }
  }
  if (7 <= wordPlayed.length && wordPlayed.length <= 10) {
    score += 8;
  }
  return score;
};

/** 
  input: list of strings representing each word user has created
  output: returns tuple with highest scoring word and score. If tied: 
  shortest length word is preferred, unless length is 10 characters
*/
export const highestScoreFrom = (words) => {
  const playedWords = {};
  words.forEach((word) => (playedWords[word] = scoreWord(word)));

  const highestScore = Math.max(...Object.values(playedWords));
  const bestScoreWords = [];
  for (const [key, value] of Object.entries(playedWords)) {
    if (value === highestScore) {
      bestScoreWords.push(key);
    }
  }

  if (bestScoreWords.length > 1) {
    for (const word of bestScoreWords) {
      if (word.length === 10) {
        return { word: word, score: highestScore };
      }
    }
    const shortestWord = bestScoreWords.reduce((a, b) => {
      return a.length <= b.length ? a : b;
    });
    return { word: shortestWord, score: highestScore };
  }

  return { word: bestScoreWords[0], score: highestScore };
};
