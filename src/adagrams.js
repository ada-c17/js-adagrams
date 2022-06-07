const letterPool = {
  /** first number in the values represents the letters frequency,
   * the second represents its point value
   */
  A: [9, 1],
  B: [2, 3],
  C: [2, 3],
  D: [4, 2],
  E: [12, 1],
  F: [2, 4],
  G: [3, 2],
  H: [2, 4],
  I: [9, 1],
  J: [1, 8],
  K: [1, 5],
  L: [4, 1],
  M: [2, 3],
  N: [6, 1],
  O: [8, 1],
  P: [2, 3],
  Q: [1, 10],
  R: [6, 1],
  S: [4, 1],
  T: [6, 1],
  U: [4, 1],
  V: [2, 4],
  W: [2, 4],
  X: [1, 8],
  Y: [2, 4],
  Z: [1, 10],
};

export const drawLetters = () => {
  /** creates a list based on the probablity of each number from the letter pool
   * returns 10 random letters from that list */
  let letter_list = [];
  let returned_letters = [];

  for (let letter in letterPool) {
    for (let i = 0; i < letterPool[letter][0]; i++) {
      letter_list.push(letter);
    }
  }

  for (let i = 0; i < 10; i++) {
    let current_letter =
      letter_list[Math.floor(Math.random() * (letter_list.length - 1))];
    let index = letter_list.indexOf(current_letter);
    returned_letters.push(current_letter);
    letter_list.splice(index, 1);
  }

  return returned_letters;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  /**
   * verifies that the words produced by the user come from the letters in their hand
   * and do not overuse letters
   */
  for (let letter in input) {
    if (lettersInHand.includes(input[letter])) {
      let index = lettersInHand.indexOf(input[letter]);
      lettersInHand.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  /**
   * scores the users word based off of the point values in letterPool
   */
  let score = 0;
  word = word.toUpperCase();
  if (word.length > 0) {
    for (let letter in word) {
      score += letterPool[word[letter]][1];
    }
  } else {
    return score;
  }

  if (word.length > 6) {
    score += 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 1
  /**
   * returns the highest scoring words based off of the game parameters.
   */
  let highScore = [0, ""];

  for (let index in words) {
    let currentScore = [scoreWord(words[index]), words[index]];

    if (currentScore[0] > highScore[0]) {
      highScore = currentScore;
    } else if (currentScore[0] === highScore[0]) {
      if (currentScore[1].length === 10 && highScore[1].length < 10) {
        highScore = currentScore;
      } else if (
        highScore[1].length > currentScore[1].length &&
        highScore[1].length < 10
      ) {
        highScore = currentScore;
      }
    }
  }

  return { word: highScore[1], score: highScore[0] };
};
