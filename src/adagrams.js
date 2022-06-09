export const drawLetters = () => {
  // Implement this method for wave 1
  const scoreChart = {
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
  
  let letters = [];

  for (const [letter, inputLetterFreq] of Object.entries(scoreChart)) {
    for (let i = 0; i < inputLetterFreq; i++) {
      letters.push(letter);
    }
  };
  // not able to create a shuffling algo myself
  // Fisher-Yates shuffle algorithm
  // https://masteringjs.io/tutorials/fundamentals/shuffle#:~:text=To%20properly%20shuffle%20an%20array%20in%20JavaScript%2C%20use,random%20element%20in%20the%20array%20as%20shown%20below.
  for (let i = letters.length - 1; i >= 1; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = letters[j];
    letters[j] = letters[i];
    letters[i] = temp;
  };
  return letters.slice(0, 10);
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let inputLetterFreq = {};

  for (const letter of input) {
    if (letter.toUpperCase() in inputLetterFreq) {
      inputLetterFreq[letter.toUpperCase()] += 1;
    } else {
      inputLetterFreq[letter.toUpperCase()] = 1;
    }
  };

  let lettersInHandFreq = {};

  for (const letter of lettersInHand) {
    if (letter.toUpperCase() in lettersInHandFreq) {
      lettersInHandFreq[letter.toUpperCase()] += 1;
    } else {
      lettersInHandFreq[letter.toUpperCase()] = 1;
    }
  };

  for (const letter of input) {
    /* If the letter does not exist in the `lettersInHandFreq` or the `input` letter 
    frequency is greater than `lettersInHand`'s frequency, return false. Otherwise,
    return true. */
    if (typeof(lettersInHandFreq[letter.toUpperCase()]) === 'undefined' ||
    inputLetterFreq[letter.toUpperCase()] > lettersInHandFreq[letter
    .toUpperCase()]) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  const scoreChart = {
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
    Z: 10
  };

  let score = 0;

  for (const letter of word) {
    if (letter.toUpperCase() in scoreChart) {
      score += scoreChart[letter.toUpperCase()];
    }
  }
  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1

  /* 
  1) For loop through each word in `words`

  2) An string that represents the word and a number representing the score is pushed to `word_scores`

  3) Initalize a variable `max_score` where the first object's score is the max 
  value. Initialize an array called `ties` that hold 

  4) Loop through `word_scores` from the end to the beginnning with a step of -2.

  5) If the `word_score[i]` is is greater than or equal to the `max_score`, reassign `max_score` to `word_scores[i]`.

  6) Return an object. The first property has the key word, the value is the index position of `max_score` - 1. The second property has a the key of score and a value of `max_score`.
  */

  const word_scores = [];
  
  // words_scores can be like this = [{X: 8}, {XX: 16}, {XXX: 24}, {XXXX: 32}]
  // or maybe this = ['X', 8, 'XX', 16, 'XXX', 24, 'XXXX', 32]

  for (let i = 0; i < words.length; i++) {
    // word_scores.push({[words[i]]: scoreWord(words[i])})
    word_scores.push(words[i])
    word_scores.push(scoreWord(words[i]))
  }

  let max_score = 0;

  for (let i = word_scores.length; word_scores.length; i -= 2) {
    if (word_scores[i] > max_score) {
      max_score = word_scores[i];
    }
  }

  return {
    word: word_scores[indexOf(max_score) - 1], 
    score: max_score
  };
};