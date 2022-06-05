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

const availble_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const drawLetters = () => {
  // Implement this method for wave 1
  let letter_pool_copy = JSON.parse(JSON.stringify(letterPool));
  let letters = [];
  for (let i = 0; i < 10; ) {
    let single_letter = availble_letters.charAt(
      Math.floor(Math.random() * availble_letters.length)
    );
    if (
      Object.values(letter_pool_copy).includes(single_letter) > -1 &&
      letter_pool_copy[single_letter] > 0
    ) {
      letter_pool_copy[single_letter] = letter_pool_copy[single_letter] - 1;
      letters.push(single_letter);
      i++;
    }
  }
  return letters;
  // console.log(text);
};

// drawLetters();

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let bankLetters = Array.from(lettersInHand);
  for (const letter of input) {
    if (bankLetters.includes(letter)) {
      bankLetters = bankLetters.filter((item) => item !== letter);
    } else if (!bankLetters.includes(letter)) {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  word = word.toUpperCase()
  // Implement this method for wave 3
  let score = 0;
  if (word.length >= 7) {
    score = score + 8;
  }
  // console.log(letterScores["1"][0]);
  for (const wordLetter of word) {
    if (letterScores.hasOwnProperty(wordLetter)) {
      score = score + letterScores[wordLetter]
    }
  }

  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let maxScore = 0;

  let currentWord = ""
  for (const word of words) {
    const current_score = scoreWord(word);
    if (current_score > maxScore) {
      maxScore = current_score;
      currentWord = word

    } else if (current_score === maxScore) {
        if (word.length < currentWord.length && currentWord.length !== 10) {
        currentWord = word
      } else if (word.length === 10 && currentWord.length !== 10) {
        currentWord = word
      }
    }
  }
  return {word: currentWord, score: maxScore}
  
};
