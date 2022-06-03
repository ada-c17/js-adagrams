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

const points = {
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
  // Implement this method for wave 1

  let userHand = [];
  let availableLetters = [];

  // add letters to a new array with all available letters
  for (const letter in letterPool) {
    for (let num = 0; num < letterPool[letter]; num++) {
      availableLetters.push(letter);
    }
  }

  while (userHand.length < 10) {
    const letterIndex = Math.floor(Math.random() * availableLetters.length);
    const letterChoice = availableLetters[letterIndex];

    //pop letter from array
    availableLetters.splice(letterIndex, 1);

    //append to userHand
    userHand.push(letterChoice);
  }

  return userHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2

  //creates a shallow copy of the inputted object. Ensures original isn't altered
  let userHand = [...lettersInHand];

  for (let letter of input) {
    if (!userHand.includes(letter)) {
      return false;
    } else {
      const letterIndex = userHand.indexOf(letter);

      //removes the selected letter from the userHand array. Very expensive as it's O(n) each time
      userHand.splice(letterIndex, 1);
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0;
  for (let letter of word) {
    score += points[letter.toUpperCase()];
  }
  if (word.length >= 7 && word.length <= 10) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1

  let wordObj = {};

  words.forEach((word) => {
    let score = scoreWord(word);
    wordObj[word] = score;
  });

  let scoreValues = Object.values(wordObj);

  //finds max score of the scoreValues array. (...) spread syntax passes in each score into max
  let maxScore = Math.max(...scoreValues);

  let minWord = tieBreaker(wordObj, maxScore);
  return { word: minWord, score: maxScore };
};

const tieBreaker = (wordObj, maxScore) => {
  let tieArray = [];
  let minWord; //must initiate the variable

  for (let word in wordObj) {
    if (wordObj[word] === maxScore) {
      tieArray.push(word);
    }
  }
  for (let word of tieArray) {
    if (word.length === 10) {
      return word;
    } else {
      /* this finds the word with the smallest length and returns smallest using ternary operator
          if a.length <= b.length, return a else, return b
          a starts empty and b the first letter, then it continues. a becomes the smallest
          and then compared to the next word until it finds the final one, which in this case,
          due to the <= will be the smallest word and/or the first word in a tie
      */
      minWord = tieArray.reduce((a, b) => (a.length <= b.length ? a : b));
    }
  }
  return minWord;
};
