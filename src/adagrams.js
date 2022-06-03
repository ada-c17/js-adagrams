export const drawLetters = () => {
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

  const letterPool = [];
  const drawnLetters = [];

  // add letters to a letterPool list
  for (const letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      letterPool.push(letter);
    }
  }

  // pick 10 random letters from letterPool list and add to drawnLetters
  for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * letterPool.length);
    const letter = letterPool[index];
    drawnLetters.push(letter);
    letterPool.splice(index, 1);
  }

  return drawnLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const word = input.toUpperCase();

  // create copy of lettersInHand
  const lettersInHandCopy = lettersInHand.map((x) => x);

  // for each letter in the word, if it is in the letters in hand, remove from hand
  // otherwise, return false since the letter is not available
  for (const letter of word) {
    if (lettersInHandCopy.includes(letter)) {
      const index = lettersInHandCopy.indexOf(letter);
      lettersInHandCopy.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  const letterPointTable = {
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

  let points = 0;
  word = word.toUpperCase();

  // add to total points based on the letter's point amount in point table
  for (const letter of word) {
    points += letterPointTable[letter];
  }

  // if word length is 7, 8, 9, or 10, add extra 8 points
  if (word.length >= 7 && word.length <= 10) {
    points += 8;
  }

  return points;
};

export const highestScoreFrom = (words) => {
  let maxScore = 0;

  const winningWord = {
    word: "",
    score: 0,
  };

  // for each word, compare the score to the winning word (so far)
  for (const word of words) {
    // get word's score
    const wordScore = scoreWord(word);

    // if the current word's score is greater than the current max, update the max score
    // and the winning word to match the current word's information
    if (wordScore > maxScore) {
      maxScore = wordScore;
      winningWord.word = word;
      winningWord.score = wordScore;
      // if there is a tie, do the tiebreaker operations
    } else if (wordScore === maxScore) {
      // if a word has a length of 10, it should win
      if (winningWord.word.length === 10) {
        continue;
      } else if (word.length === 10) {
        winningWord.word = word;
        winningWord.score = wordScore;
        // otherwise, the shorter word should win
      } else if (word.length < winningWord.word.length) {
        winningWord.word = word;
        winningWord.score = wordScore;
      }
    }
  }

  return winningWord;
};
