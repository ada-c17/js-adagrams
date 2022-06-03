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

const letterScore = {
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
  let letterPoolArray = [];
  let randomLetter;
  let userLetters = [];
  // Create frequency array of letters
  for (const [letter, frequency] of Object.entries(letterPool)) {
    for (let i = 0; i < frequency; i++) {
      letterPoolArray.push(letter);
    }
  }
  // Create a user pool of letters and remove letters from original array once they are picked
  while (userLetters.length < 10) {
    let letterIndex = Math.floor(Math.random() * letterPoolArray.length);
    randomLetter = letterPoolArray[letterIndex];
    userLetters.push(randomLetter);
    letterPoolArray.splice(letterIndex, 1);
  }
  return userLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  for (let letter of input) {
    if (lettersInHand.includes(letter)) {
      lettersInHand.splice(lettersInHand.indexOf(letter), 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  let total = 0;
  let new_word = word.toUpperCase();

  if (new_word === false) {
    return total;
  }

  for (let letter of new_word) {
    total += letterScore[letter];
  }
  if (new_word.length >= 7) {
    total += 8;
  }
  return total;
};

export const highestScoreFrom = (words) => {

  let score = 0;
  let word = "";

  for (let item of words) {
    let wordScore = scoreWord(item);
    if (score < wordScore) {
      score = wordScore;
      word = item;
    } else if (score === wordScore) {
      if (item.length === word.length) {
        break;
      } else if (item.length === 10) {
        word = item;
      } else if (word.length === 10) {
        break;
      } else if (item.length < word.length) {
        word = item;
      }
    }
  }
  const winningDict = { word, score };
  return winningDict;
};
