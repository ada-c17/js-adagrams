const DRAWN_LETTERS_TOTAL = 10;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

const SCORE_CHART = {
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
  const result = [];
  const available_pool = JSON.parse(JSON.stringify(LETTER_POOL));

  while (result.length < DRAWN_LETTERS_TOTAL) {
    // is there a better way to randomly draw letters?
    let letter = ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));

    if (available_pool[letter] >= 1) {
      result.push(letter);
      available_pool[letter]--;
    }
  }
  return result;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  input = input.toUpperCase();
  const available_letters = Array.from(lettersInHand);

  for (let letter of input) {
    if (available_letters.includes(letter)) {
      //remove 1 letter from available_letters
      available_letters.splice(available_letters.indexOf(letter), 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  // why failed the "returns a score of 0 if given an empty input" test?
  word = word.toUpperCase();
  let points = 0;
  for (let letter of word) {
    points += SCORE_CHART[letter];
  }
  if (word.length >= 7) {
    points += 8;
  }
  return points;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
};
