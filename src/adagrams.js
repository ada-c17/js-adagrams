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

  let poolOfLetter = [];

  for (let [letter, count] of Object.entries(letterPool)) {
    let multipleLetter = Array(count).fill(letter);
    for (let letter of multipleLetter) {
      poolOfLetter.push(letter);
    }
  }

  let tenRandomLetters = [];

  const lenghtRandom = tenRandomLetters.length;

  for (let i = 1; i <= 10; i++) {
    let letter = poolOfLetter[Math.floor(Math.random() * poolOfLetter.length)];
    tenRandomLetters.push(letter);
    poolOfLetter.splice(poolOfLetter.indexOf(letter), 1);
  }

  return tenRandomLetters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const letterBank = lettersInHand;
  let boolSet = new Set();

  for (let letter of input) {
    if (letterBank.includes(letter)) {
      boolSet.add(true);
      letterBank.splice(letterBank.indexOf(letter), 1);
    } else {
      boolSet.add(false);
    }
  }

  if (boolSet.has(false) || boolSet.size === 0) {
    return false;
  } else {
    return true;
  }
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  if (!word) {
    return 0;
  }
  let upperWord = word.toUpperCase();
  let score = 0;
  for (let letter of upperWord) {
    score += scoreChart[letter];
  }
  if (word.length >= 7) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  let highestScore = 0;
  let winningWord = "";

  for (let word of words) {
    let score = scoreWord(word);
    if (score > highestScore) {
      winningWord = word;
      highestScore = score;
    } else if (score === highestScore) {
      if (winningWord.length === 10) continue;
      else if (word.length === 10) {
        winningWord = word;
      } else if (word.length < winningWord.length) {
        winningWord = word;
      }
    }
  }
  return { score: highestScore, word: winningWord };

  // // PYTHON
  // highest_score = 0
  // winning_word = ""

  // for word in word_list:
  //     score = score_word(word)
  //     if score > highest_score:
  //         winning_word = word
  //         highest_score = score
  //     elif score == highest_score:
  //         if len(winning_word) == 10:
  //             continue
  //         elif len(word) == 10:
  //             winning_word = word
  //         elif len(word) < len(winning_word):
  //             winning_word = word
  // return (winning_word, highest_score)
};
