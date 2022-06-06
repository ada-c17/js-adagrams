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
  Z: 10,
};

export const drawLetters = () => {
  // Implement this method for wave 1
  const letterHand = [];
  let letterPoolCopy = JSON.parse(JSON.stringify(letterPool));

  while (letterHand.length < 10) {
    const keys = Object.keys(letterPool);
    const randomLetter = keys[Math.floor(Math.random() * keys.length)];
    if (letterPoolCopy[randomLetter] === 0) {
      continue;
    } else {
      letterHand.push(randomLetter);
      letterPoolCopy[randomLetter] -= 1;
    }
  }
  return letterHand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const validLetters = [];
  input = input.toUpperCase();
  let lettersInHandCopy = JSON.parse(JSON.stringify(lettersInHand));
  for (const letter of input) {
    if (lettersInHandCopy.includes(letter)) {
      validLetters.push(letter);
      for (let i = 0; i < lettersInHandCopy.length; i++) {
        if (lettersInHandCopy[i] === letter) {
          lettersInHandCopy.splice(i, 1);
        }
      }
    }
  }
  if (validLetters.length == input.length) {
    return true;
  } else {
    return false;
  }
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let wordScore = 0;
  if (word === undefined) {
    return wordScore;
  }
  word = word.toUpperCase();
  for (const letter of word) {
    wordScore += scoreChart[letter];
  }
  if (word.length > 6 && word.length < 11) {
    wordScore += 8;
  }
  return wordScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let winner = {
    word: "",
    score: 0,
  };
  for (const word of words) {
    if (scoreWord(word) > winner.score) {
      winner.word = word;
      winner.score = scoreWord(word);
    }
  }
  return winner;
};
