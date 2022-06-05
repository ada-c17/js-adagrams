/**
 * creates an array of 10 random letters selected from LETTER_POOL
 * @return {array of 10 random letters} output
 */
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

  const letterPoolChoices = [];
  for (let letter in LETTER_POOL) {
    for (let i = 0; i < LETTER_POOL[letter]; i++) {
      letterPoolChoices.push(letter);
    }
  }
  const lettersToChooseFrom = [];
  while (lettersToChooseFrom.length < 10) {
    const randomizeLetter = Math.floor(
      Math.random() * letterPoolChoices.length
    );
    let selectedLetter = letterPoolChoices[randomizeLetter];
    lettersToChooseFrom.push(selectedLetter);
    let letterPosition = letterPoolChoices.indexOf(selectedLetter);
    letterPoolChoices.splice(letterPosition, 1);
  }
  return lettersToChooseFrom;
};

/**
 *
 * checks to see if played word is allowed and valid by checking lettersInHand array
 * @param {string} input
 * @param {array} lettersInHand
 * @returns {boolean} True if input is valid, false if it is not valid.
 */
export const usesAvailableLetters = (input, lettersInHand) => {
  const cloneLettersInHand = [...lettersInHand];
  for (let letter of input.toUpperCase()) {
    if (!cloneLettersInHand.includes(letter)) {
      return false;
    } else {
      let letterPosition = cloneLettersInHand.indexOf(letter);
      cloneLettersInHand.splice(letterPosition, 1);
    }
  }
  return true;
};

/**
 *
 * sums up points for word played
 * @param {string} word
 * @returns {int} sum
 */
export const scoreWord = (word) => {
  const LETTERS_POINT_VALUES = {
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

  const BONUS = 8;
  const pointsForEachLetter = [];

  if (!word) {
    return 0;
  }

  for (let letter of word.toUpperCase()) {
    pointsForEachLetter.push(LETTERS_POINT_VALUES[letter]);
  }

  if (word.toUpperCase().length >= 7 && word.toUpperCase().length <= 10) {
    let sum = pointsForEachLetter.reduce(
      (point1, point2) => point1 + point2,
      0
    );
    return sum + BONUS;
  } else {
    let sum = pointsForEachLetter.reduce(
      (point1, point2) => point1 + point2,
      0
    );
    return sum;
  }
};

/**
 *
 * function finds the highest scoring word and evaluates tie logic
 * @param {string} words
 * @returns {object} highest scoring word and highest scoring word's score
 */
export const highestScoreFrom = (words) => {
  const scores = [];

  for (let word of words) {
    scores.push(scoreWord(word));
  }
  const zip = (word, score) => word.map((a, i) => [a, score[i]]);
  const wordAndScore = zip(words, scores);
  const sortedWordAndScore = wordAndScore.sort(
    (num1, num2) => num2[1] - num1[1]
  );
  let highestWord = sortedWordAndScore[0];
  for (let score of sortedWordAndScore.slice(1)) {
    if (highestWord[1] === score[1]) {
      if (score[0].length === 10 && highestWord[0].length !== 10) {
        highestWord = score;
      } else if (
        highestWord[0].length !== 10 &&
        highestWord[0].length > score[0].length
      ) {
        highestWord = score;
      }
    }
  }
  const highestWordRes = { score: highestWord[1], word: highestWord[0] };
  return highestWordRes;
};
