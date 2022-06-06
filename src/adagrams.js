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

const SCORE_DICT = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};
const choose_index = (choices) => {
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

export const drawLetters = () => {
  let random_letter = [];
  let is_valid = true;
  let count_obj = {};
  while (random_letter.length < 10) {
    ///might not work because the function was written for an array, not an object
    let letter = choose_index(Object.keys(LETTER_POOL));
    if (!count_obj[letter]) {
      random_letter.push(letter);
      count_obj[letter] = 1;
    } else if (count_obj[letter] < LETTER_POOL[letter]) {
      random_letter.push(letter);
      count_obj[letter] += 1;
    }
  }
  return random_letter;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let cap_letter = input.toUpperCase();
  let cap_array = cap_letter.split("");
  ///let freq_obj = {};
  for (const letter of cap_array) {
    // if (!freq_obj[letter]) {
    //   freq_obj[letter] = 1
    // } else {
    //   freq_obj[letter] += 1
    // }

    if (
      cap_array.filter((new_letter) => new_letter === letter).length <=
      lettersInHand.filter((new_letter) => new_letter === letter).length
    ) {
      if (lettersInHand.includes(letter)) {
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let cap_letter = word.toUpperCase();
  let cap_array = cap_letter.split("");
  let score = 0;
  for (const letter of cap_array) {
    for (const [key, value] of Object.entries(SCORE_DICT)) {
      if (value.includes(letter)) {
        score += parseInt(key);
      }
    }
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
