// Helper functions for drawing letters
const createLetterPoolArray = () => {
  const letterQuantities = {
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
  let letterPoolArray = [];

  for (const [letter, quantity] of Object.entries(letterQuantities)) {
    for (let i = 0; i < quantity; i++) {
      letterPoolArray.push(letter);
    }
  }

  return letterPoolArray;
};

const getRandomIndex = (arrayLength) => {
  return Math.floor(Math.random() * arrayLength);
};

export const drawLetters = () => {
  let letterPoolArray = createLetterPoolArray();
  let currentHand = [];

  for (let i = 0; i < 10; i++) {
    const drawnIndex = getRandomIndex(letterPoolArray.length);
    currentHand.push(letterPoolArray[drawnIndex]);
    letterPoolArray.splice(drawnIndex, 1);
  }

  return currentHand;
};

// Helper functions for counting instances

const countIterable = (iterable, value) => {
  let count = 0;

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === value) {
      count++;
    }
  }

  return count;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // const upperInput = input.toUpperCase();
  // const letters = new Set(upperInput);

  // for (let letter of letters) {
  //   const inputCount = countIterable(upperInput, letter);
  //   const handCount = countIterable(lettersInHand, letter);
  //   if (handCount < inputCount) {
  //     return false;
  //   }
  // }

  let handMap = {};
  let inputMap = {};
  for (let letter of lettersInHand) {
    const upperLetter = letter.toUpperCase();
    if (upperLetter in handMap) {
      handMap[upperLetter] += 1;
    } else {
      handMap[upperLetter] = 1;
    }
  }

  for (let letter of input) {
    const upperLetter = letter.toUpperCase();
    if (upperLetter in inputMap) {
      inputMap[upperLetter] += 1;
    } else {
      inputMap[upperLetter] = 1;
    }
  }

  for (let letter in inputMap) {
    if (!letter in handMap) {
      return false;
    } else if (inputMap[letter] !== handMap[letter]) {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  let result = 0;

  if (word !== '') {
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
    for (let letter of word) {
      if (letter.match(/^[0-9A-Za-z]+$/) !== null) {
        result += letterScores[letter.toUpperCase()];
      }
    }

    if (7 <= word.length && word.length <= 10) {
      result += 8;
    }
  }

  return result;
};

// Helper function for choosing highest score
const tieBreaker = (wordList) => {
  let winningWord = 'tenletters';

  for (let word of wordList) {
    if (word.length === 10) {
      return word;
    } else if (word.length < winningWord.length) {
      winningWord = word;
    }
  }

  return winningWord;
};

export const highestScoreFrom = (words) => {
  let highScore = 0;
  let highestScored = [];

  for (let word of words) {
    const wordScore = scoreWord(word);
    if (wordScore > highScore) {
      highScore = wordScore;
      highestScored = [word];
    } else if (wordScore === highScore) {
      highestScored.push(word);
    }
  }

  let highestScoredWord = '';

  if (highestScored.length > 1) {
    highestScoredWord = tieBreaker(highestScored);
  } else {
    highestScoredWord = highestScored[0];
  }

  const result = {
    word: highestScoredWord,
    score: highScore,
  };

  return result;
};
